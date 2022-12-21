import React from 'react'
import { Carousel, Card } from 'react-bootstrap';
import image1 from '../../Images/img1.jpg';
import image2 from '../../Images/img2.jpg';
import image3 from '../../Images/img3.jpg';
import image4 from '../../Images/img4.jpg';

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
        let todaysDate = new Date(Date.now()).toLocaleString().split(', ')[0]
        let splitTodaysDate = todaysDate.split('/')
     
    }

    return (
        <div>
            <div className='home-page-container slides'>
                <div className='home-page-food-count-container '>
                    <h3 className='home-page-food-count-message msg1'><span className='message'>Items at</span> Home</h3>
                    <div className="slideshow-container">
                        <Carousel className='carousels'>
                            <Carousel.Item interval={1000}>
                                <img
                                className="d-block w-100"
                                src={image1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                className="d-block w-100"
                                src={image2}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={image4}
                                alt="fourth slide"
                                />
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    
                    <div>
                        <div className='home-page-container '>
               
                            <div className=''>
                                <h3 className='home-page-food-count-message msg2'>Food About To Expire</h3>
                    
                  
                                <div className="home-page-card-container expire-content">
                                    <div className='home-page-cards'>
                                        <h3 className='expiration-number high'>{aboutToExpire(foods).high}</h3>
                                        <h3 className='expiration-message'>After 7 days</h3>
                                    </div>
   
                                    <div className='home-page-cards'>
                                        <h3 className='expiration-number medium'>{aboutToExpire(foods).medium}</h3>
                                        <h3 className='expiration-message'>Between 4 to 7 days</h3>
                                    </div>
                        
                                    <div className='home-page-cards'>
                                        <h3 className='expiration-number low'>{aboutToExpire(foods).low}</h3>
                                        <h3 className='expiration-message'> Under 3 days</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
