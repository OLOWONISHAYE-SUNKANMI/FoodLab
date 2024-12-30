import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPasswordBody.css'; // Import custom CSS for styling

const ForgetPasswordBody = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add your forgot password logic here
    if (email === 'test@example.com') { // Example condition for existing email
      setMessage('If an account with that email exists, a password reset link has been sent.');
    } else {
      setMessage('Email does not exist.');
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    if (message.includes('sent')) {
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-center items-center p-16">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
        <form className="space-y-4" onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4">
          Remembered your password?{' '}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>{message}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={closePopup}
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetPasswordBody;