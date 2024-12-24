import React, { useContext, useState } from 'react';
import './Quickpicks.css';
import { menuItems } from '../../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faNairaSign } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Quickpicks = () => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide popup after 2 seconds
  };

  return (
    <div className='quickpicks'>
      <div className='quickpicks_header'>
        <h2>Quick Menu</h2>
        <div className='cart-count' onClick={() => navigate('/cart')}>
          Cart: {cart.length} items
        </div>
      </div>
      {showPopup && <div className='popup'>Item added to cart!</div>}
      <div className='quickpicks_body'>
        {menuItems.map(item => (
          <div key={item.id} className='quickpicks_body_item'>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              <FontAwesomeIcon icon={faNairaSign} /> {item.price}
            </p>
            <p>
              <FontAwesomeIcon icon={faTruck} /> {item.delivery_time}
            </p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quickpicks;