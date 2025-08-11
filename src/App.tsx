import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LanUtanUc from "./pages/LanUtanUc";
import Kreditkort from "./pages/Kreditkort";
import Privatlan from "./pages/Privatlan";
import Foretagslan from "./pages/Foretagslan";

const queryClient = new QueryClient();

const App = () => (
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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
