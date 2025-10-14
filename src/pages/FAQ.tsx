import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about orders, shipping, and more
            </p>
          </div>

          <Tabs defaultValue="orders" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="returns">Returns</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I place an order?</AccordionTrigger>
                  <AccordionContent>
                    Browse our products, select your size and desired items, add them to your cart, and proceed 
                    to checkout. You'll need to provide shipping and payment information to complete your order.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I modify or cancel my order?</AccordionTrigger>
                  <AccordionContent>
                    Orders can be modified or cancelled within 1 hour of placement. After this time, orders are 
                    processed and cannot be changed. Contact our support team immediately if you need assistance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, 
                    Apple Pay, and Google Pay. All payments are processed securely through encrypted channels.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer gift cards?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Digital gift cards are available in various denominations. They can be purchased on our 
                    website and will be delivered via email with instructions for redemption.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I track my order?</AccordionTrigger>
                  <AccordionContent>
                    Once your order ships, you'll receive a tracking number via email. You can also log into your 
                    account to view order status and tracking information in real-time.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                  <AccordionContent>
                    We offer Standard (5-7 days), Express (2-3 days), and Next Day delivery. Standard shipping 
                    is free on orders over $50. Express and Next Day options are available for additional fees.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We ship to most countries worldwide. International shipping rates and delivery times 
                    vary by location. Customs fees and import duties may apply and are the customer's responsibility.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How long does processing take?</AccordionTrigger>
                  <AccordionContent>
                    Orders are processed within 1-2 business days (Monday-Friday, excluding holidays). Orders 
                    placed after 2PM EST are processed the next business day. Weekend orders ship on Monday.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I change my shipping address?</AccordionTrigger>
                  <AccordionContent>
                    Shipping addresses can be changed within 1 hour of order placement. After this, we cannot 
                    guarantee address changes. Contact support immediately if you need to update your address.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What if my order is delayed?</AccordionTrigger>
                  <AccordionContent>
                    If your order hasn't arrived within the expected timeframe, check your tracking information 
                    first. Contact our support team if there are issues, and we'll work with the carrier to resolve 
                    the delay.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="returns" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in original 
                    condition with all tags attached. Free return shipping is provided for all domestic orders.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I start a return?</AccordionTrigger>
                  <AccordionContent>
                    Log into your account, go to order history, and select the items you want to return. You'll 
                    receive a return authorization number and prepaid shipping label via email.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>When will I receive my refund?</AccordionTrigger>
                  <AccordionContent>
                    Refunds are processed within 5-7 business days after we receive your return. It may take an 
                    additional 5-10 business days for the refund to appear in your account, depending on your bank.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I exchange an item?</AccordionTrigger>
                  <AccordionContent>
                    To exchange for a different size or color, return the original item and place a new order. 
                    This ensures faster processing. Our support team can assist if needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What if my item is defective?</AccordionTrigger>
                  <AccordionContent>
                    Contact us within 7 days of delivery with photos of the defect. We'll arrange for a replacement 
                    or full refund, including shipping costs. Quality is our priority.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="products" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I know what size to order?</AccordionTrigger>
                  <AccordionContent>
                    Each product page includes a detailed size guide. Measure yourself and compare to our size 
                    chart for the best fit. If between sizes, we typically recommend sizing up for comfort.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you restock sold-out items?</AccordionTrigger>
                  <AccordionContent>
                    Popular items are regularly restocked. Sign up for restock notifications on any sold-out 
                    product page to be notified when the item becomes available again.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Are your products true to size?</AccordionTrigger>
                  <AccordionContent>
                    Yes, our products are true to size. T-shirts have a modern fit, hoodies are slightly oversized 
                    for comfort, and jackets fit true to size. Check individual product pages for specific fit notes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How should I care for my items?</AccordionTrigger>
                  <AccordionContent>
                    Machine wash cold with like colors, tumble dry low, and avoid bleach. For graphics and prints, 
                    turn inside out before washing. Check care labels for specific instructions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Are your products sustainable?</AccordionTrigger>
                  <AccordionContent>
                    We're committed to sustainability. We use eco-friendly materials when possible, work with ethical 
                    manufacturers, and implement sustainable production practices. We're continuously improving our 
                    environmental impact.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>

          <div className="bg-muted rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is ready to help.
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

export default FAQ;
