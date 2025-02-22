import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Category = () => {
  const { id } = useParams();

  const categoryProducts = {
    formal: [
      {
        id: 1,
        name: 'Business Suit Collection',
        price: 299.99,
        minOrder: 50,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
      },
      {
        id: 2,
        name: 'Formal Shirts Bundle',
        price: 89.99,
        minOrder: 100,
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10',
      },
    ],
    casual: [
      {
        id: 3,
        name: 'Denim Collection',
        price: 79.99,
        minOrder: 100,
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0',
      },
      {
        id: 4,
        name: 'T-Shirt Bundle',
        price: 29.99,
        minOrder: 200,
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
      },
    ],
    workwear: [
      {
        id: 5,
        name: 'Safety Vest Collection',
        price: 45.99,
        minOrder: 200,
        image: 'https://images.unsplash.com/photo-1558009250-461441c32d68',
      },
      {
        id: 6,
        name: 'Work Boots Bundle',
        price: 129.99,
        minOrder: 50,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      },
    ],
    accessories: [
      {
        id: 7,
        name: 'Belt Collection',
        price: 34.99,
        minOrder: 100,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      },
      {
        id: 8,
        name: 'Tie Bundle',
        price: 24.99,
        minOrder: 150,
        image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962',
      },
    ],
  };

  const products = categoryProducts[id as keyof typeof categoryProducts] || [];
  const categoryNames = {
    formal: 'Formal Wear',
    casual: 'Casual Wear',
    workwear: 'Work Wear',
    accessories: 'Accessories',
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          {categoryNames[id as keyof typeof categoryNames]}
        </h1>
        
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

export default Category;