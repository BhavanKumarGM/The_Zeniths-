import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onEdit, onToggleStatus, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'low_stock': return 'bg-warning text-warning-foreground';
      case 'out_of_stock': return 'bg-error text-error-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'low_stock': return 'Low Stock';
      case 'out_of_stock': return 'Out of Stock';
      default: return 'Inactive';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-organic hover:shadow-conversion transition-all duration-300 timing-organic">
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <Image
            src={product?.image}
            alt={product?.imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-body font-medium ${getStatusColor(product?.status)}`}>
            {getStatusText(product?.status)}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-xs font-body font-semibold text-primary">${product?.price}/{product?.unit}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-headline font-semibold text-card-foreground mb-1">{product?.name}</h3>
            <p className="text-sm text-muted-foreground font-body">{product?.category}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-brand-surface rounded transition-colors duration-200"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-2 bg-brand-surface rounded-lg">
            <p className="text-xs text-muted-foreground font-body mb-1">Stock</p>
            <p className="font-headline font-semibold text-card-foreground">{product?.stock} {product?.unit}</p>
          </div>
          <div className="text-center p-2 bg-brand-surface rounded-lg">
            <p className="text-xs text-muted-foreground font-body mb-1">Orders</p>
            <p className="font-headline font-semibold text-card-foreground">{product?.totalOrders}</p>
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-3 mb-4 p-3 bg-brand-surface rounded-lg">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground font-body">Harvest Date:</span>
              <span className="font-body font-medium text-card-foreground">{product?.harvestDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground font-body">Organic:</span>
              <span className="font-body font-medium text-card-foreground">
                {product?.isOrganic ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground font-body">Revenue:</span>
              <span className="font-body font-medium text-success">${product?.revenue}</span>
            </div>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              {product?.description}
            </p>
          </div>
        )}

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(product?.id)}
            iconName="Edit2"
            iconPosition="left"
            className="flex-1"
          >
            Edit
          </Button>
          <Button
            variant={product?.status === 'active' ? 'secondary' : 'default'}
            size="sm"
            onClick={() => onToggleStatus(product?.id)}
            iconName={product?.status === 'active' ? 'Pause' : 'Play'}
            iconPosition="left"
            className="flex-1"
          >
            {product?.status === 'active' ? 'Pause' : 'Activate'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;