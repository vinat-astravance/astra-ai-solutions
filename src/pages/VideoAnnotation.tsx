
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

const VideoAnnotation = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const videoAnnotationTypes = [
    {
      id: "detection-tracking",
      title: "Detection & Tracking",
      description: "Advanced detection and tracking algorithms for object identification and movement analysis in video sequences.",
      projects: [
        {
          title: "2D Bounding Boxes",
          description: "Standard rectangular bounding box tracking across video frames for object detection and localization.",
          briefDescription: "Real-time 2D object detection and tracking with precise bounding box annotations.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        },
        {
          title: "3D Bounding Boxes",
          description: "Three-dimensional bounding box tracking for spatial object detection and depth-aware video analysis.",
          briefDescription: "Advanced 3D object tracking with depth information for comprehensive spatial analysis.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        },
        {
          title: "Object Tracking",
          description: "Multi-object tracking across video sequences for motion analysis and behavioral understanding.",
          briefDescription: "Intelligent multi-object tracking for comprehensive movement and behavior analysis.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        },
        {
          title: "Person Re-identification",
          description: "Advanced person identification and tracking across different camera views and time periods.",
          briefDescription: "Sophisticated person re-identification for security and surveillance applications.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        }
      ]
    },
    {
      id: "pose-keypoint",
      title: "Pose & Keypoint Tracking",
      description: "Precise pose estimation and keypoint tracking for human motion analysis and gesture recognition.",
      projects: [
        {
          title: "Human Pose Tracking",
          description: "Real-time human pose estimation and tracking across video frames for motion analysis and sports applications.",
          briefDescription: "Advanced human pose tracking for comprehensive motion analysis and activity recognition.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        },
        {
          title: "Facial Keypoint Tracking",
          description: "Detailed facial landmark detection and tracking for emotion analysis and facial recognition systems.",
          briefDescription: "Precise facial keypoint tracking for emotion recognition and biometric applications.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
        }
      ]
    },
    {
      id: "segmentation-shape",
      title: "Segmentation & Shape",
      description: "Pixel-level segmentation and shape annotation for detailed video content analysis and understanding.",
      projects: [
        {
          title: "Segmentation Masks",
          description: "Pixel-perfect segmentation masks for object isolation and detailed video scene understanding.",
          briefDescription: "Advanced segmentation masks for precise object separation and scene analysis.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
        },
        {
          title: "Polygon Annotations",
          description: "Flexible polygon shape annotations for irregular object boundaries and complex geometries in video.",
          briefDescription: "Precise polygon annotations for complex shape detection and boundary marking.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        },
        {
          title: "Lines/Splines",
          description: "Curved line and spline annotations for path tracking and structural analysis in video content.",
          briefDescription: "Advanced line and spline tracking for path analysis and structural mapping.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        }
      ]
    },
    {
      id: "event-activity",
      title: "Event & Activity",
      description: "Intelligent event detection and activity recognition for comprehensive video content analysis.",
      projects: [
        {
          title: "Event Tracking",
          description: "Automated detection and tracking of specific events and activities in video sequences for analysis.",
          briefDescription: "Smart event detection and tracking for comprehensive video activity analysis.",
          video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        },
        {
          title: "Tagging/Class Labels",
          description: "Comprehensive tagging and classification of video content for organization and searchability.",
          briefDescription: "Intelligent content tagging and classification for enhanced video organization.",
          beforeVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          afterVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
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
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video Annotation Services
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Comprehensive video labeling for object tracking, action recognition, 
              and temporal analysis in video sequences. Our expert annotators ensure 
              precise temporal and spatial consistency across all video frames.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Quote
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                  View Examples
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
              Interactive Video Annotation Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive video annotation capabilities through interactive demonstrations and real-world applications.
            </p>
          </div>

          {/* Parent Carousel */}
          <div className="relative px-16">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {videoAnnotationTypes.map((annotationType) => (
                  <div key={annotationType.id} className="flex-[0_0_100%] min-w-0">
                    <Card className="border-0 shadow-lg mx-4">
                      <CardHeader className="text-center pb-4 border-b-2 border-orange-100">
                        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent mb-2">
                          {annotationType.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600">
                          {annotationType.description}
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
                            {annotationType.projects.map((project, index) => (
                              <CarouselItem key={index}>
                                <Card className="border border-gray-200">
                                  <CardHeader>
                                    <CardTitle className="text-lg text-gray-800">{project.title}</CardTitle>
                                    <CardDescription className="text-sm text-orange-600 font-medium">
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
                          <CarouselPrevious className="border-orange-300 text-orange-600 hover:bg-orange-50" />
                          <CarouselNext className="border-orange-300 text-orange-600 hover:bg-orange-50" />
                        </Carousel>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Custom Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-orange-400 text-orange-600 hover:bg-orange-50 transition-all duration-200 flex items-center justify-center z-10"
              onClick={() => emblaApi && emblaApi.scrollPrev()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-orange-400 text-orange-600 hover:bg-orange-50 transition-all duration-200 flex items-center justify-center z-10"
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
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Power Your Video AI Models
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Ready to enhance your video understanding capabilities? 
            Let's discuss your video annotation requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default VideoAnnotation;
