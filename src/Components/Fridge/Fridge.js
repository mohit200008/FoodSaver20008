import React, { Component, useState } from 'react';
import FoodCard from './FoodCard';
import NewFoodForm from './NewFoodForm';
import './Fridge.css';

const Fridge = (props) => {
  const state_ = {
    foodForm: false,
  };

  const [statee, setStatee] = useState(state_);
  const { foodForm } = statee;
  const foodCards = () => {
    if (props.foods && props.foods.count !== 0) {
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
    setStatee({
      foodForm: !statee.foodForm,
    });
  };

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
