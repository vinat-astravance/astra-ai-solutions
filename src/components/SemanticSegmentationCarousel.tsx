
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import InteractiveSegmentationImage from './InteractiveSegmentationImage';

const SemanticSegmentationCarousel = () => {
  const segmentationProjects = [
    {
      id: "fruits",
      title: "Fruit Detection & Segmentation",
      description: "Precise segmentation of different fruits in mixed arrangements for grocery and agriculture applications",
      imageSrc: "/lovable-uploads/fea3c9cb-6aa5-4dd2-8afb-702aec3b9a04.png",
      segmentationData: {
        "boxes": [
          {
            "type": "polygon" as const,
            "label": "Apple",
            "x": 358.7500005,
            "y": 201.99468099999999,
            "width": 92.499999,
            "height": 135.90425599999998,
            "points": [
              [396.25, 159.175532], [385.625, 145.212765], [365.625, 134.042553], [351.875, 134.042553], [325.625, 150.797873], [312.500001, 181.515957], [312.500001, 211.303191], [325, 255.984042], [329.375, 260.638298], [343.125, 253.191489], [360.625, 253.191489], [375.625, 269.946809], [380, 269.015957], [398.75, 252.260639], [403.75, 228.058511], [405, 190.824468], [396.25, 159.175532]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Apple",
            "x": 466.8750005,
            "y": 262.96542550000004,
            "width": 91.250001,
            "height": 134.97340300000002,
            "points": [
              [512.500001, 239.228723], [507.499999, 226.196808], [490.625, 206.648936], [470.625, 197.340426], [449.375, 195.478724], [428.75, 216.888297], [421.25, 252.260639], [436.875, 262.5], [443.75, 274.601064], [453.125, 327.659574], [476.25, 330.452127], [489.375, 325.797872], [501.25, 304.388298], [511.25, 270.877659], [512.500001, 239.228723]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Apple",
            "x": 494.375,
            "y": 364.4281915,
            "width": 91.25,
            "height": 73.53723499999995,
            "points": [
              [516.875, 333.24468], [483.125, 327.659574], [460.625, 336.968085], [448.75, 354.654256], [453.125, 394.680851], [480.625, 379.787234], [483.125, 372.340426], [488.125, 377.925532], [513.125, 379.787234], [532.500001, 401.196809], [540, 390.026596], [538.75, 365.824468], [533.75, 350.93085], [516.875, 333.24468]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Orange",
            "x": 547.5,
            "y": 343.949468,
            "width": 82.5,
            "height": 95.87766000000005,
            "points": [
              [506.25, 323.005319], [508.125, 329.521277], [520.625, 335.106383], [533.75, 350.93085], [541.875, 389.095745], [565.625, 377.925532], [588.75, 391.888298], [588.75, 350.93085], [566.875, 309.042552], [534.375, 296.010638], [506.25, 323.005319]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Orange",
            "x": 566.8750004999999,
            "y": 434.24202149999996,
            "width": 68.749999,
            "height": 112.63297900000003,
            "points": [
              [596.25, 410.505319], [584.375, 389.095745], [563.125, 377.925532], [541.875, 389.095745], [532.500001, 403.05851], [537.499999, 423.537235], [533.75, 471.941489], [553.125, 489.627659], [576.25, 490.558511], [588.125, 482.180851], [597.499999, 466.356383], [601.25, 432.845744], [596.25, 410.505319]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Orange",
            "x": 170,
            "y": 492.885638,
            "width": 107.5,
            "height": 136.835106,
            "points": [
              [222.500001, 471.941489], [215, 449.601064], [200.625, 431.914894], [183.125, 424.468085], [151.875, 424.468085], [134.375, 439.361702], [121.25, 462.632978], [116.25, 484.973404], [118.75, 514.760638], [126.25, 533.37766], [145.625, 556.648936], [180, 561.303191], [200.625, 552.925532], [215, 533.37766], [223.75, 509.175532], [222.500001, 471.941489]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Banana",
            "x": 247.5,
            "y": 331.382979,
            "width": 255,
            "height": 152.659574,
            "points": [
              [325.625, 342.553191], [361.875, 314.62766], [375, 287.632979], [375, 270.877659], [363.125, 255.053192], [340.625, 255.053192], [260.625, 299.734043], [158.125, 342.553191], [120, 376.994681], [121.875, 398.404255], [149.375, 407.712766], [166.25, 406.781915], [174.375, 394.680851], [194.375, 381.648937], [261.875, 368.617021], [325.625, 342.553191]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Banana",
            "x": 273.7499995,
            "y": 383.045213,
            "width": 212.500001,
            "height": 133.11170199999998,
            "points": [
              [314.375, 392.819149], [374.375, 342.553191], [380, 334.175532], [377.499999, 326.728724], [370.625, 318.351063], [360.625, 316.489362], [325.625, 344.414894], [295.625, 359.308511], [195.625, 381.648937], [175.625, 394.680851], [167.499999, 408.643618], [170.625, 422.606383], [196.875, 428.191489], [215.625, 448.670213], [233.75, 449.601064], [254.375, 420.744682], [265.625, 413.297872], [301.875, 409.574468], [314.375, 392.819149]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Banana",
            "x": 376.875,
            "y": 349.069149,
            "width": 146.25,
            "height": 188.031914,
            "points": [
              [450, 324.867021], [450, 304.388298], [446.25, 283.909574], [436.875, 264.361701], [426.875, 256.914894], [396.875, 255.053192], [375, 274.601064], [376.25, 285.771276], [393.75, 308.111702], [391.25, 321.143616], [361.875, 355.585106], [303.75, 406.781915], [331.875, 443.085106], [340, 442.154255], [375.625, 424.468085], [403.125, 402.12766], [441.25, 350.93085], [450, 324.867021]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Banana",
            "x": 393.4375,
            "y": 424.002659,
            "width": 115.625,
            "height": 151.728724,
            "points": [
              [446.25, 416.090426], [451.25, 401.196809], [451.25, 373.271276], [444.375, 348.138297], [409.375, 396.542554], [348.125, 444.946808], [337.499999, 458.909575], [335.625, 498.93617], [372.500001, 499.867021], [409.375, 478.457447], [425, 457.047872], [433.75, 430.984043], [446.25, 416.090426]
            ]
          }
        ],
        "height": 640,
        "key": "mixed_17.jpg",
        "width": 640
      }
    },
    {
      id: "medical",
      title: "Medical Image Segmentation",
      description: "Precise organ and tissue segmentation for medical imaging applications",
      imageSrc: "https://images.unsplash.com/photo-1559757175-0eb30cd8ebe2?auto=format&fit=crop&w=800&q=80",
      segmentationData: {
        "boxes": [
          {
            "type": "polygon" as const,
            "label": "Heart",
            "x": 300,
            "y": 200,
            "width": 150,
            "height": 120,
            "points": [
              [320, 180], [340, 160], [370, 160], [390, 180], [400, 200], [385, 220], [370, 240], [350, 260], [330, 280], [310, 260], [290, 240], [275, 220], [280, 200], [300, 180], [320, 180]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Lung",
            "x": 150,
            "y": 150,
            "width": 120,
            "height": 180,
            "points": [
              [150, 170], [170, 150], [190, 155], [210, 170], [220, 190], [215, 220], [210, 250], [200, 280], [180, 300], [160, 310], [140, 300], [130, 280], [135, 250], [140, 220], [145, 190], [150, 170]
            ]
          }
        ],
        "height": 640,
        "key": "medical_scan.jpg",
        "width": 640
      }
    },
    {
      id: "autonomous",
      title: "Autonomous Vehicle Segmentation",
      description: "Road scene understanding with precise segmentation of vehicles, pedestrians, and infrastructure",
      imageSrc: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
      segmentationData: {
        "boxes": [
          {
            "type": "polygon" as const,
            "label": "Car",
            "x": 200,
            "y": 250,
            "width": 180,
            "height": 120,
            "points": [
              [200, 300], [220, 280], [250, 270], [300, 270], [350, 280], [380, 300], [380, 350], [360, 370], [320, 370], [280, 370], [240, 370], [200, 350], [200, 300]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Pedestrian",
            "x": 450,
            "y": 200,
            "width": 60,
            "height": 150,
            "points": [
              [470, 200], [480, 210], [485, 230], [480, 250], [485, 280], [490, 320], [485, 340], [475, 350], [465, 340], [460, 320], [465, 280], [460, 250], [465, 230], [470, 200]
            ]
          },
          {
            "type": "polygon" as const,
            "label": "Road",
            "x": 0,
            "y": 400,
            "width": 640,
            "height": 240,
            "points": [
              [0, 450], [100, 420], [200, 410], [300, 405], [400, 410], [500, 420], [600, 430], [640, 440], [640, 640], [0, 640], [0, 450]
            ]
          }
        ],
        "height": 640,
        "key": "autonomous_scene.jpg",
        "width": 640
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Semantic Segmentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our precise pixel-level annotation capabilities. Hover over objects to see their segmentation masks.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-6xl mx-auto"
          opts={{
            loop: true,
            align: "start"
          }}
        >
          <CarouselContent>
            {segmentationProjects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <InteractiveSegmentationImage
                      imageSrc={project.imageSrc}
                      segmentationData={project.segmentationData}
                      title={project.title}
                      description={project.description}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default SemanticSegmentationCarousel;
