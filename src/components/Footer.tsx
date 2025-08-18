import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-8 w-8" />
              <span className="text-2xl font-bold">WasanGroup</span>
            </div>
            <p className="text-muted text-base leading-relaxed">
              Connecting global businesses with trusted Chinese manufacturers since 2024. Your gateway to reliable sourcing.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">For Buyers</h4>
            <ul className="space-y-3 text-muted">
              <li>
                <Link to="/suppliers" className="hover:text-background transition-colors text-base">
                  Find Suppliers
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-background transition-colors text-base">
                  Product Categories
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors text-base">
                  Trade Assurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors text-base">
                  Buyer Protection
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">For Suppliers</h4>
            <ul className="space-y-3 text-muted">
              <li>
                <Link to="/list-business" className="hover:text-background transition-colors text-base">
                  List Your Business
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors text-base">
                  Supplier Membership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors text-base">
                  Marketing Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors text-base">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-muted">
              <li>
                <a href="#" className="hover:text-background transition-colors text-base">
                  Help Center
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-background transition-colors text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors text-base">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors text-base">
                  Dispute Resolution
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-12 pt-8 text-center text-muted">
          <p className="text-base">
            &copy; 2024 WasanGroup. All rights reserved. | 
            <a href="#" className="hover:text-background transition-colors ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-background transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
