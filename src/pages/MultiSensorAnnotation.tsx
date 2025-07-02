import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MultiSensorAnnotation = () => {
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
      title: "3D Cuboid Annotation",
      description: "Precise 3D bounding box annotation for objects in LiDAR point cloud data.",
      detailedDescription: "Our 3D cuboid annotation service provides accurate volumetric bounding boxes around objects in LiDAR point clouds. This technique is essential for autonomous vehicle perception, robotics, and spatial AI applications where precise object localization and size estimation are critical.",
      features: ["Accurate 3D object localization", "Multi-class object detection", "Orientation annotation", "Size estimation"],
      gif: "/gifs/3D_data_annotation.gif"
    },
    {
      title: "3D Polygon & Polyline",
      description: "Complex shape annotation using polygons and polylines for irregular objects in 3D space.",
      detailedDescription: "Handle complex, irregular shapes that cannot be captured by simple bounding boxes. Our polygon and polyline annotation services provide precise boundary definition for road markings, building footprints, and custom-shaped objects in 3D space.",
      features: ["Irregular object boundaries", "Road marking annotation", "Building footprints", "Custom shape definition"],
      gif: "/gifs/3D_data_annotation.gif"
    },
    {
      title: "3D Segmentation",
      description: "Point-level classification and segmentation of LiDAR point clouds for detailed scene understanding.",
      detailedDescription: "Achieve pixel-perfect accuracy with point-level classification of LiDAR data. Our semantic and instance segmentation services enable detailed scene understanding by classifying every point in the cloud according to object categories and instances.",
      features: ["Semantic segmentation", "Instance segmentation", "Ground plane detection", "Vegetation classification"],
      gif: "/gifs/3D_data_annotation.gif"
    },
    {
      title: "Object Tracking",
      description: "Temporal tracking of objects across multiple LiDAR frames for dynamic scene analysis.",
      detailedDescription: "Track objects through time across multiple LiDAR frames to understand motion patterns and behavior. Essential for dynamic scene analysis, trajectory prediction, and temporal consistency in autonomous systems.",
      features: ["Multi-frame tracking", "Trajectory annotation", "Object behavior modeling", "Temporal consistency"],
      gif: "/gifs/3D_data_annotation.gif"
    },
    {
      title: "Sensor Fusion",
      description: "Annotation services combining LiDAR data with camera and radar inputs for comprehensive scene understanding.",
      detailedDescription: "Combine multiple sensor modalities for enhanced accuracy and robustness. Our sensor fusion annotation services align and correlate data from LiDAR, cameras, and radar to provide comprehensive scene understanding with cross-modal validation.",
      features: ["Multi-modal alignment", "Cross-sensor validation", "Fused object detection", "Enhanced accuracy"],
      gif: "/gifs/3D_data_annotation.gif"
    }
  ];

  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              3D LiDAR Data Annotation
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Professional 3D annotation services for LiDAR point cloud data, 
              enabling advanced autonomous systems and spatial AI applications. 
              Our experts deliver precise 3D labeling for object detection, segmentation, 
              and tracking in complex 3D environments.
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
              Interactive 3D Annotation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive 3D LiDAR annotation capabilities. 
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
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 flex items-center justify-center">
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
                                    <span className="w-3 h-3 bg-purple-600 rounded-full mr-4"></span>
                                    <span className="text-base">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-4">
                              <Link to="/contact">
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">
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
              <CarouselPrevious className="left-4 bg-purple-600 hover:bg-purple-700 text-white border-none" />
              <CarouselNext className="right-4 bg-purple-600 hover:bg-purple-700 text-white border-none" />
            </Carousel>

            {/* Service Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    current === index ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced 3D LiDAR Solutions
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Ready to enhance your autonomous systems with precision 3D LiDAR annotations? 
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

export default MultiSensorAnnotation;
