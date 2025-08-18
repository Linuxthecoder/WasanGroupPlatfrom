import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, TrendingUp, Users, Globe } from "lucide-react";
import heroImage from "@/assets/hero-trade.jpg"; // Ensure path is correct

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { icon: Users, label: "Verified Suppliers", value: "50,000+" },
    { icon: Globe, label: "Countries", value: "180+" },
    { icon: TrendingUp, label: "Monthly Inquiries", value: "1M+" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.6) saturate(1.1)",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text & Search */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Trust Badge */}
            <div
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Trusted by 100,000+ Global Buyers</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
              The Leading
              <span
                className="block bg-gradient-to-r from-yellow-200 via-yellow-50 to-orange-200 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient-text 3s ease-in-out infinite",
                }}
              >
                B2B E-Commerce
              </span>
              Platform for Global Trade
            </h1>

            {/* Subtitle */}
            <p
              className={`text-sm md:text-base text-blue-100 leading-relaxed max-w-lg transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Empowering businesses worldwide with direct access to verified suppliers, 
              seamless sourcing, and end-to-end trade solutions — all in one trusted platform.
            </p>

            {/* Glassmorphic Search Bar */}
            <div
              className={`backdrop-blur-xl bg-white/20 rounded-2xl p-6 border border-white/30 shadow-2xl transition-all duration-500 hover:shadow-3xl ${
                searchFocused ? "ring-2 ring-white/50 scale-102" : ""
              }`}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Find Suppliers Now</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                  <Search
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70"
                    aria-hidden="true"
                  />
                  <Input
                    type="text"
                    placeholder="Search products or suppliers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="pl-12 h-12 bg-white/20 text-white placeholder:text-white/60 text-lg rounded-xl border border-white/30 focus:ring-2 focus:ring-white/50 focus:shadow-xl transition-all"
                    style={{ backdropFilter: "blur(4px)" }}
                  />
                </div>
                <Button
                  variant="default"
                  size="lg"
                  className="h-12 px-8 rounded-xl bg-gradient-to-r from-white to-gray-100 text-primary hover:from-white hover:to-white hover:scale-105 transition-all duration-300 font-medium group"
                >
                  Search Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
              {/* Popular Categories - Glass Effect on Hover */}
            <div
             className={`flex flex-wrap items-center gap-2 transition-all duration-700 ${
             isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
           }`}
  style={{ transitionDelay: "600ms" }}
>
  <span className="text-blue-100 text-sm">Popular:</span>
  {["Electronics", "Textiles", "Machinery", "Automotive"].map((category, index) => (
    <Button
      key={category}
      variant="ghost"
      size="sm"
      style={{ transitionDelay: `${600 + index * 80}ms` }}
      className="text-white backdrop-blur-none transition-all duration-300 text-xs px-3 py-1 rounded-full
                 hover:backdrop-blur-sm hover:bg-white/10 hover:border hover:border-white/20 
                 hover:shadow-lg hover:shadow-white/10
                 active:translate-y-px
                 hover:text-white"
    >
      {category}
    </Button>
  ))}
</div>
          </div>

     {/* Right: Stats Cards (moved further up) */}
<div className="space-y-4 mt-2 lg:-mt-4">
  {stats.map((stat, index) => (
    <div
      key={index}
      className={`backdrop-blur-sm bg-white/15 rounded-xl p-5 border border-white/30 hover:bg-white/20 transition-all duration-400 transform hover:-translate-y-0.5 hover:shadow-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${800 + index * 120}ms` }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white/25 rounded-lg flex items-center justify-center">
          <stat.icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-xl font-bold text-white">{stat.value}</p>
          <p className="text-blue-100 text-xs">{stat.label}</p>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>

      {/* Inline Animations */}
      <style>{`
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(15px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(15px) translateX(20px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;