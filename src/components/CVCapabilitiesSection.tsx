
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
          beforeImage: "/lovable-uploads/aa405ee8-a573-44c0-a3e4-6eff7a65af9b.png",
          afterImage: "/lovable-uploads/3a8a8f3f-d598-48d4-9000-02ecf98000db.png"
        },
        {
          id: "face-recognition",
          title: "Face Recognition",
          description: "Accurate facial recognition and identification systems for security applications",
          beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "anomaly-detection",
          title: "Anomaly Detection",
          description: "Identify unusual patterns and defects in manufacturing and quality control",
          beforeImage: "/lovable-uploads/52dbdd14-360a-4765-ae2a-ccec443abc3e.png",
          afterImage: "/lovable-uploads/7fa2402a-8c64-4f57-a57d-b7ce18009e5b.png"
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
          beforeImage: "/lovable-uploads/d6122299-e2be-4fb7-85ee-d1b8e99f5175.png",
          afterImage: "/lovable-uploads/74ca8e90-fd46-497a-afd0-00f76d696ef4.png"
        },
        {
          id: "instance-segmentation",
          title: "Instance Segmentation",
          description: "Identify and separate individual object instances in images",
          beforeImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "panoptic-segmentation",
          title: "Panoptic Segmentation",
          description: "Combine semantic and instance segmentation for complete scene understanding",
          beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
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
          beforeImage: "/lovable-uploads/c5ef4be0-fb7c-4ea3-839d-738a0e92875c.png",
          afterImage: "/lovable-uploads/23a3be1d-5219-49d5-a9de-7c5d04bf602b.png"
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
          beforeImage: "https://images.unsplash.com/photo-1516110833967-0b5ee0d87d9b?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "dehazing",
          title: "Dehazing",
          description: "Remove atmospheric haze and improve image clarity",
          beforeImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80&brightness=1.2"
        },
        {
          id: "inpainting",
          title: "Inpainting",
          description: "Intelligently fill missing or damaged parts of images",
          beforeImage: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "enhancement",
          title: "Enhancement",
          description: "General image enhancement for better visual quality",
          beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      id: "tracking",
      title: "Tracking",
      description: "Multi-object tracking across video sequences for surveillance, analytics, and motion analysis.",
      subProjects: [
        {
          id: "multi-object-tracking",
          title: "Multi-Object Tracking",
          description: "Track multiple objects simultaneously across video sequences",
          beforeImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
          afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
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
          beforeImage: "/lovable-uploads/e2186d98-e02e-4276-972c-84e62a3d91a6.png",
          afterImage: "/lovable-uploads/2e3f547c-2ae5-4f80-9409-bd564f28b480.png"
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
