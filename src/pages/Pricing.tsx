import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Weekly Plan',
    price: '₹799',
    duration: 'per week',
    features: [
      '7 days of meals',
      'Free delivery',
      'Menu customization',
      'Cancel anytime'
    ]
  },
  {
    name: 'Monthly Plan',
    price: '₹2999',
    duration: 'per month',
    features: [
      '30 days of meals',
      'Free delivery',
      'Menu customization',
      'Priority support',
      '10% discount'
    ]
  }
];

const Pricing = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.duration}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/subscribe"
                className="block w-full bg-orange-500 text-white text-center py-3 rounded-md hover:bg-orange-600"
              >
                Subscribe Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;