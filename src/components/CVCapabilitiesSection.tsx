
import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from "embla-carousel-react";
import CVProjectCard from './CVProjectCard';

const CVCapabilitiesSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const cvProjectTypes = [
    {
      id: "detection",
      title: "Detection",
      description: "Advanced detection algorithms for identifying and locating objects, faces, and anomalies in images and video streams.",
      subProjects: [
        {
          id: "object-detection",
          title: "Object Detection",
          description: "Real-time detection and classification of multiple objects in complex scenes",
          beforeImage: "/images/computer_vision/detection_parent.png",
          afterImage: "/images/computer_vision/detection_child.png"
        },
        {
          id: "anomaly-detection",
          title: "Anomaly Detection",
          description: "Identify unusual patterns and defects in manufacturing and quality control",
          beforeImage: "/images/computer_vision/fault_parent.jpg",
          afterImage: "/images/computer_vision/fault_child.jpg"
        },
        {
          id: "object-counting",
          title: "Object Counting",
          description: "Automated counting of objects in images for inventory and analysis",
          beforeImage: "/images/computer_vision/oc.png"
        },
        {
          id: "face-recognition",
          title: "Face Recognition",
          description: "Accurate facial recognition and identification systems for security applications",
          beforeImage: "/images/computer_vision/fr_parent.png",
          afterImage: "/images/computer_vision/fr_child.png"
        }
      ]
    },
    {
      id: "segmentation",
      title: "Image Segmentation",
      description: "Precise pixel-level segmentation techniques for detailed image analysis and understanding.",
      subProjects: [
        {
          id: "semantic-segmentation",
          title: "Semantic Segmentation",
          description: "Classify every pixel in an image to understand scene composition",
          beforeImage: "/images/computer_vision/segmentation_parent.png",
          afterImage: "/images/computer_vision/segmentation_child.png"
        },
        {
          id: "instance-segmentation",
          title: "Instance Segmentation",
          description: "Identify and separate individual object instances in images",
          beforeImage: "/images/computer_vision/is_parent.png",
          afterImage: "/images/computer_vision/is_child.png"
        },
        {
          id: "panoptic-segmentation",
          title: "Panoptic Segmentation",
          description: "Combine semantic and instance segmentation for complete scene understanding",
          beforeImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "pose-estimation",
      title: "Pose Estimation",
      description: "Accurate human pose detection and tracking for motion analysis and interaction systems.",
      subProjects: [
        {
          id: "human-pose",
          title: "Human Pose Estimation",
          description: "Detect and track human body keypoints for motion analysis",
          beforeImage: "/images/computer_vision/pe_parent.jpg",
          afterImage: "/images/computer_vision/pe_child.jpg"
        }
      ]
    },
    {
      id: "enhancement",
      title: "Image Enhancement",
      description: "Advanced image processing techniques to improve image quality, resolution, and clarity.",
      subProjects: [
        {
          id: "super-resolution",
          title: "Super-Resolution",
          description: "Enhance image resolution and quality using AI upscaling",
          beforeImage: "/images/computer_vision/sr_parent.jpg",
          afterImage: "/images/computer_vision/sr_child.jpg"
        },
        /*{
          id: "inpainting",
          title: "Inpainting",
          description: "Intelligently fill missing or damaged parts of images",
          beforeImage: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
        },*/
        {
          id: "enhancement",
          title: "Enhancement",
          description: "General image enhancement for better visual quality",
          beforeImage: "/images/computer_vision/ie_parent.png",
          afterImage: "/images/computer_vision/ie_child.png"
        },
        {
          id: "dehazing",
          title: "Dehazing",
          description: "Remove atmospheric haze and improve image clarity",
          beforeImage: "/images/computer_vision/id_parent.jpg",
          afterImage: "/images/computer_vision/id_child.jpg"
        }
      ]
    },
    {
      id: "reconstruction",
      title: "Reconstruction & Depth",
      description: "3D reconstruction and depth estimation for spatial understanding and modeling.",
      subProjects: [
        {
          id: "depth-estimation",
          title: "Depth Estimation",
          description: "Estimate depth information from 2D images for 3D understanding",
          beforeImage: "/images/computer_vision/dm_parent.png",
          afterImage: "/images/computer_vision/dm_child.png"
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Computer Vision Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive computer vision capabilities through interactive demonstrations
          </p>
        </div>

        {/* Parent Carousel - Project Types */}
        <div className="relative px-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cvProjectTypes.map((projectType) => (
                <div key={projectType.id} className="flex-[0_0_100%] min-w-0">
                  <CVProjectCard projectType={projectType} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Parent carousel arrows */}
          <button
            className="absolute -left-6 top-[calc(50%+4rem)] -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute -right-6 top-[calc(50%+4rem)] -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
            onClick={() => emblaApi?.scrollNext()}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {cvProjectTypes.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-cyan-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVCapabilitiesSection;
