import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedFarmers = () => {
  const navigate = useNavigate();

  const featuredFarmers = [
  {
    id: 1,
    name: "Sarah Johnson",
    farmName: "Sunrise Organic Farm",
    location: "Millbrook Valley, NY",
    image: "https://images.unsplash.com/photo-1614370108097-84a5defe9f13",
    alt: "Smiling woman farmer in denim overalls and straw hat standing in tomato greenhouse with morning sunlight",
    specialty: "Organic Vegetables",
    experience: "15 years",
    rating: 4.9,
    reviewCount: 127,
    badges: ["Organic Certified", "Sustainable Practices"],
    story: "Growing the freshest organic vegetables using traditional methods passed down through three generations. Our commitment to soil health and sustainable farming ensures the best produce for your family.",
    products: ["Heirloom Tomatoes", "Fresh Herbs", "Seasonal Greens"],
    distance: "2.3 miles away"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    farmName: "Heritage Fruit Orchards",
    location: "Pine Ridge, CA",
    image: "https://images.unsplash.com/photo-1600917006260-1523b25beb17",
    alt: "Hispanic man in plaid shirt and baseball cap holding wooden crate of fresh apples in sunny orchard",
    specialty: "Stone Fruits & Apples",
    experience: "22 years",
    rating: 4.8,
    reviewCount: 89,
    badges: ["Family Farm", "IPM Certified"],
    story: "Our family has been growing premium stone fruits and heritage apples for over two decades. We use integrated pest management to ensure healthy, flavorful fruit while protecting the environment.",
    products: ["Peaches", "Apricots", "Heritage Apples"],
    distance: "4.7 miles away"
  },
  {
    id: 3,
    name: "Emma Thompson",
    farmName: "Wildflower Meadow Farm",
    location: "Green Valley, OR",
    image: "https://images.unsplash.com/photo-1672436769897-fe150f8a655a",
    alt: "Young woman with braided hair in earth-tone clothing kneeling in herb garden with basket of fresh herbs",
    specialty: "Herbs & Flowers",
    experience: "8 years",
    rating: 5.0,
    reviewCount: 156,
    badges: ["Biodynamic", "Pollinator Friendly"],
    story: "Specializing in culinary herbs and edible flowers grown using biodynamic principles. Our farm is a haven for pollinators and produces the most aromatic and flavorful herbs in the region.",
    products: ["Culinary Herbs", "Edible Flowers", "Medicinal Plants"],
    distance: "1.8 miles away"
  }];


  const handleViewProfile = (farmerId) => {
    navigate(`/farmer-profile/${farmerId}`);
  };

  const handleViewAllFarmers = () => {
    navigate('/buyer-discovery');
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Featured Farmers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Meet Your Local Growers
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Get to know the passionate farmers in your area who are dedicated to bringing you the freshest, 
            highest-quality produce while caring for the land.
          </p>
        </div>

        {/* Farmers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredFarmers?.map((farmer) =>
          <div
            key={farmer?.id}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-organic hover:shadow-conversion transition-all duration-300 timing-organic group">

              {/* Farmer Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                src={farmer?.image}
                alt={farmer?.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 timing-organic" />

                
                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {farmer?.badges?.map((badge, index) =>
                <span
                  key={index}
                  className="bg-success/90 text-white text-xs font-body font-medium px-2 py-1 rounded-full">

                      {badge}
                    </span>
                )}
                </div>

                {/* Distance Badge */}
                <div className="absolute top-4 right-4 bg-background/90 text-foreground text-xs font-body font-medium px-2 py-1 rounded-full flex items-center space-x-1">
                  <Icon name="MapPin" size={12} />
                  <span>{farmer?.distance}</span>
                </div>
              </div>

              {/* Farmer Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-headline font-bold text-primary mb-1">
                    {farmer?.name}
                  </h3>
                  <p className="text-accent font-body font-semibold mb-2">
                    {farmer?.farmName}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground font-body">
                    <Icon name="MapPin" size={14} />
                    <span>{farmer?.location}</span>
                  </div>
                </div>

                {/* Rating & Experience */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-warning fill-current" />
                      <span className="font-body font-semibold text-sm">{farmer?.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-body">
                      ({farmer?.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground font-body">
                    {farmer?.experience} experience
                  </div>
                </div>

                {/* Specialty */}
                <div className="mb-4">
                  <div className="text-sm font-body font-semibold text-foreground mb-2">
                    Specialty: {farmer?.specialty}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {farmer?.products?.slice(0, 3)?.map((product, index) =>
                  <span
                    key={index}
                    className="bg-brand-surface text-primary text-xs font-body px-2 py-1 rounded-md">

                        {product}
                      </span>
                  )}
                  </div>
                </div>

                {/* Story Preview */}
                <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-3">
                  {farmer?.story}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                  variant="default"
                  size="sm"
                  className="flex-1 font-body"
                  onClick={() => handleViewProfile(farmer?.id)}
                  iconName="User"
                  iconPosition="left">

                    View Profile
                  </Button>
                  <Button
                  variant="outline"
                  size="sm"
                  className="font-body"
                  onClick={() => navigate('/communication-center')}
                  iconName="MessageCircle">

                    Message
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="font-body"
            onClick={handleViewAllFarmers}
            iconName="ArrowRight"
            iconPosition="right">

            Discover All Local Farmers
          </Button>
        </div>
      </div>
    </section>);

};

export default FeaturedFarmers;