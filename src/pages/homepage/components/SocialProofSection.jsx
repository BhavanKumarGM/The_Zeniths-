import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialProofSection = () => {
  const navigate = useNavigate();

  const testimonials = [
  {
    id: 1,
    name: "Jennifer Walsh",
    role: "Home Chef & Mother",
    avatar: "https://images.unsplash.com/photo-1734006827073-6ab36c31daca",
    avatarAlt: "Professional headshot of smiling woman with brown hair in kitchen apron holding fresh vegetables",
    rating: 5,
    content: "FarmLink has completely transformed how we eat as a family. The tomatoes from Sarah\'s farm taste like they did when I was a child - full of flavor and picked at perfect ripeness. My kids actually ask for more vegetables now!",
    farmConnection: "Connected with 3 local farms",
    timeUsing: "8 months"
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Restaurant Owner",
    avatar: "https://images.unsplash.com/photo-1611774759371-8e68d29c1344",
    avatarAlt: "Professional chef in white uniform and black apron standing in modern restaurant kitchen",
    rating: 5,
    content: "As a chef, ingredient quality is everything. FarmLink connects me directly with farmers who share my passion for excellence. The herbs from Emma's farm have elevated every dish on our menu.",
    farmConnection: "Partners with 5 local farms",
    timeUsing: "1 year"
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Busy Professional",
    avatar: "https://images.unsplash.com/photo-1675782372764-de53391f2a90",
    avatarAlt: "Asian woman in business attire smiling while holding reusable shopping bag with fresh produce",
    rating: 5,
    content: "I love knowing exactly where my food comes from and supporting local farmers. The convenience of ordering fresh produce and having it delivered saves me so much time, and the quality is unmatched.",
    farmConnection: "Regular customer of 2 farms",
    timeUsing: "6 months"
  }];


  const platformStats = [
  {
    icon: "Users",
    value: "5,000+",
    label: "Happy Customers",
    description: "Families enjoying fresh produce"
  },
  {
    icon: "Truck",
    value: "25,000+",
    label: "Successful Deliveries",
    description: "Fresh produce delivered safely"
  },
  {
    icon: "MapPin",
    value: "150+",
    label: "Partner Farms",
    description: "Local farms in our network"
  },
  {
    icon: "DollarSign",
    value: "$2.5M+",
    label: "Farmer Revenue",
    description: "Direct income to local farmers"
  }];


  const successStories = [
  {
    id: 1,
    title: "From Struggling to Thriving",
    farmer: "Michael Rodriguez",
    farmName: "Heritage Fruit Orchards",
    image: "https://images.unsplash.com/photo-1642889366268-1fd09fa3c5ba",
    alt: "Farmer Michael Rodriguez standing proudly in his orchard with baskets of fresh fruit during golden hour",
    story: "Before FarmLink, I was selling to wholesalers for pennies on the dollar. Now I connect directly with customers who appreciate quality fruit, and my income has increased by 300%.",
    impact: "300% income increase",
    timeframe: "Within 18 months"
  },
  {
    id: 2,
    title: "Building Community Connections",
    farmer: "Emma Thompson",
    farmName: "Wildflower Meadow Farm",
    image: "https://images.unsplash.com/photo-1585853352198-d42a39a18c0b",
    alt: "Young farmer Emma Thompson teaching children about herbs in her garden with parents watching nearby",
    story: "FarmLink helped me build relationships with families in my community. I now host farm visits and educational workshops, creating lasting connections beyond just selling produce.",
    impact: "50+ regular customers",
    timeframe: "First year on platform"
  }];


  const handleJoinPlatform = () => {
    navigate('/register');
  };

  const handleViewAllStories = () => {
    navigate('/success-stories');
  };

  return (
    <section className="py-16 bg-brand-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
            <Icon name="Heart" size={16} />
            <span>Community Impact</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Real Stories, Real Impact
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            See how FarmLink is transforming lives by connecting communities with fresh, 
            local produce and supporting sustainable farming practices.
          </p>
        </div>

        {/* Platform Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformStats?.map((stat, index) =>
          <div
            key={index}
            className="text-center p-6 bg-background border border-border rounded-xl shadow-organic hover:shadow-conversion transition-all duration-300 timing-organic">

              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-headline font-bold text-primary mb-2">
                {stat?.value}
              </div>
              <div className="font-body font-semibold text-foreground mb-1">
                {stat?.label}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                {stat?.description}
              </div>
            </div>
          )}
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-headline font-bold text-primary text-center mb-8">
            What Our Community Says
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) =>
            <div
              key={testimonial?.id}
              className="bg-background border border-border rounded-xl p-6 shadow-organic hover:shadow-conversion transition-all duration-300 timing-organic">

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                )}
                </div>

                {/* Content */}
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  "{testimonial?.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-12 h-12 rounded-full object-cover" />

                  <div>
                    <div className="font-body font-semibold text-foreground">
                      {testimonial?.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-body">
                      {testimonial?.role}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground font-body pt-4 border-t border-border">
                  <span>{testimonial?.farmConnection}</span>
                  <span>{testimonial?.timeUsing}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-headline font-bold text-primary text-center mb-8">
            Farmer Success Stories
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {successStories?.map((story) =>
            <div
              key={story?.id}
              className="bg-background border border-border rounded-xl overflow-hidden shadow-organic hover:shadow-conversion transition-all duration-300 timing-organic">

                <div className="h-48 overflow-hidden">
                  <Image
                  src={story?.image}
                  alt={story?.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 timing-organic" />

                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-headline font-bold text-primary mb-2">
                    {story?.title}
                  </h4>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="User" size={16} className="text-muted-foreground" />
                    <span className="font-body font-semibold text-foreground">
                      {story?.farmer}
                    </span>
                    <span className="text-muted-foreground font-body">•</span>
                    <span className="text-muted-foreground font-body">
                      {story?.farmName}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                    {story?.story}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm">
                      <div className="font-body font-semibold text-success">
                        {story?.impact}
                      </div>
                      <div className="text-muted-foreground font-body">
                        {story?.timeframe}
                      </div>
                    </div>
                    <Button
                    variant="outline"
                    size="sm"
                    className="font-body"
                    onClick={() => navigate(`/farmer-profile/${story?.id}`)}>

                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background border border-border rounded-xl p-8 shadow-organic">
          <h3 className="text-2xl font-headline font-bold text-primary mb-4">
            Ready to Join Our Growing Community?
          </h3>
          <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
            Whether you're a farmer looking to connect with customers or a consumer seeking fresh, 
            local produce, FarmLink is here to help you grow meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="cta-conversion font-body font-semibold"
              onClick={handleJoinPlatform}
              iconName="UserPlus"
              iconPosition="left">

              Join FarmLink Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-body"
              onClick={handleViewAllStories}
              iconName="BookOpen"
              iconPosition="left">

              Read All Stories
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default SocialProofSection;