import React from 'react'

export default function HomePage({ foods }) {


    const aboutToExpire = (foodsArray) => {
        let foodsObj = {'low': 0, 'medium': 0, 'high': 0}
        foodsArray.map(food => {
            if(dateDifference(food.expiration_date) < 4) {
                return foodsObj['low'] += 1
            } else if (dateDifference(food.expiration_date) > 3 && dateDifference(food.expiration_date) < 7) {
                return foodsObj['medium'] += 1
            } else {
                return foodsObj['high'] += 1
            }
        }
    )
    return foodsObj
}

    const dateDifference = (expirationDate) => {

    }

    return (
        <div>
            <div className='home-page-container'>
                <div className='home-page-food-count-container'>
                    <h3 className='home-page-food-count-message'>घर पर आइटम</h3>
                    <img className='home-page-food-count-img' src='data:image/jpeg;base64,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' alt='fridge' />
                    <h4 className='home-page-food-count'>{foods.length}</h4>
                </div>
                <div className='food-page-expiration-count-container'>
                    <h3 className='home-page-food-count-message'>एक्सपायर होने के बारे में खाना</h3>

                    <div>
                        <h3 className='expiration-number high'>{aboutToExpire(foods).high}</h3>
                        <h3 className='expiration-message'>7 दिनों में</h3>
                    </div>

                    <div>
                        <h3 className='expiration-number medium'>{aboutToExpire(foods).medium}</h3>
                        <h3 className='expiration-message'>4 से 7 दिनों के बीच</h3>
                    </div>
                   
                    <div>
                        <h3 className='expiration-number low'>{aboutToExpire(foods).low}</h3>
                        <h3 className='expiration-message'>3 दिन से कम</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
