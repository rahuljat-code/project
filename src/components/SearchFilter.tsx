import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedState: string;
  onStateChange: (state: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedState,
  onStateChange
}) => {
  const categories = ['all', 'fort', 'palace', 'monument', 'temple', 'gate', 'memorial'];
  const states = ['all', 'Maharashtra', 'Delhi', 'Rajasthan', 'Karnataka', 'West Bengal'];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-amber-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Search & Filter Heritage Sites</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search heritage sites..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>
        
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        
        {/* State Filter */}
        <select
          value={selectedState}
          onChange={(e) => onStateChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        >
          {states.map(state => (
            <option key={state} value={state}>
              {state === 'all' ? 'All States' : state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;