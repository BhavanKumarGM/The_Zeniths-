import React from 'react';
import Icon from '../../../components/AppIcon';

const SeasonalAvailability = ({ availability }) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const seasons = {
    spring: { name: 'Spring', color: 'bg-success', months: [2, 3, 4] },
    summer: { name: 'Summer', color: 'bg-warning', months: [5, 6, 7] },
    fall: { name: 'Fall', color: 'bg-accent', months: [8, 9, 10] },
    winter: { name: 'Winter', color: 'bg-primary', months: [11, 0, 1] }
  };

  const getCurrentMonth = () => new Date()?.getMonth();
  const currentMonth = getCurrentMonth();

  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-organic">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Calendar" size={20} className="text-primary" />
        <h3 className="text-lg font-headline font-semibold text-foreground">
          Seasonal Availability
        </h3>
      </div>
      {/* Current Status */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${
            availability?.currentlyAvailable ? 'bg-success' : 'bg-error'
          }`}></div>
          <span className="text-sm font-body text-foreground">
            {availability?.currentlyAvailable ? 'Currently in season' : 'Out of season'}
          </span>
        </div>
        {availability?.nextAvailable && (
          <p className="text-sm text-muted-foreground font-body">
            Next available: {availability?.nextAvailable}
          </p>
        )}
      </div>
      {/* Monthly Calendar */}
      <div className="space-y-4">
        <h4 className="text-sm font-headline font-medium text-foreground">
          Availability Calendar
        </h4>
        
        <div className="grid grid-cols-6 gap-2">
          {months?.map((month, index) => {
            const isAvailable = availability?.availableMonths?.includes(index);
            const isCurrent = index === currentMonth;
            
            return (
              <div
                key={month}
                className={`relative p-3 rounded-lg text-center text-sm font-body transition-all duration-200 ${
                  isAvailable
                    ? 'bg-success/10 text-success border border-success/20' :'bg-muted text-muted-foreground border border-border'
                } ${
                  isCurrent ? 'ring-2 ring-primary' : ''
                }`}
              >
                {month}
                {isCurrent && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Peak Season Info */}
      {availability?.peakSeason && (
        <div className="mt-6 p-4 bg-brand-surface rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Star" size={16} className="text-warning" />
            <span className="text-sm font-headline font-medium text-foreground">
              Peak Season
            </span>
          </div>
          <p className="text-sm font-body text-foreground">
            {availability?.peakSeason}
          </p>
        </div>
      )}
      {/* Quality Notes */}
      {availability?.qualityNotes && (
        <div className="mt-4 p-4 bg-natural-cream rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={16} className="text-primary" />
            <span className="text-sm font-headline font-medium text-foreground">
              Quality Notes
            </span>
          </div>
          <p className="text-sm font-body text-foreground">
            {availability?.qualityNotes}
          </p>
        </div>
      )}
    </div>
  );
};

export default SeasonalAvailability;