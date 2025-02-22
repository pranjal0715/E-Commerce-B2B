import React from 'react';
import { motion } from 'framer-motion';
import { Award, Package, Truck, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Quality Assurance",
      description: "Rigorous quality control for every product in our inventory"
    },
    {
      icon: <Package className="w-8 h-8 text-indigo-600" />,
      title: "Bulk Orders",
      description: "Competitive wholesale prices for large quantity orders"
    },
    {
      icon: <Truck className="w-8 h-8 text-indigo-600" />,
      title: "Global Shipping",
      description: "Fast and reliable worldwide delivery services"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Customer Support",
      description: "24/7 dedicated support for all our business partners"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About B2B Fashion</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in wholesale fashion since 2010, connecting retailers
              with premium clothing suppliers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Starting as a small wholesale business, we've grown into a leading B2B
                fashion platform, serving thousands of retailers across the globe. Our
                commitment to quality, reliability, and exceptional service has made us
                the preferred choice for businesses seeking premium wholesale clothing.
              </p>
              <p className="text-gray-600">
                We work directly with manufacturers to ensure every piece meets our high
                standards. Our extensive collection spans formal wear, casual attire,
                workwear, and accessories, catering to diverse business needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="About Us"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;