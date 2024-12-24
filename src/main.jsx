import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';
import { CartProvider } from './context/CartContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
      <CartProvider>
        <App />
        </CartProvider>
      </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
);