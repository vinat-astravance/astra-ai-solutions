
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

  const generativeAIItems = [
    { path: "/generative-ai/llms", label: "LLMs" },
    { path: "/generative-ai/agentic-ai", label: "Agentic AI" },
  ];

  const dataAnnotationItems = [
    { path: "/data-annotation", label: "Image" },
    { path: "/data-annotation", label: "Audio" },
    { path: "/data-annotation", label: "Video" },
    { path: "/data-annotation", label: "Text" },
    { path: "/data-annotation", label: "Multi Sensor Data" },
    { path: "/data-annotation", label: "Other Services" },
  ];

  const mainNavItems = [
    { path: "/", label: "Home" },
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
                <NavigationMenuItem>
                  <Link to="/">
                    <Button 
                      variant={location.pathname === "/" ? "default" : "ghost"}
                      size="sm"
                      className="text-sm"
                    >
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-3 p-4">
                      {solutionItems.map((item) => (
                        <div key={item.path}>
                          {item.label === "Generative AI" ? (
                            <div>
                              <Link
                                to={item.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.label}</div>
                              </Link>
                              <div className="ml-4 space-y-1">
                                {generativeAIItems.map((subItem) => (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    className="block select-none rounded-md p-2 text-xs leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-muted-foreground"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={item.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Data Annotations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-3 p-4">
                      {dataAnnotationItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
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
