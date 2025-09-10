import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import LanUtanUc from "./pages/LanUtanUc";
import Kreditkort from "./pages/Kreditkort";
import Privatlan from "./pages/Privatlan";
import Foretagslan from "./pages/Foretagslan";
import Cookies from "./pages/Cookies";
import Integritetspolicy from "./pages/Integritetspolicy";
import GlossaryIndex from "./routes/ordlista/index";
import GlossaryTermPage from "./routes/ordlista/[slug]";
import Sajtkarta from "./pages/Sajtkarta";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lan-utan-uc" element={<LanUtanUc />} />
            <Route path="/kreditkort" element={<Kreditkort />} />
            <Route path="/privatlan" element={<Privatlan />} />
            <Route path="/foretagslan" element={<Foretagslan />} />
            <Route path="/ordlista" element={<GlossaryIndex />} />
            <Route path="/ordlista/:slug" element={<GlossaryTermPage />} />
            <Route path="/sajtkarta" element={<Sajtkarta />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/integritetspolicy" element={<Integritetspolicy />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
