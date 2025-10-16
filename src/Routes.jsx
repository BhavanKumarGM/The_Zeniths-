import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProductDetail from './pages/product-detail';
import FarmerDashboard from './pages/farmer-dashboard';
import InteractiveFarmMap from './pages/interactive-farm-map';
import Homepage from './pages/homepage';
import BuyerDiscovery from './pages/buyer-discovery';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/interactive-farm-map" element={<InteractiveFarmMap />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/buyer-discovery" element={<BuyerDiscovery />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
