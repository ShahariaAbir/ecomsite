import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { useProducts } from '../context/ProductContext';

const Products = () => {
  const { state } = useProducts();
  
  const filteredProducts = state.products
    .filter(product => {
      const matchesCategory = state.filters.category === 'all' || 
        product.category.toLowerCase() === state.filters.category;
      const matchesPrice = product.price <= state.filters.priceRange[1];
      return matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (state.filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return b.id - a.id; // newest
      }
    });

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="glass-card text-center py-12">
                <p className="text-xl">No products match your filters</p>
                <button
                  onClick={() => dispatch({ type: 'RESET_FILTERS' })}
                  className="mt-4 btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;