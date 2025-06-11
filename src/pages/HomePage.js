// src/pages/HomePage.js
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage'; // Import the wrapper

export default function HomePage() {
  return (
    // Wrap the entire page content in AnimatedPage
    <AnimatedPage>
      <div className="min-h-screen bg-white flex flex-col justify-center items-center text-center p-6">
        <div className="absolute inset-0 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,transparent_30%,#000_100%)]"></div>
        <div className="relative flex flex-col justify-center items-center">
          {/* ... all your other h1, p, and Link tags go here ... */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-gray-800">Ready for Reality.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mt-2">
              Certified for Compliance.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            The complete platform for ensuring your AI agents are safe, compliant, and ready for the real world.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-8">
            <Link
              to="/auth?mode=signup"
              className="bg-blue-600 text-white font-semibold px-24 py-10 rounded-3xl text-4xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/auth?mode=signin"
              className="bg-white text-blue-600 border-2 border-blue-200 font-semibold px-24 py-10 rounded-3xl text-4xl shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}