import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SeasonalBanner = ({ season, highlights, onExplore }) => {
  const seasonConfig = {
    winter: {
      title: 'Winter Harvest',
      subtitle: 'Discover hearty root vegetables, preserved goods, and greenhouse greens',
      gradient: 'from-blue-600 to-indigo-800',
      textColor: 'text-white',
      icon: 'Snowflake',
      features: ['Root Vegetables', 'Stored Grains', 'Greenhouse Greens', 'Preserved Foods'],
      emoji: '❄️'
    },
    spring: {
      title: 'Spring Awakening',
      subtitle: 'Fresh greens, early herbs, and the season\'s first tender vegetables',
      gradient: 'from-green-500 to-emerald-700',
      textColor: 'text-white',
      icon: 'Sprout',
      features: ['Leafy Greens', 'Fresh Herbs', 'Spring Onions', 'Tender Vegetables'],
      emoji: '🌱'
    },
    summer: {
      title: 'Summer Abundance',
      subtitle: 'Peak season fruits, fresh vegetables, and vibrant farmers markets',
      gradient: 'from-yellow-500 to-orange-600',
      textColor: 'text-white',
      icon: 'Sun',
      features: ['Stone Fruits', 'Summer Vegetables', 'Berries', 'Fresh Flowers'],
      emoji: '☀️'
    },
    fall: {
      title: 'Autumn Harvest',
      subtitle: 'Orchard fruits, winter squash, and the year\'s final bounty',
      gradient: 'from-orange-600 to-red-700',
      textColor: 'text-white',
      icon: 'Leaf',
      features: ['Apples & Pears', 'Winter Squash', 'Late Harvest', 'Preserves'],
      emoji: '🍂'
    }
  };

  const config = seasonConfig?.[season] || seasonConfig?.fall;
  const currentMonth = new Date()?.toLocaleDateString('en-US', { month: 'long' });

  return (
    <div className={`
      relative overflow-hidden bg-gradient-to-r ${config?.gradient} 
      shadow-xl border-b-4 border-white/20
    `}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
              <span className="text-2xl">{config?.emoji}</span>
              <Icon name={config?.icon} size={24} className={config?.textColor} />
              <span className={`text-sm font-medium ${config?.textColor} opacity-90`}>
                {currentMonth} • {season?.charAt(0)?.toUpperCase() + season?.slice(1)}
              </span>
            </div>
            
            <h1 className={`text-3xl lg:text-4xl font-bold ${config?.textColor} mb-2`}>
              {config?.title}
            </h1>
            
            <p className={`text-lg ${config?.textColor} opacity-90 mb-4 max-w-2xl`}>
              {config?.subtitle}
            </p>

            {/* Seasonal Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {config?.features?.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={onExplore}
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 font-semibold"
                iconName="Search"
              >
                Explore {season} produce
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Calendar"
              >
                Seasonal Guide
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Farms */}
          {highlights?.length > 0 && (
            <div className="lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className={`text-lg font-semibold ${config?.textColor} mb-4 flex items-center`}>
                  <Icon name="Star" size={18} className="mr-2" />
                  Featured This Season
                </h3>
                
                <div className="space-y-3">
                  {highlights?.slice(0, 3)?.map((farm) => (
                    <div key={farm?.id} className="flex items-center space-x-3">
                      <img
                        src={farm?.image}
                        alt={farm?.alt}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium ${config?.textColor} truncate`}>
                          {farm?.name}
                        </p>
                        <p className={`text-sm ${config?.textColor} opacity-80 truncate capitalize`}>
                          {farm?.seasonalSpecialty?.replace('_', ' ')}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} className="text-yellow-300" />
                        <span className={`text-sm font-medium ${config?.textColor}`}>
                          {farm?.rating}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <button
                    onClick={onExplore}
                    className={`text-sm ${config?.textColor} hover:opacity-80 font-medium flex items-center`}
                  >
                    See all seasonal farms
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </div>
  );
};

export default SeasonalBanner;