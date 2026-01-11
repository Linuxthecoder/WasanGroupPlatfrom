import { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  UserPlus,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Building,
  Phone,
  MapPin,
  Chrome,
  Globe,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";



const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    phone: "",
    country: "",
    accountType: "",
    agreeToTerms: false,
    subscribeNewsletter: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const countries = [
    "United States", "China", "India", "Germany", "United Kingdom",
    "Japan", "France", "Canada", "Australia", "Brazil", "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords mismatch",
        description: "Please ensure both passwords match.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account Created Successfully!",
        description: "Welcome to WasanGroup. Please check your email to verify your account.",
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navigation />

      <div className="flex-1 flex w-full">
        {/* Left Side: Hero / Brand - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-slate-950 overflow-hidden flex-col justify-between border-r border-slate-800">
          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-blue-950/20 z-10" />

          <div className="relative z-20 p-12 mt-20">
            <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Why Join WasanGroup?</h2>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <div className="bg-blue-500/10 p-2 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Expand Your Reach</h3>
                    <p className="text-slate-400 leading-relaxed text-sm mt-1">Connect with millions of verified buyers and suppliers worldwide instantly.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-emerald-500/10 p-2 rounded-lg mr-4 group-hover:bg-emerald-500/20 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Verified Trust</h3>
                    <p className="text-slate-400 leading-relaxed text-sm mt-1">Trade with confidence using our secure and verified platform verification.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-purple-500/10 p-2 rounded-lg mr-4 group-hover:bg-purple-500/20 transition-colors">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Dedicated Support</h3>
                    <p className="text-slate-400 leading-relaxed text-sm mt-1">Get 24/7 assistance from our expert trade specialists to help you scale.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative z-20 p-12 text-center">
            <p className="text-slate-600 text-sm">© 2024 WasanGroup. All rights reserved.</p>
          </div>
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16 bg-white">
          <div className="w-full max-w-2xl space-y-8">
            <div className="text-center lg:text-left space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Create Your Account</h1>
              <p className="text-slate-500 text-lg">
                Join thousands of businesses growing with WasanGroup.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section: Account Type */}
              <div className="space-y-4">
                <Label className="text-base font-semibold text-slate-700">I am a...</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`cursor-pointer rounded-xl border-2 p-5 transition-all hover:border-blue-300 relative ${formData.accountType === 'buyer' ? 'border-blue-600 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-white'}`}
                    onClick={() => handleInputChange("accountType", "buyer")}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${formData.accountType === 'buyer' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <User className="w-5 h-5" />
                      </div>
                      <span className={`font-bold text-lg ${formData.accountType === 'buyer' ? 'text-blue-900' : 'text-slate-700'}`}>Buyer</span>
                    </div>
                    <p className="text-sm text-slate-500 pl-12">I want to source products and suppliers.</p>
                    {formData.accountType === 'buyer' && <div className="absolute top-4 right-4 text-blue-600"><CheckCircle2 className="w-5 h-5" /></div>}
                  </div>

                  <div
                    className={`cursor-pointer rounded-xl border-2 p-5 transition-all hover:border-blue-300 relative ${formData.accountType === 'supplier' ? 'border-blue-600 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-white'}`}
                    onClick={() => handleInputChange("accountType", "supplier")}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${formData.accountType === 'supplier' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <Building className="w-5 h-5" />
                      </div>
                      <span className={`font-bold text-lg ${formData.accountType === 'supplier' ? 'text-blue-900' : 'text-slate-700'}`}>Supplier</span>
                    </div>
                    <p className="text-sm text-slate-500 pl-12">I want to sell products to millions of buyers.</p>
                    {formData.accountType === 'supplier' && <div className="absolute top-4 right-4 text-blue-600"><CheckCircle2 className="w-5 h-5" /></div>}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-700 font-medium">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-11 border-slate-200 focus:border-blue-500 rounded-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-700 font-medium">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="h-11 border-slate-200 focus:border-blue-500 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">Work Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 h-11 border-slate-200 focus:border-blue-500 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 h-11 border-slate-200 focus:border-blue-500 rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700 font-medium">Company Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="pl-10 h-11 border-slate-200 focus:border-blue-500 rounded-lg"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-slate-700 font-medium">Country/Region</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger className="h-11 border-slate-200 rounded-lg">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                      <SelectValue placeholder="Select your country" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-10 h-11 border-slate-200 focus:border-blue-500 rounded-lg"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-9 w-9 p-0 text-slate-400 hover:text-slate-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="pl-10 pr-10 h-11 border-slate-200 focus:border-blue-500 rounded-lg"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-9 w-9 p-0 text-slate-400 hover:text-slate-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    className="mt-1 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed text-slate-500 font-normal">
                    By creating an account, I agree to the <Link to="/terms" className="text-blue-600 hover:underline font-medium">Terms of Service</Link>, <Link to="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>, and <Link to="/cookies" className="text-blue-600 hover:underline font-medium">Cookie Policy</Link>.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                    className="mt-1 border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <Label htmlFor="newsletter" className="text-sm leading-relaxed text-slate-500 font-normal">
                    I would like to receive marketing communications, news, and updates from WasanGroup.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 transition-all duration-300 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400 font-medium">
                    Or sign up with
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

              <p className="text-center text-sm text-slate-500 mt-8">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
