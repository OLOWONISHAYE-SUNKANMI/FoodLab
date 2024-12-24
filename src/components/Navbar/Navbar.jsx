import React, { useState } from 'react';
import './Navbar.css';
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(location.pathname);

  const handleMenuClick = (path) => {
    setMenu(path);
    navigate(path);
  };

  const handleCartClick = () => {
    setMenu(""); // Clear the active menu
    navigate('/cart');
  };

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <li onClick={() => handleMenuClick("/")} className={menu === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handleMenuClick("/about")} className={menu === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => handleMenuClick("/menu")} className={menu === "/menu" ? "active" : ""}>
            <Link to="/menu">Menu</Link>
          </li>
          <li onClick={() => handleMenuClick("/contact-us")} className={menu === "/contact-us" ? "active" : ""}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search" />
            <div className="navbar-search-icon" onClick={handleCartClick}>
              <img src={assets.basket_icon} alt="Basket" />
              <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div> 
    </div>
  )
}

export default Navbar;