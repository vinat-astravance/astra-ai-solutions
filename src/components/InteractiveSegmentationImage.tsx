
import React, { useState, useRef, useCallback, useEffect } from 'react';

interface SegmentationBox {
  type: 'polygon';
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  points: number[][];
}

interface SegmentationData {
  boxes: SegmentationBox[];
  height: number;
  width: number;
  key: string;
}

interface InteractiveSegmentationImageProps {
  imageSrc: string;
  segmentationData: SegmentationData;
  title: string;
  description: string;
}

const InteractiveSegmentationImage: React.FC<InteractiveSegmentationImageProps> = ({
  imageSrc,
  segmentationData,
  title,
  description
}) => {
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayDimensions, setDisplayDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement>(null);

  // Update display dimensions when image loads or container resizes
  const updateDisplayDimensions = useCallback(() => {
    if (imgElementRef.current) {
      const rect = imgElementRef.current.getBoundingClientRect();
      setDisplayDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  useEffect(() => {
    updateDisplayDimensions();
    window.addEventListener('resize', updateDisplayDimensions);
    return () => window.removeEventListener('resize', updateDisplayDimensions);
  }, [updateDisplayDimensions]);

  // Scale coordinates from annotation space to display space
  const scaleCoordinates = useCallback((x: number, y: number) => {
    const scaleX = displayDimensions.width / segmentationData.width;
    const scaleY = displayDimensions.height / segmentationData.height;
    return [x * scaleX, y * scaleY];
  }, [displayDimensions, segmentationData]);

  // Scale polygon points
  const scalePolygonPoints = useCallback((points: number[][]) => {
    return points.map(point => scaleCoordinates(point[0], point[1]));
  }, [scaleCoordinates]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || displayDimensions.width === 0) return;

    const rect = imageRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert mouse position to annotation coordinate space
    const annotationX = (mouseX / displayDimensions.width) * segmentationData.width;
    const annotationY = (mouseY / displayDimensions.height) * segmentationData.height;

    setMousePosition({ x: mouseX, y: mouseY });

    // Check which object the mouse is over using original annotation coordinates
    const hoveredBox = segmentationData.boxes.find(box => {
      // Check if point is inside polygon using ray casting algorithm
      const points = box.points;
      let inside = false;
      
      for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
        const xi = points[i][0], yi = points[i][1];
        const xj = points[j][0], yj = points[j][1];
        
        if (((yi > annotationY) !== (yj > annotationY)) && (annotationX < (xj - xi) * (annotationY - yi) / (yj - yi) + xi)) {
          inside = !inside;
        }
      }
      
      return inside;
    });

    setHoveredObject(hoveredBox ? hoveredBox.label : null);
  }, [segmentationData, displayDimensions]);

  const handleMouseLeave = useCallback(() => {
    setHoveredObject(null);
  }, []);

  const createPolygonPath = (points: number[][]) => {
    const scaledPoints = scalePolygonPoints(points);
    return scaledPoints.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`
    ).join(' ') + ' Z';
  };

  // Get unique labels and their colors
  const uniqueLabels = Array.from(new Set(segmentationData.boxes.map(box => box.label)));
  const labelColors: { [key: string]: { fill: string; stroke: string } } = {};
  
  uniqueLabels.forEach((label, index) => {
    const colors = [
      { fill: 'rgba(255, 99, 132, 0.3)', stroke: 'rgba(255, 99, 132, 0.8)' },
      { fill: 'rgba(54, 162, 235, 0.3)', stroke: 'rgba(54, 162, 235, 0.8)' },
      { fill: 'rgba(255, 205, 86, 0.3)', stroke: 'rgba(255, 205, 86, 0.8)' },
      { fill: 'rgba(75, 192, 192, 0.3)', stroke: 'rgba(75, 192, 192, 0.8)' },
      { fill: 'rgba(153, 102, 255, 0.3)', stroke: 'rgba(153, 102, 255, 0.8)' }
    ];
    labelColors[label] = colors[index % colors.length];
  });

  return (
    <div className="relative">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div 
        ref={imageRef}
        className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Base Image */}
        <img 
          ref={imgElementRef}
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          onLoad={updateDisplayDimensions}
        />
        
        {/* SVG Overlay for Segmentation Masks */}
        {displayDimensions.width > 0 && (
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${displayDimensions.width} ${displayDimensions.height}`}
            preserveAspectRatio="none"
          >
            {segmentationData.boxes.map((box, index) => (
              <path
                key={index}
                d={createPolygonPath(box.points)}
                fill={hoveredObject === box.label ? labelColors[box.label].fill : 'transparent'}
                stroke={hoveredObject === box.label ? labelColors[box.label].stroke : 'transparent'}
                strokeWidth="2"
                className="transition-all duration-200 ease-in-out"
              />
            ))}
          </svg>
        )}

        {/* Object Label Tooltip */}
        {hoveredObject && (
          <div 
            className="absolute bg-black/80 text-white px-3 py-1 rounded text-sm font-medium pointer-events-none z-10 transition-all duration-150"
            style={{
              left: mousePosition.x + 10,
              top: mousePosition.y - 30,
              transform: mousePosition.x > 300 ? 'translateX(-100%)' : 'none'
            }}
          >
            {hoveredObject}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4">
        {uniqueLabels.map(label => (
          <div key={label} className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded border-2"
              style={{ 
                backgroundColor: labelColors[label].fill,
                borderColor: labelColors[label].stroke
              }}
            />
            <span className="text-sm text-gray-700 font-medium">{label}</span>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-3 text-center">
        <p className="text-sm text-gray-500">
          Hover over different objects in the image to see their segmentation masks
        </p>
      </div>
    </div>
  );
};

export default InteractiveSegmentationImage;
