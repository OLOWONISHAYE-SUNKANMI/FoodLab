import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode'; 
import LoginPageImage from '../../assets/LoginPage.png';
import './LoginPage.css';
import { API_BASE_URL } from '../../env';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to login');
      }

      const { token } = data;

      localStorage.setItem('foodLabToken', token);

      navigate('/menu');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
              className={`w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
