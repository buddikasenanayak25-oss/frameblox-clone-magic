import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Import images
import whiteTee from "@/assets/white-tee.jpg";
import hoodieShadow from "@/assets/hoodie-shadow-drip.jpg";
import springJacket from "@/assets/spring-jacket.jpg";
import heroModel from "@/assets/hero-model.jpg";

const womenCategories = [
  {
    id: 1,
    name: "T-Shirts",
    description: "Comfortable premium basics",
    image: whiteTee,
    link: "/women/tshirts",
    count: "15 items"
  },
  {
    id: 2,
    name: "Hoodies",
    description: "Cozy streetwear essentials",
    image: hoodieShadow,
    link: "/women/hoodies",
    count: "12 items"
  },
  {
    id: 3,
    name: "Jackets",
    description: "Stylish outerwear collection",
    image: springJacket,
    link: "/women/jackets",
    count: "9 items"
  },
  {
    id: 4,
    name: "Dresses",
    description: "Elegant casual wear",
    image: heroModel,
    link: "/women/dresses",
    count: "7 items"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "White Premium Tee",
    price: 32.99,
    image: whiteTee,
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Shadow Drip Hoodie",
    price: 84.99,
    image: hoodieShadow,
    badge: "LIMITED"
  },
  {
    id: 3,
    name: "Spring Essential Jacket",
    price: 129.99,
    image: springJacket,
    badge: "NEW"
  }
];

const Women = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-r from-secondary/20 to-secondary/10">
          <div className="container-custom h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
                WOMEN'S
                <br />
                COLLECTION
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Embrace your unique style with our curated collection of contemporary streetwear and essentials.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="px-8">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Style Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container-custom py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              SHOP BY CATEGORY
            </h2>
            <p className="text-muted-foreground">
              Discover pieces that define your personal style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {womenCategories.map((category) => (
              <Link key={category.id} to={category.link} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.count}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="container-custom py-16 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              MUST-HAVE PIECES
            </h2>
            <p className="text-muted-foreground">
              Essential items every wardrobe needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-foreground">
                        ${product.price}
                      </span>
                    </div>
                    <Button className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container-custom py-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <CardContent>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                STAY IN STYLE
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Get the latest updates on new arrivals, exclusive offers, and style inspiration.
              </p>
              <div className="flex max-w-md mx-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Women;