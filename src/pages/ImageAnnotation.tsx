
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const ImageAnnotation = () => {
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
          beforeImage: "/images/image_annotation/2d_detection_parent.jpg",
          afterImage: "/images/image_annotation/2d_detection_child.jpg"
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
          beforeImage: "/images/image_annotation/ss_parent.jpg",
          afterImage: "/images/image_annotation/ss_child.png"
        },
        {
          id: "instance-segmentation",
          title: "Instance Segmentation",
          description: "Identify and separate individual object instances in images",
          beforeImage: "/images/image_annotation/is_parent.png",
          afterImage: "/images/image_annotation/is_child.png"
        },
        {
          id: "panoptic-segmentation",
          title: "Panoptic Segmentation",
          description: "Combine semantic and instance segmentation for complete scene understanding",
          beforeImage: "/images/image_annotation/ps_parent.jpg",
          afterImage: "/images/image_annotation/ps_child.png"
        }
      ]
    },
    {
      id: "keypoints",
      title: "Keypoints & Shape Annotations",
      description: "Precise keypoint detection and shape annotation for detailed structural analysis.",
      subProjects: [
        {
          id: "pose-estimation",
          title: "Pose Estimation",
          description: "Human pose detection and tracking for motion analysis",
          beforeImage: "/images/image_annotation/pe_parent.jpg",
          afterImage: "/images/image_annotation/pe_child.jpg"
        },
        {
          id: "lines-splines",
          title: "Lines/Splines",
          description: "Precise line and curve annotations for structural and path analysis",
          beforeImage: "/images/image_annotation/spline_parent.jpg",
          afterImage: "/images/image_annotation/spline_child.png"
        },
        {
          id: "landmarks",
          title: "Landmarks",
          description: "Detect and annotate key landmark points in images for facial and object analysis",
          beforeImage: "/images/image_annotation/landmark_parent.jpg",
          afterImage: "/images/image_annotation/landmark_child.jpg"
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

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

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
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Try Interactive Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Image Annotation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive image annotation capabilities through interactive demonstrations
            </p>
          </div>

          {/* Parent Carousel - Annotation Types */}
          <div className="relative px-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {imageAnnotationTypes.map((annotationType, index) => (
                  <div key={annotationType.id} className="flex-[0_0_100%] min-w-0">
                    <Card className="border-0 shadow-lg mx-2 bg-white">
                      <CardHeader className="text-center border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
                        <CardTitle className="text-4xl text-gray-900 mb-3 font-bold">{annotationType.title}</CardTitle>
                        <CardDescription className="text-lg text-gray-700 mb-4 leading-relaxed">
                          {annotationType.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8 bg-white">
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
                            {/* Child carousel arrows - positioned just outside the image at middle height */}
                            <CarouselPrevious className="-left-6 top-[calc(50%+6rem)] w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none" />
                            <CarouselNext className="-right-6 top-[calc(50%+6rem)] w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none" />
                          </Carousel>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Parent carousel arrows - closer positioning */}
            <button
              className="absolute -left-4 top-[calc(50%+6rem)] -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute -right-4 top-[calc(50%+6rem)] -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
              onClick={() => emblaApi?.scrollNext()}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
