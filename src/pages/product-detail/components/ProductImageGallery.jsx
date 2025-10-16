import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProductImageGallery = ({ images, productName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? images?.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === images?.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-natural-cream rounded-lg overflow-hidden shadow-organic">
        <div 
          className={`relative transition-all duration-300 ${
            isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={images?.[selectedImageIndex]?.url}
            alt={images?.[selectedImageIndex]?.alt}
            className={`w-full transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          
          {/* Navigation Arrows */}
          {images?.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e?.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-organic hover:bg-background transition-all duration-200"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              
              <button
                onClick={(e) => {
                  e?.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-organic hover:bg-background transition-all duration-200"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </>
          )}

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-body">
            <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={16} className="inline mr-1" />
            {isZoomed ? 'Zoom Out' : 'Zoom In'}
          </div>
        </div>
      </div>
      {/* Thumbnail Gallery */}
      {images?.length > 1 && (
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {images?.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImageIndex === index
                  ? 'border-primary shadow-organic'
                  : 'border-border hover:border-brand-sage'
              }`}
            >
              <Image
                src={image?.url}
                alt={image?.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
      {/* Image Counter */}
      <div className="text-center text-sm text-muted-foreground font-body">
        {selectedImageIndex + 1} of {images?.length}
      </div>
    </div>
  );
};

export default ProductImageGallery;