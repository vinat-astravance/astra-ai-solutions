
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/computer-vision", label: "Computer Vision" },
    { path: "/generative-ai", label: "Generative AI" },
    { path: "/custom-ai", label: "Video AI" },
    { path: "/data-annotation", label: "Data Annotation" },
    { path: "/mlops", label: "MLOps" },
    { path: "/research", label: "Research" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d20347dc-1fdc-4387-a5d2-e0e5825d52b8.png" 
              alt="Astravance AI" 
              className="h-8 w-8"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Astravance AI</span>
              <span className="text-xs text-muted-foreground -mt-1">AI that Works the Way You Want</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className="text-sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
