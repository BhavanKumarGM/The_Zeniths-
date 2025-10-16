import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FarmProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const farmData = {
    name: "Green Valley Organic Farm",
    owner: "John Martinez",
    location: "Sonoma County, California",
    established: "2018",
    size: "45 acres",
    certifications: ["USDA Organic", "Certified Naturally Grown"],
    specialties: ["Heirloom Tomatoes", "Organic Herbs", "Seasonal Vegetables"],
    avatar: "https://images.unsplash.com/photo-1489512827632-6e52aecf88bf",
    avatarAlt: "Professional headshot of Hispanic man with short beard wearing plaid shirt",
    coverImage: "https://images.unsplash.com/photo-1570814305167-c617713d5c43",
    coverImageAlt: "Aerial view of green organic farm with rows of vegetables and greenhouse structures",
    description: `Green Valley Organic Farm has been committed to sustainable agriculture practices since 2018. We specialize in growing premium heirloom tomatoes and fresh herbs using traditional organic methods combined with modern sustainable techniques.\n\nOur 45-acre farm is nestled in the heart of Sonoma County, where the Mediterranean climate provides perfect growing conditions for our diverse crop selection. We believe in building strong relationships with our community and providing the freshest, most nutritious produce possible.`,
    stats: {
      totalProducts: 24,
      activeOrders: 8,
      customerRating: 4.9,
      totalReviews: 127
    }
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    console.log('Profile saved');
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-organic overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={farmData?.coverImage}
          alt={farmData?.coverImageAlt}
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 right-4">
          <Button
            variant="secondary"
            size="sm"
            iconName="Camera"
            iconPosition="left"
            onClick={() => console.log('Change cover photo')}>

            Change Cover
          </Button>
        </div>
      </div>
      {/* Profile Header */}
      <div className="relative px-6 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6 -mt-16 relative z-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden shadow-organic">
              <Image
                src={farmData?.avatar}
                alt={farmData?.avatarAlt}
                className="w-full h-full object-cover" />

            </div>
            <button className="absolute bottom-2 right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-organic hover:shadow-conversion transition-all duration-300">
              <Icon name="Camera" size={16} className="text-primary-foreground" />
            </button>
          </div>

          <div className="flex-1 mt-4 sm:mt-0 sm:mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-headline font-bold text-card-foreground mb-1">
                  {farmData?.name}
                </h2>
                <p className="text-muted-foreground font-body mb-2">
                  Owned by {farmData?.owner} • Est. {farmData?.established}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground font-body">
                  <span className="flex items-center space-x-1">
                    <Icon name="MapPin" size={16} />
                    <span>{farmData?.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Maximize" size={16} />
                    <span>{farmData?.size}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <Button
                  variant={isEditing ? "default" : "outline"}
                  size="sm"
                  iconName={isEditing ? "Save" : "Edit2"}
                  iconPosition="left"
                  onClick={isEditing ? handleSaveProfile : handleEditProfile}>

                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Share2"
                  iconPosition="left"
                  onClick={() => console.log('Share profile')}>

                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 p-4 bg-brand-surface rounded-lg">
          <div className="text-center">
            <p className="text-2xl font-headline font-bold text-primary">{farmData?.stats?.totalProducts}</p>
            <p className="text-sm text-muted-foreground font-body">Products</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-headline font-bold text-accent">{farmData?.stats?.activeOrders}</p>
            <p className="text-sm text-muted-foreground font-body">Active Orders</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <p className="text-2xl font-headline font-bold text-success">{farmData?.stats?.customerRating}</p>
              <Icon name="Star" size={16} className="text-success fill-current" />
            </div>
            <p className="text-sm text-muted-foreground font-body">Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-headline font-bold text-card-foreground">{farmData?.stats?.totalReviews}</p>
            <p className="text-sm text-muted-foreground font-body">Reviews</p>
          </div>
        </div>

        {/* Farm Details */}
        <div className="mt-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="font-headline font-semibold text-card-foreground mb-3">About Our Farm</h3>
            <div className="prose prose-sm max-w-none">
              {farmData?.description?.split('\n\n')?.map((paragraph, index) =>
              <p key={index} className="text-muted-foreground font-body leading-relaxed mb-3">
                  {paragraph}
                </p>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-headline font-semibold text-card-foreground mb-3">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {farmData?.certifications?.map((cert, index) =>
              <span
                key={index}
                className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-body font-medium border border-success/20">

                  <Icon name="Award" size={14} className="inline mr-1" />
                  {cert}
                </span>
              )}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="font-headline font-semibold text-card-foreground mb-3">Farm Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {farmData?.specialties?.map((specialty, index) =>
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body font-medium border border-primary/20">

                  {specialty}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default FarmProfile;