
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { useState } from "react";

const VideoComparisonSlider = ({ beforeVideo, afterVideo, description }: {
  beforeVideo: string;
  afterVideo: string;
  description: string;
}) => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="relative w-full">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
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
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
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
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderValue[0]}%` }}
        />
      </div>
      
      {/* Slider Control */}
      <div className="mt-4 px-4">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          min={0}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Before</span>
          <span>After</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mt-3">{description}</p>
    </div>
  );
};

const ImageToVideoSlider = ({ beforeImage, afterVideo, description }: {
  beforeImage: string;
  afterVideo: string;
  description: string;
}) => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="relative w-full">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        {/* Before Image */}
        <div className="absolute inset-0">
          <img 
            src={beforeImage}
            className="w-full h-full object-cover"
            alt="Before"
          />
        </div>
        
        {/* After Video */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
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
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderValue[0]}%` }}
        />
      </div>
      
      {/* Slider Control */}
      <div className="mt-4 px-4">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          min={0}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Original Image</span>
          <span>Generated Video</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mt-3">{description}</p>
    </div>
  );
};

const CustomAI = () => {
  const projectTypes = [
    {
      id: "video-detection",
      title: "Video Detection",
      description: "Advanced AI models that can detect, track, and analyze objects, people, and activities in video streams with high accuracy and real-time performance.",
      projects: [
        {
          title: "Person Detection & Tracking",
          description: "Real-time person detection with multi-object tracking across video frames",
          beforeVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
          afterVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
        },
        {
          title: "Vehicle Recognition",
          description: "Automated vehicle detection and classification in traffic monitoring systems",
          beforeVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
          afterVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
        },
        {
          title: "Activity Recognition",
          description: "AI-powered activity and behavior analysis for security and monitoring applications",
          beforeVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
          afterVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
        }
      ]
    },
    {
      id: "image-to-video",
      title: "Image to Video",
      description: "Transform static images into dynamic video content using advanced generative AI models that add motion, depth, and temporal coherence.",
      projects: [
        {
          title: "Portrait Animation",
          description: "Bring portrait photos to life with natural facial expressions and movements",
          beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
          afterVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
        },
        {
          title: "Scene Animation",
          description: "Add dynamic elements to landscape and architectural images",
          beforeImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
          afterVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
        },
        {
          title: "Product Showcase",
          description: "Transform product images into engaging marketing videos with smooth transitions",
          beforeImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
          afterVideo: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
        }
      ]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video AI Solutions
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Cutting-edge video AI technology for detection, analysis, and generation. From real-time video 
              processing to transforming static images into dynamic content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Explore Video AI
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                  Technical Deep Dive
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
              Explore our video AI capabilities through interactive demonstrations. Use the sliders to see before and after comparisons.
            </p>
          </div>

          {/* Parent Carousel for Project Types */}
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {projectTypes.map((projectType) => (
                <CarouselItem key={projectType.id}>
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {projectType.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {projectType.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                      {/* Child Carousel for Projects */}
                      <Carousel className="w-full">
                        <CarouselContent>
                          {projectType.projects.map((project, index) => (
                            <CarouselItem key={index}>
                              <Card className="border border-gray-200">
                                <CardHeader>
                                  <CardTitle className="text-lg">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  {projectType.id === "video-detection" ? (
                                    <VideoComparisonSlider
                                      beforeVideo={project.beforeVideo!}
                                      afterVideo={project.afterVideo!}
                                      description={project.description}
                                    />
                                  ) : (
                                    <ImageToVideoSlider
                                      beforeImage={project.beforeImage!}
                                      afterVideo={project.afterVideo!}
                                      description={project.description}
                                    />
                                  )}
                                </CardContent>
                              </Card>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
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
