import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privatlan from "./pages/Privatlan";
import Foretagslan from "./pages/Foretagslan";
import Kreditkort from "./pages/Kreditkort";
import LanUtanUc from "./pages/LanUtanUc";
import Integritetspolicy from "./pages/Integritetspolicy";
import Cookies from "./pages/Cookies";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    {/* Clean slugs */}
    <Route path="/privatlan" element={<Privatlan />} />
    <Route path="/foretagslan" element={<Foretagslan />} />
    <Route path="/kreditkort" element={<Kreditkort />} />
    <Route path="/lan-utan-uc" element={<LanUtanUc />} />
    <Route path="/integritetspolicy" element={<Integritetspolicy />} />
    <Route path="/cookies" element={<Cookies />} />
    {/* Redirect legacy .html URLs to clean slugs */}
    <Route path="/privatlan.html" element={<Navigate to="/privatlan" replace />} />
    <Route path="/foretagslan.html" element={<Navigate to="/foretagslan" replace />} />
    <Route path="/kreditkort.html" element={<Navigate to="/kreditkort" replace />} />
    <Route path="/lan-utan-uc.html" element={<Navigate to="/lan-utan-uc" replace />} />
    <Route path="/integritetspolicy.html" element={<Navigate to="/integritetspolicy" replace />} />
    <Route path="/cookies.html" element={<Navigate to="/cookies" replace />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

import ConsentBanner from "@/components/ConsentBanner";
import OffersRerenderOnRoute from "@/components/OffersRerenderOnRoute";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import { lazy, Suspense } from "react";

const LazyAnalytics = () => (
  <Suspense fallback={null}>
    <AnalyticsLoader />
  </Suspense>
);
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Load analytics (GTM) only after explicit consent */}
          <LazyAnalytics />
          {/* Ensure offers renderer re-runs on route changes */}
          <OffersRerenderOnRoute />
          <AppRoutes />
          {/* Cookie consent banner */}
          <ConsentBanner />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
