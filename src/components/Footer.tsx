import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">B2B Fashion</h3>
            <p className="text-gray-400">
              Your trusted partner in wholesale fashion.
              Quality clothing for businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/formal" className="text-gray-400 hover:text-white">
                  Formal Wear
                </Link>
              </li>
              <li>
                <Link to="/category/casual" className="text-gray-400 hover:text-white">
                  Casual Wear
                </Link>
              </li>
              <li>
                <Link to="/category/workwear" className="text-gray-400 hover:text-white">
                  Workwear
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-400 hover:text-white">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="text-gray-400">contact@b2bfashion.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 B2B Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;