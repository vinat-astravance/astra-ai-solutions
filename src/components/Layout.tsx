
import Navigation from "./Navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/d20347dc-1fdc-4387-a5d2-e0e5825d52b8.png" 
                  alt="Astravance AI" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">Astravance AI</span>
              </div>
              <p className="text-gray-300 mb-4">
                Delivering cutting-edge AI solutions with technical expertise, innovation, and reliability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Computer Vision</li>
                <li>Generative AI & LLMs</li>
                <li>Custom AI Applications</li>
                <li>Data Annotation</li>
                <li>MLOps & Infrastructure</li>
                <li>Research & Feasibility</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">
                Ready to transform your business with AI?<br/>
                Get in touch with our experts today.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Astravance AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
