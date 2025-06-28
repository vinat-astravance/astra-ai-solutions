
import React, { useState, useCallback, useEffect, useRef } from 'react';

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
  const [imageBounds, setImageBounds] = useState({ width: 0, height: 0, left: 0, top: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeImageRef = useRef<HTMLImageElement>(null);

  const updateImageBounds = useCallback(() => {
    if (beforeImageRef.current && containerRef.current) {
      const img = beforeImageRef.current;
      const container = containerRef.current;
      
      // Calculate the rendered image dimensions with object-contain
      const containerRect = container.getBoundingClientRect();
      const imgAspectRatio = img.naturalWidth / img.naturalHeight;
      const containerAspectRatio = containerRect.width / containerRect.height;
      
      let renderedWidth, renderedHeight, left, top;
      
      if (imgAspectRatio > containerAspectRatio) {
        // Image is wider relative to container
        renderedWidth = containerRect.width;
        renderedHeight = containerRect.width / imgAspectRatio;
        left = 0;
        top = (containerRect.height - renderedHeight) / 2;
      } else {
        // Image is taller relative to container
        renderedHeight = containerRect.height;
        renderedWidth = containerRect.height * imgAspectRatio;
        left = (containerRect.width - renderedWidth) / 2;
        top = 0;
      }
      
      setImageBounds({ width: renderedWidth, height: renderedHeight, left, top });
    }
  }, []);

  useEffect(() => {
    updateImageBounds();
    window.addEventListener('resize', updateImageBounds);
    return () => window.removeEventListener('resize', updateImageBounds);
  }, [updateImageBounds]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || imageBounds.width === 0) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    // Only respond to mouse events within the image bounds
    if (x >= imageBounds.left && x <= imageBounds.left + imageBounds.width) {
      const relativeX = x - imageBounds.left;
      const percentage = Math.max(0, Math.min(100, (relativeX / imageBounds.width) * 100));
      setSliderValue(percentage);
    }
  }, [imageBounds]);

  const handleImageLoad = useCallback(() => {
    updateImageBounds();
  }, [updateImageBounds]);

  return (
    <div ref={containerRef} className="relative w-full bg-white rounded-lg overflow-hidden" style={{ height: '540px' }}>
      {/* Before Image */}
      <div 
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={{ 
          clipPath: `inset(0 ${100 - (sliderValue * imageBounds.width / (containerRef.current?.offsetWidth || 1))}% 0 0)` 
        }}
      >
        <img 
          ref={beforeImageRef}
          src={project.beforeImage}
          alt={`${project.title} - Before`}
          className="w-full h-full object-contain"
          onLoad={handleImageLoad}
        />
        <div 
          className="absolute bg-black/70 text-white px-3 py-1 rounded text-sm font-medium"
          style={{ 
            top: `${imageBounds.top + 16}px`,
            left: `${imageBounds.left + 16}px`
          }}
        >
          Original
        </div>
      </div>
      
      {/* After Image */}
      <div 
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={{ 
          clipPath: `inset(0 0 0 ${(sliderValue * imageBounds.width / (containerRef.current?.offsetWidth || 1))}%)` 
        }}
      >
        <img 
          src={project.afterImage}
          alt={`${project.title} - After`}
          className="w-full h-full object-contain"
        />
        <div 
          className="absolute bg-cyan-600 text-white px-3 py-1 rounded text-sm font-medium"
          style={{ 
            top: `${imageBounds.top + 16}px`,
            right: `${containerRef.current?.offsetWidth ? containerRef.current.offsetWidth - (imageBounds.left + imageBounds.width) + 16 : 16}px`
          }}
        >
          Processed
        </div>
      </div>

      {/* Interactive overlay - only over image area */}
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

      {/* Slider Handle - positioned within image bounds */}
      {imageBounds.width > 0 && (
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-75 ease-out pointer-events-none"
          style={{ 
            left: `${imageBounds.left + (sliderValue / 100) * imageBounds.width}px`,
            top: `${imageBounds.top}px`,
            height: `${imageBounds.height}px`
          }}
        >
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center"
            style={{ top: `${imageBounds.height / 2 - 16}px` }}
          >
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
