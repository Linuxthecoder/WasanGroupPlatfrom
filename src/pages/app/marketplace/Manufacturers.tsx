import { useState } from "react";
import { Search, Filter, MessageSquare, Star, ShieldCheck, MapPin, Building2, PlayCircle, ChevronRight, Trophy, Shirt, Shield, House, Car, Briefcase, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/LazyImage";
import Navigation from "../../../main/components/Navigation";
import Footer from "../../../main/components/Footer";
import { Link } from "react-router-dom";

// Mock Data for Manufacturers
import manufacturersData from "../../../json_files/manufacturers/data.json";

// Mock Data for Manufacturers
const manufacturers: any[] = manufacturersData;

const Manufacturers = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Navigation />
            <main className="flex-1 container max-w-7xl mx-auto px-4 lg:px-6 py-6 pb-20">

                {/* Page Navigation Tabs */}
                <div className="flex items-center gap-8 mb-8 overflow-x-auto pb-2">
                    <Link to="/explore/marketplace/products" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                        Products
                    </Link>
                    <Link to="/explore/marketplace/manufacturers" className="text-2xl font-bold text-blue-600 border-b-4 border-blue-600 pb-1 whitespace-nowrap">
                        Manufacturers
                    </Link>
                    <Link to="/explore/marketplace/worldwide" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                        Worldwide
                    </Link>
                    <Link to="/top-ranking" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                        Top Ranking
                    </Link>
                </div>

                {/* --- New Dashboard Top Section --- */}
                <div className="mb-12">
                    <div className="grid grid-cols-12 gap-4 h-auto lg:h-[400px]">

                        {/* 1. Source by Category (Col 2-3) */}
                        <div className="col-span-12 lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                            <div className="p-4 border-b border-slate-100">
                                <h3 className="font-extrabold text-slate-900 text-base">Source by category</h3>
                            </div>
                            <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                                {[
                                    { name: "Sports & Entertainment", icon: Trophy },
                                    { name: "Apparel & Accessories", icon: Shirt },
                                    { name: "Safety", icon: Shield },
                                    { name: "Home & Garden", icon: House },
                                    { name: "Vehicle Parts", icon: Car },
                                    { name: "Luggage & Bags", icon: Briefcase },
                                    { name: "All categories", icon: LayoutGrid },
                                ].map((cat, i) => (
                                    <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors group ${i === 6 ? 'mt-1' : ''}`}>
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-slate-200 transition-all">
                                            <cat.icon className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 flex-1 truncate">{cat.name}</span>
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Middle Section (Col 4-5) - Samples & Q&A */}
                        <div className="col-span-12 lg:col-span-3 lg:col-start-3 flex flex-col gap-4">
                            {/* Top: Get Samples */}
                            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex-1">
                                <h3 className="font-bold text-slate-900 mb-3 text-sm">Get samples</h3>
                                <div className="grid grid-cols-2 gap-3 h-[calc(100%-32px)]">
                                    <div className="bg-slate-50 rounded-lg p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=100&q=80" className="w-16 h-16 object-contain mb-2 mix-blend-multiply" />
                                        <span className="text-xs font-medium text-slate-600">Trending</span>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
                                        <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=100&q=80" className="w-16 h-16 object-contain mb-2 mix-blend-multiply" />
                                        <span className="text-xs font-medium text-slate-600">Newly released</span>
                                    </div>
                                </div>
                            </div>
                            {/* Bottom: Factory LIVE */}
                            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex-1">
                                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                                    <span className="w-4 h-4 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">▶</span> Factory LIVE Q&A
                                </h3>
                                <div className="grid grid-cols-2 gap-3 h-[calc(100%-32px)]">
                                    <div className="bg-slate-900 rounded-lg relative overflow-hidden group cursor-pointer">
                                        <img src="https://images.unsplash.com/photo-1565514020176-db79237072fd?auto=format&fit=crop&w=200&q=80" className="opacity-60 group-hover:opacity-80 transition-opacity w-full h-full object-cover" />
                                        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                                            <span className="text-[10px] text-white font-bold block truncate">Factory Tour</span>
                                        </div>
                                    </div>
                                    <div className="bg-slate-900 rounded-lg relative overflow-hidden group cursor-pointer">
                                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&q=80" className="opacity-60 group-hover:opacity-80 transition-opacity w-full h-full object-cover" />
                                        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                                            <span className="text-[10px] text-white font-bold block truncate">Q&A Session</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Top-Ranking (Col 6-7) list */}
                        <div className="col-span-12 lg:col-span-4 lg:col-start-6 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col">
                            <h3 className="font-bold text-slate-900 mb-4 text-sm">Top-ranking manufacturers</h3>
                            <div className="grid grid-cols-2 gap-4 flex-1">
                                {[
                                    { title: "Most popular", img: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=200" },
                                    { title: "Quick response", img: "https://images.unsplash.com/photo-1542219551-9c5803e3deb0?auto=format&fit=crop&w=200" },
                                    { title: "Leading factories", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=200" },
                                    { title: "Best sellers", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=200" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-50 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors group">
                                        <img src={item.img} className="h-20 w-auto object-contain mb-2 mix-blend-multiply group-hover:scale-105 transition-transform" />
                                        <span className="text-xs font-medium text-slate-600 text-center">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Right side User & RFQ (Col 8) */}
                        <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-col gap-4">
                            {/* User Card */}
                            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Welcome!</p>
                                        <p className="text-sm font-bold text-slate-900">Guest</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-4">
                                    <Link to="/login" className="flex-1">
                                        <Button className="w-full bg-primary hover:bg-blue-700 h-8 text-xs font-bold rounded-full">Sign in</Button>
                                    </Link>
                                    <Link to="/signup" className="flex-1">
                                        <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 h-8 text-xs font-bold rounded-full">Join for free</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* RFQ Card */}
                            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex-1 flex flex-col justify-center text-center">
                                <h4 className="font-bold text-slate-900 mb-2 text-sm">One request, multiple quotes</h4>
                                <p className="text-xs text-slate-500 mb-4">Get quotes from verified suppliers fast.</p>
                                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full h-9 text-xs">
                                    Request for Quotation
                                </Button>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Filter Bar (Pills) */}
                    <div className="mt-4 bg-white rounded-xl border border-slate-200 p-3 shadow-sm flex items-center gap-4 overflow-x-auto text-sm">
                        <span className="font-bold text-slate-900 whitespace-nowrap">All categories</span>
                        {["Sports & Entertainment", "Apparel & Accessories", "Safety", "Home & Garden", "Vehicle Parts", "Luggage"].map(c => (
                            <span key={c} className="text-slate-600 whitespace-nowrap hover:text-primary cursor-pointer">{c}</span>
                        ))}
                        <div className="h-4 w-px bg-slate-200 mx-2" />
                        <span className="text-xs text-slate-500 whitespace-nowrap px-3 py-1 bg-slate-100 rounded-full border border-slate-200">Sample-based customization</span>
                        <span className="text-xs text-slate-500 whitespace-nowrap px-3 py-1 bg-slate-100 rounded-full border border-slate-200">Quality management</span>
                    </div>
                </div>
                {/* Main Manufacturers List - Full Width */}
                <div className="space-y-4">
                    {manufacturers.map((supplier) => (
                        <div key={supplier.id} className="bg-white rounded border border-slate-200 p-5 hover:shadow-md transition-shadow">

                            {/* Header: Company Info & Actions */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4 mb-4">
                                <div className="flex gap-4">
                                    {/* Logo Placeholder */}
                                    <div className="w-12 h-12 border border-slate-200 rounded flex items-center justify-center bg-slate-50 text-slate-400 font-bold text-xs shrink-0">
                                        LOGO
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 border-b border-slate-900 leading-tight inline-block cursor-pointer hover:text-primary mb-1">
                                            {supplier.name}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                            <span className="font-bold text-blue-600 bg-blue-50 px-1 rounded flex items-center gap-1">
                                                <ShieldCheck className="w-3 h-3" /> Verified
                                            </span>
                                            <span>{supplier.yearsInBusiness} yrs</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                            <span>70+ staff</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                            <span>2,300+ m²</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                            <span>US$10,000+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                                    <button className="text-slate-400 hover:text-red-500">
                                        <Star className="w-5 h-5" /> {/* Using Star as placeholder for Heart/Favorite */}
                                    </button>
                                    <Button variant="outline" className="rounded-full h-8 text-xs font-bold px-4 border-slate-300 text-slate-700 hover:bg-slate-50">
                                        Chat now
                                    </Button>
                                    <Button variant="outline" className="rounded-full h-8 text-xs font-bold px-4 border-slate-300 text-slate-700 hover:bg-slate-50">
                                        Contact us
                                    </Button>
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                                {/* Left: Ratings & Capabilities (Col 1-3) */}
                                <div className="lg:col-span-3 space-y-6">
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 mb-1">Rating and reviews</div>
                                        <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                                            {supplier.rating}/5 <span className="text-slate-500 font-normal underline cursor-pointer">({supplier.reviews} reviews)</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-500 mb-1">Factory capabilities</div>
                                        <ul className="space-y-1">
                                            {["Low MOQ for customization", "On-time delivery 100.0%", `Response time ${supplier.responseTime}`].map((cap, i) => (
                                                <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                                                    <span className="text-slate-400">•</span> {cap}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Middle: Product Thumbnails (Col 4-8) */}
                                <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                                    {supplier.images.map((img, i) => (
                                        <div key={i} className="group cursor-pointer">
                                            <div className="bg-slate-100 rounded-lg aspect-square mb-2 overflow-hidden border border-slate-100">
                                                <LazyImage src={img} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform" />
                                            </div>
                                            <div className="font-bold text-slate-900 text-xs">$1.80-2</div>
                                            <div className="text-[10px] text-slate-500">Min. order: 20 pieces</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Right: Factory Image (Col 9-12) */}
                                <div className="lg:col-span-4">
                                    <div className="w-full h-full min-h-[160px] bg-slate-100 rounded-lg relative overflow-hidden group">
                                        <LazyImage src={supplier.factoryImage} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">VR</div>
                                        <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                            VR
                                        </div>
                                        <div className="absolute bottom-2 left-12 bg-black/50 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                            📷 1/22
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                {/* End Main List, removing old sidebar wrapper */}
            </main >
            <Footer />
        </div >
    );
};

export default Manufacturers;
