import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, TrendingUp, Users, Globe } from "lucide-react";
import heroImage from "@/assets/professional-hero.png"; // Ensure path is correct

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
      style={{ minHeight: "90vh" }}
    >
      {/* Background Image with Professional Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text & Search */}
          <div
            className={`space-y-8 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
          >


            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
              Connect with
              <span className="block text-accent mt-2">
                Verified Global Suppliers
              </span>
              for Your Business
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg text-gray-200 leading-relaxed max-w-xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              Empowering businesses worldwide with direct access to verified suppliers,
              seamless sourcing, and end-to-end trade solutions.
            </p>

            {/* Search Bar - Refined */}
            <div
              className={`relative max-w-2xl backdrop-blur-md bg-white/10 rounded-2xl p-2 border border-white/20 shadow-2xl transition-all duration-500 !mt-6 ${searchFocused ? "bg-white/15 border-white/30" : ""
                }`}
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300"
                    aria-hidden="true"
                  />
                  <Input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="pl-12 h-12 bg-transparent text-white placeholder:text-gray-400 text-lg border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-accent/25"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Popular Categories */}
            <div
              className={`flex flex-wrap items-center gap-3 transition-all duration-700 !mt-3 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <span className="text-gray-300 text-sm font-medium">Popular:</span>
              {["Electronics", "Textiles", "Machinery", "Automotive"].map((category, index) => (
                <button
                  key={category}
                  className="text-sm text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-lg border border-transparent hover:border-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Stats Cards - Vertical Stack for professional look */}
          <div className="hidden lg:flex flex-col gap-5 items-end justify-center mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`w-72 backdrop-blur-md bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-500 group cursor-default ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                  }`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;