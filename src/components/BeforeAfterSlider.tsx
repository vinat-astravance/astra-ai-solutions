
import React, { useState, useCallback, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  project: {
    id: string;
    title: string;
    beforeImage: string;
    afterImage: string;
  };
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ project }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageBounds, setImageBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });

  const calculateImageBounds = useCallback(() => {
    if (!imageRef.current || !containerRef.current) return;
    
    const img = imageRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Get the natural dimensions
    const naturalRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = containerRect.width / containerRect.height;
    
    let renderedWidth, renderedHeight, left, top;
    
    if (naturalRatio > containerRatio) {
      // Image is wider - constrained by width
      renderedWidth = containerRect.width;
      renderedHeight = containerRect.width / naturalRatio;
      left = 0;
      top = (containerRect.height - renderedHeight) / 2;
    } else {
      // Image is taller - constrained by height
      renderedHeight = containerRect.height;
      renderedWidth = containerRect.height * naturalRatio;
      top = 0;
      left = (containerRect.width - renderedWidth) / 2;
    }
    
    setImageBounds({ left, top, width: renderedWidth, height: renderedHeight });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imageLoaded || imageBounds.width === 0) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const imageLeft = imageBounds.left;
    const imageRight = imageBounds.left + imageBounds.width;
    
    // Only respond to mouse movement within the image bounds
    if (x < imageLeft || x > imageRight) return;
    
    const relativeX = x - imageLeft;
    const percentage = Math.max(0, Math.min(100, (relativeX / imageBounds.width) * 100));
    setSliderValue(percentage);
  }, [imageLoaded, imageBounds]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setTimeout(calculateImageBounds, 0); // Delay to ensure image is rendered
  };

  useEffect(() => {
    const handleResize = () => {
      if (imageLoaded) {
        calculateImageBounds();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageLoaded, calculateImageBounds]);

  const sliderLeft = imageBounds.left + (imageBounds.width * sliderValue / 100);

  return (
    <div className="relative w-full bg-white rounded-lg overflow-hidden" style={{ height: '540px' }}>
      {/* Before Image */}
      <div 
        ref={containerRef}
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={{ 
          clipPath: imageLoaded && imageBounds.width > 0 
            ? `polygon(0 0, ${imageBounds.left + (imageBounds.width * sliderValue / 100)}px 0, ${imageBounds.left + (imageBounds.width * sliderValue / 100)}px 100%, 0 100%)`
            : 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
        }}
      >
        <img 
          ref={imageRef}
          src={project.beforeImage}
          alt={`${project.title} - Before`}
          className="w-full h-full object-contain"
          onLoad={handleImageLoad}
        />
        {/* Original label - positioned at image edge */}
        {imageLoaded && imageBounds.width > 0 && (
          <div 
            className="absolute bg-black/70 text-white px-3 py-1 text-sm font-medium"
            style={{ 
              left: `${imageBounds.left}px`,
              top: `${imageBounds.top + 16}px`
            }}
          >
            Original
          </div>
        )}
      </div>
      
      {/* After Image */}
      <div 
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={{ 
          clipPath: imageLoaded && imageBounds.width > 0 
            ? `polygon(${imageBounds.left + (imageBounds.width * sliderValue / 100)}px 0, 100% 0, 100% 100%, ${imageBounds.left + (imageBounds.width * sliderValue / 100)}px 100%)`
            : 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
        }}
      >
        <img 
          src={project.afterImage}
          alt={`${project.title} - After`}
          className="w-full h-full object-contain"
        />
        {/* Processed label - positioned at image edge */}
        {imageLoaded && imageBounds.width > 0 && (
          <div 
            className="absolute bg-cyan-600 text-white px-3 py-1 text-sm font-medium"
            style={{ 
              right: `${containerRef.current ? containerRef.current.clientWidth - (imageBounds.left + imageBounds.width) : 0}px`,
              top: `${imageBounds.top + 16}px`
            }}
          >
            Processed
          </div>
        )}
      </div>

      {/* Interactive overlay - only over the image area */}
      {imageLoaded && imageBounds.width > 0 && (
        <div 
          className="absolute cursor-col-resize"
          style={{
            left: `${imageBounds.left}px`,
            top: `${imageBounds.top}px`,
            width: `${imageBounds.width}px`,
            height: `${imageBounds.height}px`
          }}
          onMouseMove={handleMouseMove}
        />
      )}

      {/* Slider Handle - positioned only within image bounds */}
      {imageLoaded && imageBounds.width > 0 && (
        <div 
          className="absolute w-0.5 bg-white shadow-lg z-10 transition-all duration-75 ease-out pointer-events-none"
          style={{ 
            left: `${sliderLeft}px`,
            top: `${imageBounds.top}px`,
            height: `${imageBounds.height}px`
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
            <div className="flex space-x-0.5">
              <div className="w-0.5 h-4 bg-gray-400"></div>
              <div className="w-0.5 h-4 bg-gray-400"></div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded text-sm">
        Move mouse to compare
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
