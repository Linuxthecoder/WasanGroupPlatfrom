import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./main/Index";
import Contact from "./main/Contact";
import Login from "./main/Login";
import SignUp from "./main/SignUp";
import ListBusiness from "./main/ListBusiness";
import TopRanking from "./main/TopRanking";
import NotFound from "./main/NotFound";
import Dashboard from "./pages/app/Dashboard";
import Marketplace from "./pages/app/marketplace/Marketplace";
import ProductDetail from "./pages/app/buyer/ProductDetail";
import SupplierProfile from "./pages/app/buyer/SupplierProfile";
import RFQ from "./pages/app/dashboard/RFQ";
import Cart from "./pages/app/buyer/Cart";
import Checkout from "./pages/app/buyer/Checkout";
import Orders from "./pages/app/dashboard/Orders";
import OrderDetail from "./pages/app/dashboard/OrderDetail";
import SellerDashboard from "./pages/app/seller/SellerDashboard";
import SellerProducts from "./pages/app/seller/SellerProducts";
import Messages from "./pages/app/dashboard/Messages";
import HelpCenter from "./main/HelpCenter";
import Manufacturers from "./pages/app/marketplace/Manufacturers";
import Worldwide from "./pages/app/marketplace/Worldwide";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore/board" element={<Marketplace />} />
          <Route path="/explore/marketplace/manufacturers" element={<Manufacturers />} />
          <Route path="/explore/marketplace/products" element={<Marketplace />} />
          <Route path="/explore/marketplace/worldwide" element={<Worldwide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/list-business" element={<ListBusiness />} />
          <Route path="/top-ranking" element={<TopRanking />} />
          <Route path="/help" element={<HelpCenter />} />

          {/* Core App Routes - Buyer */}
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/marketplace" element={<Marketplace />} />
          <Route path="/app/manufacturers" element={<Manufacturers />} />
          <Route path="/app/worldwide" element={<Worldwide />} />
          <Route path="/app/product/:id" element={<ProductDetail />} />
          <Route path="/app/supplier/:id" element={<SupplierProfile />} />
          <Route path="/app/rfq" element={<RFQ />} />

          {/* Transaction Routes */}
          <Route path="/app/cart" element={<Cart />} />
          <Route path="/app/checkout" element={<Checkout />} />
          <Route path="/app/orders" element={<Orders />} />
          <Route path="/app/order/:id" element={<OrderDetail />} />

          {/* Core App Routes - Seller */}
          <Route path="/app/seller" element={<SellerDashboard />} />
          <Route path="/app/seller/products" element={<SellerProducts />} />

          {/* Shared App Routes */}
          <Route path="/app/messages" element={<Messages />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
