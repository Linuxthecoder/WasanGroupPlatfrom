import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  MessageSquare,
  Shield,
  TrendingUp,
  ArrowRight,
  Search,
  Globe,
  Smartphone,
  Shirt,
  Factory,
  CarFront,
  House,
  HeartPulse,
  Building,
  Laptop,
  Headphones,
  Dumbbell,
  Baby,
  Utensils,
  Briefcase,
  Gamepad2,
  Camera,
  Watch,
  Gem,
  Grid3X3,
  ShoppingCart,
  Settings,

  // Added for new categories
  Package,        // Packaging & Printing
  Bolt,           // Energy
  Leaf,           // Agriculture
  Stethoscope,    // Medical Equipment
  Plane,          // Travel & Tourism
  Armchair,       // Furniture
  ShoppingBag,    // Shoes & Bags
  FileText,       // Office Supplies
  ShieldCheck,    // Security & Protection
  PawPrint        // Pet Su
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {

  // Updated categories with Lucide icons instead of emojis
  const categories = [
      { name: "Electronics", count: "12,450+", icon: Smartphone },
      { name: "Consumer Electronics", count: "9,200+", icon: Headphones },
      { name: "Textiles & Apparel", count: "8,320+", icon: Shirt },
      { name: "Home & Garden", count: "6,890+", icon: House },
      { name: "Machinery", count: "5,670+", icon: Factory },
      { name: "Automotive", count: "4,230+", icon: CarFront },
      { name: "Health & Beauty", count: "3,450+", icon: HeartPulse },
      { name: "Computer & Office", count: "7,100+", icon: Laptop },
      { name: "Sports & Entertainment", count: "2,800+", icon: Dumbbell },
      { name: "Mother, Kids & Toys", count: "4,500+", icon: Baby },
      { name: "Food & Beverage", count: "1,900+", icon: Utensils },
      { name: "Business Services", count: "3,200+", icon: Briefcase },
      { name: "Gaming", count: "1,650+", icon: Gamepad2 },
      { name: "Photography", count: "2,100+", icon: Camera },
      { name: "Watches", count: "1,800+", icon: Watch },
      { name: "Jewelry", count: "2,400+", icon: Gem },
    
      { name: "Packaging & Printing", count: "2,950+", icon: Package },
      { name: "Construction & Real Estate", count: "3,600+", icon: Building },
      { name: "Energy", count: "1,750+", icon: Bolt },
      { name: "Agriculture", count: "2,200+", icon: Leaf },
      { name: "Medical Equipment", count: "2,850+", icon: Stethoscope },
      { name: "Travel & Tourism", count: "1,400+", icon: Plane },
      { name: "Furniture", count: "3,050+", icon: Armchair },
      { name: "Shoes & Bags", count: "2,700+", icon: ShoppingBag },
      { name: "Office Supplies", count: "2,300+", icon: FileText },
      { name: "Security & Protection", count: "1,950+", icon: ShieldCheck },
      { name: "Pet Supplies", count: "1,500+", icon: PawPrint }
    
    
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Verified Suppliers",
      description:
        "All suppliers are thoroughly verified with business licenses and quality certifications."
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description:
        "Contact suppliers directly through our secure messaging system for fast negotiations."
    },
    {
      icon: Shield,
      title: "Trade Assurance",
      description:
        "Secure your transactions with our trade protection service and payment guarantees."
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description:
        "Get real-time market data, pricing trends, and industry analysis to make informed decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Business Offerings Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Grid3X3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Millions of business offerings</h3>
              <p className="text-gray-300 leading-relaxed">
                Explore products and suppliers for your business from millions of offerings worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Assured quality and transactions</h3>
              <p className="text-gray-300 leading-relaxed">
                Ensure production quality from verified suppliers, with your orders protected from payment to delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">One-stop trading solution</h3>
              <p className="text-gray-300 leading-relaxed">
                Order seamlessly from product/supplier search to order management, payment, and fulfillment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tailored trading experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Source Direct from Factory */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Source direct-from-factory</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Cut out the middleman and connect directly with manufacturers. Get better prices, faster delivery, and quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300 h-full"
              >
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Browse by Category</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Explore millions of offerings tailored to your business needs
            </p>
          </div>

          {/* Circular Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 mb-16">
            {categories.map((category, index) => (
              <Link key={index} to="/categories" className="group">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-20 h-20 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <category.icon className="w-8 h-8 text-gray-600 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">200M+</div>
              <div className="text-muted-foreground">products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">200K+</div>
              <div className="text-muted-foreground">suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">5,900</div>
              <div className="text-muted-foreground">product categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-muted-foreground">countries and regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Why Choose Us</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              We provide the comprehensive tools and trusted services you need to source products safely and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold mb-3">Verified Suppliers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  All suppliers are thoroughly verified with business licenses and quality certifications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold mb-3">Direct Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  Contact suppliers directly through our secure messaging system for fast negotiations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold mb-3">Trade Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  Secure your transactions with our trade protection service and payment guarantees.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold mb-3">Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  Get real-time market data, pricing trends, and industry analysis to make informed decisions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discover Business Opportunities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Discover your next business opportunity</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to expand your product line or find reliable manufacturing partners, we connect you with the right opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold mb-3">Find Products</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                  Search through millions of products from verified manufacturers worldwide.
                </CardDescription>
                <Link to="/categories">
                  <Button className="w-full">
                    Start Searching
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold mb-3">Connect Directly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                  Communicate directly with manufacturers to negotiate the best deals.
                </CardDescription>
                <Link to="/contact">
                  <Button className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold mb-3">List Your Business</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                  Showcase your products and reach millions of potential buyers globally.
                </CardDescription>
                <Link to="/list-business">
                  <Button className="w-full">
                    List Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Start Trading?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful businesses already using WasanGroup to source high-quality products from verified Chinese manufacturers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/categories">
              <Button variant="secondary" size="lg" className="min-w-56 h-14 text-lg font-semibold">
                <Search className="mr-3 h-6 w-6" />
                Browse Categories
              </Button>
            </Link>
            <Link to="/list-business">
              <Button
                variant="outline"
                size="lg"
                className="min-w-56 h-14 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary"
              >
                <Globe className="mr-3 h-6 w-6" />
                List Your Business
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;