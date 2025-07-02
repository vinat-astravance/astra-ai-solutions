
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MultiSensorAnnotation = () => {
  const services = [
    {
      title: "3D Cuboid Annotation",
      description: "Precise 3D bounding box annotation for objects in LiDAR point cloud data.",
      features: ["Accurate 3D object localization", "Multi-class object detection", "Orientation annotation", "Size estimation"]
    },
    {
      title: "3D Polygon & Polyline",
      description: "Complex shape annotation using polygons and polylines for irregular objects in 3D space.",
      features: ["Irregular object boundaries", "Road marking annotation", "Building footprints", "Custom shape definition"]
    },
    {
      title: "3D Segmentation",
      description: "Point-level classification and segmentation of LiDAR point clouds for detailed scene understanding.",
      features: ["Semantic segmentation", "Instance segmentation", "Ground plane detection", "Vegetation classification"]
    },
    {
      title: "Object Tracking",
      description: "Temporal tracking of objects across multiple LiDAR frames for dynamic scene analysis.",
      features: ["Multi-frame tracking", "Trajectory annotation", "Object behavior modeling", "Temporal consistency"]
    },
    {
      title: "Sensor Fusion",
      description: "Annotation services combining LiDAR data with camera and radar inputs for comprehensive scene understanding.",
      features: ["Multi-modal alignment", "Cross-sensor validation", "Fused object detection", "Enhanced accuracy"]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              3D LiDAR Data Annotation
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Professional 3D annotation services for LiDAR point cloud data, 
              enabling advanced autonomous systems and spatial AI applications. 
              Our experts deliver precise 3D labeling for object detection, segmentation, 
              and tracking in complex 3D environments.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Quote
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
              Comprehensive 3D LiDAR Annotation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic 3D object detection to complex sensor fusion scenarios, 
              we provide expert annotation services for all your 3D LiDAR data needs.
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
            Advanced 3D LiDAR Solutions
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Ready to enhance your autonomous systems with precision 3D LiDAR annotations? 
            Let's discuss your specific project requirements.
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
