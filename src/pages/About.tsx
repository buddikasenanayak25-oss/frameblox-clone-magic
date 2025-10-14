import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About Selenzo
            </h1>
            <p className="text-lg text-muted-foreground">
              Redefining streetwear culture through bold designs and uncompromising quality
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16 text-muted-foreground">
            <p className="text-center mb-8">
              Founded with a vision to bring cutting-edge streetwear to the masses, Selenzo represents 
              the fusion of urban culture, artistic expression, and premium quality. We believe that 
              fashion is more than just clothing—it's a statement of identity and individuality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower self-expression through innovative designs that push the boundaries of streetwear
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Our Values</h3>
                <p className="text-muted-foreground">
                  Quality, authenticity, and creativity drive everything we do, from design to delivery
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Our Community</h3>
                <p className="text-muted-foreground">
                  Building a global community of individuals who dare to stand out and express themselves
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Choose Selenzo?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Premium materials sourced from trusted suppliers worldwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Unique designs created by talented artists and designers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Sustainable production practices that respect our planet</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Limited edition drops to ensure exclusivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Customer-first approach with exceptional support</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
