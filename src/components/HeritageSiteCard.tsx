import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, IndianRupee } from 'lucide-react';
import { HeritageSite } from '../data/heritageSites';

interface HeritageSiteCardProps {
  site: HeritageSite;
}

const HeritageSiteCard: React.FC<HeritageSiteCardProps> = ({ site }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      fort: 'bg-red-100 text-red-800',
      palace: 'bg-purple-100 text-purple-800',
      monument: 'bg-blue-100 text-blue-800',
      temple: 'bg-orange-100 text-orange-800',
      gate: 'bg-green-100 text-green-800',
      memorial: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative overflow-hidden">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(site.category)}`}>
          {site.category.charAt(0).toUpperCase() + site.category.slice(1)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
          {site.name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1 text-amber-600" />
          <span className="text-sm">{site.location}, {site.state}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {site.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{site.built}</span>
          </div>
          <div className="flex items-center">
            <IndianRupee className="h-3 w-3 mr-1" />
            <span>{site.entryFee}</span>
          </div>
        </div>
        
        <Link
          to={`/heritage-site/${site.id}`}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-medium rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
        >
          Explore Heritage Site
        </Link>
      </div>
    </div>
  );
};

export default HeritageSiteCard;