import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff, User, Tractor, MapPin, Phone } from 'lucide-react';
import { useAuthStore } from '../../store';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('buyer');
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data
      const userData = {
        id: Date.now(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        location: data.location,
        userType: userType,
        ...(userType === 'farmer' && {
          farmName: data.farmName,
          farmSize: data.farmSize,
          crops: data.crops?.split(',').map(crop => crop.trim())
        })
      };

      login(userData, userType);
      toast.success(`Welcome to FarmLink, ${userData.name}!`);
      
      // Redirect based on user type
      if (userType === 'farmer') {
        navigate('/farmer-dashboard');
      } else {
        navigate('/buyer-discovery');
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-natural-cream to-brand-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-organic p-8 border border-border">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Join FarmLink</h1>
            <p className="text-muted-foreground">Create your account to get started</p>
          </div>

          {/* User Type Selection */}
          <div className="flex mb-6 bg-muted rounded-lg p-1">
            <button
              type="button"
              onClick={() => setUserType('buyer')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
                userType === 'buyer'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User size={18} />
              <span>Buyer</span>
            </button>
            <button
              type="button"
              onClick={() => setUserType('farmer')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
                userType === 'farmer'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Tractor size={18} />
              <span>Farmer</span>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                })}
                className={errors.name ? 'border-error' : ''}
              />
              {errors.name && (
                <p className="text-error text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email address"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={errors.email ? 'border-error' : ''}
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[+]?[0-9]{10,15}$/,
                    message: 'Invalid phone number'
                  }
                })}
                className={errors.phone ? 'border-error' : ''}
              />
              {errors.phone && (
                <p className="text-error text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Input
                type="text"
                placeholder="Location (City, State)"
                {...register('location', {
                  required: 'Location is required'
                })}
                className={errors.location ? 'border-error' : ''}
              />
              {errors.location && (
                <p className="text-error text-sm mt-1">{errors.location.message}</p>
              )}
            </div>

            {/* Farmer-specific fields */}
            {userType === 'farmer' && (
              <>
                <div>
                  <Input
                    type="text"
                    placeholder="Farm Name"
                    {...register('farmName', {
                      required: userType === 'farmer' ? 'Farm name is required' : false
                    })}
                    className={errors.farmName ? 'border-error' : ''}
                  />
                  {errors.farmName && (
                    <p className="text-error text-sm mt-1">{errors.farmName.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Farm Size (e.g., 5 acres)"
                    {...register('farmSize', {
                      required: userType === 'farmer' ? 'Farm size is required' : false
                    })}
                    className={errors.farmSize ? 'border-error' : ''}
                  />
                  {errors.farmSize && (
                    <p className="text-error text-sm mt-1">{errors.farmSize.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Main Crops (comma separated)"
                    {...register('crops', {
                      required: userType === 'farmer' ? 'Crops information is required' : false
                    })}
                    className={errors.crops ? 'border-error' : ''}
                  />
                  {errors.crops && (
                    <p className="text-error text-sm mt-1">{errors.crops.message}</p>
                  )}
                </div>
              </>
            )}

            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
                className={errors.password ? 'border-error' : ''}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-error text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
                className={errors.confirmPassword ? 'border-error' : ''}
              />
              {errors.confirmPassword && (
                <p className="text-error text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-2"
                {...register('terms', {
                  required: 'You must accept the terms and conditions'
                })}
              />
              <label className="text-sm text-muted-foreground">
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-error text-sm">{errors.terms.message}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-brand-sage"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;