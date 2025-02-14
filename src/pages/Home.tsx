import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
        >
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Wholesale Fashion<br />for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Premium quality clothing for retailers and businesses.
              Discover our extensive collection of trendy and timeless pieces.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
      <motion.div className="text-5xl md:text-7xl p-16 font-bold mb-6 text-center text-black">Key Features</motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Bulk Orders",
                description: "Get significant discounts on large quantity orders",
                image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
              },
              {
                title: "Quality Assurance",
                description: "Every piece undergoes strict quality control",
                image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
              },
              {
                title: "Fast Shipping",
                description: "Quick delivery to anywhere in the world",
                image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;