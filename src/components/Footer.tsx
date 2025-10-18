import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter">SELENZO</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Born from the streets, made for rebels. We craft streetwear that speaks to individuality and self-expression.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Ship Your Website Quickly with Frameblox</h4>
              <p className="text-background/70 text-xs leading-relaxed">
                Use prebuilt templates and components for a professional, stunning look. Save time and focus on content with our user-friendly, customizable design solutions.
              </p>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide uppercase">Shop</h4>
            <div className="space-y-2">
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                New Drops
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Collections
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Men
              </a>
              <Link to="/women" className="block text-background/70 hover:text-background transition-colors text-sm">
                Women
              </Link>
              <Link to="/accessories" className="block text-background/70 hover:text-background transition-colors text-sm">
                Accessories
              </Link>
            </div>
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide uppercase">About</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-background/70 hover:text-background transition-colors text-sm">
                About Us
              </Link>
              <Link to="/our-story" className="block text-background/70 hover:text-background transition-colors text-sm">
                Our Story
              </Link>
              <Link to="/size-guide" className="block text-background/70 hover:text-background transition-colors text-sm">
                Size Guide
              </Link>
              <Link to="/shipping" className="block text-background/70 hover:text-background transition-colors text-sm">
                Shipping
              </Link>
              <Link to="/returns" className="block text-background/70 hover:text-background transition-colors text-sm">
                Returns
              </Link>
              <Link to="/faq" className="block text-background/70 hover:text-background transition-colors text-sm">
                FAQ
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide uppercase">Support</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-background/70 hover:text-background transition-colors text-sm">
                Contact
              </Link>
              <Link to="/support" className="block text-background/70 hover:text-background transition-colors text-sm">
                Help Center
              </Link>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Track Order
              </a>
              <Link to="/privacy-policy" className="block text-background/70 hover:text-background transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-background/70 hover:text-background transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © 2024 SELENZO. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="link" className="text-background/70 hover:text-background p-0 h-auto">
              Made in Framer
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;