import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext.jsx';
import './FoodDisplay.css';
import 'material-design-icons/iconfont/material-icons.css';


const FoodDisplay = ({ category }) => {
    const { restaurant_list } = useContext(StoreContext);
    
    return (
        <div className='food-display' id='food-display'>
           <h2>Top Restaurant Near You</h2>
           <div className='food-display-list'>
                {restaurant_list && restaurant_list.length > 0 ? (
                    restaurant_list.map((item, index) => (
                        <div 
                            key={index} 
                            className={category === 'All' || category === item.category 
                                ? 'food-display-list-item' 
                                : 'food-display-list-item hidden'}>
                            <img className='item-image' src={item.image} alt={item.name || 'Food item'} />
                            <h3 className='item-restaurant'> {item.restaurant}</h3>

                            <div className='item-details'>
                            <p className='item-price'> ₦ {item.price_range}</p>
                            <p className='item-time'><i className='material-icons'>schedule</i> {item.delivery_time}</p>
                            </div>
                            <button className='item-button'>See More</button>
                        </div>
                    ))
                ) : (
                    <p>No food items available</p>
                )}
           </div>
        </div>
    );
};

export default FoodDisplay;