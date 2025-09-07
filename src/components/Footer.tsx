import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-amber-300" />
              <div>
                <h3 className="text-2xl font-bold">Virasat QR</h3>
                <p className="text-amber-200 text-sm">Digital Heritage Access System</p>
              </div>
            </div>
            <p className="text-amber-100 mb-6 max-w-md">
              Preserving and promoting India's rich cultural heritage through innovative digital solutions.
              Explore our magnificent heritage sites with instant QR code access.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@virasatqr.com"
                className="text-amber-200 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/heritage-sites" className="text-amber-200 hover:text-white transition-colors">
                  Heritage Sites
                </Link>
              </li>
              <li>
                <a href="#about" className="text-amber-200 hover:text-white transition-colors">
                  About Project
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amber-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/heritage-sites" className="text-amber-200 hover:text-white transition-colors">
                  Forts & Palaces
                </Link>
              </li>
              <li>
                <Link to="/heritage-sites" className="text-amber-200 hover:text-white transition-colors">
                  Monuments
                </Link>
              </li>
              <li>
                <Link to="/heritage-sites" className="text-amber-200 hover:text-white transition-colors">
                  Temples
                </Link>
              </li>
              <li>
                <Link to="/heritage-sites" className="text-amber-200 hover:text-white transition-colors">
                  War Memorials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © 2025 Virasat QR. All rights reserved. Built with ❤️ for preserving Indian heritage.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-amber-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-amber-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center text-amber-200 text-sm">
                <span>Powered by React & QR Technology</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
