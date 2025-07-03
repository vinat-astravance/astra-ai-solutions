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
          afterVideo: "/videos/videoss/object_detection_child.mp4",
          industries: [
            { name: "Retail", use: "Inventory management, theft prevention, and customer behavior analysis" },
            { name: "Security", use: "Surveillance systems for threat detection and access control" },
            { name: "Autonomous Vehicles", use: "Real-time detection of pedestrians, vehicles, and obstacles" },
            { name: "Manufacturing", use: "Quality control and defect detection on production lines" }
          ]
        },
        {
          title: "Video Segmentation",
          description: "Precise pixel-level segmentation of objects and scenes in video content for detailed analysis and understanding.",
          briefDescription: "Advanced video segmentation for detailed scene understanding.",
          beforeVideo: "/videos/videoss/vd_parent.mp4",
          afterVideo: "/videos/videoss/vd_child.mp4",
          industries: [
            { name: "Medical Imaging", use: "Precise organ and tissue segmentation for surgical planning" },
            { name: "Film & Entertainment", use: "Background replacement and visual effects production" },
            { name: "Agriculture", use: "Crop monitoring and yield estimation through aerial imagery" },
            { name: "Urban Planning", use: "Building and infrastructure analysis from satellite imagery" }
          ]
        },
        {
          title: "Video Keypoint (Pose Estimation)",
          description: "Accurate human pose detection and keypoint tracking for motion analysis, sports analytics, and health monitoring.",
          briefDescription: "Precise human pose detection and keypoint tracking for motion analysis.",
          beforeVideo: "/videos/videoss/video.mp4",
          afterVideo: "/videos/videoss/video.mp4_keypoint.mp4",
          industries: [
            { name: "Sports Analytics", use: "Performance analysis and technique improvement for athletes" },
            { name: "Healthcare", use: "Physical therapy monitoring and rehabilitation progress tracking" },
            { name: "Fitness Technology", use: "Form correction and workout guidance in fitness apps" },
            { name: "Gaming & AR", use: "Motion capture for character animation and interactive experiences" }
          ]
        },
        {
          title: "Object Tracking & Speed Estimation",
          description: "Advanced multi-object tracking with real-time speed estimation for traffic monitoring and analytics.",
          briefDescription: "Comprehensive object tracking with speed analysis capabilities.",
          beforeVideo: "/videos/videoss/ot_parent.mp4",
          afterVideo: "/videos/videoss/ot_child.mp4",
          industries: [
            { name: "Traffic Management", use: "Speed enforcement and traffic flow optimization" },
            { name: "Logistics", use: "Package tracking and warehouse automation systems" },
            { name: "Sports Broadcasting", use: "Player tracking and performance statistics in real-time" },
            { name: "Wildlife Conservation", use: "Animal movement tracking for research and protection" }
          ]
        },
        {
          title: "Motion Flow",
          description: "Optical flow analysis and motion estimation for understanding movement patterns and dynamics in video content.",
          briefDescription: "Advanced motion flow analysis for understanding movement patterns.",
          video: "/videos/videoss/highway_mini.mp4",
          industries: [
            { name: "Meteorology", use: "Weather pattern analysis and storm tracking systems" },
            { name: "Robotics", use: "Navigation and obstacle avoidance in autonomous systems" },
            { name: "Video Compression", use: "Efficient encoding by predicting inter-frame motion" },
            { name: "Medical Diagnostics", use: "Blood flow analysis and cardiac motion assessment" }
          ]
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
          afterVideo: "/videos/videoss/super_resolution_childd.mp4",
          industries: [
            { name: "Broadcasting", use: "Upscaling legacy content for modern high-definition displays" },
            { name: "Security", use: "Enhancing low-quality surveillance footage for forensic analysis" },
            { name: "Entertainment", use: "Restoring and remastering classic films and TV shows" },
            { name: "Medical Imaging", use: "Improving resolution of diagnostic imaging for better analysis" }
          ]
        },
        {
          title: "Video De-Blurring",
          description: "Advanced deblurring algorithms to restore clarity and sharpness in motion-blurred or out-of-focus video content.",
          briefDescription: "Restore clarity and sharpness to blurred video content.",
          beforeVideo: "/videos/videoss/blurred.mp4",
          afterVideo: "/videos/videoss/deblurred.mp4",
          industries: [
            { name: "Law Enforcement", use: "Clarifying evidence from body cameras and surveillance systems" },
            { name: "Autonomous Vehicles", use: "Improving camera clarity in adverse weather conditions" },
            { name: "Content Creation", use: "Salvaging footage with camera shake or focus issues" },
            { name: "Scientific Research", use: "Enhancing microscopy and telescope imagery for analysis" }
          ]
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
          afterVideo: "/videos/videoss/2d_video_to_3d_child.mp4",
          industries: [
            { name: "Entertainment", use: "Converting classic films to 3D for immersive cinema experiences" },
            { name: "VR/AR", use: "Creating depth maps for virtual and augmented reality applications" },
            { name: "Architecture", use: "Converting 2D blueprints into 3D visualizations for clients" },
            { name: "E-commerce", use: "Creating 3D product views from 2D images for online shopping" }
          ]
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
                                  <CardContent className="space-y-6">
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
                                    
                                    {/* Industry Applications */}
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
                                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        Industry Applications
                                      </h4>
                                      <div className="grid gap-3">
                                        {project.industries?.map((industry, idx) => (
                                          <div key={idx} className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                                            <div className="flex items-start space-x-3">
                                              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                              <div>
                                                <h5 className="font-semibold text-gray-800 text-sm">{industry.name}</h5>
                                                <p className="text-gray-600 text-sm mt-1">{industry.use}</p>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
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
