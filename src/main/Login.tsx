import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  LogIn,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
  Chrome,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "@/forms/LoginForm";



const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful!",
        description: "Welcome back to WasanGroup.",
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navigation />

      <div className="flex-1 flex w-full">
        {/* Left Side: Hero / Brand - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-slate-950 overflow-hidden items-center justify-center border-r border-slate-800">
          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}></div>

          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-950/40 z-10" />

          <div className="relative z-20 max-w-xl px-12 text-white text-center md:text-left">
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" /> Trusted by 10,000+ Companies
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight text-white">
              Connect. Trade. <br />
              <span className="text-blue-500">
                Grow Globally.
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Access premium suppliers, manage your orders, and scale your business with the world's leading procurement platform.
            </p>
            <div className="grid grid-cols-2 gap-8 text-left border-t border-slate-800 pt-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">2M+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Products Listed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">150+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Countries Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 xl:p-16 bg-white">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h2>
              <p className="text-slate-500 mt-2">
                Enter your credentials to access your enterprise dashboard.
              </p>
            </div>

            <LoginForm />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400 font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-11 border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">
                <Chrome className="w-4 h-4 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="h-11 border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">
                <Globe className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>

            <p className="text-center text-sm text-slate-500">
              Don't have an enterprise account?{" "}
              <Link to="/signup" className="font-bold text-blue-600 hover:underline transition-all">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
