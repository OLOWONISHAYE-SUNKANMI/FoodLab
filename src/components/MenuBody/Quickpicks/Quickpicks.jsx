import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNairaSign, faTruck } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../../context/CartContext';
import { menuItems } from '../../../assets/assets';

const Quickpicks = () => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log('menuItems:', menuItems);
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide popup after 2 seconds
  };

  return (
    <div className='py-10'>
      <div className='flex flex-col items-center'>
        <h2 className='text-blue-500 text-3xl mb-8'>Quick Menu</h2>
        <div className='mb-2 cursor-pointer' onClick={() => navigate('/cart')}>
          Cart: {cart.length} items
        </div>
      </div>
      {showPopup && <div className='fixed top-5 right-5 bg-green-500 text-white p-2 rounded-md z-50'>Item added to cart!</div>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center min-h-screen'>
        {menuItems.length > 0 ? (
          menuItems.map(item => (
            <div key={item.id} 
            className='w-full sm:w-56 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] bg-white flex flex-col items-center justify-between rounded-md mb-8 shadow-md p-4'>
         <img src={item.image} alt={item.name} className='w-48 h-48 object-cover rounded-md' />
         <h3 className='text-blue-500 text-lg'>{item.name}</h3>
         <p className='text-sm'>
           <FontAwesomeIcon icon={faNairaSign} /> {item.price}
         </p>
         <p className='text-sm'>
           <FontAwesomeIcon icon={faTruck} /> {item.delivery_time}
         </p>
         <div className='mt-auto w-full flex justify-center'>
           <button onClick={() => handleAddToCart(item)} 
                   className='w-2/3 bg-blue-500 text-white rounded-md py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white'>
             Add to Cart
           </button>
         </div>
       </div>
       
          ))
        ) : (
          <p className='text-center text-gray-500'>No menu items available</p>
        )}
      </div>
    </div>
  );
};

export default Quickpicks;