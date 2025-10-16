import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrdersTable = () => {
  const [selectedTab, setSelectedTab] = useState('recent');

  const recentOrders = [
  {
    id: "ORD-2024-1016",
    customer: "Sarah Johnson",
    customerAvatar: "https://images.unsplash.com/photo-1711385532989-0eee58bada25",
    customerAvatarAlt: "Professional headshot of woman with brown hair in white blouse smiling",
    items: "Organic Tomatoes (5 lbs), Fresh Basil (2 bunches)",
    total: 28.50,
    status: "pending",
    orderDate: "2024-10-16",
    deliveryDate: "2024-10-18",
    paymentMethod: "Credit Card"
  },
  {
    id: "ORD-2024-1015",
    customer: "Michael Chen",
    customerAvatar: "https://images.unsplash.com/photo-1687256457585-3608dfa736c5",
    customerAvatarAlt: "Professional headshot of Asian man with short black hair in navy suit",
    items: "Sweet Corn (12 ears), Zucchini (3 lbs)",
    total: 22.75,
    status: "confirmed",
    orderDate: "2024-10-15",
    deliveryDate: "2024-10-17",
    paymentMethod: "PayPal"
  },
  {
    id: "ORD-2024-1014",
    customer: "Emma Rodriguez",
    customerAvatar: "https://images.unsplash.com/photo-1630949018486-5582dd02684d",
    customerAvatarAlt: "Professional headshot of Hispanic woman with long dark hair in blue blazer",
    items: "Mixed Greens (4 bags), Carrots (2 lbs)",
    total: 18.25,
    status: "delivered",
    orderDate: "2024-10-14",
    deliveryDate: "2024-10-16",
    paymentMethod: "Credit Card"
  },
  {
    id: "ORD-2024-1013",
    customer: "David Thompson",
    customerAvatar: "https://images.unsplash.com/photo-1600630242764-41cf7d951ac4",
    customerAvatarAlt: "Professional headshot of man with beard wearing gray sweater",
    items: "Organic Apples (8 lbs), Honey (2 jars)",
    total: 35.00,
    status: "delivered",
    orderDate: "2024-10-13",
    deliveryDate: "2024-10-15",
    paymentMethod: "Cash"
  }];


  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':return 'bg-warning text-warning-foreground';
      case 'confirmed':return 'bg-primary text-primary-foreground';
      case 'delivered':return 'bg-success text-success-foreground';
      case 'cancelled':return 'bg-error text-error-foreground';
      default:return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':return 'Pending';
      case 'confirmed':return 'Confirmed';
      case 'delivered':return 'Delivered';
      case 'cancelled':return 'Cancelled';
      default:return 'Unknown';
    }
  };

  const handleOrderAction = (orderId, action) => {
    console.log(`${action} order:`, orderId);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-organic">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-headline font-semibold text-card-foreground mb-1">Recent Orders</h3>
            <p className="text-sm text-muted-foreground font-body">Manage your customer orders and deliveries</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="Plus"
            iconPosition="left"
            onClick={() => console.log('Add manual order')}>

            Add Order
          </Button>
        </div>

        <div className="flex space-x-1 bg-brand-surface rounded-lg p-1">
          {[
          { key: 'recent', label: 'Recent', count: 4 },
          { key: 'pending', label: 'Pending', count: 1 },
          { key: 'confirmed', label: 'Confirmed', count: 1 }]?.
          map((tab) =>
          <button
            key={tab?.key}
            onClick={() => setSelectedTab(tab?.key)}
            className={`flex-1 px-3 py-2 rounded text-sm font-body font-medium transition-all duration-200 ${
            selectedTab === tab?.key ?
            'bg-background text-foreground shadow-sm' :
            'text-muted-foreground hover:text-foreground'}`
            }>

              {tab?.label}
              <span className="ml-2 px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                {tab?.count}
              </span>
            </button>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-brand-surface">
            <tr>
              <th className="text-left p-4 font-body font-medium text-muted-foreground text-sm">Order</th>
              <th className="text-left p-4 font-body font-medium text-muted-foreground text-sm">Customer</th>
              <th className="text-left p-4 font-body font-medium text-muted-foreground text-sm">Items</th>
              <th className="text-left p-4 font-body font-medium text-muted-foreground text-sm">Total</th>
              <th className="text-left p-4 font-body font-medium text-muted-foreground text-sm">Status</th>
              <th className="text-left p-4 font-body font-medium text-muted-foreground text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders?.map((order, index) =>
            <tr key={order?.id} className={`border-b border-border hover:bg-brand-surface/50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-background' : 'bg-brand-surface/20'}`}>
                <td className="p-4">
                  <div>
                    <p className="font-body font-medium text-card-foreground">{order?.id}</p>
                    <p className="text-xs text-muted-foreground font-body">{order?.orderDate}</p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                      src={order?.customerAvatar}
                      alt={order?.customerAvatarAlt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/assets/images/no_image.png';
                      }} />

                    </div>
                    <div>
                      <p className="font-body font-medium text-card-foreground">{order?.customer}</p>
                      <p className="text-xs text-muted-foreground font-body">{order?.paymentMethod}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-body text-card-foreground max-w-xs truncate" title={order?.items}>
                    {order?.items}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">Delivery: {order?.deliveryDate}</p>
                </td>
                <td className="p-4">
                  <p className="font-body font-semibold text-success">${order?.total?.toFixed(2)}</p>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-body font-medium ${getStatusColor(order?.status)}`}>
                    {getStatusText(order?.status)}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    {order?.status === 'pending' &&
                  <>
                        <button
                      onClick={() => handleOrderAction(order?.id, 'confirm')}
                      className="p-1 hover:bg-success/10 rounded transition-colors duration-200"
                      title="Confirm Order">

                          <Icon name="Check" size={16} className="text-success" />
                        </button>
                        <button
                      onClick={() => handleOrderAction(order?.id, 'cancel')}
                      className="p-1 hover:bg-error/10 rounded transition-colors duration-200"
                      title="Cancel Order">

                          <Icon name="X" size={16} className="text-error" />
                        </button>
                      </>
                  }
                    <button
                    onClick={() => handleOrderAction(order?.id, 'view')}
                    className="p-1 hover:bg-primary/10 rounded transition-colors duration-200"
                    title="View Details">

                      <Icon name="Eye" size={16} className="text-primary" />
                    </button>
                    <button
                    onClick={() => handleOrderAction(order?.id, 'message')}
                    className="p-1 hover:bg-primary/10 rounded transition-colors duration-200"
                    title="Message Customer">

                      <Icon name="MessageCircle" size={16} className="text-primary" />
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-border bg-brand-surface/30">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground font-body">
            Showing {recentOrders?.length} of {recentOrders?.length} orders
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-body">1</span>
            <Button variant="outline" size="sm" disabled>
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>);

};

export default OrdersTable;