import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpPageImage from '../../assets/SignUpPage.png'; // Add the path to your SignUpPage image
import './RegisterPage.css'; // Import custom CSS for styling

const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Add your registration logic here
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Password:', password);
      setShowVerification(true);
    }
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    // Add your OTP verification logic here
    if (otp === '123456') { // Example OTP for demonstration
      setOtpError('');
      navigate('/user-dashboard');
    } else {
      setOtpError('Invalid OTP');
    }
  };

  return (
    <div className="flex justify-center items-center p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {!showVerification ? (
          <div className="register-form transition-transform transform">
            <h1 className="text-3xl font-bold mb-4">Register</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="space-y-4" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full md:w-3/4 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full md:w-3/4 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-3/4 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full md:w-3/4 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full md:w-3/4 p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                className="w-full md:w-3/4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Register
              </button>
            </form>
            <p className="mt-4">
              Already have an account?{' '}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate('/login')}
              >
                Login
              </span>
            </p>
          </div>
        ) : (
          <div className="verification-form transition-transform transform translate-x-0">
            <h2 className="text-3xl font-bold mb-4">Account Verification</h2>
            <p>Check Email for OTP</p>
            <form className="space-y-4 mt-4" onSubmit={handleOtpVerification}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full md:w-3/4 p-2 border border-gray-300 rounded"
                required
              />
              {otpError && <p className="text-red-500">{otpError}</p>}
              <button
                type="submit"
                className="w-full md:w-3/4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Verify
              </button>
            </form>
          </div>
        )}
        <div className="register-image hidden md:block">
          <img src={SignUpPageImage} alt="SignUpPage" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;