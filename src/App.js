import React, { Component, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Chatbot from './Components/Chatbot/Chatbot';

const App = () => {
  const statee = {
    foods: [],
    wastes: [],
  };
  const [state_, setState_] = useState(statee);

  const fetchFoods = () => {
    // logIn();
    return fetch('', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((foods) =>
        setState_({
          ...state_,
          foods: foods,
        })
      )
      .catch((error) => console.log('Error:', error));
  };

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
        setState_({
          ...state_,
          foods: [...state_.foods, response],
        })
      )
      .catch((error) => console.log('Error:', error));
  };

  const deleteFood = (id) => {
    const body = { id };
    const newState = state_.foods.filter((food) => food.id !== id);
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
        setState_({
          ...state_,
          foods: newState,
        })
      );
  };

  const updateFood = (food) => {
    const body = { ...food };
    const newState = state_.foods.filter((f) => f.id !== food.id);
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
        setState_({
          ...state_,
          foods: [...newState, food],
        })
      );
  };

  return (
    <div className="App">
      <Chatbot />
      <Home
        // logOut={logOut}
        foods={state_.foods}
        addFood={addFood}
        deleteFood={deleteFood}
        updateFood={updateFood}
      />
    </div>
  );
};

export default App;
