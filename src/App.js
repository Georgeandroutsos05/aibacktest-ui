// src/App.js
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import SubscriptionPage from './pages/SubscriptionPage';
import TestDashboardPage from './pages/TestDashboardPage';
import DetailedFeedbackPage from './pages/DetailedFeedbackPage';
import PerformanceFeedbackPage from './pages/PerformanceFeedbackPage';
import ComplianceFeedbackPage from './pages/ComplianceFeedbackPage';
import NavBar from './components/NavBar';
import AuthGuard from './components/AuthGuard';

// Note: We no longer need the AppLayout component, we can move the logic directly into App
export default function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== '/';

  return (
    <>
      {showNavBar && <NavBar />}
      {/* AnimatePresence handles the animation of components entering and exiting the DOM */}
      <AnimatePresence mode='wait'>
        {/* The key={location.pathname} is crucial. It tells React to treat page changes as new components. */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/subscriptions" element={
            <AuthGuard><SubscriptionPage /></AuthGuard>
          } />
          <Route path="/test" element={
            <AuthGuard><TestDashboardPage /></AuthGuard>
          } />
          <Route path="/test/feedback/:jobId" element={
            <AuthGuard><DetailedFeedbackPage /></AuthGuard>
          } />
          <Route path="/test/feedback/:jobId/performance" element={
            <AuthGuard><PerformanceFeedbackPage /></AuthGuard>
          } />
          <Route path="/test/feedback/:jobId/compliance" element={
            <AuthGuard><ComplianceFeedbackPage /></AuthGuard>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}