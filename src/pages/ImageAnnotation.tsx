
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ImageAnnotation = () => {
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
      title: "Bounding Boxes",
      description: "Precise rectangular bounding box annotation for object detection and localization.",
      detailedDescription: "Our bounding box annotation service provides accurate rectangular boundaries around objects in images. This fundamental computer vision technique is essential for object detection models, enabling precise localization and classification of objects within images for various AI applications.",
      features: ["2D object detection", "Multi-class labeling", "Precise boundary definition", "Quality assurance"],
      gif: "/gifs/image_annotation/object_detection.gif"
    },
    {
      title: "Polygon & Polyline Annotations",
      description: "Complex shape annotation using polygons and polylines for irregular objects and boundaries.",
      detailedDescription: "Handle complex, irregular shapes that cannot be captured by simple bounding boxes. Our polygon and polyline annotation services provide precise boundary definition for objects with complex geometries, road markings, and custom-shaped elements in images.",
      features: ["Irregular object boundaries", "Road marking annotation", "Building footprints", "Custom shape definition"],
      gif: "/gifs/image_annotation/line_spline.png"
    },
    {
      title: "Segmentation Masks",
      description: "Pixel-level segmentation masks for detailed image analysis and scene understanding.",
      detailedDescription: "Achieve pixel-perfect accuracy with our semantic and instance segmentation services. We provide detailed pixel-level masks that enable comprehensive scene understanding, separating objects from backgrounds and identifying every element in your images with precision.",
      features: ["Semantic segmentation", "Instance segmentation", "Pixel-level accuracy", "Background separation"],
      gif: "/gifs/image_annotation/image_segmentation.gif"
    },
    {
      title: "Keypoint / Landmark Annotations",
      description: "Precise keypoint and landmark detection for pose estimation and facial analysis.",
      detailedDescription: "Specialized annotation for detecting and marking key points on objects, humans, and faces. Essential for pose estimation, facial recognition, and structural analysis applications where specific anatomical or geometric points need to be identified and tracked.",
      features: ["Human pose estimation", "Facial landmark detection", "Object keypoints", "Motion analysis"],
      gif: "/gifs/image_annotation/pose_estimation.gif"
    }
  ];

  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Image Data Annotation
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive image annotation services for computer vision and AI applications. 
              Our experts deliver precise labeling for object detection, segmentation, 
              and advanced image analysis across diverse industries and use cases.
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
              Interactive Image Annotation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive image annotation capabilities. 
              Navigate through different annotation types to see detailed information and examples.
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
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
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
                                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-4"></span>
                                    <span className="text-base">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-4">
                              <Link to="/contact">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
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
              <CarouselPrevious className="left-4 bg-blue-600 hover:bg-blue-700 text-white border-none" />
              <CarouselNext className="right-4 bg-blue-600 hover:bg-blue-700 text-white border-none" />
            </Carousel>

            {/* Service Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    current === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Image Annotation Solutions
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to enhance your computer vision projects with precision image annotations? 
            Let's discuss your specific project requirements.
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

export default ImageAnnotation;
