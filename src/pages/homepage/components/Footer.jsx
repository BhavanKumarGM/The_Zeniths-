import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';


const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "For Buyers",
      links: [
        { name: "Discover Farms", path: "/buyer-discovery" },
        { name: "Farm Map", path: "/interactive-farm-map" },
        { name: "Seasonal Produce", path: "/seasonal-guide" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "Quality Promise", path: "/quality-promise" }
      ]
    },
    {
      title: "For Farmers",
      links: [
        { name: "Farmer Dashboard", path: "/farmer-dashboard" },
        { name: "Sell Your Produce", path: "/farmer-onboarding" },
        { name: "Success Stories", path: "/success-stories" },
        { name: "Farmer Resources", path: "/farmer-resources" },
        { name: "Pricing & Fees", path: "/pricing" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "About FarmLink", path: "/about" },
        { name: "Our Mission", path: "/mission" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Local Impact", path: "/impact" },
        { name: "Partner Farms", path: "/partners" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Contact Us", path: "/contact" },
        { name: "Safety Guidelines", path: "/safety" },
        { name: "Delivery Info", path: "/delivery" },
        { name: "Returns Policy", path: "/returns" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com/farmlink" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com/farmlink" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/farmlink" },
    { name: "YouTube", icon: "Youtube", url: "https://youtube.com/farmlink" }
  ];

  const certifications = [
    {
      name: "USDA Organic Partner",
      icon: "Shield",
      description: "Certified organic produce verification"
    },
    {
      name: "Local First Certified",
      icon: "MapPin",
      description: "Supporting local agriculture"
    },
    {
      name: "Sustainable Practices",
      icon: "Leaf",
      description: "Environmental responsibility commitment"
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-primary-foreground"
                >
                  <path 
                    d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M8 11l2 2 4-4" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold">FarmLink</h3>
                <p className="text-sm text-primary-foreground/80 font-body">
                  Fresh connections, fair prices
                </p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 font-body mb-6 leading-relaxed">
              Connecting local farmers with conscious consumers to build stronger communities, 
              support sustainable agriculture, and bring the freshest produce to your table.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-primary-foreground/70" />
                <span className="text-sm font-body">hello@farmlink.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-primary-foreground/70" />
                <span className="text-sm font-body">1-800-FARMLINK</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-primary-foreground/70" />
                <span className="text-sm font-body">Available nationwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks?.map((social) => (
                <button
                  key={social?.name}
                  onClick={() => handleSocialClick(social?.url)}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon name={social?.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h4 className="font-headline font-bold text-primary-foreground mb-4">
                {section?.title}
              </h4>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <button
                      onClick={() => handleNavigation(link?.path)}
                      className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors duration-200"
                    >
                      {link?.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="font-headline font-bold text-primary-foreground mb-6 text-center">
            Our Commitments
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications?.map((cert) => (
              <div 
                key={cert?.name}
                className="flex items-center space-x-3 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10"
              >
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={cert?.icon} size={20} />
                </div>
                <div>
                  <div className="font-body font-semibold text-primary-foreground text-sm">
                    {cert?.name}
                  </div>
                  <div className="text-xs text-primary-foreground/70 font-body">
                    {cert?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/70 font-body">
              © {currentYear} FarmLink. All rights reserved. Made with ❤️ for local communities.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <button 
                onClick={() => handleNavigation('/privacy')}
                className="text-primary-foreground/70 hover:text-primary-foreground font-body transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation('/terms')}
                className="text-primary-foreground/70 hover:text-primary-foreground font-body transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleNavigation('/cookies')}
                className="text-primary-foreground/70 hover:text-primary-foreground font-body transition-colors duration-200"
              >
                Cookie Policy
              </button>
              <button 
                onClick={() => handleNavigation('/accessibility')}
                className="text-primary-foreground/70 hover:text-primary-foreground font-body transition-colors duration-200"
              >
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;