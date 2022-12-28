import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients, mealType, dishType, calories, cuisineType, totalNutrients } = recipe.recipe;
  console.log(recipe);
  return (
    <div className="recipe">
      <h2>{label}</h2>
      {/* <img src={image} alt={label}  /> */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={label} style={{ maxWidth: "100%" }} />
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>


      {show && <div className="ingredient-container">
        <span className="close-btn" onClick={() => { setShow(false) }}>x</span>
        <span className="ingredient-container__recipe-name">{label}</span>
        <br />
        <span className="ingredient-container__header">List of Ingredients: </span>
        <RecipeDetails ingredients={ingredients} mealType={mealType} dishType={dishType} calories={calories} cuisineType={cuisineType} totalNutrients={totalNutrients} />
      </div>}
    </div>
  );
};

export default Recipe;