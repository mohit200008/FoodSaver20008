import React, { Component } from 'react'

export default class NewFoodForm extends Component {
    state = {
        food_name: '',
        expiration_date: '',
        quantity: '',
        quantity_unit: '',
        value: '',
        food_category: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { addFood, toggleFoodForm } = this.props
        addFood(this.state)
        toggleFoodForm()
        this.setState({
            food_name: '',
            expiration_date: '',
            quantity: '',
            quantity_unit: '',
            value: '',
            food_category: ''
        })
    }

    render() {
        const { food_name, expiration_date, value, quantity, quantity_unit, food_category } = this.state
        return (
                <form onSubmit={this.handleSubmit} className='new-food-form'>
                    <h3 className='new-food-form-title'>Add Food Form</h3>
                    
                    <label>Name:</label>
                    <input className='new-food-form-name-input' type="text" name="food_name" value={food_name} onChange={this.handleChange} />
                    
                    <select className='new-food-form-category-select' name="food_category" value={food_category} onChange={this.handleChange} >
                            <option value="">category</option>
                            <option value="dairy">Dairy</option>
                            <option value="fruit">Fruit</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="vegetable">Non-Vegitarian</option>
                    </select>
                    
                    <label>Expiration Date:</label>
                    <input className='new-food-form-expiration-date' type="date" name="expiration_date" value={expiration_date} onChange={this.handleChange} />
                    
                    <label>Quantity:</label>
                    <input className='new-food-form-quantity-input' type="number" name="quantity" min="0" step="0.1" value={quantity} onChange={this.handleChange} />
                    
                    <select className='new-food-form-quantity-unit-select' name="quantity_unit" value={quantity_unit} onChange={this.handleChange}>
                            <option value="">unit</option>
                            <option value="lbs">lbs</option>
                            <option value="oz">oz</option>
                            <option value="count">count</option>
                    </select>

                    <label>Cost:</label>
                    <input className='new-food-form-cost-input' type="number" name="value" value={value} min="0" step="0.1" onChange={this.handleChange} />


                    <input className='new-food-form-submit-button' type="submit" value="Submit" />
                </form>
        )
    }
}