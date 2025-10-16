import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const quickActions = [
    {
      id: 'add-product',
      title: 'Add New Product',
      description: 'List fresh produce for sale',
      icon: 'Plus',
      color: 'bg-primary',
      action: () => console.log('Add product')
    },
    {
      id: 'update-inventory',
      title: 'Update Inventory',
      description: 'Manage stock levels',
      icon: 'Package',
      color: 'bg-secondary',
      action: () => console.log('Update inventory')
    },
    {
      id: 'view-messages',
      title: 'View Messages',
      description: 'Check customer inquiries',
      icon: 'MessageCircle',
      color: 'bg-accent',
      action: () => window.location.href = '/communication-center'
    },
    {
      id: 'delivery-zones',
      title: 'Delivery Zones',
      description: 'Update service areas',
      icon: 'MapPin',
      color: 'bg-brand-sage',
      action: () => console.log('Manage delivery zones')
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'order',
      message: "New order from Sarah Johnson",
      time: "5 minutes ago",
      icon: 'ShoppingCart',
      color: 'text-success'
    },
    {
      id: 2,
      type: 'message',
      message: "Message from Michael Chen about delivery",
      time: "12 minutes ago",
      icon: 'MessageCircle',
      color: 'text-primary'
    },
    {
      id: 3,
      type: 'stock',
      message: "Low stock alert: Organic Tomatoes",
      time: "1 hour ago",
      icon: 'AlertTriangle',
      color: 'text-warning'
    },
    {
      id: 4,
      type: 'review',
      message: "New 5-star review from Emma Rodriguez",
      time: "2 hours ago",
      icon: 'Star',
      color: 'text-success'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-organic">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-headline font-semibold text-card-foreground mb-1">Quick Actions</h3>
            <p className="text-sm text-muted-foreground font-body">Manage your farm business efficiently</p>
          </div>
          <Icon name="Zap" size={20} className="text-accent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions?.map((action) => (
            <button
              key={action?.id}
              onClick={action?.action}
              className="flex items-center space-x-4 p-4 bg-brand-surface hover:bg-brand-surface/80 rounded-lg transition-all duration-300 timing-organic hover:shadow-organic group"
            >
              <div className={`w-12 h-12 ${action?.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={action?.icon} size={20} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-body font-medium text-card-foreground group-hover:text-primary transition-colors duration-200">
                  {action?.title}
                </h4>
                <p className="text-sm text-muted-foreground font-body">{action?.description}</p>
              </div>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            </button>
          ))}
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-organic">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-headline font-semibold text-card-foreground mb-1">Recent Activity</h3>
            <p className="text-sm text-muted-foreground font-body">Stay updated with your farm activities</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="RefreshCw"
            iconPosition="left"
            onClick={() => console.log('Refresh activities')}
          >
            Refresh
          </Button>
        </div>

        <div className="space-y-3">
          {recentActivities?.map((activity) => (
            <div
              key={activity?.id}
              className="flex items-center space-x-4 p-3 hover:bg-brand-surface rounded-lg transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-brand-surface rounded-full flex items-center justify-center">
                <Icon name={activity?.icon} size={16} className={activity?.color} />
              </div>
              <div className="flex-1">
                <p className="font-body text-card-foreground">{activity?.message}</p>
                <p className="text-xs text-muted-foreground font-body">{activity?.time}</p>
              </div>
              <button className="p-1 hover:bg-brand-surface rounded transition-colors duration-200">
                <Icon name="MoreHorizontal" size={16} className="text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName="Clock"
            iconPosition="left"
            onClick={() => console.log('View all activities')}
          >
            View All Activities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;