import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const VideoComparisonSlider = ({ beforeVideo, afterVideo, description }: {
  beforeVideo: string;
  afterVideo: string;
  description: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className="relative aspect-video bg-black rounded-lg overflow-hidden cursor-crosshair"
        onMouseMove={handleMouseMove}
      >
        {/* Before Video */}
        <div className="absolute inset-0">
          <video 
            src={beforeVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        {/* After Video */}
        <div 
          className="absolute inset-0 overflow-hidden transition-all duration-100 ease-out"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <video 
            src={afterVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg transition-all duration-100 ease-out z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Hover Instruction */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
          Move cursor to compare
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mt-3">{description}</p>
    </div>
  );
};

const VideoDisplay = ({ video, description }: {
  video: string;
  description: string;
}) => {
  return (
    <div className="relative w-full">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <video 
          src={video}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <p className="text-sm text-gray-600 mt-3">{description}</p>
    </div>
  );
};

const CustomAI = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const projectTypes = [
    {
      id: "video-analytics",
      title: "Video Analytics",
      description: "Advanced AI-powered video analysis for real-time insights, detection, and monitoring across various applications.",
      projects: [
        {
          title: "Facial Recognition & License Plate Recognition",
          description: "Advanced facial recognition and automatic license plate detection with high accuracy for security and access control systems.",
          briefDescription: "AI-powered identification and recognition systems for enhanced security and automated access control.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        },
        {
          title: "Object Tracking & People Counting",
          description: "Real-time object tracking and automated people counting for crowd analysis, retail analytics, and security monitoring.",
          briefDescription: "Intelligent tracking and counting solutions for comprehensive crowd and object analytics.",
          beforeVideo: "/videos/ot_parent.mp4",
          afterVideo: "/videos/ot_child.mp4",
        },
        {
          title: "Action Recognition & Behavior Analysis",
          description: "AI-powered activity recognition and behavioral pattern analysis for security, healthcare, and sports applications.",
          briefDescription: "Advanced behavior analysis for understanding and predicting human activities and patterns.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        },
        {
          title: "Video Summarization & Highlights",
          description: "Automatic video summarization and highlight generation from long-form content for efficient content consumption.",
          briefDescription: "Intelligent content curation and summarization for streamlined video consumption and analysis.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        }
      ]
    },
    {
      id: "scene-segmentation",
      title: "Scene & Video Segmentation",
      description: "Precise segmentation of objects, scenes, and regions in video content using state-of-the-art AI models.",
      projects: [
        {
          title: "Semantic Scene Segmentation",
          description: "Pixel-level scene understanding and semantic segmentation in video streams for autonomous systems and content analysis.",
          briefDescription: "Detailed scene understanding with pixel-perfect segmentation for advanced video analysis.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        },
        {
          title: "Instance Segmentation",
          description: "Individual object instance detection and segmentation in complex scenes for precise object identification and tracking.",
          briefDescription: "Precise object separation and identification in complex multi-object environments.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
        }
      ]
    },
    {
      id: "video-enhancement",
      title: "Video Enhancement & Optimization",
      description: "AI-driven video quality improvement, resolution enhancement, and noise reduction for superior visual output.",
      projects: [
        {
          title: "Super-Resolution",
          description: "AI-powered video upscaling and super-resolution for enhanced quality and detail preservation in low-resolution content.",
          briefDescription: "Transform low-quality videos into high-resolution content with AI-powered enhancement.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
        },
        {
          title: "Denoising",
          description: "Advanced video denoising and artifact removal for cleaner output and improved visual quality in noisy environments.",
          briefDescription: "Remove noise and artifacts to produce crystal-clear video content.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
      ]
    },
    {
      id: "event-detection",
      title: "Event & Anomaly Detection",
      description: "Intelligent detection of events, anomalies, and unusual patterns in video streams for security and monitoring.",
      projects: [
        {
          title: "Anomaly Detection",
          description: "Real-time detection of unusual activities and behavioral anomalies for proactive security and safety monitoring.",
          briefDescription: "Identify unusual patterns and behaviors automatically for enhanced security and safety.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        },
        {
          title: "Event Recognition",
          description: "Automated detection and classification of specific events in video content for surveillance and content analysis.",
          briefDescription: "Automatically detect and classify important events in video streams.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        }
      ]
    },
    {
      id: "content-moderation",
      title: "Content Moderation & Compliance",
      description: "AI-powered content analysis and moderation to ensure compliance with platform guidelines and regulations.",
      projects: [
        {
          title: "Automated Content Screening",
          description: "AI-driven content analysis for policy compliance and safety screening to maintain platform standards and regulations.",
          briefDescription: "Ensure content compliance and safety through intelligent automated screening.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        },
        {
          title: "Inappropriate Content Detection",
          description: "Advanced detection of inappropriate or harmful content in video streams for safer digital environments.",
          briefDescription: "Protect users by detecting and filtering inappropriate or harmful video content.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        }
      ]
    }
  ];

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video AI Solutions
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Cutting-edge video AI technology for analytics, enhancement, and intelligent processing. From real-time video 
              analysis to advanced content moderation and optimization.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Explore Video AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Video AI Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive video AI capabilities through interactive demonstrations and real-world applications.
            </p>
          </div>

          {/* Parent Carousel */}
          <div className="relative px-16">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projectTypes.map((projectType) => (
                  <div key={projectType.id} className="flex-[0_0_100%] min-w-0">
                    <Card className="border-0 shadow-lg mx-4">
                      <CardHeader className="text-center pb-4 border-b-2 border-cyan-100">
                        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-2">
                          {projectType.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600">
                          {projectType.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8">
                        {/* Child Carousel */}
                        <Carousel 
                          className="w-full"
                          opts={{
                            loop: true,
                            align: "center"
                          }}
                        >
                          <CarouselContent>
                            {projectType.projects.map((project, index) => (
                              <CarouselItem key={index}>
                                <Card className="border border-gray-200">
                                  <CardHeader>
                                    <CardTitle className="text-lg text-gray-800">{project.title}</CardTitle>
                                    <CardDescription className="text-sm text-blue-600 font-medium">
                                      {project.briefDescription}
                                    </CardDescription>
                                  </CardHeader>
                                  <CardContent>
                                    {project.beforeVideo && project.afterVideo ? (
                                      <VideoComparisonSlider
                                        beforeVideo={project.beforeVideo}
                                        afterVideo={project.afterVideo}
                                        description={project.description}
                                      />
                                    ) : (
                                      <VideoDisplay
                                        video={project.video!}
                                        description={project.description}
                                      />
                                    )}
                                  </CardContent>
                                </Card>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="border-cyan-300 text-cyan-600 hover:bg-cyan-50" />
                          <CarouselNext className="border-cyan-300 text-cyan-600 hover:bg-cyan-50" />
                        </Carousel>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Custom Navigation Arrows - Outside the child carousel */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-teal-400 text-teal-600 hover:bg-teal-50 transition-all duration-200 flex items-center justify-center z-10"
              onClick={() => emblaApi && emblaApi.scrollPrev()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-teal-400 text-teal-600 hover:bg-teal-50 transition-all duration-200 flex items-center justify-center z-10"
              onClick={() => emblaApi && emblaApi.scrollNext()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicator Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === selectedIndex
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Video Content?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our video AI solutions can enhance your content creation and analysis workflows.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Get Started with Video AI
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CustomAI;
