import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-amber-800 to-orange-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-amber-200 transition-colors">
            <MapPin className="h-8 w-8 text-amber-300" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Virasat QR</span>
              <span className="text-xs text-amber-200">Digital Heritage</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-amber-700 text-white' 
                  : 'text-amber-100 hover:bg-amber-700 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/heritage-sites"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/heritage-sites') 
                  ? 'bg-amber-700 text-white' 
                  : 'text-amber-100 hover:bg-amber-700 hover:text-white'
              }`}
            >
              Heritage Sites
            </Link>
            <a
              href="#about"
              className="text-amber-100 hover:bg-amber-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-100 hover:text-white focus:outline-none focus:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-900 rounded-lg mt-2 mb-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'bg-amber-700 text-white' 
                    : 'text-amber-100 hover:bg-amber-700 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/heritage-sites"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/heritage-sites') 
                    ? 'bg-amber-700 text-white' 
                    : 'text-amber-100 hover:bg-amber-700 hover:text-white'
                }`}
              >
                Heritage Sites
              </Link>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-amber-100 hover:bg-amber-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;