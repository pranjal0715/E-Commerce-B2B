import React, { useEffect, useRef, useState } from 'react';
import { Heart, ShoppingCart, Filter, TrendingUp, Award } from 'lucide-react';

const BestSellersPage = () => {
  const scrollRef = useRef(null);
  const ITEMS_PER_PAGE = 20;

  // Expanded product list with bestseller metrics
  const allProducts = [
    {
      id: 1,
      name: "Premium Business Suit",
      price: 299.99,
      category: "Formal Wear",
      image: "/api/placeholder/300/400",
      minOrder: 50,
      availability: "In Stock",
      salesRank: 1,
      monthlySales: 1200,
      rating: 4.8
    },
    {
      id: 2,
      name: "Classic Oxford Shirt",
      price: 89.99,
      category: "Business Casual",
      image: "/api/placeholder/300/400",
      minOrder: 100,
      availability: "In Stock",
      salesRank: 2,
      monthlySales: 950,
      rating: 4.7
    },
    {
      id: 3,
      name: "Professional Blazer",
      price: 199.99,
      category: "Formal Wear",
      image: "/api/placeholder/300/400",
      minOrder: 25,
      availability: "In Stock",
      salesRank: 3,
      monthlySales: 800,
      rating: 4.9
    },
    {
      id: 4,
      name: "Silk Business Tie",
      price: 45.99,
      category: "Accessories",
      image: "/api/placeholder/300/400",
      minOrder: 200,
      availability: "In Stock",
      salesRank: 4,
      monthlySales: 750,
      rating: 4.6
    },
    {
      id: 5,
      name: "Executive Wool Coat",
      price: 399.99,
      category: "Outerwear",
      image: "/api/placeholder/300/400",
      minOrder: 30,
      availability: "In Stock",
      salesRank: 5,
      monthlySales: 600,
      rating: 4.8
    }
    // Add more products as needed
  ];

  // Filter and sort states
  const [filters, setFilters] = useState({
    category: 'all',
    timeFrame: 'monthly', // new filter for bestsellers
    priceRange: 'all',
    sort: 'sales-rank' // default sort by sales rank
  });

  // Pagination state
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...allProducts];

    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter(product => 
        product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Apply price range filter
    if (filters.priceRange !== 'all') {
      const ranges = {
        'under-100': product => product.price < 100,
        '100-200': product => product.price >= 100 && product.price <= 200,
        'over-200': product => product.price > 200
      };
      result = result.filter(ranges[filters.priceRange]);
    }

    // Apply sorting
    switch (filters.sort) {
      case 'sales-rank':
        result.sort((a, b) => a.salesRank - b.salesRank);
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [filters]);

  // Update visible products
  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    setVisibleProducts(filteredProducts.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const categories = ['all', ...new Set(allProducts.map(p => p.category.toLowerCase()))];

  // Helper function to render sales rank badge
  const renderSalesRankBadge = (rank) => {
    const badgeColors = {
      1: 'bg-yellow-500',
      2: 'bg-gray-400',
      3: 'bg-orange-500'
    };

    return rank <= 3 ? (
      <div className={`absolute top-4 left-4 ${badgeColors[rank]} text-white rounded-full p-2`}>
        <Award className="h-5 w-5" />
        <span className="text-xs font-bold">#{rank}</span>
      </div>
    ) : null;
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50" ref={scrollRef}>
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <img 
          src="/api/placeholder/1920/600" 
          alt="Best Sellers Banner" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Best Sellers</h1>
          <p className="text-xl">Our Most Popular B2B Fashion Items</p>
          <div className="flex items-center mt-4">
            <TrendingUp className="h-6 w-6 mr-2" />
            <p className="text-lg">Top {filteredProducts.length} Products by Sales Volume</p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="h-5 w-5" />
            <select 
              className="border rounded-lg px-4 py-2"
              value={filters.category}
              onChange={(e) => setFilters(prev => ({...prev, category: e.target.value}))}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <select 
              className="border rounded-lg px-4 py-2"
              value={filters.timeFrame}
              onChange={(e) => setFilters(prev => ({...prev, timeFrame: e.target.value}))}
            >
              <option value="monthly">Monthly Bestsellers</option>
              <option value="quarterly">Quarterly Bestsellers</option>
              <option value="yearly">Yearly Bestsellers</option>
            </select>
            <select 
              className="border rounded-lg px-4 py-2"
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({...prev, priceRange: e.target.value}))}
            >
              <option value="all">All Prices</option>
              <option value="under-100">Under $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="over-200">Over $200</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Sort by:</span>
            <select 
              className="border rounded-lg px-4 py-2"
              value={filters.sort}
              onChange={(e) => setFilters(prev => ({...prev, sort: e.target.value}))}
            >
              <option value="sales-rank">Best Selling</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer relative"
            >
              <div className="relative">
                {renderSalesRankBadge(product.salesRank)}
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
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Monthly Sales: {product.monthlySales}</span>
                  <span className="text-sm text-yellow-500">★ {product.rating}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Min. Order: {product.minOrder}</span>
                  <span className="text-sm text-green-500">{product.availability}</span>
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
            <p className="text-xl text-gray-600">No bestsellers found matching your filters</p>
            <button 
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setFilters({
                category: 'all',
                timeFrame: 'monthly',
                priceRange: 'all',
                sort: 'sales-rank'
              })}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {visibleProducts.length < filteredProducts.length && (
        <div className="text-center py-8">
          <button 
            className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900"
            onClick={handleLoadMore}
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default BestSellersPage;