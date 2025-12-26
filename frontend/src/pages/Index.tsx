import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DiscoverySection from "@/components/DiscoverySection";
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
  Laptop,
  Briefcase,
  Zap,
  Award,
  Users,
  Box,
  Truck,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Dumbbell,
  Baby,
  Utensils,
  Gamepad2,
  Camera,
  Watch,
  Gem,
  Package,
  Building,
  Bolt,
  Leaf,
  Stethoscope,
  Plane,
  Armchair,
  ShoppingBag,
  FileText,
  ShieldCheck,
  PawPrint
} from "lucide-react";
import { Link } from "react-router-dom";
import ctaBanner from "@/assets/cta-banner.png";

const Index = () => {
  const [activeTab, setActiveTab] = useState("sourcing");

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Modernized categories with Lucide icons
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
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <HeroSection />

      {/* Stats / Trust Strip */}
      <div className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between items-center gap-8 text-center md:text-left grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Just placeholders for partner logos - using text for now to keep it clean */}
            <h3 className="text-xl font-bold text-slate-400">GLOBAL <span className="font-extrabold text-slate-600">LOGISTICS</span></h3>
            <h3 className="text-xl font-bold text-slate-400">FIN<span className="font-extrabold text-slate-600">TECH</span></h3>
            <h3 className="text-xl font-bold text-slate-400">MANU<span className="font-extrabold text-slate-600">FACTURE</span></h3>
            <h3 className="text-xl font-bold text-slate-400">TRADE<span className="font-extrabold text-slate-600">SAFE</span></h3>
            <h3 className="text-xl font-bold text-slate-400">ASIA<span className="font-extrabold text-slate-600">SOURCING</span></h3>
          </div>
        </div>
      </div>

      {/* Main Value Proposition Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5">
              Why WasanGroup?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Streamline your B2B sourcing
            </h2>
            <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
              We provide the digital infrastructure to help businesses discover products, verify suppliers, and manage supply chains efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((prop, index) => (
              <Card key={index} className="border-border/60 shadow-soft hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gray-50 group-hover:bg-white border border-gray-100 group-hover:border-gray-200 shadow-sm transition-all text-primary`}>
                    <prop.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{prop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-500 leading-relaxed">
                    {prop.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Souring Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Source direct from verified <span className="text-primary">Global Manufacturers</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cut out the middlemen and connect directly with ISO-certified factories. Negotiate better prices, customize your products, and ensure quality control—all from one dashboard.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Verified Credentials</h4>
                    <p className="text-sm text-slate-500">Every supplier undergoes a strict 5-step verification process.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Direct Chat & Video</h4>
                    <p className="text-sm text-slate-500">Communicate in real-time with auto-translation support.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/categories">
                  <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                    Start Sourcing Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Representation (Abstract UI) */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60 p-2">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  {/* Mock UI Elements */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="h-4 w-32 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-8 w-8 bg-blue-100 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 bg-white rounded-lg border border-slate-100 p-4 flex gap-4">
                      <div className="h-16 w-16 bg-slate-100 rounded-md"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                        <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-white rounded-lg border border-slate-100 p-4 flex gap-4 opacity-70">
                      <div className="h-16 w-16 bg-slate-100 rounded-md"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                        <div className="h-3 w-1/3 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Blob */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore Popular Categories</h2>
              <p className="text-slate-500">Find exactly what you need from our extensive catalog</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/categories" className="flex items-center text-primary font-semibold hover:underline">
                View All Categories <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-200 hover:border-primary hover:text-primary transition-colors" onClick={scrollLeft}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-slate-200 hover:border-primary hover:text-primary transition-colors" onClick={scrollRight}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="grid grid-rows-2 grid-flow-col gap-y-6 gap-x-8 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide py-4 scroll-smooth"
          >
            {categories.map((cat, idx) => (
              <Link key={idx} to="/categories" className="group flex flex-col items-center gap-3 min-w-[120px]">
                <div className="w-20 h-20 rounded-full border-[1.5px] border-slate-200 bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-primary group-hover:scale-105 group-hover:-translate-y-1">
                  <cat.icon className="w-8 h-8 text-slate-600 group-hover:text-primary transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors leading-tight px-1 max-w-[120px]">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/categories">
              <Button variant="outline" className="w-full">View All Categories</Button>
            </Link>
          </div>
        </div>
      </section>

      <DiscoverySection />

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ctaBanner})` }}
        />
        <div className="absolute inset-0 bg-slate-900/65" />

        <div className="relative container mx-auto px-4 text-center z-10">
          <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border-0 px-4 py-1 text-sm font-normal backdrop-blur-sm">
            Ready to scale?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Transform Your Supply Chain Today</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join over 200,000 businesses using WasanGroup to source faster, smarter, and safer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="min-w-48 h-14 text-lg font-bold bg-white text-slate-900 hover:bg-blue-50 hover:text-primary transition-all shadow-xl shadow-black/10">
                Get Started for Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="min-w-48 h-14 text-lg font-semibold bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/90"
              >
                Contact Sales
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