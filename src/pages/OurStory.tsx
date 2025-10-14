import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground">
              The journey from concept to culture
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">The Beginning</h2>
              <p>
                Selenzo was born in 2020 from a simple idea: streetwear should be accessible, 
                authentic, and above all, a form of self-expression. Our founders, passionate about 
                urban culture and fashion, recognized a gap in the market for high-quality streetwear 
                that didn't compromise on design or affordability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Building the Brand</h2>
              <p>
                Starting from a small studio, we collaborated with local artists and designers to 
                create our first collection. The response was overwhelming. What began as a passion 
                project quickly evolved into a movement, with customers from around the world connecting 
                with our vision and aesthetic.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Growth & Evolution</h2>
              <p>
                As we grew, so did our commitment to quality and innovation. We expanded our product 
                line, introduced limited edition drops, and built a community of loyal customers who 
                share our passion for bold, expressive fashion. Each collection tells a story, each 
                piece is crafted with intention.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Today & Tomorrow</h2>
              <p>
                Today, Selenzo is more than a brand—it's a lifestyle. We continue to push boundaries, 
                experiment with new designs, and stay true to our roots. Our commitment to sustainability, 
                quality, and community drives us forward as we shape the future of streetwear culture.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Promise</h2>
              <p>
                We promise to continue delivering exceptional streetwear that empowers you to express 
                your unique identity. Every stitch, every design, every interaction reflects our dedication 
                to excellence and our respect for the culture that inspires us.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
