import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Filter, Search } from 'lucide-react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { api, apiCall } from '../../services/api';

const InteractiveFarmMap = () => {
  const { t } = useTranslation();
  const [farmers, setFarmers] = useState([]);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Load farmers data
  const loadFarmers = async () => {
    setLoading(true);
    const result = await apiCall(api.getFarmers);
    if (result.success) {
      setFarmers(result.data);
    }
    setLoading(false);
  };

  // Get user location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Location error:', error);
          // Default to Bangalore coordinates
          setUserLocation({ lat: 12.9716, lng: 77.5946 });
        }
      );
    } else {
      // Default to Bangalore coordinates
      setUserLocation({ lat: 12.9716, lng: 77.5946 });
    }
  };

  useEffect(() => {
    loadFarmers();
    getUserLocation();
  }, []);

  // Filter farmers based on search
  const filteredFarmers = farmers.filter(farmer => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      farmer.name.toLowerCase().includes(query) ||
      farmer.location.toLowerCase().includes(query) ||
      farmer.specialties.some(spec => spec.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6 pt-20">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Farm Map</h1>
          <p className="text-muted-foreground">
            Discover local farms near you and explore their fresh produce.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Search farms, products, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={getUserLocation}>
            <Navigation className="w-4 h-4 mr-2" />
            My Location
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border h-96 lg:h-[600px] flex items-center justify-center relative overflow-hidden">
              {/* Simple map representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                {/* Grid pattern to simulate map */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-6 h-full">
                    {[...Array(48)].map((_, i) => (
                      <div key={i} className="border border-gray-300"></div>
                    ))}
                  </div>
                </div>
                
                {/* User location marker */}
                {userLocation && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    <div className="text-xs text-blue-600 font-medium mt-1 whitespace-nowrap">You are here</div>
                  </div>
                )}
                
                {/* Farm markers */}
                {filteredFarmers.map((farmer, index) => (
                  <div
                    key={farmer.id}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                      selectedFarmer?.id === farmer.id ? 'z-10' : 'z-0'
                    }`}
                    style={{
                      top: `${30 + (index * 15) % 40}%`,
                      left: `${25 + (index * 20) % 50}%`
                    }}
                    onClick={() => setSelectedFarmer(farmer)}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                      selectedFarmer?.id === farmer.id 
                        ? 'bg-primary scale-125' 
                        : 'bg-green-500 hover:bg-green-600'
                    } transition-all duration-200`}>
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                    {selectedFarmer?.id === farmer.id && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 min-w-48 border border-border">
                        <div className="text-sm font-medium text-foreground">{farmer.name}</div>
                        <div className="text-xs text-muted-foreground">{farmer.farmName}</div>
                        <div className="text-xs text-muted-foreground mt-1">{farmer.distance}km away</div>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <span className="text-xs font-medium">{farmer.rating}</span>
                          </div>
                          <Button size="sm" className="ml-2 text-xs px-2 py-1">
                            View Details
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-border hover:bg-gray-50 dark:hover:bg-gray-700">
                  <span className="text-lg font-bold">+</span>
                </button>
                <button className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-border hover:bg-gray-50 dark:hover:bg-gray-700">
                  <span className="text-lg font-bold">-</span>
                </button>
              </div>
            </div>
          </div>

          {/* Farmers List */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-4">
              <h2 className="text-lg font-semibold text-card-foreground mb-4">
                Nearby Farms ({filteredFarmers.length})
              </h2>
              
              {loading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-muted rounded mb-2"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredFarmers.map((farmer) => (
                    <div
                      key={farmer.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedFarmer?.id === farmer.id
                          ? 'bg-primary/10 border border-primary'
                          : 'bg-muted/50 hover:bg-muted'
                      }`}
                      onClick={() => setSelectedFarmer(farmer)}
                    >
                      <div className="flex items-start space-x-3">
                        <img
                          src={farmer.image}
                          alt={farmer.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-card-foreground truncate">
                            {farmer.name}
                          </h3>
                          <p className="text-sm text-muted-foreground truncate">
                            {farmer.farmName}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <span className="text-xs font-medium">{farmer.rating}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {farmer.distance}km
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {farmer.specialties.slice(0, 2).map((specialty, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-card rounded-lg border border-border p-4">
          <h3 className="font-medium text-card-foreground mb-3">Map Legend</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Your Location</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Available Farms</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Selected Farm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFarmMap;