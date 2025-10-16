import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const subscriptionOptions = [
    {
      id: 'seasonal',
      label: 'Seasonal Produce Updates',
      description: 'Get notified when your favorite seasonal items are available',
      icon: 'Calendar'
    },
    {
      id: 'farmers',
      label: 'New Farmer Spotlights',
      description: 'Discover new farmers joining our community',
      icon: 'Users'
    },
    {
      id: 'recipes',
      label: 'Farm-to-Table Recipes',
      description: 'Weekly recipes featuring fresh, local ingredients',
      icon: 'ChefHat'
    },
    {
      id: 'tips',
      label: 'Farming & Growing Tips',
      description: 'Learn about sustainable farming and home gardening',
      icon: 'Sprout'
    }
  ];

  const handlePreferenceChange = (optionId) => {
    setPreferences(prev => 
      prev?.includes(optionId)
        ? prev?.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={32} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-headline font-bold text-primary-foreground mb-4">
              Welcome to the FarmLink Community!
            </h2>
            
            <p className="text-lg text-primary-foreground/90 font-body mb-6">
              Thank you for subscribing! You'll receive your first seasonal update within the next few days, 
              featuring the best produce available from local farms in your area.
            </p>
            
            <div className="bg-primary-foreground/10 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-primary-foreground/90 font-body text-sm">
                <Icon name="Mail" size={16} />
                <span>Confirmation sent to {email}</span>
              </div>
            </div>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="font-body"
              onClick={() => {
                setIsSubscribed(false);
                setEmail('');
                setPreferences([]);
              }}
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
              <Icon name="Mail" size={16} />
              <span>Stay Connected</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground mb-4">
              Get Fresh Updates from Local Farms
            </h2>
            
            <p className="text-lg text-primary-foreground/90 font-body max-w-2xl mx-auto">
              Join thousands of food lovers who receive weekly updates about seasonal produce, 
              new farmers, recipes, and sustainable farming tips delivered straight to their inbox.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Newsletter Benefits */}
            <div className="space-y-6">
              <h3 className="text-xl font-headline font-bold text-primary-foreground mb-4">
                What You'll Receive:
              </h3>
              
              <div className="space-y-4">
                {subscriptionOptions?.map((option) => (
                  <div 
                    key={option?.id}
                    className="flex items-start space-x-4 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10"
                  >
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name={option?.icon} size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-primary-foreground mb-1">
                        {option?.label}
                      </h4>
                      <p className="text-sm text-primary-foreground/80 font-body">
                        {option?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-primary-foreground/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-headline font-bold text-primary-foreground">
                      12,000+
                    </div>
                    <div className="text-sm text-primary-foreground/80 font-body">
                      Newsletter Subscribers
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-headline font-bold text-primary-foreground">
                      Weekly
                    </div>
                    <div className="text-sm text-primary-foreground/80 font-body">
                      Fresh Content
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="bg-background rounded-xl p-6 shadow-conversion">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    required
                    className="mb-4"
                  />
                </div>

                {/* Preference Selection */}
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-3">
                    What interests you most? (Optional)
                  </label>
                  <div className="space-y-3">
                    {subscriptionOptions?.map((option) => (
                      <label 
                        key={option?.id}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={preferences?.includes(option?.id)}
                          onChange={() => handlePreferenceChange(option?.id)}
                          className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-body font-medium text-foreground group-hover:text-primary transition-colors">
                            {option?.label}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit"
                  variant="default" 
                  size="lg"
                  fullWidth
                  loading={isLoading}
                  className="cta-conversion font-body font-semibold"
                  iconName="Mail"
                  iconPosition="left"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
                </Button>

                <div className="text-xs text-muted-foreground font-body text-center">
                  By subscribing, you agree to receive marketing emails from FarmLink. 
                  You can unsubscribe at any time. We respect your privacy and will never share your email.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;