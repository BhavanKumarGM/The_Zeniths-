import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FarmerProfile = ({ farmer, onMessageFarmer, onViewFarm }) => {
  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-organic">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <Image
            src={farmer?.avatar}
            alt={farmer?.avatarAlt}
            className="w-16 h-16 rounded-full object-cover"
          />
          {farmer?.isVerified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} className="text-white" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-lg font-headline font-semibold text-foreground">
              {farmer?.name}
            </h3>
            {farmer?.isVerified && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body bg-success/10 text-success">
                <Icon name="Shield" size={12} className="mr-1" />
                Verified
              </span>
            )}
          </div>
          
          <p className="text-sm text-brand-sage font-body mb-2">{farmer?.farmName}</p>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground font-body mb-3">
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={14} />
              <span>{farmer?.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{farmer?.yearsExperience} years farming</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={i < Math.floor(farmer?.rating) ? 'text-warning fill-current' : 'text-border'}
                  />
                ))}
              </div>
              <span className="text-sm font-body text-foreground">
                {farmer?.rating} ({farmer?.reviewCount} reviews)
              </span>
            </div>
          </div>

          <p className="text-sm text-foreground font-body mb-4 leading-relaxed">
            {farmer?.bio}
          </p>

          {/* Certifications */}
          {farmer?.certifications && farmer?.certifications?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-headline font-semibold text-foreground mb-2">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {farmer?.certifications?.map((cert, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body bg-primary/10 text-primary"
                  >
                    <Icon name="Award" size={12} className="mr-1" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onMessageFarmer}
              iconName="MessageCircle"
              iconPosition="left"
              className="flex-1"
            >
              Message Farmer
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={onViewFarm}
              iconName="MapPin"
              iconPosition="left"
              className="flex-1"
            >
              View Farm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;