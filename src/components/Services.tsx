import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Smartphone, Globe, HeadphonesIcon, ArrowRight, Database, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business requirements and workflows.",
      features: ["Desktop Applications", "Enterprise Software", "Business Automation", "Custom APIs"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Web Application Development", 
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["Progressive Web Apps", "E-commerce Platforms", "Management Systems", "Real-time Dashboards"],
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Deployment", "Mobile UI/UX"],
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Systems Integration",
      description: "Seamlessly connect your existing systems and streamline your business processes.",
      features: ["API Integration", "Database Migration", "Third-party Connections", "Workflow Automation"],
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Robust security implementations and compliance solutions for your software systems.",
      features: ["Data Protection", "User Authentication", "Security Audits", "Compliance Standards"],
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: HeadphonesIcon,
      title: "IT Consultation & Support",
      description: "Expert guidance and ongoing support to ensure your systems operate at peak performance.",
      features: ["Technical Consulting", "System Maintenance", "Performance Optimization", "24/7 Support"],
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-tech-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-tech-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive ICT solutions to transform your business operations and drive digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="tech-card group relative overflow-hidden h-full">
              <div className={`absolute top-0 left-0 right-0 h-1 ${service.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl ${service.color} shadow-soft mr-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-card-title text-tech-dark">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-6 group opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl shadow-floating p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how our ICT solutions can streamline your operations and drive growth.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-tech-dark hover:bg-white/90 font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;