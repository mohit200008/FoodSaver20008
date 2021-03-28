import React, { Component } from 'react'

export default class EditFoodForm extends Component {
    state = {
        food_name: this.props.food.food_name,
        expiration_date: this.props.food.expiration_date,
        quantity: this.props.food.quantity,
        quantity_unit: this.props.food.quantity_unit,
        value: this.props.food.value,
        food_category: this.props.food.food_category,
        id: this.props.food.id
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { toggleEditForm, updateFood } = this.props
        updateFood(this.state)
        toggleEditForm()
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
                <form onSubmit={this.handleSubmit} className='edit-food-form'>
                    <h3 className='edit-food-form-title'>Edit Food</h3>
                    <div className='edit-form-fields'>
                        <label>Food Name:</label>
                        <input type="text" name="food_name" value={food_name} onChange={this.handleChange} />
                        
                        <label>Expiration Date:</label>
                        <input type="date" name="expiration_date" value={expiration_date} onChange={this.handleChange} />
                        
                        <label>Quantity:</label>
                        <input type="number" name="quantity" min="0" step="0.1" value={quantity} onChange={this.handleChange} />
                        
                        <select name="quantity_unit" value={quantity_unit} onChange={this.handleChange}>
                                <option value="">unit</option>
                                <option value="lbs">lbs</option>
                                <option value="oz">oz</option>
                                <option value="count">count</option>
                        </select>

                        <label>Cost:</label>
                        <input type="number" name="value" value={value} min="0" step="0.1" onChange={this.handleChange} />

                        <select name="food_category" value={food_category} onChange={this.handleChange} >
                        <option value="">category</option>
                            <option value="dairy">Dairy</option>
                            <option value="fruit">Fruit</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="vegetable">Non-Vegitarian</option>
                        </select>
                    </div>
                    <div className='edit-food-form-submit-button-container'>
                        <input className='edit-food-form-submit' type="submit" value="Submit" />
                    </div>
                </form>
        )
    }
}
