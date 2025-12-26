import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HeadphonesIcon,
  Globe,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Building2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactBanner from "@/assets/contact_banner.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully",
      description: "Our dedicated team will review your inquiry and respond within 24 hours.",
      duration: 5000,
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const faqs = [
    {
      question: "What are your typical response times?",
      answer: "We strive to respond to all inquiries within 24 hours during business days. For urgent technical matters, our premium support line is available 24/7."
    },
    {
      question: "Do you offer international shipping support?",
      answer: "Yes, our logistics team handles documentation and coordination for shipments to over 150 countries worldwide."
    },
    {
      question: "How can I become a verified supplier?",
      answer: "Select 'Supplier Registration' in the contact form, and our onboarding team will guide you through the verification process."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 z-0 opacity-40 transition-transform duration-1000 ease-out hover:scale-105"
          style={{
            backgroundImage: `url(${contactBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-background z-10" />

        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="inline-flex items-center justify-center p-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm animate-in fade-in zoom-in duration-700">
            <span className="flex w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
            24/7 Global Support
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Conversation</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 fill-mode-both">
            Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-30 mb-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Main Contact Form */}
          <div className="lg:col-span-8">
            <Card className="shadow-2xl border-0 overflow-hidden backdrop-blur-sm bg-card/95">
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
              <CardHeader className="pt-8 px-8 pb-0">
                <CardTitle className=" text-3xl font-bold flex items-center gap-3">
                  <Mail className="w-8 h-8 text-primary" />
                  Send us a message
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Our team typically replies in a few hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="h-12 bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-medium">Work Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="h-12 bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-base font-medium">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="h-12 bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-base font-medium">Subject</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="h-12 bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all">
                          <SelectValue placeholder="How can we help?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="sales">Sales & Pricing</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-medium">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      required
                      className="bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all resize-none p-4 text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="w-5 h-5 ml-2" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 mr-3 text-primary" />
                Frequently Asked Questions
              </h3>
              <div className="bg-card rounded-xl border p-2 shadow-sm">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="px-4">
                      <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-4 space-y-8">

            {/* Contact Info Cards */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <Building2 className="w-5 h-5 mr-3 text-blue-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Email us at</p>
                    <p className="text-white font-semibold">support@wasanb2b.com</p>
                    <p className="text-white font-semibold">sales@wasanb2b.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Call us</p>
                    <p className="text-white font-semibold">+86 400-123-4567</p>
                    <p className="text-white/60 text-sm">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Visit us</p>
                    <p className="text-white font-semibold">Trade Tower, Suite 1201</p>
                    <p className="text-white/60 text-sm">Shanghai, China 200001</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat CTA */}
            <Card className="border-2 border-primary/10 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HeadphonesIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Need Immediate Help?</h3>
                <p className="text-muted-foreground">
                  Our live chat support agents are available to assist you in real-time.
                </p>
                <Button className="w-full" variant="outline">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>

            {/* Values / Trust */}
            <Card className="bg-muted/50 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-foreground">24 Hour Response Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-foreground">Dedicated Support Manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-foreground">Multilingual Assistance</span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
