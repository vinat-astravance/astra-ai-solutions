import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  project: {
    id: string;
    title: string;
    beforeImage: string;
    afterImage?: string;
  };
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ project }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleImageLoad = () => {
      if (imageRef.current && containerRef.current) {
        const img = imageRef.current;
        const container = containerRef.current;
        
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        const imageAspectRatio = img.naturalWidth / img.naturalHeight;
        const containerAspectRatio = containerWidth / containerHeight;
        
        let displayWidth, displayHeight;
        
        if (imageAspectRatio > containerAspectRatio) {
          displayWidth = containerWidth;
          displayHeight = containerWidth / imageAspectRatio;
        } else {
          displayHeight = containerHeight;
          displayWidth = containerHeight * imageAspectRatio;
        }
        
        setImageDimensions({ width: displayWidth, height: displayHeight });
      }
    };

    const img = imageRef.current;
    if (img) {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
        return () => img.removeEventListener('load', handleImageLoad);
      }
    }
  }, [project.beforeImage, project.afterImage]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e: React.MouseEvent) => {
    if (!containerRef.current || imageDimensions.width === 0) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const containerCenterX = rect.left + rect.width / 2;
    const imageCenterX = containerCenterX;
    const imageLeft = imageCenterX - imageDimensions.width / 2;
    const imageRight = imageCenterX + imageDimensions.width / 2;
    
    const x = Math.max(imageLeft, Math.min(imageRight, e.clientX));
    const relativeX = x - imageLeft;
    const percentage = Math.max(0, Math.min(100, (relativeX / imageDimensions.width) * 100));
    
    setSliderPosition(percentage);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPositionTouch(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateSliderPositionTouch(e);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPositionTouch = (e: React.TouchEvent) => {
    if (!containerRef.current || imageDimensions.width === 0) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const containerCenterX = rect.left + rect.width / 2;
    const imageCenterX = containerCenterX;
    const imageLeft = imageCenterX - imageDimensions.width / 2;
    const imageRight = imageCenterX + imageDimensions.width / 2;
    
    const touch = e.touches[0];
    const x = Math.max(imageLeft, Math.min(imageRight, touch.clientX));
    const relativeX = x - imageLeft;
    const percentage = Math.max(0, Math.min(100, (relativeX / imageDimensions.width) * 100));
    
    setSliderPosition(percentage);
  };

  // Calculate positions for labels
  const containerCenterX = imageDimensions.width > 0 ? 50 : 50; // percentage
  const imageLeftPercentage = imageDimensions.width > 0 ? 
    (50 - (imageDimensions.width / 2) / (800 / 100)) : 0;
  const imageRightPercentage = imageDimensions.width > 0 ? 
    (50 + (imageDimensions.width / 2) / (800 / 100)) : 100;

  return (
    <div className="relative w-full bg-white rounded-lg overflow-hidden" style={{ height: '540px' }}>
      <div 
        ref={containerRef}
        className="relative w-full h-full cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Before Image */}
        <img 
          ref={imageRef}
          src={project.beforeImage}
          alt={`${project.title} - Before`}
          className="absolute inset-0 w-full h-full object-contain"
        />
        
        {/* After Image with clip path */}
        {project.afterImage && (
          <img 
            src={project.afterImage}
            alt={`${project.title} - After`}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
            }}
          />
        )}
        
        {/* Slider Line */}
        {project.afterImage && imageDimensions.width > 0 && (
          <>
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-10"
              style={{
                left: `calc(50% - ${imageDimensions.width / 2}px + ${(sliderPosition / 100) * imageDimensions.width}px)`
              }}
            />
            
            {/* Slider Handle */}
            <div 
              className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `calc(50% - ${imageDimensions.width / 2}px + ${(sliderPosition / 100) * imageDimensions.width}px)`,
                top: '50%'
              }}
            />
          </>
        )}
        
        {/* Labels */}
        {project.afterImage && imageDimensions.width > 0 && (
          <>
            <div 
              className="absolute top-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium"
              style={{
                left: `calc(50% - ${imageDimensions.width / 2}px + 12px)`
              }}
            >
              Original
            </div>
            <div 
              className="absolute top-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium"
              style={{
                right: `calc(50% - ${imageDimensions.width / 2}px + 12px)`
              }}
            >
              Processed
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
