import React, { Component, useState } from 'react';
import EditFoodForm from './EditFoodForm';

const FoodCard = (props) => {
  const statee = {
    foodCard: true,
    editForm: false,
  };
  const [state_, setState_] = useState(statee);

  const dateDifference = (expirationDate) => {};

  const toggleEditForm = () => {
    setState_({
      editForm: !state_.editForm,
      foodCard: !state_.foodCard,
    });
  };

  const toggleWasteForm = () => {
    setState_({
      wasteForm: !state_.wasteForm,
      foodCard: !state_.foodCard,
    });
  };

  const toggleFoodCard = () => {
    setState_({
      foodCard: !state_.foodCard,
    });
  };

  const dynamicHeaderColor = (date) => {
    const days = dateDifference(date);
    if (days < 4) {
      return 'header-red';
    } else if (days > 3 && days < 7) {
      return 'header-yellow';
    } else {
      return 'header-green';
    }
  };

  const { food, deleteFood, updateFood } = props;
  return (
    <div className="food-card">
      {state_.editForm ? (
        <EditFoodForm
          food={food}
          toggleEditForm={toggleEditForm}
          updateFood={updateFood}
        />
      ) : null}
      {state_.foodCard ? (
        <div>
          <div className="food-card-header">
            <h3
              className={`food-card-title ${dynamicHeaderColor(
                food.expiration_date
              )}`}
            >
              {food.food_name}
            </h3>
          </div>
          <img
            className="food-card-delete-button"
            onClick={() => deleteFood(food.id)}
            src="https://image.flaticon.com/icons/svg/59/59836.svg"
            alt="delete button"
          />
          <p className="food-card-expiration-date">
            {dateDifference(food.expiration_date)}{' '}
            {dateDifference(food.expiration_date) > 1 ? 'days' : 'day'} to
            expiration
          </p>
          <p className="food-card-quantity">
            Quantity: {food.quantity} {food.quantity_unit}
          </p>
          <img
            className="food-card-edit-button"
            onClick={() => toggleEditForm()}
            src="https://image.flaticon.com/icons/svg/1159/1159633.svg"
            alt="update button"
          />
        </div>
      ) : null}
    </div>
  );
};

export default FoodCard;
