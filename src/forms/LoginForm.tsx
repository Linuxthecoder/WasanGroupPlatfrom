import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const LoginForm = () => {
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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address</Label>
                    <div className="relative group">
                        <Mail className="absolute left-3 top-3 text-slate-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-10 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white transition-all rounded-lg"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-slate-700 font-semibold">Password</Label>
                        <Link
                            to="/forgot-password"
                            className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-3 top-3 text-slate-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="pl-10 pr-10 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white transition-all rounded-lg"
                            required
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1 h-10 w-10 p-0 text-slate-400 hover:text-slate-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                    className="border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <Label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer select-none">
                    Keep me signed in for 30 days
                </Label>
            </div>

            <Button
                type="submit"
                className="w-full h-12 text-base font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 transition-all duration-300 rounded-lg"
                disabled={isLoading}
            >
                {isLoading ? (
                    <span className="flex items-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Signing in...
                    </span>
                ) : (
                    <span className="flex items-center">
                        Sign In <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                )}
            </Button>
        </form>
    );
};

export default LoginForm;
