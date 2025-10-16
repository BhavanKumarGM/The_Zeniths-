import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const displayedReviews = showAllReviews ? reviews : reviews?.slice(0, 3);

  const ratingDistribution = [5, 4, 3, 2, 1]?.map(rating => ({
    rating,
    count: reviews?.filter(review => Math.floor(review?.rating) === rating)?.length,
    percentage: (reviews?.filter(review => Math.floor(review?.rating) === rating)?.length / reviews?.length) * 100
  }));

  const filterOptions = [
    { value: 'all', label: 'All Reviews' },
    { value: 'verified', label: 'Verified Purchases' },
    { value: 'photos', label: 'With Photos' },
    { value: 'recent', label: 'Most Recent' }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-organic">
      {/* Reviews Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Star" size={24} className="text-warning" />
          <h3 className="text-lg font-headline font-semibold text-foreground">
            Customer Reviews
          </h3>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < Math.floor(averageRating) ? 'text-warning fill-current' : 'text-border'}
                />
              ))}
            </div>
            <span className="text-lg font-headline font-semibold text-foreground">
              {averageRating}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-body">
            Based on {totalReviews} reviews
          </p>
        </div>
      </div>
      {/* Rating Distribution */}
      <div className="mb-6">
        <h4 className="text-sm font-headline font-medium text-foreground mb-3">
          Rating Breakdown
        </h4>
        <div className="space-y-2">
          {ratingDistribution?.map(({ rating, count, percentage }) => (
            <div key={rating} className="flex items-center space-x-3">
              <span className="text-sm font-body text-foreground w-8">
                {rating}★
              </span>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div
                  className="bg-warning rounded-full h-2 transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-body text-muted-foreground w-8">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Filter Options */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {filterOptions?.map((option) => (
            <button
              key={option?.value}
              onClick={() => setSelectedFilter(option?.value)}
              className={`px-3 py-1 rounded-full text-sm font-body transition-all duration-200 ${
                selectedFilter === option?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-brand-surface'
              }`}
            >
              {option?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Reviews List */}
      <div className="space-y-6">
        {displayedReviews?.map((review) => (
          <div key={review?.id} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-start space-x-4">
              <Image
                src={review?.customerAvatar}
                alt={review?.customerAvatarAlt}
                className="w-12 h-12 rounded-full object-cover"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h5 className="font-headline font-medium text-foreground">
                      {review?.customerName}
                    </h5>
                    {review?.isVerifiedPurchase && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body bg-success/10 text-success">
                        <Icon name="ShieldCheck" size={12} className="mr-1" />
                        Verified Purchase
                      </span>
                    )}
                    {review?.isRepeatCustomer && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-body bg-primary/10 text-primary">
                        <Icon name="Repeat" size={12} className="mr-1" />
                        Repeat Customer
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground font-body">
                    {formatDate(review?.date)}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={i < Math.floor(review?.rating) ? 'text-warning fill-current' : 'text-border'}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-body text-foreground">
                    {review?.rating}/5
                  </span>
                </div>

                <p className="text-foreground font-body leading-relaxed mb-3">
                  {review?.comment}
                </p>

                {/* Review Photos */}
                {review?.photos && review?.photos?.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review?.photos?.map((photo, index) => (
                      <Image
                        key={index}
                        src={photo?.url}
                        alt={photo?.alt}
                        className="w-16 h-16 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                      />
                    ))}
                  </div>
                )}

                {/* Helpful Actions */}
                <div className="flex items-center space-x-4 text-sm">
                  <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200">
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review?.helpfulCount})</span>
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show More Button */}
      {reviews?.length > 3 && (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAllReviews(!showAllReviews)}
            iconName={showAllReviews ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            {showAllReviews ? 'Show Less' : `Show All ${reviews?.length} Reviews`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;  