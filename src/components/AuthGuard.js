// src/components/AuthGuard.js
import { Navigate } from 'react-router-dom';

export default function AuthGuard({ children }) {
  // Replace with real authentication logic
  const isAuthenticated = true; // Mock authentication check

  if (!isAuthenticated) {
    return <Navigate to="/auth?mode=signin" />;
  }

  return children;
}