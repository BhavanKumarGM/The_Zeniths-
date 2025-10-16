import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FarmInfoCard = ({ farm, onClose, onViewDetails, onGetDirections, onToggleFavorite }) => {
  if (!farm) return null;

  const getStatusColor = () => {
    if (farm?.isOpenNow) return 'text-success';
    if (farm?.acceptingOrders) return 'text-primary';
    return 'text-muted-foreground';
  };

  const getStatusText = () => {
    if (farm?.isOpenNow) return 'Open Now';
    if (farm?.acceptingOrders) return 'Accepting Orders';
    return 'Closed';
  };

  return (
    <div className="bg-background border border-border rounded-lg shadow-organic overflow-hidden">
      {/* Header Image */}
      <div className="relative h-32 overflow-hidden">
        <Image
          src={farm?.image}
          alt={farm?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleFavorite}
            className="bg-background/80 backdrop-blur-sm"
            iconName={farm?.isFavorite ? "Heart" : "Heart"}
          >
            <Icon 
              name="Heart" 
              size={16} 
              className={farm?.isFavorite ? "fill-current text-accent" : "text-muted-foreground"} 
            />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="bg-background/80 backdrop-blur-sm"
            iconName="X"
          />
        </div>
        
        {farm?.certifications?.length > 0 && (
          <div className="absolute bottom-2 left-2">
            <div className="flex space-x-1">
              {farm?.certifications?.slice(0, 2)?.map((cert, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-success text-success-foreground text-xs rounded-full font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Farm Info */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-headline font-semibold text-lg text-foreground">
              {farm?.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} className="text-accent fill-current" />
              <span className="text-sm font-medium text-foreground">
                {farm?.rating}
              </span>
              <span className="text-xs text-muted-foreground">
                ({farm?.reviewCount})
              </span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">
            {farm?.description}
          </p>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={14} className="text-muted-foreground" />
              <span className="text-muted-foreground">{farm?.distance} miles away</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon 
                name={farm?.isOpenNow ? "Clock" : "Clock"} 
                size={14} 
                className={getStatusColor()} 
              />
              <span className={getStatusColor()}>
                {getStatusText()}
              </span>
            </div>
          </div>
        </div>

        {/* Produce Types */}
        <div>
          <h4 className="font-medium text-sm text-foreground mb-2">Available Produce</h4>
          <div className="flex flex-wrap gap-1">
            {farm?.produceTypes?.slice(0, 4)?.map((produce, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-brand-surface text-foreground text-xs rounded-full"
              >
                {produce}
              </span>
            ))}
            {farm?.produceTypes?.length > 4 && (
              <span className="px-2 py-1 bg-brand-surface text-muted-foreground text-xs rounded-full">
                +{farm?.produceTypes?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Delivery Options */}
        <div>
          <h4 className="font-medium text-sm text-foreground mb-2">Delivery Options</h4>
          <div className="flex space-x-2">
            {farm?.deliveryOptions?.map((option, index) => (
              <div key={index} className="flex items-center space-x-1">
                <Icon 
                  name={option === 'homeDelivery' ? 'Truck' : option === 'farmPickup' ? 'MapPin' : 'Store'} 
                  size={14} 
                  className="text-primary" 
                />
                <span className="text-xs text-foreground capitalize">
                  {option?.replace(/([A-Z])/g, ' $1')?.trim()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onGetDirections}
            className="flex-1"
            iconName="Navigation"
            iconPosition="left"
          >
            Directions
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onViewDetails}
            className="flex-1 cta-conversion"
          >
            View Farm
          </Button>
        </div>

        {/* Contact Info */}
        {farm?.phone && (
          <div className="pt-2 border-t border-border">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={14} className="text-muted-foreground" />
              <span className="text-sm text-foreground">{farm?.phone}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmInfoCard;