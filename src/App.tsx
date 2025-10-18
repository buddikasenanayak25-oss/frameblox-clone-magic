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
import EssentialBlackTee from "./pages/products/EssentialBlackTee";
import ClassicWhiteTee from "./pages/products/ClassicWhiteTee";
import NeonRebellionHoodie from "./pages/products/NeonRebellionHoodie";
import ShadowDripHoodie from "./pages/products/ShadowDripHoodie";
import SpringJacket from "./pages/products/SpringJacket";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import About from "./pages/About";
import OurStory from "./pages/OurStory";
import SizeGuide from "./pages/SizeGuide";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import FAQ from "./pages/FAQ";
import Collections from "./pages/Collections";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessories from "./pages/Accessories";

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
          <Route path="/products/essential-black-tee" element={<EssentialBlackTee />} />
          <Route path="/products/classic-white-tee" element={<ClassicWhiteTee />} />
          <Route path="/products/neon-rebellion-hoodie" element={<NeonRebellionHoodie />} />
          <Route path="/products/shadow-drip-hoodie" element={<ShadowDripHoodie />} />
          <Route path="/products/spring-jacket" element={<SpringJacket />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
