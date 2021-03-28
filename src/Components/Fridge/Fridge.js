import React, { Component } from 'react'
import FoodCard from './FoodCard'
import NewFoodForm from './NewFoodForm'
import './Fridge.css'

export default class Food extends Component {
    state = {
        foodForm: false
    }
    
    foodCards = () => {
        if (this.props.foods.count !== 0){
        return this.props.foods.map(food => {
            return <FoodCard key={food.id} food={food} addWaste={this.props.addWaste} deleteFood={this.props.deleteFood} updateFood={this.props.updateFood} />
        })} else {
            return null
        }
    }

    toggleFoodForm = () => {
        this.setState({
            foodForm: !this.state.foodForm
        })
    }

    render() {
        const { foodForm } = this.state
        return (
            <div className='fridge-container'>
                <h1 className='fridge-title'>ADD FOOD ITEM</h1>
                {foodForm 
                    ? <NewFoodForm addFood={this.props.addFood} toggleFoodForm={this.toggleFoodForm} /> 
                    : null
                }
                <div className='food-cards'>                    
                    <button className='add-food-button' onClick={this.toggleFoodForm}>Add Food</button>
                    {this.foodCards()}
                </div>
            </div>
        )
    }
}
