import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, Grid3X3, List, MapPin } from 'lucide-react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import ProductCard from '../../components/ProductCard';
import { api, apiCall } from '../../services/api';
import { toast } from 'react-hot-toast';

const BuyerDiscovery = () => {
  const { t } = useTranslation();
  const [farmers, setFarmers] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    specialty: '',
    maxDistance: 50
  });
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  // Load farmers data
  const loadFarmers = async () => {
    setLoading(true);
    const result = await apiCall(api.getFarmers, filters);
    if (result.success) {
      setFarmers(result.data);
    }
    setLoading(false);
  };

  // Load AI recommendations
  const loadRecommendations = async () => {
    const result = await apiCall(api.getRecommendations, 'Bangalore', {
      preferredProducts: ['vegetables', 'fruits']
    });
    if (result.success) {
      setRecommendations(result.data);
      if (result.message) {
        toast.success(result.message);
      }
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    loadFarmers();
  };

  // Filter farmers based on search query
  const filteredFarmers = farmers.filter(farmer => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      farmer.name.toLowerCase().includes(query) ||
      farmer.location.toLowerCase().includes(query) ||
      farmer.specialties.some(spec => spec.toLowerCase().includes(query))
    );
  });

  useEffect(() => {
    loadFarmers();
    loadRecommendations();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6 pt-20">
        {/* Search Section */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder={t('search') + ' farmers, products, locations...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit" disabled={loading}>
              {t('search')}
            </Button>
          </form>
        </div>

        {/* AI Recommendations */}
        {recommendations.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <h2 className="text-xl font-semibold text-foreground">AI {t('recommendations')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((farmer) => (
                <ProductCard
                  key={farmer.id}
                  farmer={farmer}
                  onViewDetails={() => setSelectedFarmer(farmer)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-4 sm:mb-0">
            {t('findFarmers')} ({filteredFarmers.length})
          </h2>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-muted rounded mb-4"></div>
                <div className="h-3 bg-muted rounded mb-2"></div>
                <div className="h-3 bg-muted rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Farmers Grid */}
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
            }`}>
              {filteredFarmers.map((farmer) => (
                <ProductCard
                  key={farmer.id}
                  farmer={farmer}
                  onViewDetails={() => setSelectedFarmer(farmer)}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredFarmers.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No farmers found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters.
                </p>
                <Button onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BuyerDiscovery;