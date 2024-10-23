import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Delicious Meals Delivered Daily</h1>
          <p className="text-xl mb-8">Subscribe to our meal plans and enjoy fresh, homemade food every day.</p>
          <Link
            to="/subscribe"
            className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TiffinBox?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80" alt="Fresh Food" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">We use only the freshest ingredients to prepare your meals.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80" alt="Daily Delivery" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Daily Delivery</h3>
              <p className="text-gray-600">Get your meals delivered fresh to your doorstep every day.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&q=80" alt="Customizable Plans" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
              <p className="text-gray-600">Choose from weekly or monthly subscription plans.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;