
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const location = useLocation();

  const solutionItems = [
    { path: "/computer-vision", label: "Computer Vision" },
    { path: "/generative-ai", label: "Generative AI" },
    { path: "/custom-ai", label: "Video AI" },
    { path: "/mlops", label: "MLOps" },
    { path: "/audio-ai", label: "Audio AI" },
    { path: "/document-ai", label: "Document AI" },
  ];

  const mainNavItems = [
    { path: "/", label: "Home" },
    { path: "/data-annotation", label: "Data Annotations" },
    { path: "/research", label: "Consulting & POC" },
    { path: "/blogs", label: "Blogs" },
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
          
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <Link to={item.path}>
                      <Button 
                        variant={location.pathname === item.path ? "default" : "ghost"}
                        size="sm"
                        className="text-sm"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutionItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-2">
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
