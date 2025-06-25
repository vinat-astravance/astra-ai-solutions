
import React, { useState, useRef, useCallback } from 'react';

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
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * segmentationData.width;
    const y = ((e.clientY - rect.top) / rect.height) * segmentationData.height;

    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });

    // Check which object the mouse is over
    const hoveredBox = segmentationData.boxes.find(box => {
      // Check if point is inside polygon using ray casting algorithm
      const points = box.points;
      let inside = false;
      
      for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
        const xi = points[i][0], yi = points[i][1];
        const xj = points[j][0], yj = points[j][1];
        
        if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
          inside = !inside;
        }
      }
      
      return inside;
    });

    setHoveredObject(hoveredBox ? hoveredBox.label : null);
  }, [segmentationData]);

  const handleMouseLeave = useCallback(() => {
    setHoveredObject(null);
  }, []);

  const createPolygonPath = (points: number[][]) => {
    return points.map((point, index) => 
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
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* SVG Overlay for Segmentation Masks */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${segmentationData.width} ${segmentationData.height}`}
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
