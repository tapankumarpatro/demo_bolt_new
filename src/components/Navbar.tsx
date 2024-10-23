import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-800">TiffinBox</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-500">Menu</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-orange-500">Pricing</Link>
            <Link to="/subscribe" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;