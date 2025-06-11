// src/pages/SubscriptionPage.js
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const plans = [
  { name: 'Free', price: '$0', description: 'For individuals and small projects just getting started.', features: ['5 Free tests per month', 'Basic compliance feedback', 'Email support'], cta: 'Start for Free' },
  { name: 'Pro', price: 'Custom', description: 'For growing teams that need more power and support.', features: ['100 tests per month', 'Detailed compliance reports', 'Performance analytics', 'Priority email & chat support'], cta: 'Choose Pro' },
  { name: 'Enterprise', price: 'Custom', description: 'For large organizations with custom compliance and security needs.', features: ['Unlimited tests', 'Custom compliance integrations', 'Dedicated support & SLAs', 'On-premise deployment option'], cta: 'Contact Sales' },
];

const CheckIcon = () => (
  <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1.47 14.47l-4-4a1 1 0 011.41-1.41L12 13.17l5.59-5.59a1 1 0 111.41 1.41l-6.3 6.3a1 1 0 01-1.41 0z" fill="currentColor"/>
  </svg>
);

export default function SubscriptionPage() {
  // Default to showing the 'Pro' plan first
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-white">
        {/* Consistent background */}
        <div className="absolute inset-0 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,transparent_40%,#000_100%)]"></div>

        <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800">
              A Plan for Every Scale
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that best fits your needs.
            </p>
          </div>

          {/* Interactive Plan Selector */}
          <div className="mt-10 w-full max-w-3xl">
            {/* Plan Toggles */}
            <div className="grid grid-cols-3 gap-2 rounded-xl bg-gray-100 p-2 mb-8">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan)}
                  className={`font-semibold text-lg py-3 rounded-lg transition-colors ${selectedPlan.name === plan.name ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:bg-gray-200'}`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            {/* Content Card with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlan.name} // This key is crucial for AnimatePresence to detect changes
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-800">{selectedPlan.name}</h2>
                <p className="mt-2 text-gray-500 min-h-[3rem]">{selectedPlan.description}</p>
                <p className="mt-6 text-5xl font-bold text-gray-900">
                  {selectedPlan.price}
                  {selectedPlan.name !== 'Enterprise' && <span className="text-xl font-normal text-gray-500">/month</span>}
                </p>

                <ul className="space-y-4 mt-8">
                  {selectedPlan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/test"
                  className="block w-full text-center mt-10 px-6 py-4 rounded-lg font-semibold text-lg transition-colors bg-blue-600 text-white hover:bg-blue-700"
                >
                  {selectedPlan.cta}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Compare all link */}
          <div className="mt-8">
            <button className="font-semibold text-gray-600 hover:text-blue-600">
              Or, compare all features
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}