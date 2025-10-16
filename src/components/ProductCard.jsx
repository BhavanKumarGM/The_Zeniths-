import React, { useState } from 'react';
import { Star, MapPin, MessageCircle, ShoppingCart, Heart } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useCartStore } from '../store';
import Button from './ui/Button';
import ChatWidget from './chat/ChatWidget';

const ProductCard = ({ farmer, onViewDetails }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      farmerId: farmer.id,
      farmerName: farmer.name
    });
    toast.success(`${product.name} added to cart!`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  return (
    <>
      <div className="bg-card rounded-lg shadow-organic border border-border overflow-hidden hover:shadow-conversion transition-all duration-300 group">
        {/* Farmer Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={farmer.image}
                alt={farmer.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-card-foreground">{farmer.name}</h3>
                <p className="text-sm text-muted-foreground">{farmer.farmName}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{farmer.rating}</span>
                    <span className="text-sm text-muted-foreground">({farmer.reviewCount})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">{farmer.distance}km away</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={toggleFavorite}
              className={`p-2 rounded-full transition-colors ${
                isFavorite ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="p-4">
          <div className="grid grid-cols-1 gap-3">
            {farmer.products.slice(0, 2).map((product) => (
              <div key={product.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-card-foreground">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">Stock: {product.stock} {product.unit}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold text-primary">₹{product.price}/{product.unit}</span>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="px-3 py-1 text-xs"
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {farmer.products.length > 2 && (
            <p className="text-sm text-muted-foreground mt-3 text-center">
              +{farmer.products.length - 2} more products
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsChatOpen(true)}
              className="flex-1"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
            <Button
              size="sm"
              onClick={() => onViewDetails?.(farmer)}
              className="flex-1"
            >
              View Details
            </Button>
          </div>
          
          {/* Specialties */}
          <div className="flex flex-wrap gap-1 mt-3">
            {farmer.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget
        farmer={farmer}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};

export default ProductCard;