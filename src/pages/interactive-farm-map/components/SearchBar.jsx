import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, onLocationSelect, searchResults = [] }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  const mockSearchResults = [
    {
      id: 1,
      type: 'farm',
      name: "Green Valley Organic Farm",
      address: "1234 Farm Road, Greenville, CA 95947",
      distance: "2.3 miles",
      icon: 'MapPin'
    },
    {
      id: 2,
      type: 'location',
      name: "Downtown Farmers Market",
      address: "Main Street, Greenville, CA 95947",
      distance: "1.8 miles",
      icon: 'Store'
    },
    {
      id: 3,
      type: 'produce',
      name: "Organic Tomatoes",
      farms: "Available at 5 nearby farms",
      distance: "Within 5 miles",
      icon: 'Apple'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef?.current && !searchRef?.current?.contains(event?.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    setQuery(value);
    setShowResults(value?.length > 0);
    setSelectedIndex(-1);
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (!showResults) return;

    switch (e?.key) {
      case 'ArrowDown':
        e?.preventDefault();
        setSelectedIndex(prev => 
          prev < mockSearchResults?.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e?.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e?.preventDefault();
        if (selectedIndex >= 0) {
          handleResultSelect(mockSearchResults?.[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowResults(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleResultSelect = (result) => {
    setQuery(result?.name);
    setShowResults(false);
    setSelectedIndex(-1);
    onLocationSelect(result);
  };

  const clearSearch = () => {
    setQuery('');
    setShowResults(false);
    setSelectedIndex(-1);
    onSearch('');
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search farms, produce, or locations..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-10 bg-background border-border shadow-organic"
        />
        
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Icon name="Search" size={18} className="text-muted-foreground" />
        </div>
        
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-brand-surface rounded-full transition-colors duration-200"
          >
            <Icon name="X" size={16} className="text-muted-foreground" />
          </button>
        )}
      </div>
      {/* Search Results Dropdown */}
      {showResults && query && (
        <div 
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-organic max-h-80 overflow-y-auto z-50"
        >
          {mockSearchResults?.length > 0 ? (
            <div className="py-2">
              {mockSearchResults?.map((result, index) => (
                <button
                  key={result?.id}
                  onClick={() => handleResultSelect(result)}
                  className={`w-full px-4 py-3 text-left hover:bg-brand-surface transition-colors duration-200 ${
                    selectedIndex === index ? 'bg-brand-surface' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Icon 
                        name={result?.icon} 
                        size={16} 
                        className="text-primary" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground text-sm">
                        {result?.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {result?.address || result?.farms}
                      </div>
                      <div className="text-xs text-primary mt-1">
                        {result?.distance}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Icon 
                        name="ArrowUpRight" 
                        size={14} 
                        className="text-muted-foreground" 
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center">
              <Icon name="Search" size={24} className="text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                No results found for "{query}"
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Try searching for farm names, produce types, or locations
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;