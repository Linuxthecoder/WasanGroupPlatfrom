import { Link } from "react-router-dom";

const DiscoverySection = () => {
    return (
        <section className="py-12 bg-slate-100/80">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Discover your next business opportunity</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-full">
                    {/* Column 1: Top Ranking */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-800">Top ranking</h3>
                            <Link to="/top-ranking" className="text-sm text-slate-500 hover:text-blue-600 hover:underline">View more</Link>
                        </div>
                        <Link to="/top-ranking" className="block h-full">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 flex-1 flex flex-col h-full cursor-pointer">
                                <div className="mb-2">
                                    <span className="text-black-500 font-bold text-xs bg-blue-50 px-2 py-0.5 rounded-md">Hot selling</span>
                                </div>
                                <h4 className="text-slate-700 text-sm mb-3 font-semibold">Hard Drives</h4>

                                <div className="relative flex-1 bg-slate-50 rounded-lg mb-4 min-h-[180px] overflow-hidden group">
                                    <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-700 shadow-sm border border-slate-100 flex items-center gap-1">
                                        <span>4.6</span> <span className="text-yellow-400">★</span>
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1597872258083-ef52741e89c6?auto=format&fit=crop&q=80&w=400"
                                        alt="Portable SSD"
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-3 left-3 z-10 text-white drop-shadow-md">
                                        <span className="text-[10px] opacity-90 block">High Speed</span>
                                        <span className="text-xl font-bold">4TB SSD</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-slate-50 rounded-md h-12 border border-slate-100 flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-400 transition-all">
                                        <img src="https://images.unsplash.com/photo-1597872258083-ef52741e89c6?auto=format&fit=crop&q=80&w=100" alt="Thumb 1" className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                                    </div>
                                    <div className="bg-slate-50 rounded-md h-12 border border-slate-100 flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-400 transition-all">
                                        <img src="https://images.unsplash.com/photo-1531492746076-a61b96312678?auto=format&fit=crop&q=80&w=100" alt="Thumb 2" className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                                    </div>
                                    <div className="bg-slate-50 rounded-md h-12 border border-slate-100 flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-400 transition-all">
                                        <img src="https://images.unsplash.com/photo-1555618568-19e917d23d8c?auto=format&fit=crop&q=80&w=100" alt="Thumb 3" className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Column 2: New Arrivals */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-800">New arrivals</h3>
                            <Link to="#" className="text-sm text-slate-500 hover:text-blue-600 hover:underline">View more</Link>
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 flex-1 flex flex-col justify-between">
                            <p className="text-xs text-slate-500 mb-3 font-medium">129,000+ products added today</p>
                            <div className="grid grid-cols-2 gap-3 mb-2">
                                <div className="bg-slate-50 rounded-lg aspect-square overflow-hidden relative group cursor-pointer border border-slate-100">
                                    <img src="https://images.unsplash.com/photo-1588628566587-dbd176de94b4?auto=format&fit=crop&q=80&w=200" alt="Gimbal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="bg-slate-50 rounded-lg aspect-square overflow-hidden relative group cursor-pointer border border-slate-100">
                                    <img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=200" alt="Smartwatch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="bg-slate-50 rounded-lg aspect-square overflow-hidden relative group cursor-pointer border border-slate-100">
                                    <img src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=200" alt="PC Build" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <span className="bg-white/90 px-1.5 py-0.5 rounded text-[10px] font-bold text-blue-600">New</span>
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-lg aspect-square overflow-hidden relative group cursor-pointer border border-slate-100">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200" alt="Sneakers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 flex items-center gap-3 cursor-pointer group">
                            <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1616423664033-bb68729c3ec8?auto=format&fit=crop&q=80&w=100" alt="Machine Part" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">New this week</h4>
                                <p className="text-[10px] text-slate-400">Verified Suppliers only</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Top Deals */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-800">Top deals</h3>
                            <Link to="#" className="text-sm text-slate-500 hover:text-blue-600 hover:underline">View more</Link>
                        </div>

                        <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 flex items-center gap-4 cursor-pointer group">
                            <div className="relative w-20 h-16 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=200" alt="Camera Lens" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                            </div>
                            <div className="flex-1">
                                <p className="text-slate-700 font-semibold text-sm group-hover:text-blue-600 transition-colors">180-day lowest price</p>
                                <span className="text-[10px] text-slate-400">Ends in 2 days</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 flex-1 flex flex-col justify-between">
                            <h4 className="font-medium text-slate-700 mb-3 text-sm">Deals on best sellers</h4>
                            <div className="flex-1 bg-slate-50 rounded-lg relative overflow-hidden flex items-center justify-center group cursor-pointer min-h-[140px]">

                                {/* Product Image */}
                                <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=400" alt="Air Purifier" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                                {/* Overlay text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                                    <div className="text-white font-bold text-sm">Smart Air Purifier</div>
                                    <div className="text-white/80 text-[10px]">HEPA Filtration</div>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-400 line-through">$128.00</span>
                                <span className="text-base font-bold text-red-500">$89.99</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DiscoverySection;
