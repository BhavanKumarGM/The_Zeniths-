import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const DiscoveryFilters = ({ filters, onFiltersChange, onClearAll }) => {
  const [expandedSections, setExpandedSections] = useState({
    location: true,
    produce: true,
    farming: true,
    delivery: false,
    quality: false,
    sustainability: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev?.[section]
    }));
  };

  const updateFilter = (category, value, isChecked) => {
    onFiltersChange(prev => {
      const current = prev?.[category] || [];
      if (isChecked) {
        return { ...prev, [category]: [...current, value] };
      } else {
        return { ...prev, [category]: current?.filter(item => item !== value) };
      }
    });
  };

  const updateRangeFilter = (category, range) => {
    onFiltersChange(prev => ({ ...prev, [category]: range }));
  };

  const FilterSection = ({ title, section, icon, children }) => (
    <div className="border border-border rounded-lg">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <Icon name={icon} size={18} className="text-primary" />
          <h3 className="font-medium text-foreground">{title}</h3>
        </div>
        <Icon 
          name={expandedSections?.[section] ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-muted-foreground" 
        />
      </button>
      {expandedSections?.[section] && (
        <div className="px-4 pb-4 border-t border-border/50">
          {children}
        </div>
      )}
    </div>
  );

  const CheckboxFilter = ({ category, value, label, count }) => (
    <label className="flex items-center justify-between py-2 cursor-pointer hover:bg-muted/30 rounded px-2">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={filters?.[category]?.includes(value) || false}
          onChange={(e) => updateFilter(category, value, e?.target?.checked)}
          className="rounded border-border text-primary focus:ring-primary"
        />
        <span className="text-sm text-foreground">{label}</span>
      </div>
      {count && (
        <span className="text-xs text-muted-foreground">({count})</span>
      )}
    </label>
  );

  const activeFilterCount = Object.values(filters)?.reduce((total, filterArray) => {
    if (Array.isArray(filterArray)) return total + filterArray?.length;
    return total;
  }, 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        {activeFilterCount > 0 && (
          <Button
            onClick={onClearAll}
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary/80"
          >
            Clear All ({activeFilterCount})
          </Button>
        )}
      </div>
      {/* Location & Distance */}
      <FilterSection title="Location" section="location" icon="MapPin">
        <div className="space-y-4 pt-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Distance Radius
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="1"
                max="100"
                value={filters?.location?.radius || 25}
                onChange={(e) => updateRangeFilter('location', {
                  ...filters?.location,
                  radius: parseInt(e?.target?.value)
                })}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-muted-foreground w-16">
                {filters?.location?.radius || 25} miles
              </span>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground">
            {filters?.location?.center ? 
              '📍 Using your location' : '📍 Enable location for accurate results'
            }
          </div>
        </div>
      </FilterSection>
      {/* Price Range */}
      <FilterSection title="Price Range" section="price" icon="DollarSign">
        <div className="space-y-4 pt-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Budget per order
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">$</span>
              <input
                type="range"
                min="0"
                max="500"
                step="25"
                value={filters?.priceRange?.max || 500}
                onChange={(e) => updateRangeFilter('priceRange', {
                  min: 0,
                  max: parseInt(e?.target?.value)
                })}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-muted-foreground w-16">
                ${filters?.priceRange?.max || 500}
              </span>
            </div>
          </div>
        </div>
      </FilterSection>
      {/* Produce Types */}
      <FilterSection title="Produce Types" section="produce" icon="Apple">
        <div className="space-y-1 pt-4">
          <CheckboxFilter category="produceTypes" value="vegetables" label="Vegetables" count={12} />
          <CheckboxFilter category="produceTypes" value="fruits" label="Fruits" count={8} />
          <CheckboxFilter category="produceTypes" value="herbs" label="Herbs" count={6} />
          <CheckboxFilter category="produceTypes" value="grains" label="Grains" count={4} />
          <CheckboxFilter category="produceTypes" value="meat" label="Meat" count={5} />
          <CheckboxFilter category="produceTypes" value="dairy" label="Dairy" count={3} />
          <CheckboxFilter category="produceTypes" value="flowers" label="Flowers" count={2} />
        </div>
      </FilterSection>
      {/* Farming Practices */}
      <FilterSection title="Farming Practices" section="farming" icon="Leaf">
        <div className="space-y-1 pt-4">
          <CheckboxFilter category="farmingPractices" value="organic" label="Organic" count={15} />
          <CheckboxFilter category="farmingPractices" value="biodynamic" label="Biodynamic" count={4} />
          <CheckboxFilter category="farmingPractices" value="sustainable" label="Sustainable" count={8} />
          <CheckboxFilter category="farmingPractices" value="regenerative" label="Regenerative" count={3} />
          <CheckboxFilter category="farmingPractices" value="conventional" label="Conventional" count={6} />
          <CheckboxFilter category="farmingPractices" value="hydroponic" label="Hydroponic" count={2} />
        </div>
      </FilterSection>
      {/* Delivery Options */}
      <FilterSection title="Delivery Options" section="delivery" icon="Truck">
        <div className="space-y-1 pt-4">
          <CheckboxFilter category="deliveryOptions" value="home_delivery" label="Home Delivery" count={18} />
          <CheckboxFilter category="deliveryOptions" value="farm_pickup" label="Farm Pickup" count={22} />
          <CheckboxFilter category="deliveryOptions" value="market_stand" label="Market Stand" count={14} />
          <CheckboxFilter category="deliveryOptions" value="csa" label="CSA Boxes" count={9} />
          <CheckboxFilter category="deliveryOptions" value="restaurant_supply" label="Restaurant Supply" count={5} />
        </div>
      </FilterSection>
      {/* Quality & Availability */}
      <FilterSection title="Quality & Availability" section="quality" icon="Star">
        <div className="space-y-1 pt-4">
          <CheckboxFilter category="availability" value="open_now" label="Open Now" count={12} />
          <CheckboxFilter category="availability" value="accepting_orders" label="Accepting Orders" count={18} />
          <CheckboxFilter category="availability" value="delivery_today" label="Same Day Delivery" count={6} />
          
          <div className="pt-3 border-t border-border/50">
            <div className="text-sm font-medium text-foreground mb-2">Minimum Rating</div>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5]?.map(rating => (
                <button
                  key={rating}
                  onClick={() => updateRangeFilter('minRating', rating)}
                  className={`flex items-center space-x-1 px-2 py-1 rounded text-xs ${
                    (filters?.minRating || 0) >= rating ? 'bg-yellow-100 text-yellow-800' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <Icon name="Star" size={12} />
                  <span>{rating}+</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </FilterSection>
      {/* Sustainability */}
      <FilterSection title="Sustainability" section="sustainability" icon="Recycle">
        <div className="space-y-1 pt-4">
          <CheckboxFilter category="certifications" value="usda_organic" label="USDA Organic" count={12} />
          <CheckboxFilter category="certifications" value="non_gmo" label="Non-GMO" count={8} />
          <CheckboxFilter category="certifications" value="fair_trade" label="Fair Trade" count={3} />
          <CheckboxFilter category="certifications" value="carbon_neutral" label="Carbon Neutral" count={2} />
          
          <div className="pt-3 border-t border-border/50">
            <div className="text-sm font-medium text-foreground mb-2">
              Sustainability Score
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={filters?.sustainabilityScore || 0}
                onChange={(e) => updateRangeFilter('sustainabilityScore', parseInt(e?.target?.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-muted-foreground w-12">
                {filters?.sustainabilityScore || 0}+
              </span>
            </div>
          </div>
        </div>
      </FilterSection>
      {/* Apply Filters Button (Mobile) */}
      <div className="lg:hidden pt-4">
        <Button fullWidth>
          Apply Filters ({activeFilterCount})
        </Button>
      </div>
    </div>
  );
};

export default DiscoveryFilters;