import logo from "@/assets/wasan.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative mt-20">
      {/* Floating CTA Card */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative -mb-20 border border-white/10">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Ready to scale your business?
              </h3>
              <p className="text-slate-300 text-base md:text-lg max-w-xl">
                Join thousands of businesses connecting with trusted manufacturers today.
              </p>
            </div>
            <Link
              to="/signup"
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 whitespace-nowrap transform hover:-translate-y-1"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <footer className="bg-foreground text-muted pt-28 pb-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-10 mb-8">

            {/* Brand Column */}
            <div className="md:col-span-4 lg:col-span-4 space-y-1">
              <Link to="/" className="block">
                <img
                  src={logo}
                  alt="WasanGroup Logo"
                  className="h-72 w-auto object-contain -mt-12 -mb-20"
                  style={{ maxWidth: '400px' }}
                />
              </Link>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed max-w-sm relative z-10 pl-2">
                  Connecting global businesses with trusted Chinese manufacturers since 2024. Your gateway to reliable sourcing.
                </p>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
              {/* Column 1 */}
              <div>
                <h4 className="text-white font-semibold mb-6">For Buyers</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to="/suppliers" className="hover:text-white transition-colors">
                      Find Suppliers
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories" className="hover:text-white transition-colors">
                      Product Categories
                    </Link>
                  </li>
                  <li>
                    <Link to="/app/marketplace" className="hover:text-white transition-colors">
                      Browse Marketplace
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Trade Assurance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Buyer Protection
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="text-white font-semibold mb-6">For Suppliers</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to="/list-business" className="hover:text-white transition-colors">
                      List Your Business
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Supplier Membership
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Marketing Tools
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Success Stories
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="text-white font-semibold mb-6">Support & Legal</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} WasanGroup. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;