import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-tech-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Contact us today and let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="text-2xl text-tech-dark">
                  Let's Start a Conversation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help you succeed. Whether you need a new system, want to improve 
                  existing processes, or have questions about our services, our team is ready to assist.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-tech-dark">Email</p>
                      <p className="text-muted-foreground">info@kismayoict.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-tech-dark">Phone</p>
                      <p className="text-muted-foreground">+252 61 234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-tech-dark">Office Location</p>
                      <p className="text-muted-foreground">Kismayo, Jubaland, Somalia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-tech-dark">Business Hours</p>
                      <p className="text-muted-foreground">Sunday - Thursday: 8AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="tech-card">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-hero rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Kismayo, Jubaland</p>
                    <p className="text-white/80">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="text-2xl text-tech-dark">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-tech-dark font-medium">
                      First Name
                    </Label>
                    <Input 
                      id="firstName"
                      placeholder="John"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-tech-dark font-medium">
                      Last Name
                    </Label>
                    <Input 
                      id="lastName"
                      placeholder="Doe"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-tech-dark font-medium">
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-tech-dark font-medium">
                    Company / Organization
                  </Label>
                  <Input 
                    id="company"
                    placeholder="Your Organization"
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-tech-dark font-medium">
                    Message
                  </Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your project or how we can help..."
                    rows={6}
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="tech-button-accent w-full group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;