
import Navigation from "./Navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-muted">
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
              <p className="text-muted-foreground mb-4">
                Delivering cutting-edge AI solutions with technical expertise, innovation, and reliability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Computer Vision</li>
                <li>Generative AI & LLMs</li>
                <li>Custom AI Applications</li>
                <li>Data Annotation</li>
                <li>MLOps & Infrastructure</li>
                <li>Research & Feasibility</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
              <p className="text-muted-foreground">
                Ready to transform your business with AI?<br/>
                Get in touch with our experts today.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Astravance AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
