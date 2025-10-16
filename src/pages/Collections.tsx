import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      title: "Men's Collection",
      description: "Bold streetwear designs crafted for the modern man",
      categories: [
        { name: "T-Shirts", path: "/men/tshirts", count: "12+ Styles" },
        { name: "Hoodies", path: "/men/hoodies", count: "8+ Styles" },
        { name: "Jackets", path: "/men/jackets", count: "6+ Styles" },
      ],
      image: "/placeholder.svg",
      path: "/men",
    },
    {
      title: "Women's Collection",
      description: "Contemporary streetwear with attitude and elegance",
      categories: [
        { name: "T-Shirts", path: "/women/tshirts", count: "10+ Styles" },
        { name: "Hoodies", path: "/women/hoodies", count: "7+ Styles" },
        { name: "Jackets", path: "/women/jackets", count: "5+ Styles" },
      ],
      image: "/placeholder.svg",
      path: "/women",
    },
  ];

  const seasons = [
    {
      title: "Spring/Summer 2024",
      description: "Lightweight essentials for warm weather street culture",
      featured: ["Graphic Tees", "Light Jackets", "Caps"],
      status: "Available Now",
    },
    {
      title: "Fall/Winter 2024",
      description: "Layer up with premium hoodies and statement outerwear",
      featured: ["Hoodies", "Heavy Jackets", "Joggers"],
      status: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Our Collections
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Curated streetwear collections that define modern urban fashion. 
                From statement pieces to everyday essentials, discover styles that speak to you.
              </p>
            </div>
          </div>
        </section>

        {/* Main Collections */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {collections.map((collection, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {collection.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {collection.description}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-6">
                    {collection.categories.map((category, idx) => (
                      <Link 
                        key={idx} 
                        to={category.path}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group/item"
                      >
                        <span className="font-medium text-foreground">{category.name}</span>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="text-sm">{category.count}</span>
                          <ArrowRight className="w-4 h-4 group-hover/item:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link to={collection.path}>
                    <Button className="w-full" size="lg">
                      Explore Collection
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seasonal Collections */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Seasonal Collections
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Limited drops designed for each season. Get them before they're gone forever.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {seasons.map((season, index) => (
                <Card key={index}>
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        {season.status}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {season.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {season.description}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Featured Items:</h4>
                      <div className="flex flex-wrap gap-2">
                        {season.featured.map((item, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link to="/shop">
                      <Button variant="outline" className="w-full">
                        {season.status === "Available Now" ? "Shop Now" : "Notify Me"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              New collections drop regularly. Join our community to get first access 
              to limited releases and exclusive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg">
                  Browse All Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get Notified
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
