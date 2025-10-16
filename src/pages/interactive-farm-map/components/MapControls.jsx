import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MapControls = ({ 
  onZoomIn, 
  onZoomOut, 
  onCurrentLocation, 
  onToggleView, 
  viewMode,
  isLocating 
}) => {
  return (
    <div className="fixed bottom-6 right-4 lg:right-6 z-30 flex flex-col space-y-2">
      {/* View Toggle */}
      <Button
        variant="default"
        size="sm"
        onClick={onToggleView}
        className="bg-background border border-border shadow-organic hover:shadow-conversion"
        iconName={viewMode === 'satellite' ? 'Map' : 'Satellite'}
      >
        <span className="hidden sm:inline ml-2">
          {viewMode === 'satellite' ? 'Map' : 'Satellite'}
        </span>
      </Button>

      {/* Zoom Controls */}
      <div className="bg-background border border-border rounded-lg shadow-organic overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={onZoomIn}
          className="w-10 h-10 rounded-none border-b border-border"
          iconName="Plus"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={onZoomOut}
          className="w-10 h-10 rounded-none"
          iconName="Minus"
        />
      </div>

      {/* Current Location */}
      <Button
        variant="default"
        size="sm"
        onClick={onCurrentLocation}
        disabled={isLocating}
        className="bg-background border border-border shadow-organic hover:shadow-conversion"
        iconName={isLocating ? "Loader2" : "Navigation"}
      >
        <span className="hidden sm:inline ml-2">
          {isLocating ? 'Locating...' : 'My Location'}
        </span>
        {isLocating && (
          <Icon name="Loader2" size={16} className="animate-spin sm:hidden" />
        )}
      </Button>
    </div>
  );
};

export default MapControls;