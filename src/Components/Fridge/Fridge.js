import React, { Component, useState } from 'react';
import FoodCard from './FoodCard';
import NewFoodForm from './NewFoodForm';
import './Fridge.css';

const Fridge = (props) => {
  const statee = {
    foodForm: false,
  };
  const [state_, setState_] = useState(statee);

  const foodCards = () => {
    if (props.foods.count !== 0) {
      return props.foods.map((food) => {
        return (
          <FoodCard
            key={food.id}
            food={food}
            addWaste={props.addWaste}
            deleteFood={props.deleteFood}
            updateFood={props.updateFood}
          />
        );
      });
    } else {
      return null;
    }
  };

  const toggleFoodForm = () => {
    setState_({
      foodForm: !state_.foodForm,
    });
  };

  const { foodForm } = state_;
  return (
    <div className="fridge-container">
      <h1 className="fridge-title">ADD FOOD ITEM</h1>
      {foodForm ? (
        <NewFoodForm addFood={props.addFood} toggleFoodForm={toggleFoodForm} />
      ) : null}
      <div className="food-cards">
        <button className="add-food-button" onClick={toggleFoodForm}>
          Add Food
        </button>
        {foodCards()}
      </div>
    </div>
  );
};

export default Fridge;
