import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = {
  "mens-wear": {
    name: "Men's Wear",
    subcategories: ["T-Shirts", "Shirts", "Jackets", "Pants", "Suits"],
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e"
  },
  "womens-wear": {
    name: "Women's Wear",
    subcategories: ["Dresses", "Tops", "Bottoms", "Outerwear"],
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3"
  },
  "kids-wear": {
    name: "Kids' Wear",
    subcategories: ["Boys", "Girls", "Baby Clothing"],
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b"
  },
  "sportswear": {
    name: "Sportswear",
    subcategories: ["Activewear", "Gym Wear", "Jerseys"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  },
};

const bestSellingCategories = [
  {
    name: "Men's Wear",
    image: "https://images.unsplash.com/photo-1598300185506-1403012899a4",
    link: "/categories/mens-wear",
  },
  {
    name: "Women's Wear",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    link: "/categories/womens-wear",
  },
  {
    name: "Kids' Wear",
    image: "https://images.unsplash.com/photo-1603251564420-8f24c87d4870",
    link: "/categories/kids-wear",
  },
  {
    name: "Sportswear",
    image: "https://images.unsplash.com/photo-1596755095361-9d6f7b9202ad",
    link: "/categories/sportswear",
  },
];


// 👇 NEW: State to manage selected category
const Home = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState<string>("mens-wear");
const category = categories[currentCategoryId]; // This ensures category is never undefined

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

      {/* Key Features */}
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

      {/* Categories Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Browse All Categories
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(categories).map(([key, value], index) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentCategoryId(key)}
                className={`p-4 rounded-lg text-center ${
                  key === currentCategoryId
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {value.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Details Section (Only Render if a Category is Selected) */}
      {category && (
        <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
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
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Discover our extensive collection of {category.name.toLowerCase()}
            </p>
          </div>
        </motion.div>
      </section>
      )}

      {/* Subcategories Section (Only Render if a Category is Selected) */}
      {category && (
        <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {category.subcategories.map((subcategory, index) => (
              <motion.div
                key={subcategory}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{subcategory}</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-indigo-600 font-medium inline-flex items-center space-x-2"
                  >
                    <span>Browse Products</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}
       {/* Best-Selling Categories Section */}
       <section className="py-20 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Best-Selling Categories
        </motion.h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellingCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                  <motion.a
                    href={category.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-indigo-600 font-medium inline-flex items-center space-x-2"
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
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
