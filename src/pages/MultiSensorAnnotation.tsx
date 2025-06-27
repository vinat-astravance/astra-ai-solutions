
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MultiSensorAnnotation = () => {
  const services = [
    {
      title: "LiDAR Point Cloud Annotation",
      description: "3D object detection and segmentation in LiDAR point cloud data for autonomous systems.",
      features: ["3D bounding boxes", "Point cloud segmentation", "Object tracking", "Ground truth labeling"]
    },
    {
      title: "Radar Data Annotation",
      description: "Radar signal analysis and target identification for defense and automotive applications.",
      features: ["Target classification", "Range-Doppler analysis", "Clutter filtering", "Track annotation"]
    },
    {
      title: "IoT Sensor Fusion",
      description: "Multi-modal sensor data annotation combining various IoT device inputs.",
      features: ["Sensor correlation", "Event synchronization", "Anomaly detection", "Pattern recognition"]
    },
    {
      title: "Autonomous Vehicle Data",
      description: "Comprehensive annotation of multi-sensor data from autonomous driving systems.",
      features: ["Camera-LiDAR fusion", "Object behavior modeling", "Scene understanding", "Safety validation"]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Multi-Sensor Data Annotation
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Complex multi-modal annotation services combining data from various sensors 
              for advanced AI applications. Our specialists handle LiDAR, radar, IoT sensors, 
              and autonomous vehicle data with precision and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Quote
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                  Technical Details
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
              Advanced Multi-Sensor Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From 3D point clouds to complex sensor fusion scenarios, 
              we provide expert annotation services for the most challenging multi-modal data types.
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
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
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

      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Complex Sensor Data
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Ready to tackle your most challenging multi-sensor annotation projects? 
            Let's discuss your specific requirements.
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

export default MultiSensorAnnotation;
