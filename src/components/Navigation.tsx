
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
    <nav className="bg-gradient-to-r from-slate-50 to-blue-50 shadow-md border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d20347dc-1fdc-4387-a5d2-e0e5825d52b8.png" 
              alt="Astravance AI" 
              className="h-8 w-8"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Astravance AI</span>
              <span className="text-xs text-gray-600 -mt-1">AI that Works the Way You Want</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1 ml-auto">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <Button 
                      variant={location.pathname === "/" ? "default" : "ghost"}
                      size="sm"
                      className="text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium"
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
                        className="text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium"
                      >
                        Solutions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 bg-white/95 backdrop-blur-sm border-blue-200 shadow-lg">
                      {solutionItems.map((item) => (
                        item.hasSubmenu ? (
                          <DropdownMenuSub key={item.path}>
                            <DropdownMenuSubTrigger className="text-gray-700 hover:text-blue-700 hover:bg-blue-50">
                              {item.label}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="bg-white/95 backdrop-blur-sm border-blue-200 shadow-lg">
                                {generativeAIItems.map((subItem) => (
                                  <DropdownMenuItem key={subItem.path} asChild>
                                    <Link
                                      to={subItem.path}
                                      className="text-gray-600 hover:text-blue-700 hover:bg-blue-50"
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
                              className="text-gray-700 hover:text-blue-700 hover:bg-blue-50"
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
                  <NavigationMenuTrigger className="text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium">
                    Data Annotations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 bg-white/95 backdrop-blur-sm border-blue-200">
                      {dataAnnotationItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 text-gray-700"
                        >
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/research">
                    <Button 
                      variant={location.pathname === "/research" ? "default" : "ghost"}
                      size="sm"
                      className="text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium"
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
                      className="text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium"
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
                      className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium"
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
