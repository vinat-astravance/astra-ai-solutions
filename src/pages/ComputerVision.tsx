
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ComputerVision = () => {
  const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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

  const cvProjectTypes = [
    {
      id: "detection",
      title: "Detection",
      description: "Advanced detection algorithms for identifying and locating objects, faces, and anomalies in images and video streams.",
      subProjects: [
        {
          id: "object-detection",
          title: "Object Detection",
          description: "Real-time detection and classification of multiple objects in complex scenes",
          beforeImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "face-recognition",
          title: "Face Recognition",
          description: "Accurate facial recognition and identification systems for security applications",
          beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "anomaly-detection",
          title: "Anomaly Detection",
          description: "Identify unusual patterns and defects in manufacturing and quality control",
          beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "segmentation",
      title: "Image Segmentation",
      description: "Precise pixel-level segmentation techniques for detailed image analysis and understanding.",
      subProjects: [
        {
          id: "semantic-segmentation",
          title: "Semantic Segmentation",
          description: "Classify every pixel in an image to understand scene composition",
          beforeImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "instance-segmentation",
          title: "Instance Segmentation",
          description: "Identify and separate individual object instances in images",
          beforeImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "panoptic-segmentation",
          title: "Panoptic Segmentation",
          description: "Combine semantic and instance segmentation for complete scene understanding",
          beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "pose-estimation",
      title: "Pose Estimation",
      description: "Accurate human pose detection and tracking for motion analysis and interaction systems.",
      subProjects: [
        {
          id: "human-pose",
          title: "Human Pose Estimation",
          description: "Detect and track human body keypoints for motion analysis",
          beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "enhancement",
      title: "Image Enhancement",
      description: "Advanced image processing techniques to improve image quality, resolution, and clarity.",
      subProjects: [
        {
          id: "super-resolution",
          title: "Super-Resolution",
          description: "Enhance image resolution and quality using AI upscaling",
          beforeImage: "https://images.unsplash.com/photo-1516110833967-0b5ee0d87d9b?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "dehazing",
          title: "Dehazing",
          description: "Remove atmospheric haze and improve image clarity",
          beforeImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80&brightness=1.2"
        },
        {
          id: "inpainting",
          title: "Inpainting",
          description: "Intelligently fill missing or damaged parts of images",
          beforeImage: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "enhancement",
          title: "Enhancement",
          description: "General image enhancement for better visual quality",
          beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "tracking",
      title: "Tracking",
      description: "Multi-object tracking across video sequences for surveillance, analytics, and motion analysis.",
      subProjects: [
        {
          id: "multi-object-tracking",
          title: "Multi-Object Tracking",
          description: "Track multiple objects simultaneously across video sequences",
          beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "reconstruction",
      title: "Reconstruction & Depth",
      description: "3D reconstruction and depth estimation for spatial understanding and modeling.",
      subProjects: [
        {
          id: "depth-estimation",
          title: "Depth Estimation",
          description: "Estimate depth information from 2D images for 3D understanding",
          beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        }
      ]
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

  // Effect to update selected index when carousel changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Set initial index

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, projectId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderValues(prev => ({
      ...prev,
      [projectId]: percentage
    }));
  }, []);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  const BeforeAfterSlider = ({ project }: { project: any }) => {
    const sliderValue = sliderValues[project.id] || 50;
    
    return (
      <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
        {/* Before Image */}
        <div 
          className="absolute inset-0 transition-all duration-75 ease-out"
          style={{ 
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)` 
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
            clipPath: `inset(0 0 0 ${sliderValue}%)` 
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
          style={{ left: `${sliderValue}%` }}
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

      {/* Computer Vision Projects Two-Level Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Computer Vision Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive computer vision capabilities through interactive demonstrations
            </p>
          </div>

          {/* Parent Carousel - Project Types */}
          <div className="relative px-16">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {cvProjectTypes.map((projectType, index) => (
                  <div key={projectType.id} className="flex-[0_0_100%] min-w-0">
                    <Card className="border-0 shadow-lg mx-2">
                      <CardHeader className="text-center border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
                        <CardTitle className="text-4xl text-gray-900 mb-3 font-bold">{projectType.title}</CardTitle>
                        <CardDescription className="text-lg text-gray-700 mb-4 leading-relaxed">
                          {projectType.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8">
                        {/* Child Carousel - Sub Projects */}
                        <div className="max-w-5xl mx-auto relative">
                          <Carousel 
                            className="w-full"
                            opts={{
                              loop: true,
                              align: "start"
                            }}
                          >
                            <CarouselContent>
                              {projectType.subProjects.map((subProject) => (
                                <CarouselItem key={subProject.id}>
                                  <div className="space-y-4">
                                    <div className="text-center bg-gray-50 p-4 rounded-lg border-l-4 border-cyan-500">
                                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{subProject.title}</h3>
                                      <p className="text-gray-600 text-base">{subProject.description}</p>
                                    </div>
                                    <BeforeAfterSlider project={subProject} />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            {/* Child carousel arrows - positioned just outside the image at middle height */}
                            <CarouselPrevious className="-left-6 top-[calc(50%+4rem)] w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none" />
                            <CarouselNext className="-right-6 top-[calc(50%+4rem)] w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none" />
                          </Carousel>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Parent carousel arrows - slightly wider than child arrows and positioned outside */}
            <button
              className="absolute -left-6 top-[calc(50%+4rem)] -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute -right-6 top-[calc(50%+4rem)] -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
              onClick={() => emblaApi?.scrollNext()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {cvProjectTypes.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-cyan-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
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
