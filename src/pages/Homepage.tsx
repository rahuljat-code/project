import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar, Award, ArrowRight, Crown, Mountain, Building } from 'lucide-react';
import { heritageSites } from '../data/heritageSites';
import HeritageSiteCard from '../components/HeritageSiteCard';
import SearchFilter from '../components/SearchFilter';

const Homepage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const [visitorCount, setVisitorCount] = useState(0);

  const filteredSites = useMemo(() => {
    return heritageSites.filter(site => {
      const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           site.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           site.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;
      const matchesState = selectedState === 'all' || site.state === selectedState;
      
      return matchesSearch && matchesCategory && matchesState;
    });
  }, [searchTerm, selectedCategory, selectedState]);

  const featuredSites = heritageSites.slice(0, 3);

  // Increment visitor count when the component mounts
  useEffect(() => {
    setVisitorCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mb-6">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Virasat QR
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Digital Heritage Access System
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Discover India's magnificent heritage sites through our innovative QR code system. 
              Explore forts, palaces, monuments, and memorials with detailed information, 
              interactive maps, and instant digital access.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/heritage-sites"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore Heritage Sites
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="#about"
              className="inline-flex items-center px-8 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-200 shadow-lg border border-amber-200"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-3">
                <Building className="h-6 w-6 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{heritageSites.length}+</div>
              <div className="text-sm text-gray-600">Heritage Sites</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-sm text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{visitorCount}</div>
              <div className="text-sm text-gray-600">Visitors</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Years of History</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sites */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Heritage Sites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover some of India's most iconic historical monuments and architectural marvels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSites.map(site => (
              <HeritageSiteCard key={site.id} site={site} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/heritage-sites"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              View All Heritage Sites
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Browse */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Heritage Site
            </h2>
            <p className="text-lg text-gray-600">
              Search and filter through our collection of Indian heritage sites
            </p>
          </div>
          
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedState={selectedState}
            onStateChange={setSelectedState}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSites.slice(0, 6).map(site => (
              <HeritageSiteCard key={site.id} site={site} />
            ))}
          </div>
          
          {filteredSites.length > 6 && (
            <div className="text-center mt-8">
              <Link
                to="/heritage-sites"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
              >
                View All Results ({filteredSites.length})
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Virasat QR
              </h2>
              <p className="text-lg text-amber-100 mb-6">
                Virasat QR is a digital heritage access system that revolutionizes how people explore 
                and learn about India's rich cultural heritage. Our platform provides instant access 
                to detailed information about historical sites through QR codes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-amber-100">
                    Comprehensive database of Indian heritage sites with detailed historical information
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-amber-100">
                    Interactive QR codes for instant mobile access to site information
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-amber-100">
                    Integrated maps and location services for easy navigation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
