// src/components/NavBar.js
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  // In a real app, you would have a proper auth state.
  const isAuthenticated = true; // Mock authentication

  const handleSignOut = () => {
    // Handle sign-out logic here
    navigate('/');
  };

  if (!isAuthenticated) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UPDATED: The container now aligns its content to the end (right) */}
        <div className="flex items-center justify-end h-20">

          {/* The logo element has been removed */}

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <Link
                to="/test"
                className="font-semibold text-black bg-slate-100/70 border border-slate-300/70 backdrop-blur-sm hover:bg-slate-200/80 px-4 py-2 rounded-lg transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/subscriptions"
                className="font-semibold text-black bg-slate-100/70 border border-slate-300/70 backdrop-blur-sm hover:bg-slate-200/80 px-4 py-2 rounded-lg transition-colors"
              >
                Subscriptions
              </Link>
              <button
                onClick={handleSignOut}
                className="font-semibold text-red-600 bg-white/50 border-2 border-red-500 backdrop-blur-sm hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}