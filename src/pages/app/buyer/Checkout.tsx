import { useState } from "react";
import { Link } from "react-router-dom";
import {
    CheckCircle2,
    CreditCard,
    Truck,
    MapPin,
    ShieldCheck,
    ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import AppHeader from "../components/AppHeader";

const Checkout = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen bg-[#F0F2F5] flex flex-col">
            {/* Simple Header for Checkout */}
            <header className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-orange-500 p-1.5 rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl text-slate-800">Wasan<span className="text-orange-500">Secure</span> Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    SSL Encrypted Transaction
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">

                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-12">
                    <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 1 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-200 text-slate-500'}`}>1</div>
                        <span className={`ml-3 font-medium ${step >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>Shipping</span>
                    </div>
                    <div className={`w-24 h-1 mx-4 rounded-full ${step >= 2 ? 'bg-orange-500' : 'bg-slate-200'}`}></div>
                    <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 2 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-200 text-slate-500'}`}>2</div>
                        <span className={`ml-3 font-medium ${step >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>Payment</span>
                    </div>
                    <div className={`w-24 h-1 mx-4 rounded-full ${step >= 3 ? 'bg-orange-500' : 'bg-slate-200'}`}></div>
                    <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 3 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-200 text-slate-500'}`}>3</div>
                        <span className={`ml-3 font-medium ${step >= 3 ? 'text-slate-900' : 'text-slate-400'}`}>Confirmation</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Form Area */}
                    <div className="lg:col-span-2 space-y-6">

                        {step === 1 && (
                            <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                                <Card>
                                    <CardContent className="p-8">
                                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-orange-500" /> Shipping Address
                                        </h2>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label>First Name</Label>
                                                <Input placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Last Name</Label>
                                                <Input placeholder="Doe" />
                                            </div>
                                            <div className="col-span-2 space-y-2">
                                                <Label>Address Line 1</Label>
                                                <Input placeholder="123 Business Park Way" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>City</Label>
                                                <Input placeholder="New York" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Zip Code</Label>
                                                <Input placeholder="10001" />
                                            </div>
                                            <div className="col-span-2 space-y-2">
                                                <Label>Country</Label>
                                                <Input placeholder="United States" defaultValue="United States" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-8">
                                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <Truck className="w-5 h-5 text-orange-500" /> Shipping Method
                                        </h2>
                                        <RadioGroup defaultValue="express">
                                            <div className="flex items-center space-x-2 border rounded-xl p-4 cursor-pointer hover:border-orange-500 hover:bg-orange-50/30 transition-colors">
                                                <RadioGroupItem value="express" id="express" />
                                                <div className="flex-1 flex justify-between items-center cursor-pointer">
                                                    <Label htmlFor="express" className="cursor-pointer">
                                                        <div className="font-bold text-slate-900">Express Air Freight</div>
                                                        <div className="text-sm text-slate-500">3-5 Business Days (DHL/FedEx)</div>
                                                    </Label>
                                                    <span className="font-bold text-slate-900">$120.00</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 border rounded-xl p-4 mt-4 cursor-pointer hover:border-orange-500 hover:bg-orange-50/30 transition-colors">
                                                <RadioGroupItem value="sea" id="sea" />
                                                <div className="flex-1 flex justify-between items-center cursor-pointer">
                                                    <Label htmlFor="sea" className="cursor-pointer">
                                                        <div className="font-bold text-slate-900">Ocean Freight</div>
                                                        <div className="text-sm text-slate-500">25-30 Days</div>
                                                    </Label>
                                                    <span className="font-bold text-slate-900">$45.00</span>
                                                </div>
                                            </div>
                                        </RadioGroup>
                                    </CardContent>
                                </Card>

                                <Button onClick={() => setStep(2)} className="w-full h-12 text-base font-bold bg-primary hover:bg-blue-600">
                                    Proceed to Payment
                                </Button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                                <Card>
                                    <CardContent className="p-8">
                                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <CreditCard className="w-5 h-5 text-orange-500" /> Payment Method
                                        </h2>

                                        <RadioGroup defaultValue="card" className="grid gap-4">
                                            <div className="border rounded-xl p-4 flex items-start gap-4 hover:border-orange-500 bg-white">
                                                <RadioGroupItem value="card" id="card" className="mt-1" />
                                                <div className="flex-1">
                                                    <Label htmlFor="card" className="font-bold text-slate-900 text-base mb-1 block">Credit / Debit Card</Label>
                                                    <div className="flex gap-2 mb-4">
                                                        <div className="h-6 w-10 bg-slate-100 rounded"></div>
                                                        <div className="h-6 w-10 bg-slate-100 rounded"></div>
                                                        <div className="h-6 w-10 bg-slate-100 rounded"></div>
                                                    </div>
                                                    <div className="grid gap-4">
                                                        <div className="space-y-2">
                                                            <Input placeholder="Card Number" />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <Input placeholder="MM/YY" />
                                                            <Input placeholder="CVC" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border rounded-xl p-4 flex items-center gap-4 hover:border-orange-500 bg-white">
                                                <RadioGroupItem value="tt" id="tt" />
                                                <Label htmlFor="tt" className="font-bold text-slate-900 flex-1">Bank Transfer (T/T)</Label>
                                            </div>
                                        </RadioGroup>
                                    </CardContent>
                                </Card>

                                <div className="flex gap-4">
                                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1 h-12 font-bold">
                                        <ChevronLeft className="w-4 h-4 mr-2" /> Back
                                    </Button>
                                    <Button onClick={() => setStep(3)} className="flex-[2] h-12 font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/20">
                                        Pay $1,492.50
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center py-12 animate-in zoom-in-95 fade-in duration-500">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                                </div>
                                <h1 className="text-3xl font-bold text-slate-900 mb-2">Order Confirmed!</h1>
                                <p className="text-slate-500 mb-8 max-w-md mx-auto">Thank you for your purchase. Your order #ORD-2024-8832 has been placed successfully.</p>

                                <div className="flex justify-center gap-4">
                                    <Link to="/app/orders">
                                        <Button variant="outline" className="h-12 px-8 font-bold">View Order</Button>
                                    </Link>
                                    <Link to="/app/marketplace">
                                        <Button className="h-12 px-8 font-bold bg-primary hover:bg-blue-600">Continue Shopping</Button>
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Order Summary Sidebar */}
                    {step < 3 && (
                        <div className="space-y-6">
                            <Card className="sticky top-6 border-none shadow-lg bg-slate-900 text-white">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                                    <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar mb-6">
                                        <div className="flex gap-3">
                                            <div className="w-12 h-12 bg-white/10 rounded-lg flex-shrink-0"></div>
                                            <div>
                                                <p className="text-sm font-bold text-white line-clamp-2">Industrial Grade Wireless Earbuds Pro</p>
                                                <p className="text-xs text-slate-400">Qty: 100</p>
                                            </div>
                                            <div className="text-sm font-bold ml-auto">$1,250.00</div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-12 h-12 bg-white/10 rounded-lg flex-shrink-0"></div>
                                            <div>
                                                <p className="text-sm font-bold text-white line-clamp-2">Silicone Protective Case</p>
                                                <p className="text-xs text-slate-400">Qty: 200</p>
                                            </div>
                                            <div className="text-sm font-bold ml-auto">$240.00</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-sm border-t border-white/10 pt-4 mb-4">
                                        <div className="flex justify-between text-slate-300">
                                            <span>Subtotal</span>
                                            <span>$1,490.00</span>
                                        </div>
                                        <div className="flex justify-between text-slate-300">
                                            <span>Shipping</span>
                                            <span>$2.50</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between text-xl font-bold border-t border-white/10 pt-4">
                                        <span>Total</span>
                                        <span>$1,492.50</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
};

export default Checkout;
