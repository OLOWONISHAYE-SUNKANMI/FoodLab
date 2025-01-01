import React from 'react'
import './RestaurantNav.css'
import logo from '../../assets/logo.png'
import profile_icon from '../../assets/profile_icon.png'   

const RestaurantNav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="FoodLab" />
      </div>
      <div className="delivery-location">
        🚲 Delivering to <span className="location">LASU Epe Campus</span>
      </div>
      <div className="nav-icons">
        <button className="cart-btn">🛒</button>
        <div className="profile-pic">
          <img src={ profile_icon } alt="Profile" />
        </div>
      </div>
    </nav>
  )
}

export default RestaurantNav