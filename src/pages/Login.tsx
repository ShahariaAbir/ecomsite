import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus, Lock } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto glass-card">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-purple-600/10 mb-4">
              <Lock className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-300 mt-2">
              {isLogin
                ? 'Sign in to access your account'
                : 'Join us to start shopping'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-colors"
                required
              />
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-colors"
                  required
                />
              </div>
            )}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-purple-400 hover:text-purple-300">
                  Forgot password?
                </Link>
              </div>
            )}
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
              {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-purple-400 hover:text-purple-300"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;