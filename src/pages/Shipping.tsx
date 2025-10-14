import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Globe, Clock } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Shipping Information
            </h1>
            <p className="text-lg text-muted-foreground">
              Fast, reliable delivery to your doorstep
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Truck className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Standard Shipping</CardTitle>
                <CardDescription>5-7 business days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Free on orders over $50</p>
                <p className="text-muted-foreground">$5.99 on orders under $50</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Express Shipping</CardTitle>
                <CardDescription>2-3 business days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">$12.99 flat rate</p>
                <p className="text-muted-foreground">Available at checkout</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Next Day Delivery</CardTitle>
                <CardDescription>1 business day</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">$24.99 flat rate</p>
                <p className="text-muted-foreground">Order by 2PM EST</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>International</CardTitle>
                <CardDescription>10-15 business days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Rates vary by location</p>
                <p className="text-muted-foreground">Calculated at checkout</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Order Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Orders are processed within 1-2 business days (Monday-Friday, excluding holidays). 
                  You will receive a confirmation email with tracking information once your order ships.
                </p>
                <p>
                  Orders placed after 2PM EST will be processed the next business day. Weekend orders 
                  will be processed on the following Monday.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tracking Your Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Once your order ships, you'll receive a shipping confirmation email with your tracking 
                  number. You can track your package using the carrier's website or through your account 
                  on our website.
                </p>
                <p>
                  Please allow 24 hours for tracking information to update after receiving your shipping 
                  confirmation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Shipping</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We ship to most countries worldwide. International shipping rates and delivery times 
                  vary by destination and are calculated at checkout.
                </p>
                <p>
                  Please note that international orders may be subject to customs fees, import duties, 
                  and taxes, which are the responsibility of the customer. These charges are not included 
                  in your order total.
                </p>
                <p>
                  Delivery times for international orders may be affected by customs processing and local 
                  postal services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping Restrictions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We currently cannot ship to P.O. boxes for express and next-day delivery options. 
                  Standard shipping to P.O. boxes is available.
                </p>
                <p>
                  Some remote areas may have extended delivery times. You will be notified if this 
                  applies to your order.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping Issues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  If your order hasn't arrived within the expected timeframe, please check your tracking 
                  information first. If there are any issues or delays, contact our support team and we'll 
                  help resolve the situation.
                </p>
                <p>
                  We are not responsible for delays caused by shipping carriers, customs, or events beyond 
                  our control. However, we will always work with you to find a solution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
