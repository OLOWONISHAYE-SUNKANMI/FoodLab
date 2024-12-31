import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      {cart.length === 0 ? (
        <div className='text-center'>
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/menu')} className='mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
            Go to Menu
          </button>
        </div>
      ) : (
        <div className='w-full max-w-4xl'>
          <ul className='overflow-y-auto max-h-[60vh]'>
            {cart.map((item, index) => (
              <li key={index} className='flex flex-col sm:flex-row items-center justify-between p-4 border-b'>
                <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded mb-4 sm:mb-0' />
                <div className='flex-1 sm:ml-4 text-center sm:text-left'>
                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                  <p className='text-sm'>₦ {item.price}</p>
                  <p className='text-sm'>{item.delivery_time}</p>
                </div>
                <div className='quantity-controls flex items-center mt-4 sm:mt-0'>
                  <button onClick={() => decreaseQuantity(item.id)} className='p-1 bg-gray-200 rounded'>-</button>
                  <span className='mx-2'>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className='p-1 bg-gray-200 rounded'>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className='ml-0 sm:ml-4 mt-4 sm:mt-0 p-1 bg-red-500 text-white rounded hover:bg-red-700'>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className='cart-total mt-4 p-4 bg-gray-100 rounded flex flex-col items-center'>
            <h3 className='text-xl font-semibold'>Total: ₦ {calculateTotal()}</h3>
            <button onClick={() => navigate('/checkout')} className='mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;