
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const VideoAnnotation = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const services = [
    {
      title: "Object Tracking",
      description: "Advanced object detection and tracking across video frames with temporal consistency.",
      detailedDescription: "Object tracking and detection in videos involves performing object annotation in each frame along with assigning unique object IDs to add temporal information. This enables continuous tracking of objects as they move through the video sequence, maintaining identity consistency across frames for comprehensive motion analysis.",
      features: ["Multi-object tracking", "Temporal consistency", "Identity preservation", "Motion analysis"],
      gif: "/gifs/video_annotation/object_tracking.gif"
    },
    {
      title: "Object Segmentation",
      description: "Pixel-level object segmentation with temporal tracking for detailed video analysis.",
      detailedDescription: "Similar to object tracking, object segmentation combines segmentation annotation of each frame with object ID assignment. This provides pixel-perfect boundaries for objects while maintaining temporal consistency, enabling detailed analysis of object shape changes and interactions throughout the video sequence.",
      features: ["Pixel-level segmentation", "Temporal object ID tracking", "Shape analysis", "Object interaction mapping"],
      gif: "/gifs/video_annotation/video_segmentation.gif"
    },
    {
      title: "Person Re-identification",
      description: "Advanced person identification and tracking across different camera views and scenes.",
      detailedDescription: "Person re-identification focuses on identifying and tracking individuals across multiple camera views or different time periods within video sequences. This technology is crucial for surveillance systems, retail analytics, and security applications where maintaining person identity across various scenarios is essential.",
      features: ["Cross-camera tracking", "Identity preservation", "Appearance modeling", "Temporal consistency"],
      gif: "/gifs/video_data_annotation.gif"
    },
    {
      title: "Keypoint & Pose Tracking",
      description: "Precise human pose estimation and keypoint tracking across video sequences.",
      detailedDescription: "Keypoint and pose tracking involves detecting and tracking specific anatomical points on humans throughout video sequences. This enables detailed motion analysis, gesture recognition, sports performance analysis, and health monitoring applications by maintaining temporal consistency of pose information.",
      features: ["Human pose estimation", "Keypoint detection", "Motion analysis", "Gesture recognition"],
      gif: "/gifs/video_annotation/pose_estimation.gif"
    },
    {
      title: "Action & Event Annotation",
      description: "Comprehensive annotation of actions, events, and activities in video content.",
      detailedDescription: "Action and event annotation involves identifying, labeling, and temporally localizing specific activities, behaviors, and events within video sequences. This includes activity recognition, event detection, and behavioral analysis that provides context and semantic understanding of video content.",
      features: ["Activity recognition", "Event detection", "Temporal localization", "Behavioral analysis"],
      gif: "/gifs/video_annotation/video_action_recognition.png"
    }
  ];

  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Video Data Annotation
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Comprehensive video annotation services for computer vision and AI applications. 
              Our experts deliver precise temporal labeling for object tracking, action recognition, 
              and advanced video analysis across diverse industries and use cases.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Quote
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
              Interactive Video Annotation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Video data annotation involves extracting information from video sequences frame by frame. 
              Video annotation is essentially image annotation enhanced with temporal information, 
              creating a comprehensive understanding of objects, actions, and events as they evolve over time. 
              Explore our comprehensive video annotation capabilities through interactive demonstrations 
              and detailed service descriptions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel 
              className="w-full"
              opts={{
                loop: true,
                align: "start"
              }}
              setApi={setApi}
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
                          {/* GIF Display */}
                          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 flex items-center justify-center">
                            <div className="max-w-full">
                              <img 
                                src={service.gif} 
                                alt={service.title} 
                                className="w-full h-auto rounded-lg shadow-lg max-h-96 object-contain"
                              />
                            </div>
                          </div>
                          
                          {/* Service Information */}
                          <div className="p-8 flex flex-col justify-center bg-white">
                            <div className="mb-6">
                              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                {service.title}
                              </h3>
                              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {service.detailedDescription}
                              </p>
                            </div>
                            
                            <div className="mb-8">
                              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                              <div className="grid grid-cols-1 gap-3">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-gray-700">
                                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-4"></span>
                                    <span className="text-base">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-4">
                              <Link to="/contact">
                                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
                                  Get Quote
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-orange-600 hover:bg-orange-700 text-white border-none" />
              <CarouselNext className="right-4 bg-orange-600 hover:bg-orange-700 text-white border-none" />
            </Carousel>

            {/* Service Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    current === index ? 'bg-orange-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Video Annotation Solutions
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Ready to enhance your video understanding capabilities with precision temporal annotations? 
            Let's discuss your specific video annotation requirements.
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
