
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BeforeAfterSlider from './BeforeAfterSlider';

interface SubProject {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

interface CVProjectCardProps {
  projectType: {
    id: string;
    title: string;
    description: string;
    subProjects: SubProject[];
  };
}

const CVProjectCard: React.FC<CVProjectCardProps> = ({ projectType }) => {
  return (
    <Card className="border-0 shadow-lg mx-2">
      <CardHeader className="text-center border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardTitle className="text-4xl text-gray-900 mb-3 font-bold">{projectType.title}</CardTitle>
        <CardDescription className="text-lg text-gray-700 mb-4 leading-relaxed">
          {projectType.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        {/* Child Carousel - Sub Projects */}
        <div className="max-w-5xl mx-auto relative">
          <Carousel 
            className="w-full"
            opts={{
              loop: true,
              align: "start"
            }}
          >
            <CarouselContent>
              {projectType.subProjects.map((subProject) => (
                <CarouselItem key={subProject.id}>
                  <div className="space-y-4">
                    <div className="text-center bg-gray-50 p-4 rounded-lg border-l-4 border-cyan-500">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{subProject.title}</h3>
                      <p className="text-gray-600 text-base">{subProject.description}</p>
                    </div>
                    <BeforeAfterSlider project={subProject} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Child carousel arrows */}
            <CarouselPrevious className="-left-6 top-[calc(50%+4rem)] w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none" />
            <CarouselNext className="-right-6 top-[calc(50%+4rem)] w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none" />
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};

export default CVProjectCard;
