import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Quickpicks from './components/MenuBody/Quickpicks/Quickpicks';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Login from './pages/SignIn/Login';
import RegisterPage from './pages/SignUp/Register';
import ForgotPassword from './pages/ForgetPassword/ForgetPassword'; // Corrected import

const App = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <div className='app'>
        {location.pathname !== '/login' && 
         location.pathname !== '/register' && 
         location.pathname !== '/forgot-password' && 
         location.pathname !== '/verify-account' && 
         location.pathname !== '/cart' && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/quickpicks' element={<Quickpicks />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;