import { Button } from "@/components/ui/button";
import { Clock, Star, Gift, Zap, X } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ComingSoonPopupProps {
  onClose: () => void;
}

const ComingSoonPopup = ({ onClose }: ComingSoonPopupProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    
    toast({
      title: "Success! 🎉",
      description: "You're on the list! We'll notify you when SELENZO drops.",
    });
    
    setEmail(""); // Clear the input
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full mx-auto border border-border animate-scale-in relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-white" />
        </button>
        
        {/* Header */}
        <div className="bg-gradient-hero rounded-t-2xl p-6 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black tracking-tight mb-2">
            COMING SOON
          </h2>
          <p className="text-white/90 text-sm">
            Something epic is dropping soon
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-bold text-foreground">
              Limited Edition Drop
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We're preparing an exclusive streetwear collection that will redefine urban fashion. Get ready for premium designs, limited quantities, and maximum impact.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Exclusive designs by street artists</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Gift className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Limited to 100 pieces worldwide</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Premium materials & craftsmanship</span>
            </div>
          </div>

          {/* Launch Details */}
          <div className="bg-gradient-subtle rounded-xl p-4 text-center space-y-2">
            <p className="text-sm font-semibold text-foreground">Launch Date</p>
            <p className="text-2xl font-black text-gradient">January 15, 2025</p>
            <p className="text-xs text-muted-foreground">12:00 PM EST</p>
          </div>

          {/* Email Signup */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for early access"
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button type="submit" className="w-full" variant="hero" size="lg">
              Notify Me First
            </Button>
          </form>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Be part of the movement. Limited drops, maximum impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPopup;