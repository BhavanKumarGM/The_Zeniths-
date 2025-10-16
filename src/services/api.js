// Mock API service for FarmLink
import { toast } from 'react-hot-toast';

// Mock data
const mockFarmers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    farmName: 'Green Valley Farm',
    location: 'Bangalore, Karnataka',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    rating: 4.8,
    reviewCount: 45,
    distance: 2.5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    specialties: ['Organic Vegetables', 'Fruits', 'Herbs'],
    products: [
      { id: 101, name: 'Organic Tomatoes', price: 40, unit: 'kg', stock: 50, image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=300&h=200&fit=crop' },
      { id: 102, name: 'Fresh Spinach', price: 25, unit: 'kg', stock: 30, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=200&fit=crop' },
      { id: 103, name: 'Organic Carrots', price: 35, unit: 'kg', stock: 40, image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=200&fit=crop' }
    ],
    deliveryZones: ['Bangalore', 'Whitefield', 'Electronic City'],
    phone: '+91 9876543210',
    description: 'Certified organic farmer with 15+ years experience'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    farmName: 'Sunrise Organic Farm',
    location: 'Mysore, Karnataka',
    coordinates: { lat: 12.2958, lng: 76.6394 },
    rating: 4.6,
    reviewCount: 32,
    distance: 5.2,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    specialties: ['Organic Fruits', 'Dairy', 'Honey'],
    products: [
      { id: 201, name: 'Fresh Mangoes', price: 80, unit: 'kg', stock: 25, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&h=200&fit=crop' },
      { id: 202, name: 'Pure Honey', price: 350, unit: 'kg', stock: 15, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=200&fit=crop' },
      { id: 203, name: 'Farm Fresh Milk', price: 45, unit: 'liter', stock: 20, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop' }
    ],
    deliveryZones: ['Mysore', 'Mandya', 'Hassan'],
    phone: '+91 9876543211',
    description: 'Multi-generation farming family specializing in organic produce'
  },
  {
    id: 3,
    name: 'Arjun Reddy',
    farmName: 'Heritage Grains Farm',
    location: 'Hyderabad, Telangana',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    rating: 4.9,
    reviewCount: 67,
    distance: 8.1,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    specialties: ['Millets', 'Pulses', 'Traditional Grains'],
    products: [
      { id: 301, name: 'Organic Rice', price: 60, unit: 'kg', stock: 100, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop' },
      { id: 302, name: 'Mixed Millets', price: 75, unit: 'kg', stock: 80, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop' },
      { id: 303, name: 'Black Gram Dal', price: 120, unit: 'kg', stock: 60, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop' }
    ],
    deliveryZones: ['Hyderabad', 'Secunderabad', 'Cyberabad'],
    phone: '+91 9876543212',
    description: 'Preserving traditional farming methods and heritage crops'
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const api = {
  // Authentication
  login: async (credentials) => {
    await delay(1000);
    return {
      success: true,
      user: {
        id: Date.now(),
        name: credentials.email.split('@')[0],
        email: credentials.email,
        userType: credentials.userType
      }
    };
  },

  register: async (userData) => {
    await delay(1500);
    return {
      success: true,
      user: {
        id: Date.now(),
        ...userData
      }
    };
  },

  // Farmers
  getFarmers: async (filters = {}) => {
    await delay(800);
    let farmers = [...mockFarmers];

    // Apply filters
    if (filters.location) {
      farmers = farmers.filter(farmer => 
        farmer.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.specialty) {
      farmers = farmers.filter(farmer =>
        farmer.specialties.some(spec => 
          spec.toLowerCase().includes(filters.specialty.toLowerCase())
        )
      );
    }

    if (filters.maxDistance) {
      farmers = farmers.filter(farmer => farmer.distance <= filters.maxDistance);
    }

    // Sort by rating by default
    farmers.sort((a, b) => b.rating - a.rating);

    return { success: true, data: farmers };
  },

  getFarmerById: async (id) => {
    await delay(500);
    const farmer = mockFarmers.find(f => f.id === parseInt(id));
    return farmer ? { success: true, data: farmer } : { success: false, error: 'Farmer not found' };
  },

  // AI Recommendations
  getRecommendations: async (userLocation, preferences = {}) => {
    await delay(1200);
    
    // Simple recommendation algorithm
    let recommendations = [...mockFarmers];
    
    // Score based on distance, rating, and preferences
    recommendations = recommendations.map(farmer => {
      let score = farmer.rating * 20; // Base score from rating
      
      // Distance factor (closer is better)
      score += Math.max(0, 50 - farmer.distance * 5);
      
      // Specialty match
      if (preferences.preferredProducts) {
        const matches = farmer.specialties.filter(spec =>
          preferences.preferredProducts.some(pref =>
            spec.toLowerCase().includes(pref.toLowerCase())
          )
        );
        score += matches.length * 15;
      }
      
      return { ...farmer, recommendationScore: score };
    });
    
    // Sort by recommendation score and return top 3
    recommendations.sort((a, b) => b.recommendationScore - a.recommendationScore);
    
    return {
      success: true,
      data: recommendations.slice(0, 3),
      message: 'AI-powered recommendations based on your location and preferences'
    };
  },

  // Products
  getProducts: async (farmerId) => {
    await delay(600);
    const farmer = mockFarmers.find(f => f.id === parseInt(farmerId));
    return farmer ? { success: true, data: farmer.products } : { success: false, error: 'Products not found' };
  },

  // Orders
  placeOrder: async (orderData) => {
    await delay(1000);
    const orderId = Date.now();
    
    return {
      success: true,
      data: {
        id: orderId,
        ...orderData,
        status: 'pending',
        createdAt: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      }
    };
  },

  // Reviews
  submitReview: async (reviewData) => {
    await delay(800);
    return {
      success: true,
      data: {
        id: Date.now(),
        ...reviewData,
        createdAt: new Date().toISOString()
      }
    };
  }
};

// Error handler wrapper
export const apiCall = async (apiFunction, ...args) => {
  try {
    const result = await apiFunction(...args);
    return result;
  } catch (error) {
    console.error('API Error:', error);
    toast.error('Something went wrong. Please try again.');
    return { success: false, error: error.message };
  }
};