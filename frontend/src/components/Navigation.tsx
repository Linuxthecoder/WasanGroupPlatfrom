import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/wasan.png";

const Navigation = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <header className="bg-background/60 backdrop-blur-md sticky top-0 z-50 h-16 transition-all duration-300">
            <div className="container mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 h-full">
                        <img
                            src={logo}
                            alt="WasanGroup Logo"
                            className="h-36 w-auto object-contain ml-6 relative top-1.5"
                            style={{ maxWidth: 'none' }}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="flex items-center justify-between flex-1 ml-10">
                        {/* Left Navigation Links */}
                        <div className="flex items-center gap-8">
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

                        {/* Right Navigation */}
                        <div className="flex items-center gap-4">
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
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation;