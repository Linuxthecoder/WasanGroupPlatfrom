import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Trash2,
    Plus,
    Minus,
    ArrowRight,
    ShieldCheck,
    Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";

const Cart = () => {
    // Mock Cart Data (Grouped by Supplier like Alibaba)
    const [cartItems, setCartItems] = useState([
        {
            supplierId: 1,
            supplierName: "Shenzhen Audio Tech Co., Ltd.",
            verified: true,
            products: [
                {
                    id: 101,
                    name: "Industrial Grade Wireless Earbuds Pro",
                    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200",
                    price: 12.50,
                    qty: 100,
                    moq: 10,
                    specs: "Color: Black, Box: Retail"
                },
                {
                    id: 102,
                    name: "Silicone Protective Case",
                    image: "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=200",
                    price: 1.20,
                    qty: 200,
                    moq: 50,
                    specs: "Color: Blue"
                }
            ]
        },
        {
            supplierId: 2,
            supplierName: "Guangzhou Textiles Imp & Exp Corp",
            verified: false,
            products: [
                {
                    id: 201,
                    name: "Premium Cotton T-Shirt Blank",
                    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
                    price: 4.50,
                    qty: 50,
                    moq: 50,
                    specs: "Size: L, Color: White, GSM: 180"
                }
            ]
        }
    ]);

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(group => {
            group.products.forEach(p => {
                total += p.price * p.qty;
            });
        });
        return total;
    };

    return (
        <div className="flex h-screen bg-[#F0F2F5]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title="Shopping Cart" />

                <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8 max-w-6xl">

                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1 space-y-6">
                                <h2 className="font-bold text-2xl text-slate-800">Your Cart ({cartItems.reduce((acc, g) => acc + g.products.length, 0)} Items)</h2>

                                {cartItems.map((group) => (
                                    <Card key={group.supplierId} className="border-none shadow-sm overflow-hidden">
                                        <div className="bg-slate-100/50 p-4 border-b border-slate-100 flex items-center gap-3">
                                            <Checkbox />
                                            <span className="font-bold text-slate-900">{group.supplierName}</span>
                                            {group.verified && (
                                                <div className="flex items-center text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                                                    <ShieldCheck className="w-3 h-3 mr-1" /> Verified Supplier
                                                </div>
                                            )}
                                        </div>
                                        <CardContent className="p-0">
                                            {group.products.map((product, idx) => (
                                                <div key={product.id} className={`p-6 flex flex-col sm:flex-row gap-6 ${idx !== 0 ? 'border-t border-slate-100' : ''}`}>
                                                    <div className="flex items-start gap-4 flex-1">
                                                        <Checkbox className="mt-1" />
                                                        <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">
                                                            <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <Link to={`/app/product/${product.id}`} className="font-bold text-slate-900 hover:text-primary hover:underline line-clamp-2">
                                                                {product.name}
                                                            </Link>
                                                            <p className="text-sm text-slate-500">{product.specs}</p>
                                                            <div className="text-xs font-medium text-orange-600 bg-orange-50 inline-block px-1 rounded">MOQ: {product.moq}</div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between sm:justify-end sm:gap-12 w-full sm:w-auto">
                                                        <div className="font-bold text-lg text-slate-900">${product.price.toFixed(2)}</div>
                                                        <div className="flex items-center border border-slate-300 rounded-lg">
                                                            <button className="px-3 py-1 hover:bg-slate-50 border-r" ><Minus className="w-3 h-3" /></button>
                                                            <input className="w-12 text-center text-sm border-none p-1 focus:ring-0 font-bold" value={product.qty} readOnly />
                                                            <button className="px-3 py-1 hover:bg-slate-50 border-l"><Plus className="w-3 h-3" /></button>
                                                        </div>
                                                        <div className="font-bold text-lg text-primary w-24 text-right">${(product.price * product.qty).toFixed(2)}</div>
                                                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-500">
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Cart Summary */}
                            <div className="w-full lg:w-96 space-y-6">
                                <Card className="sticky top-6 border-none shadow-lg">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg text-slate-900 mb-4">Order Summary</h3>
                                        <div className="space-y-3 text-sm mb-6">
                                            <div className="flex justify-between">
                                                <span className="text-slate-600">Subtotal</span>
                                                <span className="font-bold text-slate-900">${calculateTotal().toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-600">Shipping Estimate</span>
                                                <span className="text-slate-500 italic">Calculated at checkout</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between text-base">
                                                <span className="font-bold text-slate-900">Total</span>
                                                <span className="font-bold text-2xl text-primary">${calculateTotal().toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Link to="/app/checkout">
                                                <Button className="w-full h-12 text-base font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/20">
                                                    Checkout <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </Link>
                                            <Button variant="outline" className="w-full text-slate-600 font-bold border-slate-300">
                                                Request for Quotation
                                            </Button>
                                        </div>

                                        <div className="mt-6 space-y-3">
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <Truck className="w-4 h-4 text-green-600" />
                                                <span>Free Shipping on eligible orders over $1,000</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <ShieldCheck className="w-4 h-4 text-green-600" />
                                                <span>Secure payments via Trade Assurance</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;
