import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_2.png';
import profile_icon from '../../assets/profile_icon.png';
import GoogleMapComponent from '../GoogleMapComponent/GoogleMapComponent';

const RestaurantNav = () => {
  const [location, setLocation] = useState('LASU Epe Campus');
  const navigate = useNavigate();

  const handlePlaceSelected = (place) => {
    const address = place.formatted_address;
    setLocation(address);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-300">
      <div className="logo cursor-pointer" onClick={handleLogoClick}>
        <img src={logo} alt="FoodLab" className="h-14" />
      </div>
      <div className="delivery-location text-lg">
        🚲 Delivering to <span className="location text-blue-500 font-bold">{location}</span>
      </div>
      <div className="nav-icons flex items-center">
        <div className="google-map-input mr-5">
          <GoogleMapComponent onPlaceSelected={handlePlaceSelected} />
        </div>
        <button className="cart-btn bg-none border-none text-2xl cursor-pointer mr-5">🛒</button>
        <div className="profile-pic">
          <img src={profile_icon} alt="Profile" className="w-full rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default RestaurantNav;