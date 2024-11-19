import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, description, image }) => {
  return (
    <div className="group relative">
      <div className="backdrop-blur-md bg-white/10 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover"
          />
        </Link>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-purple-400">${price}</span>
            
            <div className="flex space-x-2">
              <button className="p-2 rounded-full hover:bg-purple-500/20 transition-colors">
                <Heart size={20} className="text-purple-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-purple-500/20 transition-colors">
                <ShoppingCart size={20} className="text-purple-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
    </div>
  );
};

export default ProductCard;