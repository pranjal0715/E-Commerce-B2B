import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 'formal', name: 'Formal Wear' },
    { id: 'casual', name: 'Casual Wear' },
    { id: 'workwear', name: 'Workwear' },
    { id: 'accessories', name: 'Accessories' },
  ];

  return (
    <header className="fixed w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">B2B Fashion</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-indigo-600">All Products</Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="text-gray-700 hover:text-indigo-600"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <Search className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
            <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
            <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/products"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
              >
                All Products
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;