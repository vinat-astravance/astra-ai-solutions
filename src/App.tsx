
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComputerVision from "./pages/ComputerVision";
import GenerativeAI from "./pages/GenerativeAI";
import CustomAI from "./pages/CustomAI";
import DataAnnotation from "./pages/DataAnnotation";
import MLOps from "./pages/MLOps";
import Research from "./pages/Research";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="astravance-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/computer-vision" element={<ComputerVision />} />
            <Route path="/generative-ai" element={<GenerativeAI />} />
            <Route path="/custom-ai" element={<CustomAI />} />
            <Route path="/data-annotation" element={<DataAnnotation />} />
            <Route path="/mlops" element={<MLOps />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
