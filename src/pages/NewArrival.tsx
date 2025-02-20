import React, { useEffect, useRef, useState } from 'react';
import { Heart, ShoppingCart, Filter } from 'lucide-react';

const NewArrivalsPage = () => {
  const scrollRef = useRef(null);

  // Sample new arrivals data
  const allProducts = [
    {
      id: 1,
      name: "Premium Business Suit",
      price: 299.99,
      category: "Formal Wear",
      image: "/api/placeholder/300/400",
      minOrder: 50,
      availability: "In Stock"
    },
    {
      id: 2,
      name: "Classic Oxford Shirt",
      price: 89.99,
      category: "Business Casual",
      image: "/api/placeholder/300/400",
      minOrder: 100,
      availability: "Pre-order"
    },
    {
      id: 3,
      name: "Professional Blazer",
      price: 199.99,
      category: "Formal Wear",
      image: "/api/placeholder/300/400",
      minOrder: 25,
      availability: "In Stock"
    },
    {
      id: 4,
      name: "Tailored Trousers",
      price: 129.99,
      category: "Business Casual",
      image: "/api/placeholder/300/400",
      minOrder: 75,
      availability: "Limited Stock"
    }
  ];

  // Filter and sort states
  const [filters, setFilters] = useState({
    category: 'all',
    availability: 'all',
    sort: 'latest'
  });

  // Filtered products state
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...allProducts];

    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter(product => 
        product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Apply availability filter
    if (filters.availability !== 'all') {
      result = result.filter(product => {
        const availabilityMap = {
          'in-stock': 'In Stock',
          'pre-order': 'Pre-order',
          'limited': 'Limited Stock'
        };
        return product.availability === availabilityMap[filters.availability];
      });
    }

    // Apply sorting
    switch (filters.sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'latest':
      default:
        // Assuming id represents the order of addition
        result.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(result);
  }, [filters]);

  // Handle navigation programmatically
  const handleProductClick = (productId) => {
    console.log(`Navigating to product ${productId}`);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50" ref={scrollRef}>
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <img 
          src="/api/placeholder/1920/600" 
          alt="New Arrivals Banner" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">New Arrivals</h1>
          <p className="text-xl">Discover the Latest B2B Fashion Collection</p>
          <p className="text-lg mt-2">Showing {filteredProducts.length} products</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5" />
            <select 
              className="border rounded-lg px-4 py-2"
              value={filters.category}
              onChange={(e) => setFilters(prev => ({...prev, category: e.target.value}))}
            >
              <option value="all">All Categories</option>
              <option value="formal wear">Formal Wear</option>
              <option value="business casual">Business Casual</option>
            </select>
            <select 
              className="border rounded-lg px-4 py-2"
              value={filters.availability}
              onChange={(e) => setFilters(prev => ({...prev, availability: e.target.value}))}
            >
              <option value="all">All Availability</option>
              <option value="in-stock">In Stock</option>
              <option value="pre-order">Pre-order</option>
              <option value="limited">Limited Stock</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Sort by:</span>
            <select 
              className="border rounded-lg px-4 py-2"
              value={filters.sort}
              onChange={(e) => setFilters(prev => ({...prev, sort: e.target.value}))}
            >
              <option value="latest">Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Add to wishlist', product.id);
                  }}
                >
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{product.category}</span>
                  <span className="text-primary font-bold">${product.price}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Min. Order: {product.minOrder}</span>
                  <span className={`text-sm ${
                    product.availability === 'In Stock' ? 'text-green-500' :
                    product.availability === 'Limited Stock' ? 'text-orange-500' :
                    'text-blue-500'
                  }`}>{product.availability}</span>
                </div>
                <button 
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Add to cart', product.id);
                  }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products found matching your filters</p>
            <button 
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setFilters({category: 'all', availability: 'all', sort: 'latest'})}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Load More Button - Only show if there are products */}
      {filteredProducts.length > 0 && (
        <div className="text-center py-8">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900">
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default NewArrivalsPage;