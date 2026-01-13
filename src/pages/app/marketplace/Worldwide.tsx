import { useState } from "react";
import { Search, Filter, Globe, ChevronRight, TrendingUp, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "../../../main/components/Navigation";
import Footer from "../../../main/components/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

import worldwideData from "../../../json_files/worldwide/data.json";

// Mock Data
const { hubs, topViewed, inspirationProducts } = worldwideData;

const Worldwide = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Navigation />
            <main className="flex-1 container max-w-7xl mx-auto px-4 lg:px-6 py-6 pb-20">

                {/* Page Navigation Tabs */}
                <div className="flex items-center gap-8 mb-8 overflow-x-auto pb-2">
                    <Link to="/explore/marketplace/products" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                        Products
                    </Link>
                    <Link to="/explore/marketplace/manufacturers" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                        Manufacturers
                    </Link>
                    <Link to="/explore/marketplace/worldwide" className="text-2xl font-bold text-blue-600 border-b-4 border-blue-600 pb-1 whitespace-nowrap">
                        Worldwide
                    </Link>
                    <Link to="/top-ranking" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                        Top Ranking
                    </Link>
                </div>

                {/* Section 1: Global Hubs Grid */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-primary" /> Global Industry Hubs
                        </h2>
                        <Button variant="link" className="text-primary text-sm font-semibold">View All Regions</Button>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
                        {hubs.map((hub, idx) => (
                            <div key={idx} className="min-w-[200px] md:min-w-[240px] h-40 rounded-xl relative overflow-hidden cursor-pointer group snap-start">
                                <img src={hub.image} alt={hub.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <img src={hub.flag} alt={hub.country} className="w-5 h-3.5 object-cover rounded-[2px]" />
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">{hub.country}</span>
                                    </div>
                                    <h3 className="text-white font-bold leading-tight">{hub.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Top Viewed Products */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-500" /> Top-viewed Products
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {topViewed.map((item, idx) => (
                            <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="w-full aspect-[4/3] bg-slate-100 rounded-lg relative mb-6">
                                    <img src={item.image} className="w-full h-full object-contain mix-blend-multiply p-4 group-hover:scale-105 transition-transform duration-500" />

                                    {/* Hexagon TOP Badge */}
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 drop-shadow-sm">
                                        <div
                                            className="w-10 h-11 bg-[#222] flex items-center justify-center text-[10px] font-bold text-[#D4AF37]"
                                            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                                        >
                                            TOP
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h3 className="font-bold text-slate-900 mb-1 leading-tight">{item.title}</h3>
                                    <p className="text-xs text-slate-500 font-medium">Hot selling</p>
                                </div>
                            </div>
                        ))}
                        {/* Add a dummy item to match grid if needed or leave as is. The user just showed one card example. */}
                    </div>
                </section>

                {/* Section 3: Inspiration */}
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-500" /> Get product inspiration
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {inspirationProducts.map(product => (
                            // Using a simplified version or the imported ProductCard if path is correct. 
                            // Since we didn't export ProductCard from Marketplace properly (it was internal or distinct file?), I'll assume we need to import it or inline it. 
                            // Wait, I saw ProductCard in `src/pages/app/Marketplace.tsx` imports: `import ProductCard from "./components/ProductCard";`
                            // So I will assume the path is similar. Let's start with correct import path at top.
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Worldwide;
