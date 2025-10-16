import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState('');

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({
      productId: product?.id,
      quantity,
      deliveryDate: selectedDeliveryDate
    });
  };

  // Generate next 7 days for delivery options
  const deliveryOptions = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date?.setDate(date?.getDate() + i + 1);
    return {
      value: date?.toISOString()?.split('T')?.[0],
      label: date?.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      })
    };
  });

  return (
    <div className="space-y-6">
      {/* Product Header */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <h1 className="text-3xl font-headline font-bold text-foreground">
            {product?.name}
          </h1>
          {product?.isOrganic && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-body bg-success/10 text-success">
              <Icon name="Leaf" size={14} className="mr-1" />
              Organic
            </span>
          )}
        </div>
        
        <p className="text-lg text-muted-foreground font-body mb-3">
          {product?.variety}
        </p>

        <div className="flex items-center space-x-4">
          <div className="text-2xl font-headline font-bold text-primary">
            ${product?.price}/{product?.unit}
          </div>
          {product?.originalPrice && (
            <div className="text-lg text-muted-foreground line-through">
              ${product?.originalPrice}/{product?.unit}
            </div>
          )}
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Icon name="Package" size={14} />
            <span>Min order: {product?.minOrder} {product?.unit}</span>
          </div>
        </div>
      </div>
      {/* Availability Status */}
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${
          product?.availability === 'available' ? 'bg-success' : 
          product?.availability === 'limited' ? 'bg-warning' : 'bg-error'
        }`}></div>
        <span className="text-sm font-body text-foreground">
          {product?.availability === 'available' && 'In Stock'}
          {product?.availability === 'limited' && `Limited Stock (${product?.stockCount} left)`}
          {product?.availability === 'out-of-stock' && 'Out of Stock'}
        </span>
      </div>
      {/* Product Description */}
      <div>
        <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
          About This Product
        </h3>
        <p className="text-foreground font-body leading-relaxed">
          {product?.description}
        </p>
      </div>
      {/* Farming Practices */}
      <div>
        <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
          Farming Practices
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {product?.farmingPractices?.map((practice, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={16} className="text-success" />
              <span className="text-sm font-body text-foreground">{practice}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Nutritional Highlights */}
      {product?.nutritionalHighlights && (
        <div>
          <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
            Nutritional Highlights
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {product?.nutritionalHighlights?.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="Heart" size={16} className="text-error" />
                <span className="text-sm font-body text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Storage Tips */}
      {product?.storageTips && (
        <div>
          <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
            Storage Tips
          </h3>
          <p className="text-sm font-body text-foreground leading-relaxed">
            {product?.storageTips}
          </p>
        </div>
      )}
      {/* Purchase Section */}
      {product?.availability !== 'out-of-stock' && (
        <div className="border-t border-border pt-6">
          <div className="space-y-4">
            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-headline font-medium text-foreground mb-2">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-brand-surface transition-colors duration-200"
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="text-lg font-headline font-semibold text-foreground min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-brand-surface transition-colors duration-200"
                >
                  <Icon name="Plus" size={16} />
                </button>
                <span className="text-sm text-muted-foreground font-body">
                  {product?.unit}
                </span>
              </div>
            </div>

            {/* Delivery Date */}
            <div>
              <label className="block text-sm font-headline font-medium text-foreground mb-2">
                Preferred Delivery Date
              </label>
              <select
                value={selectedDeliveryDate}
                onChange={(e) => setSelectedDeliveryDate(e?.target?.value)}
                className="w-full px-4 py-3 border border-border rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select delivery date</option>
                {deliveryOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Price */}
            <div className="flex items-center justify-between py-3 border-t border-border">
              <span className="text-lg font-headline font-medium text-foreground">
                Total:
              </span>
              <span className="text-2xl font-headline font-bold text-primary">
                ${(product?.price * quantity)?.toFixed(2)}
              </span>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="default"
              size="lg"
              fullWidth
              onClick={handleAddToCart}
              disabled={!selectedDeliveryDate}
              className="cta-conversion font-body font-semibold"
              iconName="ShoppingCart"
              iconPosition="left"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;