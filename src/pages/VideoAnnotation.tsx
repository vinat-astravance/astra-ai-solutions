
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const VideoAnnotation = () => {
  const services = [
    {
      title: "Object Tracking",
      description: "Track objects across video frames for motion analysis and behavior understanding.",
      features: ["Multi-object tracking", "Trajectory analysis", "Occlusion handling", "Identity consistency"]
    },
    {
      title: "Action Recognition",
      description: "Annotate human actions and activities in video sequences for behavior analysis.",
      features: ["Activity classification", "Temporal boundaries", "Multi-person scenes", "Complex interactions"]
    },
    {
      title: "Temporal Segmentation",
      description: "Divide video sequences into meaningful segments based on content or events.",
      features: ["Scene segmentation", "Event boundaries", "Content transitions", "Temporal alignment"]
    },
    {
      title: "Frame-by-Frame Analysis",
      description: "Detailed annotation of individual frames for comprehensive video understanding.",
      features: ["Object detection", "Pose estimation", "Facial analysis", "Quality assessment"]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video Annotation Services
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Comprehensive video labeling for object tracking, action recognition, 
              and temporal analysis in video sequences. Our expert annotators ensure 
              precise temporal and spatial consistency across all video frames.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Quote
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Annotation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple object detection to complex temporal analysis, 
              we provide comprehensive video annotation services for advanced computer vision applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Power Your Video AI Models
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Ready to enhance your video understanding capabilities? 
            Let's discuss your video annotation requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default VideoAnnotation;
