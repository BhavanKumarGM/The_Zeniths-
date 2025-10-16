import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMapPreview = () => {
  const navigate = useNavigate();
  const [selectedFarm, setSelectedFarm] = useState(null);

  const nearbyFarms = [
    {
      id: 1,
      name: "Sunrise Organic Farm",
      farmer: "Sarah Johnson",
      lat: 40.7128,
      lng: -74.0060,
      specialty: "Organic Vegetables",
      distance: "2.3 miles",
      rating: 4.9,
      available: true,
      products: ["Tomatoes", "Herbs", "Greens"]
    },
    {
      id: 2,
      name: "Heritage Fruit Orchards",
      farmer: "Michael Rodriguez",
      lat: 40.7589,
      lng: -73.9851,
      specialty: "Stone Fruits",
      distance: "4.7 miles",
      rating: 4.8,
      available: true,
      products: ["Peaches", "Apricots", "Apples"]
    },
    {
      id: 3,
      name: "Wildflower Meadow Farm",
      farmer: "Emma Thompson",
      lat: 40.6892,
      lng: -74.0445,
      specialty: "Herbs & Flowers",
      distance: "1.8 miles",
      rating: 5.0,
      available: false,
      products: ["Herbs", "Edible Flowers"]
    },
    {
      id: 4,
      name: "Valley Fresh Dairy",
      farmer: "Robert Chen",
      lat: 40.7282,
      lng: -73.7949,
      specialty: "Dairy Products",
      distance: "6.2 miles",
      rating: 4.7,
      available: true,
      products: ["Fresh Milk", "Cheese", "Yogurt"]
    }
  ];

  const handleFarmSelect = (farm) => {
    setSelectedFarm(farm);
  };

  const handleViewFullMap = () => {
    navigate('/interactive-farm-map');
  };

  const handleViewFarm = (farmId) => {
    navigate(`/farmer-profile/${farmId}`);
  };

  return (
    <section className="py-16 bg-brand-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
            <Icon name="Map" size={16} />
            <span>Farm Discovery</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Explore Farms Near You
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Discover local farms in your area with our interactive map. See what's available, 
            check distances, and connect directly with farmers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="relative bg-background border border-border rounded-xl overflow-hidden shadow-organic h-96 lg:h-[500px]">
              {/* Google Maps Iframe */}
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Local Farms Map"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=40.7128,-74.0060&z=12&output=embed"
                className="w-full h-full"
              />
              
              {/* Map Overlay Controls */}
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-organic">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="font-body font-semibold text-sm text-foreground">
                    {nearbyFarms?.length} farms nearby
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground font-body">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* View Full Map Button */}
              <div className="absolute bottom-4 right-4">
                <Button 
                  variant="default" 
                  size="sm"
                  className="cta-conversion font-body font-semibold shadow-lg"
                  onClick={handleViewFullMap}
                  iconName="Maximize2"
                  iconPosition="left"
                >
                  View Full Map
                </Button>
              </div>
            </div>
          </div>

          {/* Farm List */}
          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold text-primary mb-4">
              Nearby Farms
            </h3>
            
            <div className="space-y-3 max-h-96 lg:max-h-[500px] overflow-y-auto">
              {nearbyFarms?.map((farm) => (
                <div 
                  key={farm?.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 timing-organic ${
                    selectedFarm?.id === farm?.id
                      ? 'border-primary bg-primary/5 shadow-organic'
                      : 'border-border bg-background hover:border-primary/50 hover:shadow-subtle'
                  }`}
                  onClick={() => handleFarmSelect(farm)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-foreground text-sm mb-1">
                        {farm?.name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-body">
                        by {farm?.farmer}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      farm?.available ? 'bg-success' : 'bg-muted-foreground'
                    }`}></div>
                  </div>

                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MapPin" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-body">
                      {farm?.distance}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={12} className="text-warning fill-current" />
                      <span className="text-xs font-body font-semibold">{farm?.rating}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-primary font-body font-medium mb-1">
                      {farm?.specialty}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {farm?.products?.slice(0, 2)?.map((product, index) => (
                        <span 
                          key={index}
                          className="bg-brand-surface text-primary text-xs font-body px-2 py-1 rounded-md"
                        >
                          {product}
                        </span>
                      ))}
                      {farm?.products?.length > 2 && (
                        <span className="text-xs text-muted-foreground font-body">
                          +{farm?.products?.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="xs"
                      className="flex-1 font-body text-xs"
                      onClick={(e) => {
                        e?.stopPropagation();
                        handleViewFarm(farm?.id);
                      }}
                    >
                      View Farm
                    </Button>
                    <Button 
                      variant="default" 
                      size="xs"
                      className="font-body text-xs"
                      disabled={!farm?.available}
                      onClick={(e) => {
                        e?.stopPropagation();
                        navigate('/communication-center');
                      }}
                    >
                      {farm?.available ? 'Contact' : 'Closed'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Location Settings */}
            <div className="mt-6 p-4 bg-background border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Settings" size={16} className="text-primary" />
                <span className="font-body font-semibold text-sm text-foreground">
                  Search Preferences
                </span>
              </div>
              
              <div className="space-y-2 text-xs text-muted-foreground font-body">
                <div className="flex justify-between">
                  <span>Search Radius:</span>
                  <span className="text-primary font-semibold">10 miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-primary font-semibold">New York, NY</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="xs"
                fullWidth
                className="mt-3 font-body text-xs"
                iconName="MapPin"
                iconPosition="left"
              >
                Update Location
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapPreview;