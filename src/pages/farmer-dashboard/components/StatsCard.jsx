import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsCard = ({ title, value, change, changeType, icon, trend }) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-success';
    if (changeType === 'negative') return 'text-error';
    return 'text-muted-foreground';
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') return 'TrendingUp';
    if (changeType === 'negative') return 'TrendingDown';
    return 'Minus';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-organic hover:shadow-conversion transition-all duration-300 timing-organic">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={icon} size={20} className="text-primary" />
          </div>
          <h3 className="font-body font-medium text-card-foreground">{title}</h3>
        </div>
        {trend && (
          <div className="w-16 h-8 bg-brand-surface rounded flex items-center justify-center">
            <div className="w-12 h-2 bg-primary/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${trend}%` }}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-2xl font-headline font-bold text-card-foreground">{value}</p>
        {change && (
          <div className="flex items-center space-x-1">
            <Icon name={getChangeIcon()} size={16} className={getChangeColor()} />
            <span className={`text-sm font-body ${getChangeColor()}`}>
              {change}
            </span>
            <span className="text-sm text-muted-foreground">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;