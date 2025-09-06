import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, IndianRupee, Calendar, Building, Users, ExternalLink } from 'lucide-react';
import { heritageSites } from '../data/heritageSites';
import QRCodeGenerator from '../components/QRCodeGenerator';

const HeritageSiteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const site = heritageSites.find(s => s.id === parseInt(id || '0'));

  if (!site) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Heritage Site Not Found</h1>
          <Link
            to="/heritage-sites"
            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Heritage Sites
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;

  const getCategoryColor = (category: string) => {
    const colors = {
      fort: 'bg-red-100 text-red-800 border-red-200',
      palace: 'bg-purple-100 text-purple-800 border-purple-200',
      monument: 'bg-blue-100 text-blue-800 border-blue-200',
      temple: 'bg-orange-100 text-orange-800 border-orange-200',
      gate: 'bg-green-100 text-green-800 border-green-200',
      memorial: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/heritage-sites"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Heritage Sites
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-4 right-4 sm:left-8 sm:right-8">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 border ${getCategoryColor(site.category)}`}>
            {site.category.charAt(0).toUpperCase() + site.category.slice(1)}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{site.name}</h1>
          <div className="flex items-center text-white/90 text-lg">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{site.location}, {site.state}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {site.name}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{site.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center p-4 bg-amber-50 rounded-lg">
                  <Calendar className="h-8 w-8 text-amber-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Built</p>
                    <p className="font-semibold text-gray-900">{site.built}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Building className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Architecture</p>
                    <p className="font-semibold text-gray-900">{site.architecture}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <IndianRupee className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Entry Fee</p>
                    <p className="font-semibold text-gray-900">{site.entryFee}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* History */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Historical Significance</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{site.history}</p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cultural Significance</h3>
                <p className="text-gray-700">{site.significance}</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location & Directions</h2>
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <iframe
                  src={site.mapUrl}
                  className="w-full h-64 md:h-80 rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${site.name}`}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                  <span>Coordinates: {site.coordinates.lat}, {site.coordinates.lng}</span>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${site.coordinates.lat},${site.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* QR Code */}
            <QRCodeGenerator url={currentUrl} siteName={site.name} />

            {/* Visiting Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Visitor Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Visiting Hours</p>
                    <p className="text-gray-600">{site.visitingHours}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <IndianRupee className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Entry Fee</p>
                    <p className="text-gray-600">{site.entryFee}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Best Time to Visit</p>
                    <p className="text-gray-600">Early morning or evening for better lighting and fewer crowds</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold text-gray-900 capitalize">{site.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">State:</span>
                  <span className="font-semibold text-gray-900">{site.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Architecture:</span>
                  <span className="font-semibold text-gray-900">{site.architecture}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Built:</span>
                  <span className="font-semibold text-gray-900">{site.built}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeritageSiteDetail;