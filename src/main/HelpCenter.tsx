import { useState } from "react";
import {
    Search,
    HelpCircle,
    Truck,
    CreditCard,
    ShieldCheck,
    FileText,
    ChevronRight,
    Mail
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const HelpCenter = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
            <Navigation />

            {/* Hero Search */}
            <div className="bg-slate-900 py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
                <div className="relative z-10 container mx-auto max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">How can we help you?</h1>
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                            placeholder="Search for answers (e.g., payment, shipping, refund)..."
                            className="h-14 pl-12 rounded-full text-lg bg-white/10 text-white placeholder:text-slate-300 border-white/20 focus:bg-white/20 transition-all shadow-xl backdrop-blur-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1 container mx-auto px-4 py-12 max-w-6xl">

                {/* Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 -mt-20 relative z-20">
                    {[
                        { icon: Truck, title: "Shipping & Delivery", desc: "Track orders, shipping methods, and costs." },
                        { icon: CreditCard, title: "Payments", desc: "Payment methods, invoices, and currencies." },
                        { icon: ShieldCheck, title: "Trade Assurance", desc: "Protection for your orders and payments." },
                        { icon: FileText, title: "Account & Profile", desc: "Manage your account settings and verification." },
                    ].map((cat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow cursor-pointer group">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                <cat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{cat.title}</h3>
                            <p className="text-sm text-slate-500 mb-4">{cat.desc}</p>
                            <span className="text-blue-600 text-sm font-bold flex items-center">View Topics <ChevronRight className="w-4 h-4 ml-1" /></span>
                        </div>
                    ))}
                </div>

                {/* FAQs */}
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <HelpCircle className="w-6 h-6 text-blue-600" /> Frequently Asked Questions
                        </h2>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm">
                                <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-blue-600">How do I verify a supplier?</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                                    Look for the "Verified" or "Gold Supplier" badge on the supplier's profile. These suppliers have passed inspection by third-party verification agencies. You can also view their business license, factory photos, and certification documents on their profile page.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm">
                                <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-blue-600">What is Trade Assurance?</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                                    Trade Assurance is a free service that protects your orders from payment to delivery. If the supplier fails to ship on time or the product quality doesn't meet the standards agreed upon in your contract, you can request a refund.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm">
                                <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-blue-600">How do I post a Request for Quotation (RFQ)?</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                                    Go to the RFQ Hub in your dashboard, click "Post New RFQ", fill in your product details, quantity, and budget, and submit. Suppliers will then submit quotes for you to compare.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm">
                                <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-blue-600">What payment methods are accepted?</AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                                    Most suppliers accept T/T (Bank Transfer), L/C (Letter of Credit), and PayPal for smaller orders. We strongly recommend using our secure payment platform to benefit from Trade Assurance protection.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Support Contact */}
                    <div className="space-y-6">
                        <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
                            <h3 className="font-bold text-xl mb-4">Still need help?</h3>
                            <p className="text-blue-100 mb-6">Our support team is available 24/7 to assist you with any inquiries.</p>
                            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold mb-3 h-12">
                                <Mail className="w-4 h-4 mr-2" /> Contact Support
                            </Button>
                            <div className="text-center text-sm text-blue-200 hover:text-white cursor-pointer hover:underline">
                                Call Us: +1 (800) 123-4567
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default HelpCenter;
