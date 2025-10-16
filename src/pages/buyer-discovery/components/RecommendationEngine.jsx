import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendationEngine = ({ 
  recommendations, 
  onViewFarm, 
  onToggleFavorite, 
  onToggleComparison 
}) => {
  if (!recommendations || recommendations?.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Sparkles" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                AI Recommendations
              </h3>
              <p className="text-sm text-muted-foreground">
                Personalized suggestions based on your preferences
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium">
          <Icon name="Zap" size={12} />
          <span>AI Powered</span>
        </div>
      </div>
      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations?.map((farm) => (
          <RecommendationCard
            key={farm?.id}
            farm={farm}
            onViewFarm={onViewFarm}
            onToggleFavorite={onToggleFavorite}
            onToggleComparison={onToggleComparison}
          />
        ))}
      </div>
      {/* AI Insights */}
      <div className="mt-6 pt-6 border-t border-border/50">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={16} className="text-primary mt-0.5" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-foreground mb-1">
              Why these recommendations?
            </h4>
            <p className="text-xs text-muted-foreground">
              Based on seasonal availability, your location preferences, browsing history, 
              and similar buyers' choices. Recommendations update in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecommendationCard = ({ 
  farm, 
  onViewFarm, 
  onToggleFavorite, 
  onToggleComparison 
}) => {
  const getRecommendationReason = (farm) => {
    if (farm?.trends?.includes('seasonal_peak')) return 'Seasonal peak quality';
    if (farm?.trends?.includes('trending_up')) return 'Rising popularity';
    if (farm?.trends?.includes('local_favorite')) return 'Local favorite';
    if (farm?.sustainabilityScore > 90) return 'Exceptional sustainability';
    if (farm?.rating >= 4.8) return 'Outstanding reviews';
    return 'Matches your preferences';
  };

  const getCompatibilityColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-blue-600 bg-blue-50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={farm?.image}
          alt={farm?.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Compatibility Score Badge */}
        <div className={`
          absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium
          ${getCompatibilityColor(farm?.aiCompatibilityScore)}
        `}>
          {farm?.aiCompatibilityScore}% Match
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e?.stopPropagation();
            onToggleFavorite(farm);
          }}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        >
          <Icon
            name="Heart"
            size={16}
            className={farm?.isFavorite ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}
          />
        </button>
      </div>
      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground truncate">
              {farm?.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {getRecommendationReason(farm)}
            </p>
          </div>
        </div>

        {/* Rating and Distance */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">{farm?.rating}</span>
              <span className="text-xs text-muted-foreground">({farm?.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Icon name="MapPin" size={12} />
            <span>{farm?.distance} miles</span>
          </div>
        </div>

        {/* Farm Features */}
        <div className="flex items-center space-x-2 mb-3">
          <span className={`
            inline-block px-2 py-1 text-xs font-medium rounded-full
            ${farm?.farmType === 'organic' ? 'bg-green-100 text-green-800' : 
              farm?.farmType === 'sustainable'? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}
          `}>
            {farm?.farmType}
          </span>
          
          {farm?.isOpenNow && (
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
              Open now
            </span>
          )}
        </div>

        {/* Seasonal Specialty */}
        {farm?.seasonalSpecialty && (
          <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-3">
            <Icon name="Calendar" size={12} />
            <span className="capitalize">
              {farm?.seasonalSpecialty?.replace('_', ' ')} available
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => onViewFarm(farm)}
            size="sm"
            className="flex-1"
          >
            View Details
          </Button>
          
          <Button
            onClick={(e) => {
              e?.stopPropagation();
              onToggleComparison(farm);
            }}
            variant="outline"
            size="sm"
            iconName="BarChart3"
          />
        </div>

        {/* AI Insight */}
        <div className="mt-3 pt-3 border-t border-border/50">
          <div className="flex items-center space-x-1 text-xs">
            <Icon name="Brain" size={12} className="text-primary" />
            <span className="text-muted-foreground">
              Recommended for: 
              <span className="text-foreground font-medium ml-1">
                {farm?.produceTypes?.slice(0, 2)?.join(', ')}
                {farm?.produceTypes?.length > 2 && ` +${farm?.produceTypes?.length - 2} more`}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationEngine;