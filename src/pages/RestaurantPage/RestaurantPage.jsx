import React from 'react'
import Restaurants from '../../components/Restaurants/Restaurants'
import RestaurantNav from '../../components/RestaurantNav/RestaurantNav'
import './RestaurantPage.css'


const RestaurantPage = () => {
  return (
    <div>

        <RestaurantNav />
        <Restaurants />
    </div>
  )
}

export default RestaurantPage