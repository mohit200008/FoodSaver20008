import React, { Component, useState } from 'react';

const EditFoodForm = (props) => {
  const state_ = {
    food_name: props.food.food_name,
    expiration_date: props.food.expiration_date,
    quantity: props.food.quantity,
    quantity_unit: props.food.quantity_unit,
    value: props.food.value,
    food_category: props.food.food_category,
    id: props.food.id,
  };

  const [statee, setStatee] = useState(state_);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStatee({
      ...statee,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { toggleEditForm, updateFood } = props;
    updateFood(statee);
    toggleEditForm();
    setStatee({
      ...statee,
      food_name: '',
      expiration_date: '',
      quantity: '',
      quantity_unit: '',
      value: '',
      food_category: '',
    });
  };

  const {
    food_name,
    expiration_date,
    value,
    quantity,
    quantity_unit,
    food_category,
  } = statee;
  return (
    <form onSubmit={handleSubmit} className="edit-food-form">
      <h3 className="edit-food-form-title">Edit Food</h3>
      <div className="edit-form-fields">
        <label>Food Name:</label>
        <input
          type="text"
          name="food_name"
          value={food_name}
          onChange={handleChange}
        />

        <label>Expiration Date:</label>
        <input
          type="date"
          name="expiration_date"
          value={expiration_date}
          onChange={handleChange}
        />

        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          min="0"
          step="0.1"
          value={quantity}
          onChange={handleChange}
        />

        <select
          name="quantity_unit"
          value={quantity_unit}
          onChange={handleChange}
        >
          <option value="">unit</option>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
          <option value="count">count</option>
        </select>

        <label>Cost:</label>
        <input
          type="number"
          name="value"
          value={value}
          min="0"
          step="0.1"
          onChange={handleChange}
        />

        <select
          name="food_category"
          value={food_category}
          onChange={handleChange}
        >
          <option value="">category</option>
          <option value="dairy">Dairy</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="vegetable">Non-Vegitarian</option>
        </select>
      </div>
      <div className="edit-food-form-submit-button-container">
        <input className="edit-food-form-submit" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default EditFoodForm;
