import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import Chatbot from './Components/Chatbot/Chatbot'
import Login from './Components/Login/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    foods: [],
    wastes: []
  }
  
  fetchFoods = () => {
    this.logIn()
    return fetch('', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    .then(response => response.json())
    .then(foods => this.setState({
      foods: foods
    }))
    .catch(error => console.log('Error:', error))
  }

  addFood = (food) => {
    const body = {...food}
    let url = 'https://foodsaver-83b19.web.app/food'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(response => this.setState({
      foods: [...this.state.foods, response]
    }))
    .catch(error => console.log('Error:', error))
  }

  deleteFood = (id) => {
    const body = {id}
    const newState = this.state.foods.filter(food => food.id !== id)
    let url = `${id}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .catch(error => console.log(error))
    .then(this.setState({
      foods: newState
    }))
  }

  updateFood = (food) => {
    const body = {...food}
    const newState = this.state.foods.filter(f => f.id !== food.id)
    let url = `${food.id}`
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    })
    .catch(error => console.error('Error:', error))
    .then(this.setState({
      foods: [...newState, food]
    }))
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Chatbot/>
          <Switch>
            <Route exact path='/' render={() => <Home logOut ={this.logOut} foods={this.state.foods}  addFood={this.addFood}  updateFood={this.updateFood} deleteFood={this.deleteFood} />} />
            <Route exact path='/login' render={() => <Login  />} />
          </Switch>
          {/* <Login/> */}
        </Router>
      </div>
    );
  }
}
export default App;
