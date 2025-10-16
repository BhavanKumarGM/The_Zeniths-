import React from 'react';
import Icon from '../../../components/AppIcon';

const FarmMarker = ({ farm, isSelected, onClick, isCluster = false, clusterCount = 0 }) => {
  if (isCluster) {
    return (
      <div 
        className="relative cursor-pointer transform transition-all duration-200 hover:scale-110"
        onClick={onClick}
      >
        <div className="w-12 h-12 bg-primary rounded-full border-4 border-background shadow-organic flex items-center justify-center">
          <span className="text-primary-foreground font-headline font-bold text-sm">
            {clusterCount}
          </span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-seasonal-pulse"></div>
      </div>
    );
  }

  const getMarkerColor = () => {
    if (farm?.isOpenNow) return 'bg-success';
    if (farm?.acceptingOrders) return 'bg-primary';
    return 'bg-muted-foreground';
  };

  const getMarkerIcon = () => {
    if (farm?.farmType === 'organic') return 'Leaf';
    if (farm?.deliveryOptions?.includes('homeDelivery')) return 'Truck';
    return 'MapPin';
  };

  return (
    <div 
      className={`relative cursor-pointer transform transition-all duration-200 ${
        isSelected ? 'scale-125 z-10' : 'hover:scale-110'
      }`}
      onClick={onClick}
    >
      <div className={`
        w-10 h-10 rounded-full border-3 border-background shadow-organic 
        flex items-center justify-center ${getMarkerColor()}
        ${isSelected ? 'ring-2 ring-accent ring-offset-2' : ''}
      `}>
        <Icon 
          name={getMarkerIcon()} 
          size={16} 
          className="text-white" 
        />
      </div>
      {farm?.isOpenNow && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-seasonal-pulse"></div>
      )}
      {farm?.isFavorite && (
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
          <Icon name="Heart" size={10} className="text-white fill-current" />
        </div>
      )}
    </div>
  );
};

export default FarmMarker;