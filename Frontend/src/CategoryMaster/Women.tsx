import React, { useState, useEffect } from 'react';
import { Filter, SortDesc, Grid, List, ChevronDown, Star } from 'lucide-react';

const WomensCategoryPage = () => {
  // Extended product data with more variety for filter demonstration
  const initialProducts = [
    {
      id: 1,
      name: "Classic Oxford Shirt",
      price: 89.99,
      rating: 4.5,
      image: "/api/placeholder/300/400",
      category: "Shirts",
      brand: "Premium Basics"
    },
    {
      id: 2,
      name: "Slim Fit Chinos",
      price: 69.99,
      rating: 4.3,
      image: "/api/placeholder/300/400",
      category: "Pants",
      brand: "Urban Style"
    },
    {
      id: 3,
      name: "Wool Blend Blazer",
      price: 199.99,
      rating: 4.7,
      image: "/api/placeholder/300/400",
      category: "Jackets",
      brand: "Luxury Collection"
    },
    {
      id: 4,
      name: "Cotton V-Neck Tee",
      price: 29.99,
      rating: 4.2,
      image: "/api/placeholder/300/400",
      category: "T-Shirts",
      brand: "Premium Basics"
    },
    {
      id: 5,
      name: "Premium Suit",
      price: 599.99,
      rating: 4.8,
      image: "/api/placeholder/300/400",
      category: "Suits",
      brand: "Luxury Collection"
    },
    {
      id: 6,
      name: "Sports Jacket",
      price: 129.99,
      rating: 4.4,
      image: "/api/placeholder/300/400",
      category: "Jackets",
      brand: "Sports Pro"
    },
    {
      id: 7,
      name: "Designer Belt",
      price: 79.99,
      rating: 4.6,
      image: "/api/placeholder/300/400",
      category: "Accessories",
      brand: "Urban Style"
    },
    {
      id: 8,
      name: "Premium Watch",
      price: 299.99,
      rating: 4.9,
      image: "/api/placeholder/300/400",
      category: "Accessories",
      brand: "Luxury Collection"
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000]
  });

  const categories = ["Shirts", "Pants", "Jackets", "T-Shirts", "Suits", "Accessories"];
  const brands = ["Premium Basics", "Urban Style", "Luxury Collection", "Sports Pro"];

  // Filter and sort products
  useEffect(() => {
    let result = [...initialProducts];

    // Apply category filters
    if (filters.categories.length > 0) {
      result = result.filter(product => filters.categories.includes(product.category));
    }

    // Apply brand filters
    if (filters.brands.length > 0) {
      result = result.filter(product => filters.brands.includes(product.brand));
    }

    // Apply price range filter
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'featured'
        // Keep original order
        break;
    }

    setFilteredProducts(result);
  }, [filters, sortBy]);

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value) 
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const handlePriceRangeChange = (min, max) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [min, max]
    }));
  };

  // Get min and max prices from products for the price range
  const priceRange = {
    min: Math.min(...initialProducts.map(p => p.price)),
    max: Math.max(...initialProducts.map(p => p.price))
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Men's Clothing</h1>
        <p className="text-gray-600">Discover our collection of premium men's wear</p>
        <p className="text-sm text-gray-500 mt-2">
          Showing {filteredProducts.length} of {initialProducts.length} products
        </p>
      </div>

      {/* Filters and Sort Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            Filters ({filters.categories.length + filters.brands.length > 0 ? 
              filters.categories.length + filters.brands.length : 'None'})
            <ChevronDown size={16} />
          </button>

          <div className="flex items-center gap-2">
            <button 
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </button>
            <button 
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sort by:</span>
          <select 
            className="border rounded-lg px-3 py-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Best Rating</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Categories</h3>
            {categories.map(category => (
              <label key={category} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleFilterChange('categories', category)}
                  className="rounded"
                />
                <span className="flex-1">{category}</span>
                <span className="text-gray-500 text-sm">
                  ({initialProducts.filter(p => p.category === category).length})
                </span>
              </label>
            ))}

            <h3 className="font-semibold mt-6 mb-4">Brands</h3>
            {brands.map(brand => (
              <label key={brand} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleFilterChange('brands', brand)}
                  className="rounded"
                />
                <span className="flex-1">{brand}</span>
                <span className="text-gray-500 text-sm">
                  ({initialProducts.filter(p => p.brand === brand).length})
                </span>
              </label>
            ))}

            <h3 className="font-semibold mt-6 mb-4">Price Range</h3>
            <div className="flex gap-2 mb-2">
              <input
                type="number"
                min={priceRange.min}
                max={filters.priceRange[1]}
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceRangeChange(Number(e.target.value), filters.priceRange[1])}
                className="w-20 border rounded px-2 py-1"
              />
              <span>to</span>
              <input
                type="number"
                min={filters.priceRange[0]}
                max={priceRange.max}
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceRangeChange(filters.priceRange[0], Number(e.target.value))}
                className="w-20 border rounded px-2 py-1"
              />
            </div>
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange(filters.priceRange[0], Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>${priceRange.min}</span>
              <span>${priceRange.max}</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No products match your selected filters.</p>
              <button 
                className="mt-4 text-blue-600 hover:underline"
                onClick={() => setFilters({
                  categories: [],
                  brands: [],
                  priceRange: [priceRange.min, priceRange.max]
                })}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                    viewMode === 'list' ? 'flex gap-4' : ''
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={viewMode === 'list' ? 'w-48 object-cover' : 'w-full h-64 object-cover'}
                  />
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <div className="text-sm text-gray-500 mb-2">{product.brand}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="text-yellow-400" size={16} fill="currentColor" />
                      <span>{product.rating}</span>
                    </div>
                    <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WomensCategoryPage;