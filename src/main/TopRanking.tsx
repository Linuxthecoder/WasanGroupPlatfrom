import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, ChevronRight, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import LazyImage from "@/components/LazyImage";

import topRankingData from "@/json_files/top_ranking/data.json";
import bannerImg from "@/assets/top_ranking_banner.png";


const TopRanking = () => {
    // State
    const [activeTab, setActiveTab] = useState("All");
    const [activeFilter, setActiveFilter] = useState("Hot selling");
    const [rankingScope, setRankingScope] = useState("Global rankings");
    const [searchQuery, setSearchQuery] = useState("");

    // Data (implicitly updated by HMR if JSON changes)
    const allCategories: any[] = topRankingData;

    // Derived: Get unique parent categories for tabs
    const tabs = ["All", ...new Set(allCategories.map(c => c.parentCategory).filter(Boolean))];

    // Filter Logic
    const filteredCategories = allCategories
        .filter(cat => {
            // Tab Filter
            if (activeTab !== "All" && cat.parentCategory !== activeTab) return false;

            // Search Filter (checks category title or any product name)
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const matchesCategory = cat.title.toLowerCase().includes(q);
                const matchesProduct = cat.products.some((p: any) => p.name?.toLowerCase().includes(q));
                return matchesCategory || matchesProduct;
            }

            return true;
        })
        .map(cat => {
            // Sort products based on active filter
            let sortedProducts = [...cat.products];

            // If there is a search query, filter the products specifically
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                // If category title matches, maybe keep all? Or restricting is better for search.
                // Let's restrict to matching products if the category title DOESN'T match.
                // If category matches, show all.
                if (!cat.title.toLowerCase().includes(q)) {
                    sortedProducts = sortedProducts.filter(p => p.name?.toLowerCase().includes(q));
                }
            }

            if (activeFilter === "Hot selling") {
                sortedProducts.sort((a, b) => (b.orders || 0) - (a.orders || 0));
            } else if (activeFilter === "Most popular") {
                // Assuming "Most popular" might be based on rating * orders or just orders
                sortedProducts.sort((a, b) => (b.orders || 0) - (a.orders || 0));
            } else if (activeFilter === "Best reviewed") {
                sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            }

            return { ...cat, products: sortedProducts };
        })
        .filter(cat => cat.products.length > 0);

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
            <Navigation />

            {/* Hero Header */}
            <div className="relative h-[300px] w-full bg-[#EAE5DD] overflow-hidden flex flex-col items-center justify-center text-center">
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 w-full h-full bg-center opacity-100"
                    style={{
                        backgroundImage: `url(${bannerImg})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Top ranking</h1>

                    {/* Search Bar for Top Ranking */}
                    <div className="w-full max-w-md mx-auto relative group">
                        <Input
                            placeholder="Search top ranking products..."
                            className="h-12 pl-11 pr-4 rounded-full border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm focus:bg-white focus:ring-2 focus:ring-slate-900 transition-all text-slate-900 placeholder:text-slate-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                        <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-colors">
                            Search
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Global Rankings Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="h-10 px-6 rounded-full bg-white border border-slate-900 text-slate-900 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
                                    {rankingScope} <ChevronDown className="w-4 h-4" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-48 bg-white border-slate-200 shadow-lg rounded-xl p-1">
                                {["Global rankings", "Regional rankings", "Local rankings"].map((scope) => (
                                    <DropdownMenuItem
                                        key={scope}
                                        onClick={() => setRankingScope(scope)}
                                        className={`cursor-pointer rounded-lg text-sm font-medium ${rankingScope === scope ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                                    >
                                        {scope}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* All Categories Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="h-10 px-6 rounded-full bg-white border border-slate-900 text-slate-900 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
                                    {activeTab === "All" ? "All categories" : activeTab} <ChevronDown className="w-4 h-4" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-56 bg-white border-slate-200 shadow-lg rounded-xl p-1 max-h-[300px] overflow-y-auto">
                                <DropdownMenuItem
                                    onClick={() => setActiveTab("All")}
                                    className={`cursor-pointer rounded-lg text-sm font-medium ${activeTab === "All" ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                                >
                                    All categories
                                </DropdownMenuItem>
                                {tabs.filter(t => t !== "All").map((tab: any) => (
                                    <DropdownMenuItem
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`cursor-pointer rounded-lg text-sm font-medium ${activeTab === tab ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                                    >
                                        {tab}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 md:px-6 py-8">

                {/* 1. Category Tabs */}
                <div className="flex items-center justify-center gap-6 border-b border-slate-200 mb-8 overflow-x-auto pb-1 no-scrollbar">
                    {tabs.map((tab: any, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm font-medium whitespace-nowrap pb-3 border-b-2 transition-colors ${activeTab === tab ? 'text-slate-900 border-slate-900 font-bold' : 'text-slate-500 border-transparent hover:text-slate-700'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 2. Filter Pills */}
                <div className="flex gap-4 mb-8">
                    {["Hot selling", "Most popular", "Best reviewed"].map((filter, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${activeFilter === filter ? 'bg-white border-slate-900 text-slate-900 shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* 3. Category Ranking Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1600px] mx-auto">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((cat) => (
                            <div key={cat.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                                <h3 className="font-bold text-slate-900 text-2xl mb-6 truncate" title={cat.title}>{cat.title}</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {cat.products.slice(0, 3).map((p: any, idx: number) => (
                                        <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
                                            <div className="relative aspect-square bg-[#F8FAFC] rounded-xl overflow-hidden border border-slate-100 shadow-inner">
                                                {/* Rank Badge - Ribbon Style */}
                                                <div
                                                    className={`absolute top-0 left-2 w-8 h-10 flex items-start justify-center pt-1.5 text-sm font-bold text-white z-10 shadow-md
                                                    ${idx === 0 ? 'bg-[#FFB800]' :
                                                            idx === 1 ? 'bg-[#9CA3AF]' :
                                                                idx === 2 ? 'bg-[#F97316]' : 'bg-slate-400'}`}
                                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}
                                                >
                                                    #{idx + 1}
                                                </div>
                                                <LazyImage
                                                    src={p.image}
                                                    className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out"
                                                />
                                            </div>
                                            <div className="space-y-1 px-1">
                                                <div className="text-lg font-bold text-slate-900 leading-tight">{p.price}</div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">MOQ: {p.moq}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-slate-400 text-xl font-medium">
                            No categories found matching your criteria.
                        </div>
                    )}
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default TopRanking;
