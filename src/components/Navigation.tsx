
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"}
                size="sm"
                className="text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium shadow-md"
              >
                Home
              </Button>
            </Link>
            
            {/* Solutions Menu */}
            <div className="relative group">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sm text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 font-medium transition-all duration-200"
              >
                Solutions
              </Button>
              
              {/* Solutions Dropdown */}
              <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-blue-200 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {solutionItems.map((item) => (
                    item.hasSubmenu ? (
                      <div key={item.path} className="relative group/sub">
                        <div className="px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 cursor-pointer flex items-center justify-between">
                          {item.label}
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        {/* Generative AI Submenu */}
                        <div className="absolute left-full top-0 ml-1 w-48 bg-white border border-blue-200 shadow-xl rounded-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                          <div className="py-2">
                            {generativeAIItems.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Data Annotations Menu */}
            <div className="relative group">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sm text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 font-medium transition-all duration-200"
              >
                Data Annotations
              </Button>
              
              {/* Data Annotations Dropdown */}
              <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-blue-200 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {dataAnnotationItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link to="/research">
              <Button 
                variant={location.pathname === "/research" ? "default" : "ghost"}
                size="sm"
                className="text-sm text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 font-medium transition-all duration-200"
              >
                Consulting & POC
              </Button>
            </Link>

            <Link to="/blogs">
              <Button 
                variant={location.pathname === "/blogs" ? "default" : "ghost"}
                size="sm"
                className="text-sm text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 font-medium transition-all duration-200"
              >
                Blogs
              </Button>
            </Link>

            <Link to="/contact">
              <Button 
                variant={location.pathname === "/contact" ? "default" : "ghost"}
                size="sm"
                className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-md"
              >
                Contact
              </Button>
            </Link>
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
