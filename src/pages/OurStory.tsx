import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Zap, Heart, TrendingUp, Globe, Shirt, Award } from "lucide-react";
import { Link } from "react-router-dom";

const OurStory = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded in a small studio with a vision to democratize premium streetwear. Our first collection sold out in 48 hours."
    },
    {
      year: "2021",
      title: "Going Global",
      description: "Expanded to international markets and collaborated with 20+ local artists. Reached 50K+ community members."
    },
    {
      year: "2022",
      title: "Sustainability First",
      description: "Launched our eco-friendly collection using 100% organic materials. Committed to carbon-neutral shipping."
    },
    {
      year: "2023",
      title: "Community Driven",
      description: "Opened our first flagship store and launched the Selenzo Creator Program, supporting emerging designers."
    },
    {
      year: "2024",
      title: "Today & Beyond",
      description: "Leading the streetwear revolution with innovative designs, sustainable practices, and a thriving global community."
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "We're more than a brand—we're a movement. Our community shapes every decision we make."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Authentic Expression",
      description: "We believe fashion is personal. Every piece is designed to help you express your unique identity."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Bold Innovation",
      description: "We push boundaries with cutting-edge designs that challenge the status quo of streetwear."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sustainable Future",
      description: "Quality over quantity. We create pieces that last and minimize our environmental impact."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From a small studio to a global streetwear movement—discover the journey 
                behind Selenzo and the culture we're building together.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Where It All Started
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In 2020, three friends with a shared passion for street culture and design decided to 
                  challenge the status quo. We were tired of seeing the same mass-produced designs, the 
                  compromises on quality, and the disconnect between brands and their communities.
                </p>
                <p>
                  Selenzo was born from a simple but powerful idea: <span className="text-foreground font-semibold">streetwear 
                  should be accessible, authentic, and a true form of self-expression</span>. No gatekeeping, 
                  no overpricing—just premium designs that speak to real people living real lives.
                </p>
                <p>
                  What started as late-night design sessions and weekend pop-ups quickly grew into something 
                  bigger than we imagined. Our first collection sold out in 48 hours. Not because of hype, 
                  but because we created something genuine that resonated with people who, like us, wanted 
                  something different.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                Our Journey
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <Card className="flex-1 group-hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                What We Stand For
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These aren't just words on a page—they're the principles that guide 
                every decision we make and every piece we create.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-primary mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building more than a brand—creating a movement that's changing streetwear culture.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Users className="w-8 h-8" />, number: "100K+", label: "Community Members" },
                { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Countries Worldwide" },
                { icon: <Shirt className="w-8 h-8" />, number: "500K+", label: "Items Sold" },
                { icon: <Award className="w-8 h-8" />, number: "95%", label: "Customer Satisfaction" },
              ].map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-primary mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  The People Behind Selenzo
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Meet the diverse team of creators, designers, and culture enthusiasts who bring our vision to life.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Alex Rivera",
                    role: "Co-Founder & Creative Director",
                    bio: "Former street artist turned designer. Brings 10+ years of urban culture expertise to every collection."
                  },
                  {
                    name: "Maya Chen",
                    role: "Co-Founder & Head of Operations",
                    bio: "Sustainability advocate and fashion innovator. Leads our eco-friendly initiatives and supply chain."
                  },
                  {
                    name: "Jordan Blake",
                    role: "Co-Founder & Community Lead",
                    bio: "Social media pioneer and community builder. Connects our brand with culture creators worldwide."
                  }
                ].map((member, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                        <Users className="w-16 h-16 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Forward */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-primary/20">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <TrendingUp className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                      Looking Ahead
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      We're not just building a clothing brand—we're cultivating a culture. Our vision for the 
                      future includes opening physical community spaces, launching a mentorship program for 
                      emerging designers, and achieving 100% sustainable production by 2026.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Every piece you wear, every collection we drop, every conversation we have—it all contributes 
                      to a larger movement of authentic self-expression and community-driven creativity.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our Promise to You
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We promise to continue delivering exceptional streetwear that empowers you to express 
                  your unique identity. Every stitch, every design, every interaction reflects our dedication 
                  to excellence and our respect for the culture that inspires us.
                </p>
                <p className="text-xl font-semibold text-foreground mb-8">
                  This is just the beginning. The best is yet to come.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/shop">
                    <Button size="lg">
                      Shop The Collection
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Join Our Community
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
