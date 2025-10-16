import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FarmList = ({ farms, selectedFarm, onFarmSelect, onToggleFavorite, isVisible, onToggleVisibility }) => {
  const getStatusColor = (farm) => {
    if (farm?.isOpenNow) return 'text-success';
    if (farm?.acceptingOrders) return 'text-primary';
    return 'text-muted-foreground';
  };

  const getStatusText = (farm) => {
    if (farm?.isOpenNow) return 'Open Now';
    if (farm?.acceptingOrders) return 'Accepting Orders';
    return 'Closed';
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-20 right-4 z-40 lg:hidden">
        <Button
          variant="default"
          size="sm"
          onClick={onToggleVisibility}
          className="bg-background border border-border shadow-organic"
          iconName={isVisible ? "ChevronRight" : "List"}
        >
          {isVisible ? 'Hide' : 'List'} ({farms?.length})
        </Button>
      </div>
      {/* Farm List Panel */}
      <div className={`
        fixed lg:relative top-0 right-0 h-full w-80 lg:w-72 
        bg-background border-l lg:border border-border shadow-organic lg:shadow-none
        transform transition-transform duration-300 timing-organic z-50 lg:z-auto
        ${isVisible ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        overflow-hidden flex flex-col
      `}>
        {/* Header */}
        <div className="flex-shrink-0 border-b border-border p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline font-semibold text-lg text-foreground">
                Nearby Farms
              </h2>
              <p className="text-sm text-muted-foreground">
                {farms?.length} farms found
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleVisibility}
              className="lg:hidden"
              iconName="X"
            />
          </div>
        </div>

        {/* Farm List */}
        <div className="flex-1 overflow-y-auto">
          {farms?.length > 0 ? (
            <div className="p-4 lg:p-6 space-y-4">
              {farms?.map((farm) => (
                <div
                  key={farm?.id}
                  onClick={() => onFarmSelect(farm)}
                  className={`
                    p-4 border rounded-lg cursor-pointer transition-all duration-200
                    ${selectedFarm?.id === farm?.id 
                      ? 'border-primary bg-brand-surface shadow-organic' 
                      : 'border-border hover:border-primary/50 hover:shadow-subtle'
                    }
                  `}
                >
                  {/* Farm Image */}
                  <div className="relative h-24 mb-3 overflow-hidden rounded-lg">
                    <Image
                      src={farm?.image}
                      alt={farm?.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e?.stopPropagation();
                        onToggleFavorite(farm?.id);
                      }}
                      className="absolute top-2 right-2 p-1 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors duration-200"
                    >
                      <Icon 
                        name="Heart" 
                        size={14} 
                        className={farm?.isFavorite ? "fill-current text-accent" : "text-muted-foreground"} 
                      />
                    </button>
                    
                    {farm?.certifications?.length > 0 && (
                      <div className="absolute bottom-2 left-2">
                        <span className="px-2 py-1 bg-success text-success-foreground text-xs rounded-full font-medium">
                          {farm?.certifications?.[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Farm Info */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-headline font-medium text-foreground">
                        {farm?.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={12} className="text-accent fill-current" />
                        <span className="text-xs font-medium text-foreground">
                          {farm?.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {farm?.description}
                    </p>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={12} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{farm?.distance} miles</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon 
                          name="Clock" 
                          size={12} 
                          className={getStatusColor(farm)} 
                        />
                        <span className={getStatusColor(farm)}>
                          {getStatusText(farm)}
                        </span>
                      </div>
                    </div>

                    {/* Produce Types */}
                    <div className="flex flex-wrap gap-1">
                      {farm?.produceTypes?.slice(0, 3)?.map((produce, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {produce}
                        </span>
                      ))}
                      {farm?.produceTypes?.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{farm?.produceTypes?.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Delivery Options */}
                    <div className="flex space-x-2">
                      {farm?.deliveryOptions?.slice(0, 2)?.map((option, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          <Icon 
                            name={option === 'homeDelivery' ? 'Truck' : 'MapPin'} 
                            size={10} 
                            className="text-primary" 
                          />
                          <span className="text-xs text-foreground">
                            {option === 'homeDelivery' ? 'Delivery' : 'Pickup'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="font-headline font-medium text-foreground mb-2">
                  No farms found
                </h3>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your filters or search in a different area
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Overlay for mobile */}
      {isVisible && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onToggleVisibility}
        />
      )}
    </>
  );
};

export default FarmList;