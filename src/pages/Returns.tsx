import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Package, CreditCard, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Returns & Exchanges
            </h1>
            <p className="text-lg text-muted-foreground">
              We want you to love your purchase. If not, we're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <RefreshCw className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>30-Day Returns</CardTitle>
                <CardDescription>Full refund or exchange</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Items must be unworn, unwashed, and in original condition with all tags attached
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Free Return Shipping</CardTitle>
                <CardDescription>For all domestic orders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide a prepaid return label with every order for your convenience
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CreditCard className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Quick Refunds</CardTitle>
                <CardDescription>Processed within 5-7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Refunds issued to original payment method once return is received
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertCircle className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Easy Process</CardTitle>
                <CardDescription>Simple 3-step return</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Request, pack, and ship - we handle the rest
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Return Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  We accept returns within 30 days of delivery for a full refund or exchange. 
                  To be eligible for a return, items must be:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Unworn and unwashed</li>
                  <li>In original condition with all tags attached</li>
                  <li>In original packaging (if applicable)</li>
                  <li>Accompanied by proof of purchase</li>
                </ul>
                <p>
                  Items marked as final sale, intimate apparel, and accessories cannot be returned 
                  unless defective.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Return an Item</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Step 1: Initiate Your Return</h4>
                  <p>
                    Log into your account and navigate to your order history. Select the item(s) you wish 
                    to return and choose your reason for return. You'll receive a return authorization 
                    number and prepaid shipping label via email.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Step 2: Pack Your Return</h4>
                  <p>
                    Place items in the original packaging if possible. Include the return authorization 
                    form in the package. Attach the prepaid shipping label to the outside of the box.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Step 3: Ship Your Return</h4>
                  <p>
                    Drop off your package at any authorized shipping location. Track your return using 
                    the tracking number provided. We'll send you a confirmation email once we receive 
                    your return.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exchanges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  To exchange an item for a different size or color, simply return the original item 
                  and place a new order for your desired item. This ensures you receive your exchange 
                  as quickly as possible.
                </p>
                <p>
                  If you need assistance with an exchange, our support team is happy to help coordinate 
                  the process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refund Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Once we receive your return, we'll inspect the items and process your refund within 
                  5-7 business days. Refunds will be issued to your original payment method.
                </p>
                <p>
                  Please allow 5-10 business days for the refund to appear in your account, depending 
                  on your financial institution's processing time.
                </p>
                <p>
                  You'll receive an email confirmation once your refund has been processed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Returns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  International customers are responsible for return shipping costs. Please contact 
                  our support team before initiating an international return for instructions.
                </p>
                <p>
                  Customs fees and import duties are non-refundable. Refunds will be issued in the 
                  original currency minus any applicable fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Damaged or Defective Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  If you receive a damaged or defective item, please contact us within 7 days of 
                  delivery with photos of the issue. We'll arrange for a replacement or full refund, 
                  including shipping costs.
                </p>
                <p>
                  Quality is our priority, and we stand behind every product we sell.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8 mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Have questions about returns or exchanges? Our support team is here to assist you.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Support</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
