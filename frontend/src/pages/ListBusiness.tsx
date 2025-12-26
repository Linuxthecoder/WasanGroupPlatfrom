import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Mail,
  Phone,
  MapPin,
  Globe,
  Upload,
  CheckCircle,
  Package,
  Award,
  FileText,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ListBusiness = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    businessType: "",
    establishedYear: "",
    employeeCount: "",
    website: "",

    // Contact Information
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",

    // Business Details
    mainProducts: "",
    categories: [] as string[],
    certifications: "",
    description: "",

    // Verification
    businessLicense: null,
    certificationDocs: null,
    agreeToTerms: false
  });
  const { toast } = useToast();

  const categories = [
    "Electronics", "Textiles & Apparel", "Machinery", "Automotive",
    "Home & Garden", "Health & Beauty", "Computer Hardware", "Tools & Hardware",
    "Packaging & Printing", "Energy & Power", "Food & Beverage", "Sports & Entertainment"
  ];

  const businessTypes = [
    "Manufacturer", "Trading Company", "Distributor", "Wholesaler", "Service Provider"
  ];

  const employeeCounts = [
    "1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"
  ];

  const countries = [
    "China", "India", "United States", "Germany", "Japan",
    "South Korea", "Vietnam", "Bangladesh", "Pakistan", "Other"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 2-3 business days.",
    });
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.companyName || !formData.businessType || !formData.establishedYear) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields in Company Information.",
          variant: "destructive"
        });
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.contactPerson || !formData.email || !formData.phone ||
        !formData.address || !formData.country) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields in Contact Details.",
          variant: "destructive"
        });
        return;
      }
    }
    if (currentStep === 3) {
      if (formData.categories.length === 0 || !formData.description) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields in Business Details.",
          variant: "destructive"
        });
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = [
    { number: 1, title: "Company Info", icon: Building },
    { number: 2, title: "Contact Details", icon: Mail },
    { number: 3, title: "Business Details", icon: Briefcase }, // Changed icon to Briefcase for professional feel
    { number: 4, title: "Verification", icon: ShieldCheck } // Changed icon to ShieldCheck
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navigation />

      {/* Header - Industrial Style */}
      <section className="relative bg-slate-950 border-b border-slate-800 overflow-hidden">
        {/* Abstract Technical Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}></div>

        <div className="relative container mx-auto px-4 py-24 z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium text-blue-400 border-blue-400/30 bg-blue-400/10 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 mr-2" />
                Supplier Portal
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                List Your Business on <br /><span className="text-blue-500">Global Supply Chain</span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Join verified industrial suppliers. Expand your B2B reach with our enterprise-grade procurement platform.
              </p>
            </div>

            {/* Stats Box - Industrial Look */}
            <div className="hidden md:flex flex-col gap-4 min-w-[280px]">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-4 rounded-lg flex items-center gap-4">
                <div className="bg-blue-500/10 p-2.5 rounded-md text-blue-400"><Globe className="w-6 h-6" /></div>
                <div>
                  <div className="text-2xl font-bold text-white">190+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Countries Reach</div>
                </div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-4 rounded-lg flex items-center gap-4">
                <div className="bg-emerald-500/10 p-2.5 rounded-md text-emerald-400"><CheckCircle className="w-6 h-6" /></div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Verified Buyers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Card Container */}
          <Card className="shadow-xl shadow-slate-950/5 border border-slate-200 rounded-xl overflow-hidden bg-white">

            {/* Progress Header - Technical/Solid */}
            <div className="bg-white border-b border-slate-100 flex flex-col md:flex-row">
              {/* Sidebar Progress (Desktop) / Top Progress (Mobile) */}
              <div className="w-full md:w-1/4 bg-slate-50 border-r border-slate-100 p-6 md:p-8">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Application Steps</h3>
                <div className="space-y-0 relative">
                  {/* Vertical Line for Desktop */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200 -z-10 hidden md:block"></div>

                  {steps.map((step) => (
                    <div key={step.number} className="flex items-center gap-4 mb-6 last:mb-0 group">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all z-10 ${currentStep > step.number ? "bg-blue-600 border-blue-600 text-white" :
                        currentStep === step.number ? "bg-white border-blue-600 text-blue-600 shadow-md shadow-blue-100" :
                          "bg-white border-slate-200 text-slate-300"
                        }`}>
                        {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : <span className="font-bold text-sm">{step.number}</span>}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-sm font-bold ${currentStep === step.number ? "text-slate-900" : "text-slate-500"}`}>{step.title}</h4>
                        {currentStep === step.number && <p className="text-xs text-blue-600 font-medium">In Progress</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content Area */}
              <div className="w-full md:w-3/4 p-6 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    {(() => {
                      const Icon = steps[currentStep - 1].icon;
                      return Icon ? <Icon className="w-6 h-6 text-slate-400" /> : null;
                    })()}
                    {steps[currentStep - 1].title}
                  </h2>
                  <p className="text-slate-500 mt-1">Please provide accurate details for verification.</p>
                  <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Company Information */}
                  {currentStep === 1 && (
                    <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="space-y-2 md:col-span-2">
                        <Label className="text-slate-700 font-semibold text-sm">Legal Company Name <span className="text-red-500">*</span></Label>
                        <Input
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          placeholder="Enter registered business name"
                          className="h-11 rounded-md bg-white border-slate-200 focus:border-blue-500 transition-all"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Business Registration Type <span className="text-red-500">*</span></Label>
                        <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                          <SelectTrigger className="h-11 rounded-md border-slate-200">
                            <SelectValue placeholder="Select Type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map(type => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Year Established <span className="text-red-500">*</span></Label>
                        <Input
                          type="number"
                          min="1900"
                          max="2025"
                          value={formData.establishedYear}
                          onChange={(e) => handleInputChange("establishedYear", e.target.value)}
                          placeholder="e.g. 2010"
                          className="h-11 rounded-md border-slate-200"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Company Size</Label>
                        <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange("employeeCount", value)}>
                          <SelectTrigger className="h-11 rounded-md border-slate-200">
                            <SelectValue placeholder="Select Employees" />
                          </SelectTrigger>
                          <SelectContent>
                            {employeeCounts.map(count => (
                              <SelectItem key={count} value={count}>{count} Employees</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Company Website</Label>
                        <Input
                          type="url"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          placeholder="https://example.com"
                          className="h-11 rounded-md border-slate-200"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Information */}
                  {currentStep === 2 && (
                    <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Contact Person Name <span className="text-red-500">*</span></Label>
                        <Input
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                          placeholder="Full Name"
                          className="h-11 rounded-md border-slate-200"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Work Email <span className="text-red-500">*</span></Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="name@company.com"
                          className="h-11 rounded-md border-slate-200"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Business Phone <span className="text-red-500">*</span></Label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="h-11 rounded-md border-slate-200"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Country/Region <span className="text-red-500">*</span></Label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                          <SelectTrigger className="h-11 rounded-md border-slate-200">
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map(country => (
                              <SelectItem key={country} value={country}>{country}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label className="text-slate-700 font-semibold text-sm">Headquarters Address <span className="text-red-500">*</span></Label>
                        <Input
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          placeholder="Full street address"
                          className="h-11 rounded-md border-slate-200"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Business Details */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="space-y-3">
                        <Label className="text-slate-700 font-semibold text-sm">Primary Categories <span className="text-red-500">*</span></Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {categories.map(category => (
                            <div
                              key={category}
                              onClick={() => handleCategoryToggle(category)}
                              className={`flex items-center px-3 py-2.5 rounded-md border cursor-pointer transition-all duration-200 ${formData.categories.includes(category)
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-slate-200 hover:border-blue-300 bg-white'
                                }`}
                            >
                              <Checkbox
                                checked={formData.categories.includes(category)}
                                className="mr-3 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                              />
                              <span className="text-sm font-medium">{category}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold text-sm">Company Description <span className="text-red-500">*</span></Label>
                        <Textarea
                          value={formData.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          placeholder="Describe your manufacturing capabilities, key products, and competitive advantages..."
                          className="min-h-[160px] rounded-md border-slate-200 resize-y p-3 leading-relaxed"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Verification */}
                  {currentStep === 4 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 hover:border-blue-300 transition-all text-center cursor-pointer">
                          <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                            <FileText className="w-6 h-6" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900">Business License</h4>
                          <p className="text-xs text-slate-500 mb-4 mt-1">Upload PDF or JPG</p>
                          <Button variant="outline" size="sm" className="bg-white hover:bg-slate-50">Choose File</Button>
                        </div>

                        <div className="p-6 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 hover:border-blue-300 transition-all text-center cursor-pointer">
                          <div className="w-12 h-12 bg-white border border-slate-200 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                            <Award className="w-6 h-6" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900">Certificates</h4>
                          <p className="text-xs text-slate-500 mb-4 mt-1">ISO, CE, etc.</p>
                          <Button variant="outline" size="sm" className="bg-white hover:bg-slate-50">Choose File</Button>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 flex gap-4 items-start">
                        <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-blue-900 text-sm">Verification Agreement</h5>
                          <div className="flex items-start gap-2 mt-2">
                            <Checkbox
                              id="terms"
                              checked={formData.agreeToTerms}
                              onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                              className="mt-0.5"
                            />
                            <Label htmlFor="terms" className="text-xs text-blue-800 cursor-pointer leading-relaxed">
                              I certify that the information provided is accurate and I am authorized to represent this company. I agree to the <a href="#" className="underline font-semibold">Terms of Service</a>.
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    {/* Back Button */}
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className={`flex items-center gap-2 ${currentStep === 1 ? "invisible" : "text-slate-500 hover:text-slate-900"}`}
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </Button>

                    {/* Next/Submit Button */}
                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-slate-900 hover:bg-slate-800 text-white min-w-[140px] h-11 rounded-md shadow-lg shadow-slate-900/10 font-medium"
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={!formData.agreeToTerms}
                        className="bg-blue-600 hover:bg-blue-700 text-white min-w-[140px] h-11 rounded-md shadow-lg shadow-blue-600/20 font-bold"
                      >
                        Submit Application
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>


        {/* Why Partner Section - Clean Grid */}
        <div className="max-w-7xl mx-auto mt-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center uppercase tracking-tight">Partner Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Global Reach", desc: "Access verified buyers in 190+ countries." },
              { icon: ShieldCheck, title: "Verified Supplier", desc: "Get the Verified badge to build instant trust." },
              { icon: Package, title: "Smart Showcasing", desc: "AI-driven product recommendations." },
              { icon: CheckCircle, title: "Trade Assurance", desc: "Payment protection for secure transactions." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all group">
                <item.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-600 mb-4 transition-colors" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ListBusiness;