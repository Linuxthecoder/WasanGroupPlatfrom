import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Globe, User, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/wasan.png";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [userCountry, setUserCountry] = useState({ code: "IN", name: "India", flag: "🇮🇳" });
    const location = useLocation();

    // Function to convert country code to flag emoji
    const getFlagEmoji = (countryCode: string) => {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 20);

            // Always show search on inner pages, on home page wait for scroll
            // HIDE search on Top Ranking page
            if (location.pathname === '/top-ranking') {
                setShowSearch(false);
            } else if (location.pathname !== '/' || scrollY > 450) {
                setShowSearch(true);
            } else {
                setShowSearch(false);
            }
        };

        // Run immediately to set initial state based on path
        handleScroll();

        // Attempt to auto-detect country using a free API
        const detectCountry = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                if (data && data.country_code) {
                    setUserCountry({
                        code: data.country_code,
                        name: data.country_name,
                        flag: getFlagEmoji(data.country_code)
                    });
                }
            } catch (error) {
                console.error("Failed to detect location", error);
                // Fallback is already set to IN/India
            }
        };

        detectCountry();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const isHomePage = location.pathname === '/';

    // Dynamic Styles based on state
    // Dynamic Styles based on state
    const headerClass = isHomePage
        ? (isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm text-slate-700" // Home Scrolled
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent border-transparent text-white") // Home Top
        : "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm text-slate-700"; // Others

    const textColorClass = (isHomePage && !isScrolled) ? "text-white hover:text-white/90 drop-shadow-sm" : "text-slate-700 hover:text-primary";
    const subTextColorClass = (isHomePage && !isScrolled) ? "text-slate-200 drop-shadow-sm" : "text-slate-500";
    const iconColorClass = (isHomePage && !isScrolled) ? "text-white drop-shadow-sm" : "text-slate-600";
    const buttonGhostClass = (isHomePage && !isScrolled)
        ? "text-white hover:text-white hover:bg-white/10 drop-shadow-sm"
        : "text-slate-700 hover:text-primary hover:bg-transparent";

    return (
        <header className={`${headerClass} ${isHomePage ? 'fixed w-full' : 'sticky'} top-0 z-50 h-[72px] transition-all duration-300`}>
            <div className="container mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full gap-4">

                    {/* Left Section: Logo & Static Links */}
                    <div className="flex items-center gap-6 flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-3 h-full">
                            <img
                                src={logo}
                                alt="WasanGroup Logo"
                                className="h-36 w-auto object-contain relative top-1.5"
                                style={{ maxWidth: 'none' }}
                            />
                        </Link>

                        {/* Always Visible Left Links + Explore Products */}
                        <div className="hidden xl:flex items-center gap-3">
                            <Link to="/explore/marketplace/products">
                                <Button variant="ghost" className={`text-sm font-medium px-2 h-auto py-1 ${buttonGhostClass}`}>
                                    Explore Products
                                </Button>
                            </Link>
                            <Link to="/list-business" className={`text-sm font-medium whitespace-nowrap ${textColorClass}`}>
                                Sell on Wasan
                            </Link>
                            <Link to="/contact" className={`text-sm font-medium whitespace-nowrap ${textColorClass}`}>
                                Help Center
                            </Link>
                        </div>
                    </div>

                    {/* Central Section: Search Bar (Scroll Triggered or Always Visible on Marketplace) */}
                    <div className={`flex-1 flex justify-start pl-8 transition-all duration-500 ease-out transform ${showSearch ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 -translate-y-4 scale-95 invisible pointer-events-none'}`}>
                        <div className="relative w-full max-w-[400px] flex items-center group shadow-sm rounded-full border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="h-10 px-3 text-xs bg-transparent border-r border-slate-200 text-slate-700 font-semibold hover:bg-slate-100/50 rounded-l-full transition-colors flex items-center gap-1 shrink-0">
                                        Products <span className="text-[10px] text-slate-400">▼</span>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Products</DropdownMenuItem>
                                    <DropdownMenuItem>Suppliers</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Input
                                className="flex-1 h-10 border-0 focus-visible:ring-0 bg-transparent text-sm placeholder:text-slate-400 pl-3 text-slate-900"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button size="icon" className="h-8 w-8 mr-1 rounded-full bg-primary hover:bg-blue-600 transition-colors shadow-none shrink-0">
                                <Search className="w-4 h-4 text-white" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Section: Widgets & Auth */}
                    <div className="flex items-center gap-4 lg:gap-5 flex-shrink-0 ml-auto mr-6">

                        {/* Deliver To (Auto-Detected) */}
                        <div className="hidden lg:flex flex-col items-start leading-none cursor-pointer p-1 hover:bg-slate-100/10 rounded transition-colors group">
                            <span className={`text-[10px] mb-0.5 whitespace-nowrap ${subTextColorClass}`}>Deliver to:</span>
                            <div className={`flex items-center gap-1 text-sm font-bold ${textColorClass}`}>
                                <span className="text-base leading-none">{userCountry.flag}</span>
                                <span>{userCountry.code}</span>
                            </div>
                        </div>

                        {/* Language */}
                        <div className="hidden lg:flex items-center gap-2 cursor-pointer p-1 hover:bg-slate-100/10 rounded transition-colors group">
                            <Globe className={`w-5 h-5 ${iconColorClass}`} />
                            <div className="flex flex-col leading-none">
                                <span className={`text-[10px] mb-0.5 ${subTextColorClass}`}>English</span>
                                <span className={`text-xs font-bold ${textColorClass}`}>USD</span>
                            </div>
                        </div>

                        {/* Auth Dropdown - Merged Sign In & Join */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="rounded-full px-6 h-9 bg-primary hover:bg-blue-600 text-white font-bold shadow-md hover:shadow-lg transition-all text-xs sm:text-sm flex items-center gap-2 ml-10">
                                    <User className="w-4 h-4" />
                                    Join Now
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48 p-2">
                                <DropdownMenuItem asChild className="cursor-pointer">
                                    <Link to="/login" className="flex items-center gap-2 w-full font-medium">
                                        Sign In
                                    </Link>
                                </DropdownMenuItem>
                                <div className="h-px bg-slate-100 my-1"></div>
                                <DropdownMenuItem asChild className="cursor-pointer bg-blue-50 focus:bg-blue-100">
                                    <Link to="/signup" className="flex items-center gap-2 w-full font-bold text-primary">
                                        Create Account
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile Menu Toggle */}
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <Menu className={`w-6 h-6 ${iconColorClass}`} />
                        </Button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navigation;
