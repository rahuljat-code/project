import React, { useState, useMemo } from 'react';
import { heritageSites } from '../data/heritageSites';
import HeritageSiteCard from '../components/HeritageSiteCard';
import SearchFilter from '../components/SearchFilter';
import { MapPin, Filter } from 'lucide-react';

const HeritageSitesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedState, setSelectedState] = useState('all');

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

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    heritageSites.forEach(site => {
      stats[site.category] = (stats[site.category] || 0) + 1;
    });
    return stats;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mb-6">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Heritage Sites Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore India's magnificent heritage sites - from ancient forts and majestic palaces 
            to sacred temples and war memorials. Each site tells a unique story of our rich cultural legacy.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {Object.entries(categoryStats).map(([category, count]) => (
              <div key={category} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-gray-900">{count}</div>
                <div className="text-sm text-gray-600 capitalize">{category}s</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedState={selectedState}
            onStateChange={setSelectedState}
          />
        </div>
      </section>

      {/* Results */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-amber-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredSites.length} Heritage Site{filteredSites.length !== 1 ? 's' : ''} Found
              </h2>
            </div>
            
            {(searchTerm || selectedCategory !== 'all' || selectedState !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedState('all');
                }}
                className="px-4 py-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
          
          {filteredSites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSites.map(site => (
                <HeritageSiteCard key={site.id} site={site} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Heritage Sites Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find heritage sites.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedState('all');
                }}
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
              >
                Show All Sites
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HeritageSitesList;