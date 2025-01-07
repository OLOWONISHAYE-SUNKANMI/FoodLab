import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if 'foodLabToken' exists in local storage
  const token = localStorage.getItem('foodLabToken');

  if (!token) {
    // Redirect to login page if token is not present
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
