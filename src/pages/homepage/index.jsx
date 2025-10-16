import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedFarmers from './components/FeaturedFarmers';
import SeasonalHighlights from './components/SeasonalHighlights';
import InteractiveMapPreview from './components/InteractiveMapPreview';
import SocialProofSection from './components/SocialProofSection';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'FarmLink - Fresh Connections, Fair Prices | Local Farm Marketplace';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 
        'Connect directly with local farmers for the freshest seasonal produce. FarmLink brings farm-to-table shopping to your community with verified organic farms, fair prices, and sustainable practices.'
      );
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Seasonal Carousel */}
        <HeroSection />
        
        {/* Featured Farmers Profiles */}
        <FeaturedFarmers />
        
        {/* Seasonal Product Highlights */}
        <SeasonalHighlights />
        
        {/* Interactive Map Preview */}
        <InteractiveMapPreview />
        
        {/* Social Proof & Success Stories */}
        <SocialProofSection />
        
        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;