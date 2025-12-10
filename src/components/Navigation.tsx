import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, MessageSquare, Building, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/Nav-bar-logo.png";

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-md border-b shadow-sm sticky top-0 z-50 h-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 h-full">
            {/* ✅ Replace Globe with your logo */}
            <img
              src={logo}
              alt="WasanGroup Logo"
              className="h-36 w-auto object-contain ml-6 relative top-2"
              style={{ maxWidth: 'none' }}
            />
          </Link>
          {/* Left Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 ml-10">
            <Link
              to="/list-business"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Sell on Wasan
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Help Center
            </Link>
          </div>

          <div className="flex-1"></div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:text-primary hover:bg-transparent px-2">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 bg-primary text-white font-semibold">
                Join for Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-6">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <Link
                    to="/"
                    className="flex items-center space-x-3 mb-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {/* ✅ Same logo in mobile menu */}
                    <img
                      src={logo}
                      alt="WasanGroup Logo"
                      className="h-12 w-auto object-contain"
                      style={{ maxWidth: '180px' }} // Limit width to prevent overflow
                    />
                  </Link>

                  <Link
                    to="/categories"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Categories
                  </Link>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full h-12 justify-start">
                      <MessageSquare className="h-5 w-5 mr-3" />
                      Contact
                    </Button>
                  </Link>
                  <Link
                    to="/list-business"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full h-12 justify-start">
                      <Building className="h-5 w-5 mr-3" />
                      List Your Business
                    </Button>
                  </Link>
                  <div className="border-t pt-6 space-y-3">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full h-12 justify-start">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full h-12 justify-start">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search suppliers, products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base border-2 focus:border-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;