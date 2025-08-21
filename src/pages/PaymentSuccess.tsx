import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl">Payment Successful!</CardTitle>
              <CardDescription>
                Thank you for your order. We've received your payment and your order is being processed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Order Details</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Order #SEL-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <p className="text-sm text-muted-foreground">
                  You will receive an email confirmation shortly with your order details and tracking information.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold">What's Next?</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• You'll receive an order confirmation email within 5 minutes</li>
                  <li>• Your order will be processed within 1-2 business days</li>
                  <li>• You'll receive tracking information once your order ships</li>
                  <li>• Estimated delivery: 3-5 business days</li>
                </ul>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate("/shop")}>
                  Continue Shopping
                </Button>
                <Button variant="outline" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;