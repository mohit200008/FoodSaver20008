import React, { useState } from "react";
import "./Recipe.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";

function RecipePage() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const [more, setMore] = useState(false);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setMore(true);
      // setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const getMore = async () => {
    const url2 = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=${recipes.length+10}`;

    const result = await Axios.get(url2);
    if (!result.data.more) {
      return setAlert("No food with such name");
    }
    console.log(result);
    setRecipes(result.data.hits);
    setMore(true);
    // setQuery("");
    setAlert("");
  }

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit} className="search-form">
        
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      {alert !== "" && <Alert alert={alert} />}
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
      {
        more && 
        <button className="more" onClick={getMore}>See More</button>
      }
    </div>
  );
}

export default RecipePage;
