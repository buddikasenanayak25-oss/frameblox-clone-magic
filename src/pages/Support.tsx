import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Support Center
            </h1>
            <p className="text-lg text-muted-foreground">
              We're here to help. Find answers to common questions or get in touch with our team.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Get a response within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/contact">
                  <Button className="w-full">Send Email</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Chat with us in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>Mon-Fri, 9AM-6PM EST</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  1-800-SELENZO
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <Link to="/faq">
                <Button variant="outline">View All FAQs</Button>
              </Link>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is your shipping policy?</AccordionTrigger>
                <AccordionContent>
                  We offer free standard shipping on all orders over $50. Standard shipping typically takes 5-7 business days. 
                  Express shipping options are available at checkout for faster delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in their original condition 
                  with all tags attached. Free return shipping is provided for all domestic orders.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How do I track my order?</AccordionTrigger>
                <AccordionContent>
                  Once your order ships, you'll receive a tracking number via email. You can also track your order by logging 
                  into your account and viewing your order history.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location. 
                  Please note that customs fees and import duties may apply and are the responsibility of the customer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, 
                  and Google Pay. All payments are processed securely.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How do I know what size to order?</AccordionTrigger>
                <AccordionContent>
                  Each product page includes a detailed size guide. We recommend measuring yourself and comparing your 
                  measurements to our size chart for the best fit. If you're between sizes, we typically recommend sizing up.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Can I change or cancel my order?</AccordionTrigger>
                <AccordionContent>
                  Orders can be modified or cancelled within 1 hour of placement. After this time, orders are processed 
                  and cannot be changed. Please contact our support team immediately if you need to make changes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Do you restock sold-out items?</AccordionTrigger>
                <AccordionContent>
                  Popular items are regularly restocked. You can sign up for restock notifications on any sold-out product page 
                  to be notified when the item becomes available again.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Additional Help */}
          <div className="bg-muted rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Still need help?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is ready to assist you.
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

export default Support;
