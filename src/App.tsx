import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Men from "./pages/Men";
import Women from "./pages/Women";
import MenTshirts from "./pages/MenTshirts";
import MenHoodies from "./pages/MenHoodies";
import MenJackets from "./pages/MenJackets";
import WomenTshirts from "./pages/WomenTshirts";
import WomenHoodies from "./pages/WomenHoodies";
import WomenJackets from "./pages/WomenJackets";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men/tshirts" element={<MenTshirts />} />
          <Route path="/men/hoodies" element={<MenHoodies />} />
          <Route path="/men/jackets" element={<MenJackets />} />
          <Route path="/women/tshirts" element={<WomenTshirts />} />
          <Route path="/women/hoodies" element={<WomenHoodies />} />
          <Route path="/women/jackets" element={<WomenJackets />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
