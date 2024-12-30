import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPageImage from '../../assets/LoginPage.png'; // Ensure this path is correct
import './LoginPage.css'; // Import custom CSS for styling

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (email === 'test@example.com' && password === 'password') {
      navigate('/');
    } else {
      setError('Incorrect email or password');
    }
  };

  return (
    <div className="flex justify-center items-center p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="login-image mr-8 hidden md:block">
          <img src={LoginPageImage} alt="LoginPage" className="rounded-2xl" />
        </div>
        <div className="login-form">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password?
            </span>
          </p>
          <p className="mt-4">
            New here?{' '}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate('/register')}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;