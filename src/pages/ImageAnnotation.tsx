
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ImageAnnotation = () => {
  const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const imageAnnotationTypes = [
    {
      id: "detection",
      title: "Detection & Bounding Boxes",
      description: "Precise object detection and localization using various bounding box techniques for object identification.",
      subProjects: [
        {
          id: "2d-boxes",
          title: "2D Bounding Boxes",
          description: "Standard rectangular bounding boxes for object detection and localization",
          beforeImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "3d-boxes",
          title: "3D Bounding Boxes",
          description: "Three-dimensional bounding boxes for spatial object detection and depth estimation",
          beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "segmentation",
      title: "Segmentation",
      description: "Pixel-level segmentation techniques for detailed image analysis and understanding.",
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
      id: "keypoints",
      title: "Keypoints & Shape Annotations",
      description: "Precise keypoint detection and shape annotation for detailed structural analysis.",
      subProjects: [
        {
          id: "landmarks",
          title: "Landmarks",
          description: "Detect and annotate key landmark points in images for facial and object analysis",
          beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "pose-estimation",
          title: "Pose Estimation",
          description: "Human pose detection and tracking for motion analysis",
          beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "lines-splines",
          title: "Lines/Splines",
          description: "Precise line and curve annotations for structural and path analysis",
          beforeImage: "https://images.unsplash.com/photo-1516110833967-0b5ee0d87d9b?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "polylines",
          title: "Polylines",
          description: "Complex polyline annotations for detailed shape and boundary marking",
          beforeImage: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "tracking",
      title: "Tracking & Counting",
      description: "Advanced tracking and counting techniques for object analysis and monitoring.",
      subProjects: [
        {
          id: "object-tracking",
          title: "Object Tracking",
          description: "Track objects across multiple frames for motion and behavior analysis",
          beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "object-counting",
          title: "Object Counting",
          description: "Automated counting of objects in images for inventory and analysis",
          beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
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
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
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
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
            Annotated
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Image Annotation
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Experience our comprehensive image annotation capabilities with precision tools for complex image labeling tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Try Interactive Demo
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Technical Specs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Annotation Capabilities Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Image Annotation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive image annotation capabilities through interactive demonstrations
            </p>
          </div>

          {/* Parent Carousel - Annotation Types */}
          <div className="relative px-20">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {imageAnnotationTypes.map((annotationType, index) => (
                  <div key={annotationType.id} className="flex-[0_0_100%] min-w-0">
                    <Card className="border-0 shadow-lg mx-2">
                      <CardHeader className="text-center border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
                        <CardTitle className="text-4xl text-gray-900 mb-3 font-bold">{annotationType.title}</CardTitle>
                        <CardDescription className="text-lg text-gray-700 mb-4 leading-relaxed">
                          {annotationType.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8">
                        {/* Child Carousel - Sub Projects */}
                        <div className="relative">
                          <Carousel 
                            className="w-full"
                            opts={{
                              loop: true,
                              align: "start"
                            }}
                          >
                            <CarouselContent>
                              {annotationType.subProjects.map((subProject) => (
                                <CarouselItem key={subProject.id}>
                                  <div className="space-y-4">
                                    <div className="text-center bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{subProject.title}</h3>
                                      <p className="text-gray-600 text-base">{subProject.description}</p>
                                    </div>
                                    <BeforeAfterSlider project={subProject} />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            {/* Child carousel arrows - positioned at edge of image */}
                            <CarouselPrevious className="left-4 top-[calc(50%+8rem)] w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none" />
                            <CarouselNext className="right-4 top-[calc(50%+8rem)] w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none" />
                          </Carousel>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Parent carousel arrows - wider and positioned outside, at image middle */}
            <button
              className="absolute -left-8 top-[calc(50%+8rem)] -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute -right-8 top-[calc(50%+8rem)] -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
              onClick={() => emblaApi?.scrollNext()}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {imageAnnotationTypes.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Annotating?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the power of our advanced annotation tools and see how they can accelerate your computer vision projects.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ImageAnnotation;
