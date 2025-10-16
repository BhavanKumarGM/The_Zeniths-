import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, User, ShoppingCart, LogOut } from 'lucide-react';
import Icon from '../AppIcon';
import Button from './Button';
import { useThemeStore, useLanguageStore, useAuthStore, useCartStore } from '../../store';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const { language, setLanguage } = useLanguageStore();
  const { user, userType, isAuthenticated, logout } = useAuthStore();
  const { getTotalItems } = useCartStore();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'te', name: 'తెలుగు' }
  ];

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    i18n.changeLanguage(langCode);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Discover Farms', path: '/buyer-discovery', icon: 'MapPin' },
    { name: 'Farm Map', path: '/interactive-farm-map', icon: 'Map' },
    { name: 'Messages', path: '/communication-center', icon: 'MessageCircle' },
    { name: 'Dashboard', path: '/farmer-dashboard', icon: 'BarChart3' }
  ];

  const moreMenuItems = [
    { name: 'Settings', path: '/settings', icon: 'Settings' },
    { name: 'Help Center', path: '/help', icon: 'HelpCircle' },
    { name: 'Support', path: '/support', icon: 'Phone' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleNavigation = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 timing-organic ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-organic border-b border-border' 
          : 'bg-background'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/homepage')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-organic group-hover:shadow-conversion transition-all duration-300 timing-organic">
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-seasonal-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-headline font-semibold text-primary group-hover:text-trust-builder transition-colors duration-300">
                  FarmLink
                </h1>
                <p className="text-xs text-muted-foreground font-body">
                  Fresh connections, fair prices
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 timing-organic ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-organic'
                    : 'text-foreground hover:bg-brand-surface hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </button>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium text-foreground hover:bg-brand-surface hover:text-primary transition-all duration-300 timing-organic">
                <Icon name="MoreHorizontal" size={18} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-organic opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 timing-organic">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <button
                      key={item?.path}
                      onClick={() => handleNavigation(item?.path)}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-left font-body text-sm text-popover-foreground hover:bg-brand-surface transition-colors duration-200"
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Cart Icon for Buyers */}
            {isAuthenticated && userType === 'buyer' && (
              <button className="relative p-2 text-foreground hover:text-primary transition-colors">
                <ShoppingCart size={20} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            )}

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-1 p-2 text-foreground hover:text-primary transition-colors">
                <Globe size={20} />
                <span className="text-sm">{languages.find(l => l.code === language)?.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`block w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors ${
                      language === lang.code ? 'bg-muted text-primary' : 'text-card-foreground'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User size={20} className="text-foreground" />
                  <span className="text-sm text-foreground">{user?.name || 'User'}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-foreground hover:text-error transition-colors"
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="font-body"
                >
                  {t('login')}
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  className="cta-conversion font-body font-semibold"
                  onClick={() => navigate('/register')}
                >
                  {t('register')}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-brand-surface transition-colors duration-200"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 timing-organic ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-4 bg-brand-surface border-t border-border">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg font-body font-medium transition-all duration-300 timing-organic ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-organic'
                      : 'text-foreground hover:bg-background hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </button>
              ))}
              
              <div className="pt-2 border-t border-border mt-4">
                {moreMenuItems?.map((item) => (
                  <button
                    key={item?.path}
                    onClick={() => handleNavigation(item?.path)}
                    className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg font-body text-sm text-foreground hover:bg-background hover:text-primary transition-all duration-300 timing-organic"
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </button>
                ))}
              </div>
            </nav>

            <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-border">
              <Button 
                variant="outline" 
                fullWidth
                onClick={() => handleNavigation('/login')}
                className="font-body"
              >
                Sign In
              </Button>
              <Button 
                variant="default" 
                fullWidth
                className="cta-conversion font-body font-semibold"
                onClick={() => handleNavigation('/register')}
              >
                Join FarmLink
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;