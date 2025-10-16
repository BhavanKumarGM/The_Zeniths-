import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const MapFilters = ({ filters, onFiltersChange, isOpen, onToggle }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const filterCategories = [
    {
      id: 'farmType',
      label: 'Farm Type',
      options: [
        { value: 'organic', label: 'Certified Organic', count: 24 },
        { value: 'sustainable', label: 'Sustainable Practices', count: 18 },
        { value: 'conventional', label: 'Conventional', count: 32 },
        { value: 'biodynamic', label: 'Biodynamic', count: 8 }
      ]
    },
    {
      id: 'deliveryOptions',
      label: 'Delivery Options',
      options: [
        { value: 'farmPickup', label: 'Farm Pickup', count: 45 },
        { value: 'homeDelivery', label: 'Home Delivery', count: 28 },
        { value: 'marketStand', label: 'Farmers Market', count: 22 },
        { value: 'csa', label: 'CSA Program', count: 15 }
      ]
    },
    {
      id: 'produceTypes',
      label: 'Produce Available',
      options: [
        { value: 'vegetables', label: 'Fresh Vegetables', count: 38 },
        { value: 'fruits', label: 'Seasonal Fruits', count: 29 },
        { value: 'herbs', label: 'Herbs & Spices', count: 21 },
        { value: 'grains', label: 'Grains & Legumes', count: 12 },
        { value: 'dairy', label: 'Dairy Products', count: 16 },
        { value: 'meat', label: 'Pasture-Raised Meat', count: 9 }
      ]
    },
    {
      id: 'availability',
      label: 'Availability',
      options: [
        { value: 'openNow', label: 'Open Now', count: 18 },
        { value: 'acceptingOrders', label: 'Accepting Orders', count: 34 },
        { value: 'seasonalOnly', label: 'Seasonal Only', count: 12 }
      ]
    }
  ];

  const handleFilterChange = (categoryId, optionValue, checked) => {
    const updatedFilters = { ...localFilters };
    
    if (!updatedFilters?.[categoryId]) {
      updatedFilters[categoryId] = [];
    }
    
    if (checked) {
      updatedFilters[categoryId] = [...updatedFilters?.[categoryId], optionValue];
    } else {
      updatedFilters[categoryId] = updatedFilters?.[categoryId]?.filter(item => item !== optionValue);
    }
    
    setLocalFilters(updatedFilters);
  };

  const applyFilters = () => {
    onFiltersChange(localFilters);
    onToggle();
  };

  const clearAllFilters = () => {
    const clearedFilters = {};
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(localFilters)?.reduce((count, filterArray) => {
      return count + (Array.isArray(filterArray) ? filterArray?.length : 0);
    }, 0);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden fixed top-20 left-4 z-40">
        <Button
          variant="default"
          size="sm"
          onClick={onToggle}
          className="bg-background border border-border shadow-organic"
          iconName="Filter"
          iconPosition="left"
        >
          Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`
        fixed lg:relative top-0 left-0 h-full lg:h-auto w-80 lg:w-72 
        bg-background border-r lg:border border-border shadow-organic lg:shadow-none
        transform transition-transform duration-300 timing-organic z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={20} className="text-primary" />
              <h2 className="font-headline font-semibold text-lg text-foreground">
                Filter Farms
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              {getActiveFilterCount() > 0 && (
                <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                  {getActiveFilterCount()}
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="lg:hidden"
                iconName="X"
              />
            </div>
          </div>
          
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="mt-2 text-muted-foreground hover:text-foreground"
            >
              Clear all filters
            </Button>
          )}
        </div>

        {/* Filter Categories */}
        <div className="p-4 lg:p-6 space-y-6">
          {filterCategories?.map((category) => (
            <div key={category?.id} className="space-y-3">
              <h3 className="font-headline font-medium text-foreground">
                {category?.label}
              </h3>
              <div className="space-y-2">
                {category?.options?.map((option) => (
                  <div key={option?.value} className="flex items-center justify-between">
                    <Checkbox
                      label={option?.label}
                      checked={localFilters?.[category?.id]?.includes(option?.value) || false}
                      onChange={(e) => handleFilterChange(category?.id, option?.value, e?.target?.checked)}
                      className="flex-1"
                    />
                    <span className="text-xs text-muted-foreground ml-2">
                      {option?.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Apply Button - Mobile */}
        <div className="lg:hidden sticky bottom-0 bg-background border-t border-border p-4">
          <Button
            variant="default"
            fullWidth
            onClick={applyFilters}
            className="cta-conversion"
          >
            Apply Filters
          </Button>
        </div>
      </div>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default MapFilters;