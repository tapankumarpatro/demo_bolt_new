import React from 'react';
import { UtensilsCrossed, Clock, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TiffinBox</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about delivering fresh, homemade meals right to your doorstep.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
              alt="Our Kitchen"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, TiffinBox began with a simple mission: to make healthy, homemade food accessible to everyone.
              We understand the challenges of maintaining a balanced diet in today's fast-paced world.
            </p>
            <p className="text-gray-600">
              Our team of experienced chefs prepares meals with love and care, using only the freshest ingredients
              sourced from local suppliers.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <UtensilsCrossed className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
            <p className="text-gray-600">
              Our professional chefs bring years of experience in crafting delicious, nutritious meals.
            </p>
          </div>
          <div className="text-center p-6">
            <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Timely Service</h3>
            <p className="text-gray-600">
              We ensure your meals are delivered on time, every time, maintaining their freshness.
            </p>
          </div>
          <div className="text-center p-6">
            <Truck className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Delivery</h3>
            <p className="text-gray-600">
              Enjoy the convenience of having fresh meals delivered to your doorstep daily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;