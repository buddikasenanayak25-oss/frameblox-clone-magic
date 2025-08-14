import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-black tracking-tighter text-foreground">
              RAWBLOX
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              SHOP
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              COLLECTIONS
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              MEN
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              WOMEN
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              OUR STORY
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;