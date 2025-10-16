import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import FarmerProfile from './components/FarmerProfile';
import SeasonalAvailability from './components/SeasonalAvailability';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Mock product data
  const productData = {
    id: "prod-001",
    name: "Heritage Heirloom Tomatoes",
    variety: "Cherokee Purple & Brandywine Mix",
    price: 8.50,
    originalPrice: 10.00,
    unit: "lb",
    minOrder: 2,
    availability: "available",
    stockCount: 45,
    isOrganic: true,
    description: `Hand-picked heritage heirloom tomatoes grown using traditional methods passed down through three generations. These varieties are prized for their exceptional flavor, unique colors, and rich history. Each tomato is carefully selected at peak ripeness to ensure maximum flavor and nutritional value.`,
    farmingPractices: [
    "100% Organic Certified",
    "No Synthetic Pesticides",
    "Heirloom Seeds Only",
    "Composted Soil",
    "Hand-Harvested",
    "Sustainable Water Management"],

    nutritionalHighlights: [
    "High in Lycopene",
    "Rich in Vitamin C",
    "Good Source of Potassium",
    "Contains Folate",
    "Antioxidant Properties",
    "Low Calorie"],

    storageTips: "Store at room temperature until fully ripe, then refrigerate for up to 5 days. For best flavor, bring to room temperature before eating. Avoid storing in plastic bags as this can cause moisture buildup and spoilage."
  };

  const productImages = [
  {
    url: "https://images.unsplash.com/photo-1542814852-3e6a4e67d45f",
    alt: "Fresh heritage heirloom tomatoes in various colors including deep purple Cherokee Purple and pink Brandywine varieties arranged on rustic wooden surface"
  },
  {
    url: "https://images.unsplash.com/photo-1520549260519-afb5d320c2d7",
    alt: "Close-up view of ripe Cherokee Purple heirloom tomatoes showing their distinctive dark purple color and ribbed texture"
  },
  {
    url: "https://images.unsplash.com/photo-1635367845618-bfa4820d117c",
    alt: "Brandywine heirloom tomatoes with their characteristic pink-red color and large size displayed in wicker basket"
  },
  {
    url: "https://images.unsplash.com/photo-1503743167461-331608d0bb73",
    alt: "Farmer\'s hands holding freshly harvested heirloom tomatoes showing the natural variations in size and color"
  }];


  const farmerData = {
    id: "farmer-001",
    name: "Maria Rodriguez",
    farmName: "Sunset Valley Organic Farm",
    location: "Sonoma County, CA",
    yearsExperience: 15,
    rating: 4.8,
    reviewCount: 127,
    isVerified: true,
    avatar: "https://images.unsplash.com/photo-1704270207468-dce806d6f82c",
    avatarAlt: "Professional portrait of Hispanic woman farmer Maria Rodriguez with warm smile wearing denim work shirt and sun hat",
    bio: `Third-generation farmer specializing in heirloom varieties and sustainable growing practices. Maria has dedicated her life to preserving traditional seed varieties and sharing the incredible flavors of heritage produce with her community.`,
    certifications: [
    "USDA Organic Certified",
    "Certified Naturally Grown",
    "Sustainable Agriculture Certified"]

  };

  const seasonalAvailability = {
    currentlyAvailable: true,
    nextAvailable: null,
    availableMonths: [5, 6, 7, 8, 9], // June through October
    peakSeason: "July through September - Peak flavor and availability",
    qualityNotes: "Early season tomatoes may be smaller but intensely flavored. Late season varieties offer the best size and classic taste."
  };

  const customerReviews = [
  {
    id: "review-001",
    customerName: "Sarah Chen",
    customerAvatar: "https://images.unsplash.com/photo-1668049221607-1f2df20621cc",
    customerAvatarAlt: "Professional headshot of Asian woman with shoulder-length black hair and friendly smile",
    rating: 5,
    date: "2025-10-10",
    isVerifiedPurchase: true,
    isRepeatCustomer: true,
    comment: `Absolutely incredible tomatoes! The Cherokee Purple variety has such a unique, smoky flavor that you just can't find in grocery stores. Maria's farming practices really show in the quality - these tomatoes are bursting with flavor and have the perfect texture. Will definitely be ordering again!`,
    helpfulCount: 12,
    photos: [
    {
      url: "https://images.unsplash.com/photo-1633362709249-44d13f72a248",
      alt: "Customer photo showing sliced Cherokee Purple heirloom tomatoes on cutting board displaying their deep purple interior"
    }]

  },
  {
    id: "review-002",
    customerName: "Michael Thompson",
    customerAvatar: "https://images.unsplash.com/photo-1630257202782-ae7fbd64bd02",
    customerAvatarAlt: "Professional headshot of Caucasian man with brown hair and beard wearing casual button-up shirt",
    rating: 5,
    date: "2025-10-08",
    isVerifiedPurchase: true,
    isRepeatCustomer: false,
    comment: `First time ordering from Maria and I'm blown away! These heirloom tomatoes are exactly what I've been looking for. The Brandywine variety is perfect for my restaurant - customers keep asking where we source our tomatoes. The packaging was excellent and delivery was right on time.`,
    helpfulCount: 8,
    photos: []
  },
  {
    id: "review-003",
    customerName: "Jennifer Walsh",
    customerAvatar: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    customerAvatarAlt: "Professional headshot of Caucasian woman with blonde hair and warm smile wearing light blue blouse",
    rating: 4,
    date: "2025-10-05",
    isVerifiedPurchase: true,
    isRepeatCustomer: true,
    comment: `Great quality tomatoes with amazing flavor! Only giving 4 stars because some were a bit smaller than expected, but the taste more than makes up for it. Love supporting local farmers like Maria who care about sustainable practices.`,
    helpfulCount: 5,
    photos: [
    {
      url: "https://images.unsplash.com/photo-1542814852-3e6a4e67d45f",
      alt: "Customer photo showing various sized heirloom tomatoes arranged on kitchen counter"
    }]

  }];


  const relatedProducts = [
  {
    id: "prod-002",
    name: "Sweet Bell Peppers",
    variety: "Rainbow Mix",
    price: 6.75,
    unit: "lb",
    rating: 4.7,
    reviewCount: 89,
    availability: "available",
    isOrganic: true,
    image: "https://images.unsplash.com/photo-1700498346149-a6cbacb1a316",
    imageAlt: "Colorful organic bell peppers in red, yellow, and orange colors arranged in wooden crate"
  },
  {
    id: "prod-003",
    name: "Fresh Basil",
    variety: "Genovese",
    price: 4.25,
    unit: "bunch",
    rating: 4.9,
    reviewCount: 156,
    availability: "limited",
    isOrganic: true,
    image: "https://images.unsplash.com/photo-1628269429790-b1b6884def1b",
    imageAlt: "Fresh organic Genovese basil bunches with vibrant green leaves tied with natural twine"
  },
  {
    id: "prod-004",
    name: "Cucumber Medley",
    variety: "Persian & English",
    price: 5.50,
    unit: "lb",
    rating: 4.6,
    reviewCount: 73,
    availability: "available",
    isOrganic: true,
    discount: 15,
    image: "https://images.unsplash.com/photo-1610209306945-eab322908574",
    imageAlt: "Fresh organic cucumbers including Persian and English varieties displayed in farm basket"
  }];


  const handleAddToCart = (cartData) => {
    console.log('Adding to cart:', cartData);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleMessageFarmer = () => {
    window.location.href = '/communication-center';
  };

  const handleViewFarm = () => {
    window.location.href = '/interactive-farm-map';
  };

  const handleProductClick = (productId) => {
    console.log('Navigating to product:', productId);
    // In a real app, this would navigate to the product detail page
  };

  const handleBreadcrumbClick = (path) => {
    window.location.href = path;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground font-body">Loading product details...</p>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Success Message */}
      {showSuccessMessage &&
      <div className="fixed top-20 right-4 z-50 bg-success text-white px-6 py-3 rounded-lg shadow-organic animate-seasonal">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={20} />
            <span className="font-body">Added to cart successfully!</span>
          </div>
        </div>
      }
      <main className="pt-16">
        {/* Breadcrumb Navigation */}
        <div className="bg-brand-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm font-body">
              <button
                onClick={() => handleBreadcrumbClick('/homepage')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200">

                Home
              </button>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              <button
                onClick={() => handleBreadcrumbClick('/buyer-discovery')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200">

                Discover Farms
              </button>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              <span className="text-foreground font-medium">
                {productData?.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Product Detail Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Product Images */}
            <div>
              <ProductImageGallery
                images={productImages}
                productName={productData?.name} />

            </div>

            {/* Right Column - Product Info */}
            <div>
              <ProductInfo
                product={productData}
                onAddToCart={handleAddToCart} />

            </div>
          </div>

          {/* Additional Information Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Farmer Profile */}
            <div className="lg:col-span-2">
              <FarmerProfile
                farmer={farmerData}
                onMessageFarmer={handleMessageFarmer}
                onViewFarm={handleViewFarm} />

            </div>

            {/* Seasonal Availability */}
            <div>
              <SeasonalAvailability availability={seasonalAvailability} />
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mb-12">
            <CustomerReviews
              reviews={customerReviews}
              averageRating={4.8}
              totalReviews={127} />

          </div>

          {/* Related Products */}
          <div className="mb-12">
            <RelatedProducts
              products={relatedProducts}
              farmerName={farmerData?.name}
              onProductClick={handleProductClick} />

          </div>
        </div>
      </main>
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <Button
          variant="default"
          size="lg"
          className="cta-conversion shadow-conversion rounded-full w-14 h-14"
          iconName="ShoppingCart"
          onClick={() => {
            const purchaseSection = document.querySelector('[data-purchase-section]');
            if (purchaseSection) {
              purchaseSection?.scrollIntoView({ behavior: 'smooth' });
            }
          }} />

      </div>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-headline font-semibold">FarmLink</h3>
              </div>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
                Connecting communities with fresh, local produce through technology that grows relationships between farmers and consumers.
              </p>
              <p className="text-sm text-primary-foreground/60 font-body">
                © {new Date()?.getFullYear()} FarmLink. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body">
                <li><a href="/buyer-discovery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Discover Farms</a></li>
                <li><a href="/interactive-farm-map" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Farm Map</a></li>
                <li><a href="/farmer-dashboard" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Farmer Dashboard</a></li>
                <li><a href="/communication-center" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Messages</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-semibold mb-4">Support</h4>
              <ul className="space-y-2 font-body">
                <li><a href="/help" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Help Center</a></li>
                <li><a href="/support" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Contact Support</a></li>
                <li><a href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Terms of Service</a></li>
                <li><a href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>);

};

export default ProductDetail;