import React, { Component, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Chatbot from './Components/Chatbot/Chatbot';

const App = () => {
  const initState = {
    foods: [],
    wastes: [],
  };

  // const [food, setFood] = useState('');
  // const [wastes, setWastes] = useState('');
  const [statee, setStatee] = useState(initState);

  const addFood = (food) => {
    const body = { ...food };
    let url = 'https://foodsaver-83b19.web.app/food';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((response) =>
        setStatee({
          ...statee,
          [statee.foods]: [...statee.foods, response],
        })
      )
      .catch((error) => console.log('Error:', error));
  };

  const updateFood = (food) => {
    const body = { ...food };
    const newState = statee.foods.filter((f) => f.id !== food.id);
    let url = `${food.id}`;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(body),
    })
      .catch((error) => console.error('Error:', error))
      .then(
        setStatee({
          ...statee,
          [statee.foods]: [...newState, food],
        })
      );
  };

  const deleteFood = (id) => {
    const body = { id };
    const newState = statee.foods.filter((food) => food.id !== id);
    let url = `${id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(body),
    })
      .catch((error) => console.log(error))
      .then(
        setStatee({
          ...statee,
          [statee.foods]: newState,
        })
      );
  };
  const fetchFoods = () => {
    this.logIn();
    return fetch('', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((foods) =>
        setStatee({
          ...statee,
          [statee.foods]: foods,
        })
      )
      .catch((error) => console.log('Error:', error));
  };

  return (
    <div className="App">
      <Chatbot />
      <Home
        logOut={this.logOut}
        foods={statee.foods}
        addFood={addFood}
        deleteFood={deleteFood}
        updateFood={updateFood}
      />
    </div>
  );
};

export default App;
