
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
import LLMs from "./pages/LLMs";
import AgenticAI from "./pages/AgenticAI";
import CustomAI from "./pages/CustomAI";
import DataAnnotation from "./pages/DataAnnotation";
import ImageAnnotation from "./pages/ImageAnnotation";
import MLOps from "./pages/MLOps";
import Research from "./pages/Research";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import AudioAI from "./pages/AudioAI";
import DocumentAI from "./pages/DocumentAI";
import CloudInfrastructure from "./pages/CloudInfrastructure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="astravance-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/computer-vision" element={<ComputerVision />} />
            <Route path="/generative-ai" element={<GenerativeAI />} />
            <Route path="/generative-ai/llms" element={<LLMs />} />
            <Route path="/generative-ai/agentic-ai" element={<AgenticAI />} />
            <Route path="/custom-ai" element={<CustomAI />} />
            <Route path="/data-annotation" element={<DataAnnotation />} />
            <Route path="/image-annotation" element={<ImageAnnotation />} />
            <Route path="/mlops" element={<MLOps />} />
            <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/audio-ai" element={<AudioAI />} />
            <Route path="/document-ai" element={<DocumentAI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
