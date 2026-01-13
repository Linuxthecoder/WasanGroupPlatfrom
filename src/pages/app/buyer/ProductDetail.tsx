import { useState } from "react";
import {
    Star,
    MapPin,
    ShieldCheck,
    MessageSquare,
    Truck,
    Clock,
    Heart,
    Share2,
    ShoppingCart,
    CheckCircle2,
    ChevronRight,
    Info,
    ShoppingBag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";

const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(100);

    const product = {
        id: "p1",
        name: "Industrial Grade Wireless Earbuds Pro with Noise Cancellation and Long Battery Life",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
            "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=800&q=80",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
            "https://images.unsplash.com/photo-1572569028738-411a097746fc?w=800&q=80"
        ],
        pricing: [
            { minInfo: "10-99 Pieces", price: "$15.00" },
            { minInfo: "100-499 Pieces", price: "$12.50" },
            { minInfo: "500+ Pieces", price: "$10.00" }
        ],
        moq: 10,
        rating: 4.8,
        reviews: 124,
        supplier: {
            name: "Shenzhen Audio Tech Co., Ltd.",
            verified: true,
            years: 8,
            location: "Guangdong, China",
            responseRate: "98%",
            transactions: "5000+"
        },
        specs: [
            { label: "Model Number", value: "WA-2024-PRO" },
            { label: "Bluetooth Version", value: "5.3" },
            { label: "Battery Life", value: "30 Hours" },
            { label: "Waterproof Standard", value: "IPX7" },
            { label: "Material", value: "ABS + PC" },
            { label: "Certification", value: "CE, FCC, RoHS" }
        ]
    };

    return (
        <div className="flex h-screen bg-[#F0F2F5]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title="Product Details" />

                <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8 max-w-7xl">
                        {/* Breadcrumb - Mock */}
                        <div className="flex items-center text-sm text-slate-500 mb-6 gap-2">
                            <span>Marketplace</span>
                            <ChevronRight className="w-4 h-4" />
                            <span>Consumer Electronics</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-900 font-medium">Wireless Earbuds</span>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 mb-12">
                            {/* Product Gallery */}
                            <div className="w-full lg:w-2/5 space-y-4">
                                <div className="aspect-square bg-white rounded-2xl border border-slate-200 overflow-hidden relative group">
                                    <img
                                        src={product.images[selectedImage]}
                                        alt="Product View"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white shadow-sm">
                                            <Heart className="w-5 h-5 text-slate-600" />
                                        </Button>
                                        <Button size="icon" variant="secondary" className="rounded-full bg-white/90 hover:bg-white shadow-sm">
                                            <Share2 className="w-5 h-5 text-slate-600" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex gap-4 overflow-x-auto pb-2">
                                    {product.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(idx)}
                                            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${selectedImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-slate-300'}`}
                                        >
                                            <img src={img} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="w-full lg:w-3/5 space-y-6">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                                        {product.name}
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center text-yellow-500 font-bold">
                                            <Star className="w-4 h-4 fill-current mr-1" />
                                            {product.rating}
                                        </div>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-600">{product.reviews} Reviews</span>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-600">{product.supplier.transactions} Orders</span>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {product.pricing.map((tier, idx) => (
                                            <div key={idx} className={`p-3 rounded-lg border ${idx === 1 ? 'border-primary/30 bg-primary/5' : 'border-slate-100 bg-slate-50'}`}>
                                                <p className="text-sm text-slate-500 mb-1">{tier.minInfo}</p>
                                                <p className="text-xl font-bold text-slate-900">{tier.price}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Clock className="w-4 h-4 text-slate-400" />
                                            <span className="font-medium">Lead Time:</span>
                                            <span>15 days (1-1000 pcs)</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <ShieldCheck className="w-4 h-4 text-green-500" />
                                            <span className="font-medium">Protection:</span>
                                            <span>Trade Assurance • Timely Delivery Guarantee</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-32">
                                            <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Quantity</label>
                                            <div className="flex items-center border border-slate-300 rounded-lg bg-white">
                                                <button className="px-3 py-2 hover:bg-slate-50 border-r" onClick={() => setQuantity(q => Math.max(product.moq, q - 10))}>-</button>
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                                    className="w-full text-center border-none p-2 focus:ring-0 text-sm font-bold"
                                                />
                                                <button className="px-3 py-2 hover:bg-slate-50 border-l" onClick={() => setQuantity(q => q + 10)}>+</button>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Total Estimate</label>
                                            <div className="text-2xl font-bold text-slate-900">$1,250.00</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <Button size="lg" className="flex-1 text-base font-bold bg-primary hover:bg-blue-700 h-12">
                                            Send Inquiry
                                        </Button>
                                        <Button size="lg" variant="outline" className="flex-1 text-base font-bold h-12">
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            Chat Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content Tabs */}
                            <div className="lg:col-span-2 space-y-8">
                                <Card>
                                    <CardContent className="p-0">
                                        <Tabs defaultValue="details">
                                            <div className="border-b px-6 pt-4">
                                                <TabsList className="bg-transparent h-auto p-0 gap-6">
                                                    <TabsTrigger value="details" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">Product Details</TabsTrigger>
                                                    <TabsTrigger value="profile" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">Company Profile</TabsTrigger>
                                                    <TabsTrigger value="reviews" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">Reviews (124)</TabsTrigger>
                                                </TabsList>
                                            </div>

                                            <TabsContent value="details" className="p-8 space-y-8">
                                                <div>
                                                    <h3 className="font-bold text-lg mb-4">Specifications</h3>
                                                    <div className="border rounded-lg overflow-hidden">
                                                        <Table>
                                                            <TableBody>
                                                                {product.specs.map((spec, idx) => (
                                                                    <TableRow key={idx} className={idx % 2 === 0 ? "bg-slate-50/50" : ""}>
                                                                        <TableCell className="font-medium text-slate-500 w-1/3">{spec.label}</TableCell>
                                                                        <TableCell className="font-medium text-slate-900">{spec.value}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg mb-4">Product Description</h3>
                                                    <div className="prose max-w-none text-slate-600">
                                                        <p>Experience superior sound quality with our industrial-grade wireless earbuds. Designed for durability and performance, these earbuds feature advanced noise cancellation technology, ensuring crystal clear audio in any environment.</p>
                                                        <p>Perfect for bulk orders and corporate gifting, we offer custom branding options including logo printing on the case and custom packaging.</p>
                                                        <ul className="list-disc pl-5 space-y-2 mt-4">
                                                            <li>Active Noise Cancellation (ANC) up to 35dB</li>
                                                            <li>Transparency Mode for environmental awareness</li>
                                                            <li>Dual microphone system for clear calls</li>
                                                            <li>Fast charging support (1 hour play in 10 mins)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            <TabsContent value="profile" className="p-8">
                                                <div className="text-center py-12 text-slate-500">Company Profile Content Visualization Placeholder</div>
                                            </TabsContent>

                                            <TabsContent value="reviews" className="p-8">
                                                <div className="text-center py-12 text-slate-500">Reviews Content Visualization Placeholder</div>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Sidebar: Supplier Info */}
                            <div className="space-y-6">
                                <Card className="border-t-4 border-t-primary">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-slate-900 mb-4">Supplier Information</h3>

                                        <div className="flex items-start gap-3 mb-6">
                                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-500">
                                                SAT
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 leading-tight mb-1">{product.supplier.name}</h4>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary" className="bg-orange-50 text-orange-600 border-orange-100 text-[10px]">
                                                        <ShieldCheck className="w-3 h-3 mr-1" /> Gold Supplier
                                                    </Badge>
                                                    <span className="text-xs text-slate-500">{product.supplier.years} Yrs</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Separator className="my-4" />

                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500 flex items-center gap-2"><MapPin className="w-4 h-4" /> Location</span>
                                                <span className="font-medium text-slate-900">{product.supplier.location}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500 flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Response</span>
                                                <span className="font-medium text-slate-900">{product.supplier.responseRate}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500 flex items-center gap-2"><ShoppingBag className="w-4 h-4" /> Transactions</span>
                                                <span className="font-medium text-slate-900">{product.supplier.transactions}</span>
                                            </div>
                                        </div>

                                        <Button variant="outline" className="w-full font-bold">Visit Store</Button>
                                    </CardContent>
                                </Card>

                                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                    <div className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-blue-900 text-sm mb-1">One Request, Multiple Quotes</h4>
                                            <p className="text-xs text-blue-700 mb-3">Not finding exactly what you need? Post a Request for Quotation (RFQ) and get bids from verified suppliers.</p>
                                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full">Post RFQ</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetail;
