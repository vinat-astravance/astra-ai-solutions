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
      id: "detection-tracking",
      title: "Detection & Tracking",
      description: "Advanced AI-powered detection and tracking capabilities for comprehensive video analysis and real-time monitoring.",
      projects: [
        {
          title: "Video Object Detection",
          description: "Real-time detection and classification of multiple objects in video streams with high accuracy and performance.",
          briefDescription: "Intelligent object identification and classification in video content.",
          beforeVideo: "/videos/videoss/object_detection_parent.mp4",
          afterVideo: "/videos/videoss/object_detection_child.mp4"
        },
        {
          title: "Video Segmentation",
          description: "Precise pixel-level segmentation of objects and scenes in video content for detailed analysis and understanding.",
          briefDescription: "Advanced video segmentation for detailed scene understanding.",
          beforeVideo: "/videos/videoss/vd_parent.mp4",
          afterVideo: "/videos/videoss/vd_child.mp4"
        },
        {
          title: "Video Keypoint (Pose Estimation)",
          description: "Accurate human pose detection and keypoint tracking for motion analysis, sports analytics, and health monitoring.",
          briefDescription: "Precise human pose detection and keypoint tracking for motion analysis.",
          beforeVideo: "/videos/videoss/video.mp4",
          afterVideo: "/videos/videoss/video.mp4_keypoint.mp4"
        },
        {
          title: "Object Tracking & Speed Estimation",
          description: "Advanced multi-object tracking with real-time speed estimation for traffic monitoring and analytics.",
          briefDescription: "Comprehensive object tracking with speed analysis capabilities.",
          beforeVideo: "/videos/videoss/ot_parent.mp4",
          afterVideo: "/videos/videoss/ot_child.mp4"
        },
        {
          title: "Motion Flow",
          description: "Optical flow analysis and motion estimation for understanding movement patterns and dynamics in video content.",
          briefDescription: "Advanced motion flow analysis for understanding movement patterns.",
          video: "/videos/videoss/highway_mini.mp4"
        }
      ]
    },
    {
      id: "enhancement",
      title: "Enhancement",
      description: "AI-driven video quality improvement and enhancement techniques for superior visual output and clarity.",
      projects: [
        {
          title: "Video Super-Resolution",
          description: "AI-powered video upscaling and super-resolution for enhanced quality and detail preservation in low-resolution content.",
          briefDescription: "Transform low-quality videos into high-resolution content with AI enhancement.",
          beforeVideo: "/videos/videoss/super_resolution_parentt.mp4",
          afterVideo: "/videos/videoss/super_resolution_childd.mp4"
        },
        {
          title: "Video De-Blurring",
          description: "Advanced deblurring algorithms to restore clarity and sharpness in motion-blurred or out-of-focus video content.",
          briefDescription: "Restore clarity and sharpness to blurred video content.",
          beforeVideo: "/videos/videoss/blurred.mp4",
          afterVideo: "/videos/videoss/deblurred.mp4"
        }
      ]
    },
    {
      id: "reconstruction",
      title: "Reconstruction",
      description: "Advanced 3D reconstruction and depth estimation techniques for spatial understanding and immersive content creation.",
      projects: [
        {
          title: "2D → 3D Conversion",
          description: "Transform 2D video content into immersive 3D experiences using advanced depth estimation and reconstruction algorithms.",
          briefDescription: "Convert 2D video content into immersive 3D experiences.",
          beforeVideo: "/videos/videoss/2d_video_to_3d_parent.mp4",
          afterVideo: "/videos/videoss/2d_video_to_3d_child.mp4"
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
