import React from 'react';
import { useProducts } from '../context/ProductContext';
import { Sliders } from 'lucide-react';

const ProductFilters = () => {
  const { state, dispatch } = useProducts();
  const categories = ['All', 'Electronics', 'Fashion', 'Accessories'];

  return (
    <div className="glass-card mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Sliders size={20} className="text-purple-400" />
        <h3 className="text-xl font-semibold">Filters</h3>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => dispatch({
                  type: 'SET_FILTER',
                  payload: { key: 'category', value: category.toLowerCase() }
                })}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  state.filters.category === category.toLowerCase()
                    ? 'bg-purple-600 text-white'
                    : 'hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-sm font-medium mb-3">Price Range</h4>
          <div className="px-3">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={state.filters.priceRange[1]}
              onChange={(e) => dispatch({
                type: 'SET_FILTER',
                payload: { key: 'priceRange', value: [0, Number(e.target.value)] }
              })}
              className="w-full accent-purple-600"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>$0</span>
              <span>${state.filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Sort */}
        <div>
          <h4 className="text-sm font-medium mb-3">Sort By</h4>
          <select
            value={state.filters.sortBy}
            onChange={(e) => dispatch({ type: 'SORT_PRODUCTS', payload: e.target.value })}
            className="w-full bg-white/5 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Reset Filters */}
        <button
          onClick={() => dispatch({ type: 'RESET_FILTERS' })}
          className="w-full px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;