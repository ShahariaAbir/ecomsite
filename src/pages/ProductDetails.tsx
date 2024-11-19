import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingCart, Shield, Truck, RefreshCw } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { state: { products } } = useProducts();
  const { dispatch: cartDispatch } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="glass-card text-center py-12">
            <p className="text-xl">Product not found</p>
          </div>
        </div>
      </div>
    );
  }

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Secure Payment',
      description: '100% secure payment'
    },
    {
      icon: <Truck className="w-6 h-6 text-purple-400" />,
      title: 'Fast Shipping',
      description: '2-3 business days'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-purple-400" />,
      title: 'Easy Returns',
      description: '30-day return policy'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="glass-card p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="glass-card">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-bold text-purple-400">
                  ${product.price}
                </span>
                <div className="flex space-x-4">
                  <button className="p-3 rounded-full hover:bg-purple-500/20 transition-colors">
                    <Heart size={24} className="text-purple-400" />
                  </button>
                  <button
                    onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white/5">
                    <div className="inline-block p-2 rounded-full bg-purple-600/10 mb-2">
                      {feature.icon}
                    </div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-card">
              <h2 className="text-xl font-semibold mb-4">Product Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">Category</span>
                  <span>{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">Availability</span>
                  <span className="text-green-400">In Stock</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span className="text-gray-300">SKU</span>
                  <span>PRD-{product.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;