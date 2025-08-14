import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">
                  Streetwear with a Story
                </h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-gradient tracking-tight">
                  Wear the Movement, Break the Mold.
                </h3>
              </div>
              
              <p className="text-lg text-background/80 leading-relaxed">
                Born from the pulse of the streets, our brand is a tribute to the rebels, the dreamers, and the rule-breakers who shape the culture. Inspired by the raw energy of city life—graffiti-covered alleys, underground music scenes, and late-night skate sessions—we craft streetwear that speaks to individuality and self-expression.
              </p>

              <p className="text-lg text-background/80 leading-relaxed">
                Every stitch, every design, and every drop is a reflection of the movement, blending bold graphics, oversized silhouettes, and urban edge. More than just clothing, we're a statement—wear your story, break the mold, and define your own path.
              </p>
            </div>

            <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Get it now
            </Button>
          </div>

          {/* Right Content - Brand Values */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="space-y-3 p-6 bg-background/5 rounded-xl border border-background/10">
                <h4 className="text-xl font-bold text-primary">Built by the Streets, Made for You</h4>
                <p className="text-background/70">
                  From the streets to your style—our journey is all about self-expression and rebellion. Join the movement.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                  Read our story →
                </Button>
              </div>

              <div className="space-y-3 p-6 bg-background/5 rounded-xl border border-background/10">
                <h4 className="text-xl font-bold text-primary">Elevate Your Street Game</h4>
                <p className="text-background/70">
                  From bold graphics to everyday essentials, explore our latest drops and signature pieces designed for the culture.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                  Shop collections →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;