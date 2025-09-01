import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Zap } from "lucide-react";
import leadEngineerPhoto from "@/assets/IMG_2381.JPG";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Led by experienced software engineers with years of industry expertise"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Successfully delivered projects across education, healthcare, and business sectors"
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored software systems designed specifically for your organization's needs"
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description: "Cutting-edge development practices and latest technologies for optimal performance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-tech-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-tech-dark mb-4">
            About Kismayo ICT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are an innovative ICT company dedicated to transforming organizations through 
            cutting-edge software solutions. Our founder serves as lead software engineer, 
            bringing years of experience to every project we undertake.
          </p>
        </div>

        {/* Lead Engineer Section */}
        <div className="bg-gradient-card rounded-2xl shadow-floating p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-section-title text-tech-dark mb-6">
                Meet Our Lead Software Engineer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                With years of experience in software development and a passion for innovation, 
                our founder leads every project with technical excellence and creative problem-solving. 
                From concept to deployment, we ensure every solution meets the highest standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-logo-blue rounded-full"></div>
                  <span className="text-tech-dark font-medium">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-logo-green rounded-full"></div>
                  <span className="text-tech-dark font-medium">Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-logo-blue rounded-full"></div>
                  <span className="text-tech-dark font-medium">Systems Architect</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-logo-green rounded-full"></div>
                  <span className="text-tech-dark font-medium">Project Leader</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-logo rounded-2xl opacity-20"></div>
                <img 
                  src={leadEngineerPhoto}
                  alt="Lead Software Engineer - Kismayo ICT Solutions"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-elevated mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="tech-card h-full">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-card-title text-tech-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-2xl shadow-floating p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-section-title text-tech-dark mb-6">
                Innovation Meets Excellence
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Kismayo ICT Solutions, we believe technology should empower organizations 
                to achieve their goals more efficiently. Our team combines deep technical 
                expertise with a thorough understanding of local business needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-tech-dark">5+ Years of Development Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-tech-dark">Multiple Successful Deployments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-tech-dark">Ongoing Support & Maintenance</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-hero rounded-2xl shadow-elevated p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-4xl font-bold mb-2">100%</h4>
                  <p className="text-white/90">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;