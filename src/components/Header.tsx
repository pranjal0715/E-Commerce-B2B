import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const categories = [
  //   { id: "formal", name: "Formal Wear" },
  //   { id: "casual", name: "Casual Wear" },
  //   { id: "workwear", name: "Workwear" },
  //   { id: "accessories", name: "Accessories" },
  // ];

  return (
    // <header className="fixed w-full bg-white z-50 shadow-md">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       <Link to="/" className="flex items-center space-x-2">
    //         <span className="text-2xl font-bold text-indigo-600">B2B Fashion</span>
    //       </Link>

    //       {/* Desktop Navigation */}
    //       <nav className="hidden md:flex space-x-8">
    //         <Link to="/products" className="text-gray-700 hover:text-indigo-600">All Products</Link>
    //         {categories.map((category) => (
    //           <Link
    //             key={category.id}
    //             to={/category/${category.id}}
    //             className="text-gray-700 hover:text-indigo-600"
    //           >
    //             {category.name}
    //           </Link>
    //         ))}
    //       </nav>

    //       <div className="hidden md:flex items-center space-x-6">
    //         <Search className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
    //         <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
    //         <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
    //       </div>

    //       {/* Mobile menu button */}
    //       <button
    //         className="md:hidden"
    //         onClick={() => setIsMenuOpen(!isMenuOpen)}
    //       >
    //         {isMenuOpen ? (
    //           <X className="w-6 h-6 text-gray-600" />
    //         ) : (
    //           <Menu className="w-6 h-6 text-gray-600" />
    //         )}
    //       </button>
    //     </div>

    //     {/* Mobile Navigation */}
    //     {isMenuOpen && (
    //       <div className="md:hidden">
    //         <div className="px-2 pt-2 pb-3 space-y-1">
    //           <Link
    //             to="/products"
    //             className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
    //           >
    //             All Products
    //           </Link>
    //           {categories.map((category) => (
    //             <Link
    //               key={category.id}
    //               to={/category/${category.id}}
    //               className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
    //             >
    //               {category.name}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </header>
        <div className="fixed w-full bg-white z-50 shadow-md">
          {/* Top Bar */}
          <div className="bg-white border-b py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              {/* Logo */}
              <span className="text-3xl font-bold text-indigo-600">B2B Fashion</span>
    
              {/* Search Bar */}
              <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-sm hidden md:flex">
                <Search className="w-5 h-5 text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full outline-none"
                />
              </div>
    
              {/* Cart & Login */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-sm bg-red-600 text-white px-4 py-2 rounded"
                >
                  Register / Login
                </a>
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-gray-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-gray-700"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Main Navigation */}
          <nav className="bg-gray-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="hidden md:flex items-center justify-center space-x-8 h-16">
                {["Home", "Men", "Women", "Kids", "New Arrivals", "Best Sellers", "Accessories", "Footwear", "Sale", "Customize Your Outfit"].map((item) => (
                  <a key={item} href="#" className="hover:text-gray-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>
    
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 text-white py-3 px-4">
              {["Home", "Men", "Women", "Kids", "New Arrivals", "Best Sellers", "Accessories", "Footwear", "Sale", "Customize Your Outfit"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 border-b border-gray-600 last:border-none hover:bg-gray-700 px-2"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    };;

export default Header;


