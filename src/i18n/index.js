import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      farmers: 'Farmers',
      products: 'Products',
      map: 'Map',
      dashboard: 'Dashboard',
      profile: 'Profile',
      logout: 'Logout',
      login: 'Login',
      register: 'Register',
      
      // Hero Section
      heroTitle: 'Fresh connections, fair prices',
      heroSubtitle: 'Connect directly with local farmers for the freshest seasonal produce. Shop sustainably and support your community.',
      discoverFarms: 'Discover Local Farms',
      exploreFarmMap: 'Explore Farm Map',
      
      // Common
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      price: 'Price',
      quantity: 'Quantity',
      location: 'Location',
      rating: 'Rating',
      reviews: 'Reviews',
      addToCart: 'Add to Cart',
      orderNow: 'Order Now',
      contact: 'Contact',
      
      // Farmer Dashboard
      addProduct: 'Add Product',
      myProducts: 'My Products',
      orders: 'Orders',
      revenue: 'Revenue',
      analytics: 'Analytics',
      
      // Buyer
      findFarmers: 'Find Farmers',
      nearbyFarms: 'Nearby Farms',
      recommendations: 'Recommendations',
      
      // Order Status
      pending: 'Pending',
      confirmed: 'Confirmed',
      delivered: 'Delivered',
      cancelled: 'Cancelled',
      
      // Messages
      welcome: 'Welcome to FarmLink',
      connectingFarmers: 'Connecting farmers and buyers directly',
    }
  },
  hi: {
    translation: {
      // Navigation
      home: 'होम',
      farmers: 'किसान',
      products: 'उत्पाद',
      map: 'नक्शा',
      dashboard: 'डैशबोर्ड',
      profile: 'प्रोफाइल',
      logout: 'लॉगआउट',
      login: 'लॉगिन',
      register: 'रजिस्टर',
      
      // Hero Section
      heroTitle: 'ताज़ा कनेक्शन, उचित कीमत',
      heroSubtitle: 'सबसे ताज़ी मौसमी उपज के लिए स्थानीय किसानों से सीधे जुड़ें। टिकाऊ खरीदारी करें और अपने समुदाय का समर्थन करें।',
      discoverFarms: 'स्थानीय फार्म खोजें',
      exploreFarmMap: 'फार्म मैप देखें',
      
      // Common
      search: 'खोजें',
      filter: 'फिल्टर',
      sort: 'क्रमबद्ध करें',
      price: 'कीमत',
      quantity: 'मात्रा',
      location: 'स्थान',
      rating: 'रेटिंग',
      reviews: 'समीक्षा',
      addToCart: 'कार्ट में जोड़ें',
      orderNow: 'अभी ऑर्डर करें',
      contact: 'संपर्क',
      
      // Farmer Dashboard
      addProduct: 'उत्पाद जोड़ें',
      myProducts: 'मेरे उत्पाद',
      orders: 'ऑर्डर',
      revenue: 'आय',
      analytics: 'विश्लेषण',
      
      // Buyer
      findFarmers: 'किसान खोजें',
      nearbyFarms: 'नजदीकी फार्म',
      recommendations: 'सुझाव',
      
      // Order Status
      pending: 'लंबित',
      confirmed: 'पुष्ट',
      delivered: 'वितरित',
      cancelled: 'रद्द',
      
      // Messages
      welcome: 'फार्मलिंक में आपका स्वागत है',
      connectingFarmers: 'किसानों और खरीदारों को सीधे जोड़ना',
    }
  },
  kn: {
    translation: {
      // Navigation
      home: 'ಮನೆ',
      farmers: 'ರೈತರು',
      products: 'ಉತ್ಪನ್ನಗಳು',
      map: 'ನಕ್ಷೆ',
      dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      profile: 'ಪ್ರೊಫೈಲ್',
      logout: 'ಲಾಗ್ ಔಟ್',
      login: 'ಲಾಗಿನ್',
      register: 'ನೋಂದಣಿ',
      
      // Hero Section
      heroTitle: 'ತಾಜಾ ಸಂಪರ್ಕಗಳು, ನ್ಯಾಯಯುತ ಬೆಲೆಗಳು',
      heroSubtitle: 'ತಾಜಾ ಋತುಮಾನದ ಉತ್ಪನ್ನಗಳಿಗಾಗಿ ಸ್ಥಳೀಯ ರೈತರೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ. ಸಮರ್ಥನೀಯವಾಗಿ ಖರೀದಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಸಮುದಾಯವನ್ನು ಬೆಂಬಲಿಸಿ.',
      discoverFarms: 'ಸ್ಥಳೀಯ ಫಾರ್ಮ್‌ಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
      exploreFarmMap: 'ಫಾರ್ಮ್ ನಕ್ಷೆಯನ್ನು ಅನ್ವೇಷಿಸಿ',
      
      // Common
      search: 'ಹುಡುಕಿ',
      filter: 'ಫಿಲ್ಟರ್',
      sort: 'ವಿಂಗಡಿಸಿ',
      price: 'ಬೆಲೆ',
      quantity: 'ಪ್ರಮಾಣ',
      location: 'ಸ್ಥಳ',
      rating: 'ರೇಟಿಂಗ್',
      reviews: 'ವಿಮರ್ಶೆಗಳು',
      addToCart: 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
      orderNow: 'ಈಗ ಆರ್ಡರ್ ಮಾಡಿ',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      
      // Messages
      welcome: 'ಫಾರ್ಮ್‌ಲಿಂಕ್‌ಗೆ ಸ್ವಾಗತ',
      connectingFarmers: 'ರೈತರು ಮತ್ತು ಖರೀದಿದಾರರನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸುವುದು',
    }
  },
  te: {
    translation: {
      // Navigation
      home: 'హోమ్',
      farmers: 'రైతులు',
      products: 'ఉత్పత్తులు',
      map: 'మ్యాప్',
      dashboard: 'డ్యాష్‌బోర్డ్',
      profile: 'ప్రొఫైల్',
      logout: 'లాగ్ అవుట్',
      login: 'లాగిన్',
      register: 'రిజిస్టర్',
      
      // Hero Section
      heroTitle: 'తాజా కనెక్షన్లు, న్యాయమైన ధరలు',
      heroSubtitle: 'తాజా కాలానుగుణ ఉత్పత్తుల కోసం స్థానిక రైతులతో నేరుగా కనెక్ట్ అవ్వండి. స్థిరంగా కొనుగోలు చేసి మీ కమ్యూనిటీకి మద్దతు ఇవ్వండి.',
      discoverFarms: 'స్థానిక వ్యవసాయ క్షేత్రాలను కనుగొనండి',
      exploreFarmMap: 'వ్యవసాయ మ్యాప్‌ను అన్వేషించండి',
      
      // Common
      search: 'వెతకండి',
      filter: 'ఫిల్టర్',
      sort: 'క్రమబద్ధీకరించు',
      price: 'ధర',
      quantity: 'పరిమాణం',
      location: 'స్థానం',
      rating: 'రేటింగ్',
      reviews: 'సమీక్షలు',
      addToCart: 'కార్ట్‌కు జోడించు',
      orderNow: 'ఇప్పుడే ఆర్డర్ చేయండి',
      contact: 'సంప్రదించండి',
      
      // Messages
      welcome: 'ఫార్మ్‌లింక్‌కు స్వాగతం',
      connectingFarmers: 'రైతులు మరియు కొనుగోలుదారులను నేరుగా కనెక్ట్ చేయడం',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;