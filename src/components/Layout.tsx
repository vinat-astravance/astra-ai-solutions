
import Navigation from "./Navigation";
import { ReactNode } from "react";
import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/d20347dc-1fdc-4387-a5d2-e0e5825d52b8.png" 
                  alt="Astravance AI" 
                  className="h-8 w-8"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-foreground">Astravance AI</span>
                  <span className="text-sm text-muted-foreground -mt-1">AI that Works the Way You Want</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Delivering cutting-edge AI solutions with technical expertise, innovation, and reliability.
              </p>
              
              <div className="flex flex-col space-y-3">
                <a 
                  href="mailto:info@astravance.ai" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@astravance.ai</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/astravance/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>Follow us on LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">AI Services</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground text-sm">
                <div className="flex flex-col space-y-2">
                  <Link to="/computer-vision" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Computer Vision
                  </Link>
                  <Link to="/custom-ai" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Video AI
                  </Link>
                  <Link to="/document-ai" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Document AI
                  </Link>
                  <Link to="/audio-ai" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Audio AI
                  </Link>
                  <Link to="/generative-ai/llms" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Generative AI & LLMs
                  </Link>
                </div>
                <div className="flex flex-col space-y-2">
                  <Link to="/applications-dashboards" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Applications & Dashboards
                  </Link>
                  <Link to="/mlops" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    MLOps
                  </Link>
                  <Link to="/data-annotation" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Data Annotation
                  </Link>
                  <Link to="/cloud-infrastructure" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Cloud Infrastructure
                  </Link>
                  <Link to="/research" onClick={handleLinkClick} className="hover:text-foreground transition-colors">
                    Consulting & POC
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Get Started</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Ready to transform your business with AI?
              </p>
              <p className="text-muted-foreground text-sm">
                Get in touch with our experts today.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Astravance AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
