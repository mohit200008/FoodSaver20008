import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients, mealType, dishType, calories, cuisineType, totalNutrients }) => {
  const entries = Object.keys(totalNutrients).map((key) => [
    key,
    totalNutrients[key],
  ]);
  // console.log(entries);
  return (
    <div className="cont">

      <ul key={uuidv4()} className="ingredient-list">
        {ingredients.map(ingredient => {
          return <li className="ingredient-text">{ingredient.text}</li>
        })}
      </ul>

      <div className="cuisine-cont ingredient-container__recipe-name">Cuisine: {cuisineType.map(cuisine => {
        return <span className="cuisine">{cuisine} </span>
      })}</div>

      <div className="dish-cont ingredient-container__recipe-name">Dish: {dishType.map(dish => {
        return <span className="dish">{dish} </span>
      })}</div>

      <div className="meal-cont ingredient-container__recipe-name">Meal: {mealType.map(meal => {
        return <span className="meal">{meal} </span>
      })}</div>

      <div className="calories ingredient-container__recipe-name">Total Calories: {calories.toFixed(2)}</div>

      <div className="ingredient-container__header">List of Nutrients: </div>
      <ul className="ingredient-list">
        {entries.map(nutrient => {
          return <li className="ingredient-text">{nutrient[1].label}: {nutrient[1].quantity.toFixed(2)} {nutrient[1].unit} </li>
        })}
      </ul>

    </div>
  );
};

export default RecipeDetails;
