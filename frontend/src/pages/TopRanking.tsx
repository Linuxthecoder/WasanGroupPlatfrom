import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Filter, Search, Star, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const TopRanking = () => {
    // Mock Data for Top Ranking Products
    const products = [
        {
            id: 1,
            title: "Industrial Heavy Duty Excavator",
            price: "$25,000 - $35,000",
            moq: "1 Unit",
            rating: 4.9,
            reviews: 128,
            supplier: "XCMG Machinery Co.",
            verified: true,
            image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=400",
            badge: "Top Seller",
            category: "Heavy Machinery"
        },
        {
            id: 2,
            title: "Commercial Solar Panel System 500W",
            price: "$120 - $150",
            moq: "50 Pieces",
            rating: 4.8,
            reviews: 342,
            supplier: "GreenEnergy Tech",
            verified: true,
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=400",
            badge: "Eco Choice",
            category: "Energy"
        },
        {
            id: 3,
            title: "High Precision CNC Lathe Machine",
            price: "$12,500 - $18,000",
            moq: "1 Set",
            rating: 4.7,
            reviews: 89,
            supplier: "Shenzhen Precision Tools",
            verified: true,
            image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=400", // placeholder matching lens/tech vibe but using industrial if pos
            badge: "Hot",
            category: "Machinery"
        },
        {
            id: 4,
            title: "Wholesale Cotton T-Shirts Blank",
            price: "$2.50 - $4.00",
            moq: "100 Pieces",
            rating: 4.6,
            reviews: 1205,
            supplier: "Global Textiles Ltd.",
            verified: true,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400",
            badge: "Bulk Deal",
            category: "Apparel"
        },
        {
            id: 5,
            title: "Smart Warehouse Logistics Robot",
            price: "$8,000 - $12,000",
            moq: "2 Units",
            rating: 5.0,
            reviews: 45,
            supplier: "RoboTech Solutions",
            verified: true,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
            badge: "Innovation",
            category: "Robotics"
        },
        {
            id: 6,
            title: "Packaging Cardboard Boxes Custom",
            price: "$0.10 - $0.50",
            moq: "1000 Pieces",
            rating: 4.8,
            reviews: 890,
            supplier: "PackIt Verified",
            verified: true,
            image: "https://images.unsplash.com/photo-1606900262276-2cb335832a82?auto=format&fit=crop&q=80&w=400", // generic box/warehouse
            badge: "Best Value",
            category: "Packaging"
        },
        {
            id: 7,
            title: "4K Security Camera System",
            price: "$45.00 - $60.00",
            moq: "10 Sets",
            rating: 4.7,
            reviews: 560,
            supplier: "SecureVision Inc.",
            verified: true,
            image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400",
            badge: "Trending",
            category: "Security"
        },
        {
            id: 8,
            title: "Hydraulic Pump High Pressure",
            price: "$200 - $350",
            moq: "5 Units",
            rating: 4.5,
            reviews: 112,
            supplier: "FluidPower Experts",
            verified: true,
            image: "https://images.unsplash.com/photo-1581166397057-235af2b7c653?auto=format&fit=crop&q=80&w=400", // industrial part similar
            badge: null,
            category: "Industrial Parts"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
            <Navigation />

            {/* Hero Header */}
            <div className="bg-slate-900 border-b border-slate-800 text-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                                <TrendingUp className="w-4 h-4" /> Global Best Sellers
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Top Ranking Products</h1>
                            <p className="text-slate-400 max-w-xl text-lg">
                                Discover the most popular products sourced by businesses worldwide. High demand, verified quality, and competitive pricing.
                            </p>
                        </div>

                        {/* Search Bar in Hero */}
                        <div className="w-full md:w-auto min-w-[300px] lg:min-w-[400px]">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <Input
                                    placeholder="Search top ranking products..."
                                    className="pl-10 h-12 bg-white/10 border-white/10 text-white placeholder:text-slate-400 focus-visible:ring-blue-500 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 space-y-8">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Filter className="w-4 h-4" /> Filters
                            </h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Categories</label>
                                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                                        <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Machinery</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Consumer Electronics</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Apparel</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Industrial Parts</label>
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Price Range</label>
                                    <div className="flex items-center gap-2">
                                        <Input placeholder="Min" className="h-8 text-sm" />
                                        <span className="text-slate-400">-</span>
                                        <Input placeholder="Max" className="h-8 text-sm" />
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Supplier Type</label>
                                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                                        <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Trade Assurance</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> Verified Supplier</label>
                                        <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300" /> &lt; 1h Response Time</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">Apply Filters</Button>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <Card key={product.id} className="group overflow-hidden border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                                        {product.badge && (
                                            <Badge className={`absolute top-3 left-3 z-10 
                                        ${product.badge === 'Top Seller' ? 'bg-orange-500 hover:bg-orange-600' :
                                                    product.badge === 'Hot' ? 'bg-red-500 hover:bg-red-600' :
                                                        'bg-blue-500 hover:bg-blue-600'
                                                }`}>
                                                {product.badge}
                                            </Badge>
                                        )}
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                                            <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs h-8">
                                                Quick View
                                            </Button>
                                        </div>
                                    </div>

                                    <CardContent className="p-4">
                                        <Link to="#" className="block">
                                            <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {product.title}
                                            </h3>
                                        </Link>

                                        <div className="flex items-baseline gap-2 mb-3">
                                            <span className="text-lg font-bold text-slate-900">{product.price}</span>
                                            {product.moq && <span className="text-xs text-slate-500 font-medium">/ {product.moq.split(" ")[0]} units</span>}
                                        </div>

                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-200'}`} />
                                                ))}
                                            </div>
                                            <span className="text-xs text-slate-500 font-medium">{product.rating} ({product.reviews} reviews)</span>
                                        </div>

                                        <Separator className="mb-3" />

                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-1.5 text-slate-600 truncate max-w-[70%]">
                                                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                                                <span className="truncate">{product.supplier}</span>
                                            </div>
                                            <div className="text-slate-400">
                                                MOQ: <span className="text-slate-600 font-medium">{product.moq}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Button variant="outline" size="lg" className="min-w-[200px]">Load More Products</Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TopRanking;
