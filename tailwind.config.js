/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        /* Core Colors */
        background: 'var(--color-background)', // white
        foreground: 'var(--color-foreground)', // gray-900
        border: 'var(--color-border)', // sage-green-20
        input: 'var(--color-input)', // warm-neutral
        ring: 'var(--color-ring)', // deep-forest-green
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-900
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-900
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // warm-neutral
          foreground: 'var(--color-muted-foreground)' // gray-600
        },

        /* Brand Colors */
        primary: {
          DEFAULT: 'var(--color-primary)', // deep-forest-green
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // rich-soil-brown
          foreground: 'var(--color-secondary-foreground)' // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // harvest-orange
          foreground: 'var(--color-accent-foreground)' // white
        },

        /* Status Colors */
        success: {
          DEFAULT: 'var(--color-success)', // growing-green
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-alert
          foreground: 'var(--color-warning-foreground)' // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // concerned-red
          foreground: 'var(--color-error-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // concerned-red
          foreground: 'var(--color-destructive-foreground)' // white
        },

        /* Extended Brand Colors */
        'brand-sage': 'var(--color-brand-sage)', // sage-green
        'harvest-gold': 'var(--color-brand-harvest-gold)', // warm-harvest-gold
        'brand-surface': 'var(--color-brand-surface)', // warm-neutral
        'text-secondary': 'var(--color-text-secondary)', // gray-600
        'conversion-accent': 'var(--color-conversion-accent)', // warm-harvest-gold
        'trust-builder': 'var(--color-trust-builder)', // deep-forest-green
        'natural-cream': 'var(--color-natural-cream)', // natural-cream
        'warm-gray': 'var(--color-warm-gray)', // warm-gray
        'golden-harvest': 'var(--color-golden-harvest)' // golden-harvest
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'], // modern-clarity
        'body': ['Source Sans Pro', 'sans-serif'], // highly-legible
        'accent': ['Crimson Text', 'serif'], // serif-warmth
        'sans': ['Source Sans Pro', 'sans-serif'],
        'serif': ['Crimson Text', 'serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      spacing: {
        'xs': '8px', // golden-ratio-base
        'sm': '13px', // golden-ratio-step-1
        'md': '21px', // golden-ratio-step-2
        'lg': '34px', // golden-ratio-step-3
        'xl': '55px' // golden-ratio-step-4
      },
      borderRadius: {
        'organic': '12px 8px 10px 14px', // organic-irregularity
        'subtle': '6px', // soft-geometry
        'standard': '8px' // clean-modern
      },
      boxShadow: {
        'organic': '0 4px 20px rgba(45, 80, 22, 0.12)', // natural-depth
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)', // gentle-elevation
        'conversion': '0 8px 32px rgba(45, 80, 22, 0.15)' // premium-depth
      },
      animation: {
        'seasonal-pulse': 'seasonal-pulse 0.8s ease-in-out infinite', // micro-seasonal
        'grow-connection': 'grow-connection 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', // organic-growth
        'fade-in': 'fadeIn 0.3s ease-out', // gentle-entrance
        'slide-up': 'slideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' // organic-movement
      },
      keyframes: {
        'seasonal-pulse': {
          '0%, 100%': { 
            opacity: '0.8', 
            transform: 'scale(1)' 
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.05)' 
          }
        },
        'grow-connection': {
          '0%': {
            'stroke-dasharray': '0 100'
          },
          '100%': {
            'stroke-dasharray': '100 0'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        }
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // agricultural-growth
        'ease-out-custom': 'cubic-bezier(0.25, 0.1, 0.25, 1)' // smooth-professional
      },
      backgroundImage: {
        'soil-texture': 'radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(45, 80, 22, 0.08) 0%, transparent 50%)', // organic-texture
        'seasonal-gradient': 'linear-gradient(45deg, #87A96B 0%, #2D5016 100%)' // agricultural-depth
      },
      clipPath: {
        'farmer-portrait': 'polygon(0% 0%, 95% 0%, 100% 90%, 5% 100%)' // organic-masking
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}