import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ products, farmerName, onProductClick }) => {
  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-organic">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Package" size={20} className="text-primary" />
          <h3 className="text-lg font-headline font-semibold text-foreground">
            More from {farmerName}
          </h3>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="group cursor-pointer bg-brand-surface rounded-lg overflow-hidden hover:shadow-organic transition-all duration-300 timing-organic"
            onClick={() => onProductClick(product?.id)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={product?.image}
                alt={product?.imageAlt}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product?.isOrganic && (
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body bg-success text-white">
                    <Icon name="Leaf" size={10} className="mr-1" />
                    Organic
                  </span>
                </div>
              )}
              {product?.discount && (
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body bg-accent text-white">
                    {product?.discount}% OFF
                  </span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h4 className="font-headline font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                {product?.name}
              </h4>
              <p className="text-sm text-muted-foreground font-body mb-2">
                {product?.variety}
              </p>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-headline font-semibold text-primary">
                    ${product?.price}
                  </span>
                  <span className="text-sm text-muted-foreground font-body">
                    /{product?.unit}
                  </span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < Math.floor(product?.rating) ? 'text-warning fill-current' : 'text-border'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-body">
                    ({product?.reviewCount})
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <div className={`w-2 h-2 rounded-full ${
                    product?.availability === 'available' ? 'bg-success' : 
                    product?.availability === 'limited' ? 'bg-warning' : 'bg-error'
                  }`}></div>
                  <span className="text-xs text-muted-foreground font-body">
                    {product?.availability === 'available' && 'In Stock'}
                    {product?.availability === 'limited' && 'Limited'}
                    {product?.availability === 'out-of-stock' && 'Out of Stock'}
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Plus"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View All Products Link */}
      <div className="mt-6 text-center">
        <Button
          variant="outline"
          fullWidth
          iconName="Store"
          iconPosition="left"
        >
          View All Products from {farmerName}
        </Button>
      </div>
    </div>
  );
};

export default RelatedProducts;