import React from 'react'
import './AboutBody.css'
import Delivery from '../../assets/delivery.png'
import 'material-design-icons/iconfont/material-icons.css';


const AboutBody = () => {
  return (
    <div className='about-body'>
        

        <div className='about-body__content'>
        <div className='about-body__header'>
        <h2>WHY CHOOSE US</h2>
        </div>
            <ul>
                <div className='about-body__content__line'>
                        <h3>Endless Choices</h3>
                        <li>Browse and order from multiple restaurants in your area, all through a single app.</li>
                </div>   
               
               <div className='about-body__content__line'>
                    <h3>Seamless Experience</h3>
                    <li> Enjoy fast, easy ordering with real-time updates and quick delivery.</li>
                </div>
               
               <div className='about-body__content__line'>
                    <h3>Curated Selections</h3>
                    <li>We partner with top-rated restaurants to ensure you get only the best.</li>
               </div>
                
                <div className='about-body__content__line'>
                    <h3>24/7 Support</h3>
                    <li>Our customer service team is always ready to help with any questions or concerns.</li>
                </div>
             
            </ul>
            
        </div>

        <div className='about-body__image'>
            <img src={ Delivery} alt="delivery" />
        </div>
    </div>
  )
}

export default AboutBody