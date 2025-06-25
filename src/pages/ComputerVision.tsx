
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useRef, useCallback } from "react";

const ComputerVision = () => {
  const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>({
    segmentation: 50,
    detection: 50,
    tracking: 50
  });

  const capabilities = [
    {
      title: "Object Detection & Recognition",
      description: "Advanced algorithms for identifying and classifying objects in images and video streams with high accuracy."
    },
    {
      title: "Image Segmentation",
      description: "Precise pixel-level segmentation for medical imaging, autonomous vehicles, and quality control applications."
    },
    {
      title: "Optical Character Recognition",
      description: "Extract and digitize text from documents, signs, and handwritten content with industry-leading accuracy."
    },
    {
      title: "Anomaly Detection",
      description: "Identify defects, irregularities, and anomalies in manufacturing, security, and quality assurance processes."
    },
    {
      title: "Real-time Video Analytics",
      description: "Process live video feeds for surveillance, traffic monitoring, and behavioral analysis applications."
    },
    {
      title: "Multi-modal Understanding",
      description: "Combine visual data with text and sensor inputs for comprehensive scene understanding."
    }
  ];

  const cvProjects = [
    {
      id: "segmentation",
      title: "Image Segmentation",
      description: "Precise pixel-level object segmentation for medical imaging and autonomous systems",
      beforeImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "detection",
      title: "Object Detection",
      description: "Real-time detection and classification of multiple objects in complex scenes",
      beforeImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tracking",
      title: "Object Tracking",
      description: "Multi-object tracking across video sequences for surveillance and analytics",
      beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const industries = [
    "Manufacturing & Quality Control",
    "Healthcare & Medical Imaging",
    "Retail & E-commerce",
    "Security & Surveillance",
    "Automotive & Transportation",
    "Agriculture & Environmental Monitoring"
  ];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, projectId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderValues(prev => ({
      ...prev,
      [projectId]: percentage
    }));
  }, []);

  const BeforeAfterSlider = ({ project }: { project: typeof cvProjects[0] }) => {
    return (
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
        {/* Before Image */}
        <div 
          className="absolute inset-0 transition-all duration-75 ease-out"
          style={{ 
            clipPath: `inset(0 ${100 - sliderValues[project.id]}% 0 0)` 
          }}
        >
          <img 
            src={project.beforeImage}
            alt={`${project.title} - Before`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
            Original
          </div>
        </div>
        
        {/* After Image */}
        <div 
          className="absolute inset-0 transition-all duration-75 ease-out"
          style={{ 
            clipPath: `inset(0 0 0 ${sliderValues[project.id]}%)` 
          }}
        >
          <img 
            src={project.afterImage}
            alt={`${project.title} - After`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded text-sm font-medium">
            Processed
          </div>
        </div>

        {/* Interactive overlay */}
        <div 
          className="absolute inset-0 cursor-col-resize"
          onMouseMove={(e) => handleMouseMove(e, project.id)}
        />

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-75 ease-out pointer-events-none"
          style={{ left: `${sliderValues[project.id]}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
            <div className="flex space-x-0.5">
              <div className="w-0.5 h-4 bg-gray-400"></div>
              <div className="w-0.5 h-4 bg-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded text-sm">
          Move mouse to compare
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Computer Vision Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform visual data into actionable insights with our advanced computer vision models. 
              From object detection to real-time analytics, we develop tailored solutions that see, 
              understand, and respond to your visual world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Discuss Your Project
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Feasibility Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Computer Vision Projects Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Computer Vision Projects in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the power of our computer vision solutions through interactive before/after comparisons
            </p>
          </div>

          <Carousel 
            className="w-full max-w-5xl mx-auto"
            opts={{
              loop: true,
              align: "start"
            }}
          >
            <CarouselContent>
              {cvProjects.map((project) => (
                <CarouselItem key={project.id}>
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-gray-900">{project.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                      <BeforeAfterSlider project={project} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Computer Vision Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our computer vision expertise spans the full spectrum of visual AI, 
              delivering robust solutions tailored to your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Technical Approach
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">State-of-the-Art Models</h3>
                  <p className="text-gray-600">
                    We leverage cutting-edge architectures including CNNs, Vision Transformers, 
                    and hybrid models optimized for your specific use case.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Training & Fine-tuning</h3>
                  <p className="text-gray-600">
                    Our models are trained on your domain-specific data to achieve superior 
                    performance compared to generic solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge & Cloud Deployment</h3>
                  <p className="text-gray-600">
                    Optimized for both real-time edge processing and scalable cloud inference, 
                    ensuring optimal performance for your deployment scenario.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Applications</h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to See What's Possible?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's explore how computer vision can transform your visual data into competitive advantage.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Your Vision Project
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ComputerVision;
