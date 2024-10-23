import React, { useState } from 'react';

const Subscribe = () => {
  const [plan, setPlan] = useState('weekly');

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Subscribe to TiffinBox</h1>
          <p className="text-xl text-gray-600">
            Fill out the form below to start your subscription
          </p>
        </div>

        <form className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {/* Plan Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Select Plan</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`p-4 border rounded-lg text-center ${
                    plan === 'weekly'
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-orange-500'
                  }`}
                  onClick={() => setPlan('weekly')}
                >
                  Weekly Plan
                  <div className="text-sm text-gray-500">₹799/week</div>
                </button>
                <button
                  type="button"
                  className={`p-4 border rounded-lg text-center ${
                    plan === 'monthly'
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-orange-500'
                  }`}
                  onClick={() => setPlan('monthly')}
                >
                  Monthly Plan
                  <div className="text-sm text-gray-500">₹2999/month</div>
                </button>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Delivery Address</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                rows={3}
                placeholder="Enter your delivery address"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;