
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
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imageLoaded) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderValue(percentage);
  }, [imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full bg-white rounded-lg overflow-hidden" style={{ height: '540px' }}>
      {/* Before Image */}
      <div 
        ref={containerRef}
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={{ 
          clipPath: `inset(0 ${100 - sliderValue}% 0 0)` 
        }}
      >
        <img 
          src={project.beforeImage}
          alt={`${project.title} - Before`}
          className="w-full h-full object-contain"
          onLoad={handleImageLoad}
        />
        <div className="absolute top-4 left-0 bg-black/70 text-white px-3 py-1 text-sm font-medium">
          Original
        </div>
      </div>
      
      {/* After Image */}
      <div 
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={{ 
          clipPath: `inset(0 0 0 ${sliderValue}%)` 
        }}
      >
        <img 
          src={project.afterImage}
          alt={`${project.title} - After`}
          className="w-full h-full object-contain"
        />
        <div className="absolute top-4 right-0 bg-cyan-600 text-white px-3 py-1 text-sm font-medium">
          Processed
        </div>
      </div>

      {/* Interactive overlay - only over the image area */}
      {imageLoaded && (
        <div 
          className="absolute inset-0 cursor-col-resize"
          onMouseMove={handleMouseMove}
        />
      )}

      {/* Slider Handle - positioned only within image bounds */}
      {imageLoaded && (
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 transition-all duration-75 ease-out pointer-events-none"
          style={{ left: `${sliderValue}%` }}
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
