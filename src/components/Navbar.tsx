import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-black/30 fixed w-full z-50 top-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-purple-400 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/login" className="hover:text-purple-400 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="hover:text-purple-400 transition-colors">
              <ShoppingCart size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="mobile-nav-link">Home</Link>
              <Link to="/products" className="mobile-nav-link">Products</Link>
              <Link to="/about" className="mobile-nav-link">About</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
              <Link to="/login" className="mobile-nav-link">Login</Link>
              <Link to="/cart" className="mobile-nav-link">Cart</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;