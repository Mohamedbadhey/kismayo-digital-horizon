import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Vote, Coffee, Hospital, Recycle, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      client: "Kismayo University",
      description: "Comprehensive library management solution with book tracking, member management, and automated lending processes.",
      icon: BookOpen,
      tags: ["Web App", "Database", "Admin Panel"],
      color: "bg-blue-500"
    },
    {
      title: "Voting System",
      client: "Gulwade Primary & Secondary School",
      description: "Secure digital voting platform for school elections with real-time results and comprehensive reporting.",
      icon: Vote,
      tags: ["Security", "Real-time", "Dashboard"],
      color: "bg-green-500"
    },
    {
      title: "University Voting System",
      client: "Kismayo University",
      description: "Advanced voting solution for university student council elections with enhanced security features.",
      icon: Vote,
      tags: ["Security", "Analytics", "Multi-user"],
      color: "bg-purple-500"
    },
    {
      title: "Restaurant Management System",
      client: "SomCoffee",
      description: "Complete restaurant management solution with order processing, inventory management, and POS integration.",
      icon: Coffee,
      tags: ["POS", "Inventory", "Orders"],
      color: "bg-orange-500"
    },
    {
      title: "Hospital Management System",
      client: "Jubba Specialist Hospital",
      description: "Comprehensive healthcare management system with patient records, appointment scheduling, and billing.",
      icon: Hospital,
      tags: ["Healthcare", "Patient Records", "Scheduling"],
      color: "bg-red-500"
    },
    {
      title: "Waste Management System",
      client: "Waamo Waste",
      description: "Operational system for waste management with route optimization and collection tracking.",
      icon: Recycle,
      tags: ["Operations", "Tracking", "Optimization"],
      color: "bg-emerald-500"
    },
    {
      title: "Wescoblling System",
      client: "Graduation Project",
      description: "Innovative billing and management system developed as a capstone graduation project.",
      icon: GraduationCap,
      tags: ["Billing", "Management", "Innovation"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-tech-dark mb-4">
            Our Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped organizations across Kismayo streamline their operations 
            with custom software solutions tailored to their specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-lg ${project.color} shadow-soft`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-card-title text-tech-dark leading-tight">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium">
                  {project.client}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="tech-button-accent">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;