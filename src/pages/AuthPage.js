// src/pages/AuthPage.js
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get('mode') || 'signin';
  const [isLogin, setIsLogin] = useState(mode === 'signin');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/subscriptions');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center p-4">
      <div className="absolute inset-0 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,transparent_40%,#000_100%)]"></div>

      <div className="relative z-10 w-full max-w-md">
        <Link to="/" className="text-2xl font-bold text-blue-600 mb-6 inline-block">
          AgentTest
        </Link>

        <div className="bg-white shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {isLogin ? 'Welcome Back!' : 'Create Your Account'}
          </h2>
          {/* UPDATED: The "salesy" text is now more direct */}
          <p className="text-gray-500 mb-6">
            {isLogin ? 'Sign in to continue to your dashboard.' : 'Enter your details to get started.'}
          </p>

          <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`font-semibold py-2 rounded-md transition-colors ${isLogin ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`font-semibold py-2 rounded-md transition-colors ${!isLogin ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" placeholder="John Doe" className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="you@example.com" className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                {isLogin && (
                  <button type="button" className="text-sm font-medium text-blue-600 hover:underline">Forgot?</button>
                )}
              </div>
              <input type="password" placeholder="••••••••" className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-3 mt-2 rounded-lg font-semibold hover:bg-blue-700 text-lg">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-sm text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="space-y-3">
             <button type="button" className="w-full flex items-center justify-center gap-3 border border-gray-300 p-2.5 rounded-lg hover:bg-gray-50">
               <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.22,0-9.651-3.358-11.303-8H6.306C9.656,39.663,16.318,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C41.38,36.14,44,30.63,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
               <span className="font-semibold text-gray-600">Continue with Google</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}