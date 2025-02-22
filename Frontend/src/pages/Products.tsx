import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Business Suit',
      category: 'formal',
      price: 299.99,
      minOrder: 50,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
    },
    {
      id: 2,
      name: 'Casual Denim Collection',
      category: 'casual',
      price: 89.99,
      minOrder: 100,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0',
    },
    {
      id: 3,
      name: 'Work Safety Vest',
      category: 'workwear',
      price: 45.99,
      minOrder: 200,
      image: 'https://images.unsplash.com/photo-1558009250-461441c32d68',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">Category: {product.category}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold">${product.price}</p>
                    <p className="text-sm text-gray-500">Min. Order: {product.minOrder} pcs</p>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;