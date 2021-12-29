import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Food from '../Fridge/Fridge';
import Recipepage from '../Recipe/RecipePage';
import HomePage from '../Home/HomePage';
import HomeHindi from './HomeHindi';
import Creativity from '../Creativity/Creativity';
import './Home.css';

const Home = (props) => {
  return (
    <div className="home-container">
      <Router>
        <div>
          <NavBar />
          <div className="component-container">
            <Route exact path="/" render={() => <HomePage {...props} />} />
            <Route exact path="/hi" render={() => <HomeHindi {...props} />} />
            <Route exact path="/food" render={() => <Food {...props} />} />
            <Route exact path="/recipepage" component={Recipepage} />
            <Route exact path="/creativity" component={Creativity} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Home;
