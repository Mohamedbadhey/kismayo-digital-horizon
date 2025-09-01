import { Button } from "@/components/ui/button";
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-logo rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Kismayo ICT Solutions</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Empowering organizations in Kismayo with innovative software solutions. 
              We build modern systems and applications that drive business growth and efficiency.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-2">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/70" />
                <span className="text-white/70 text-sm">info@kismayoict.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/70" />
                <span className="text-white/70 text-sm">+252 61 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/70" />
                <span className="text-white/70 text-sm">Kismayo, Jubaland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © {currentYear} Kismayo ICT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;