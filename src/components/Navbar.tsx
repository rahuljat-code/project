import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-amber-900 to-orange-900 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Virasat QR
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className={isActive('/') ? 'font-bold underline' : ''}>Home</Link>
          <Link to="/heritage-sites" className={isActive('/heritage-sites') ? 'font-bold underline' : ''}>Heritage Sites</Link>
          <Link to="/about" className={isActive('/about') ? 'font-bold underline' : ''}>About</Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/" className={isActive('/') ? 'font-bold underline' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/heritage-sites" className={isActive('/heritage-sites') ? 'font-bold underline' : ''} onClick={() => setIsMenuOpen(false)}>Heritage Sites</Link>
          <Link to="/about" className={isActive('/about') ? 'font-bold underline' : ''} onClick={() => setIsMenuOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;