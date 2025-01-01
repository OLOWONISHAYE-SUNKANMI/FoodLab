import React from 'react';
import { restaurant_list } from '../../assets/assets';
import './Restaurants.css';

const Restaurants = () => {
  return (
    <div className="page-container">
      {/* Sidebar Section */}
      <div className="sidebar">
    <div className="sort-section">
      <h3>Sort by</h3>
      <ul>
        <li>⏱️ Near me</li>
        <li>👍 Ratings</li>
        <li>🚲 Delivery fee</li>
      </ul>
    </div>

    <div className="category-section">
      <h3>Categories</h3>
      <ul>
        <li>Breakfast</li>
        <li>Burgers</li>
        <li>Chicken</li>
        <li>Desserts</li>
        <li>Grill</li>
        <li>Juices</li>
        <li>Local</li>
        <li>Rice</li>
        <li>Pasta</li>
      </ul>
    </div>
  </div>

      {/* Restaurant Section */}
      <div className="restaurants-section">
        <h1>Restaurants near you</h1>
        <div className="restaurant-list">
          {restaurant_list.map((restaurant) => (
            <div className="restaurant-card" key={restaurant._id}>
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="restaurant-details">
                <h2>{restaurant.restaurant}</h2>
                <p>{restaurant.name}</p>
                <p>💵 {restaurant.price_range}</p>
                <p>🚲 {restaurant.delivery_time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
