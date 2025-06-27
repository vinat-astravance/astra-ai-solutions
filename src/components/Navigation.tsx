
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();

  const solutionItems = [
    { path: "/computer-vision", label: "Computer Vision" },
    { path: "/generative-ai", label: "Generative AI", hasSubmenu: true },
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

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 border-b border-blue-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d20347dc-1fdc-4387-a5d2-e0e5825d52b8.png" 
              alt="Astravance AI" 
              className="h-8 w-8"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Astravance AI</span>
              <span className="text-xs text-gray-600 -mt-1">AI that Works the Way You Want</span>
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
                      className="text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium shadow-md"
                    >
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-sm text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 font-medium transition-all duration-200"
                      >
                        Solutions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 bg-white/98 backdrop-blur-sm border-blue-200 shadow-xl">
                      {solutionItems.map((item) => (
                        item.hasSubmenu ? (
                          <DropdownMenuSub key={item.path}>
                            <DropdownMenuSubTrigger className="text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50">
                              {item.label}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="bg-white/98 backdrop-blur-sm border-blue-200 shadow-xl">
                                {generativeAIItems.map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild>
                                    <Link
                                      to={subItem.path}
                                      className="text-gray-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                                    >
                                      {subItem.label}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        ) : (
                          <DropdownMenuItem key={item.path} asChild>
                            <Link
                              to={item.path}
                              className="text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                            >
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        )
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-sm text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 font-medium transition-all duration-200"
                      >
                        Data Annotations
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 bg-white/98 backdrop-blur-sm border-blue-200 shadow-xl">
                      {dataAnnotationItems.map((item, index) => (
                        <DropdownMenuItem key={index} asChild>
                          <Link
                            to={item.path}
                            className="text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                          >
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/research">
                    <Button 
                      variant={location.pathname === "/research" ? "default" : "ghost"}
                      size="sm"
                      className="text-sm text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 font-medium transition-all duration-200"
                    >
                      Consulting & POC
                    </Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blogs">
                    <Button 
                      variant={location.pathname === "/blogs" ? "default" : "ghost"}
                      size="sm"
                      className="text-sm text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 font-medium transition-all duration-200"
                    >
                      Blogs
                    </Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <Button 
                      variant={location.pathname === "/contact" ? "default" : "ghost"}
                      size="sm"
                      className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-md"
                    >
                      Contact
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-2">
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-700">
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
