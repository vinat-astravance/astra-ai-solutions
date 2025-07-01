
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ComputerVision = () => {
  const visionSolutions = [
    {
      title: "Image AI",
      description: "Advanced image analysis and understanding capabilities for object detection, recognition, segmentation, OCR, and real-time analytics across industries.",
      link: "/image-ai",
      image: "/images/home_page/cv.jpg",
      features: [
        "Object Detection & Classification",
        "Semantic & Instance Segmentation", 
        "Optical Character Recognition (OCR)",
        "Facial Recognition & Biometrics",
        "Image Enhancement & Processing"
      ]
    },
    {
      title: "Video AI",
      description: "Comprehensive video processing, analysis, and generation capabilities including real-time video analytics, content moderation, and image-to-video transformation.",
      link: "/custom-ai",
      image: "/images/home_page/video_ai.jpg",
      features: [
        "Real-time Video Analytics",
        "Action & Event Recognition",
        "Video Enhancement & Super-resolution",
        "Content Moderation & Compliance",
        "Video Summarization & Highlights"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Computer Vision Solutions
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Unlock the power of visual intelligence with our comprehensive computer vision platform. 
              From static image analysis to dynamic video processing, we provide end-to-end solutions 
              that transform visual data into actionable business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/image-ai">
                <Button variant="outline" size="lg" className="px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600">
                  Explore Image AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Solutions Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Computer Vision Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our computer vision solutions cover the entire spectrum of visual AI, from analyzing 
              static images to processing dynamic video content in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visionSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-64 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={solution.link}>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      Explore {solution.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on state-of-the-art deep learning frameworks and optimized for performance and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Learning Models</h3>
              <p className="text-gray-600">
                Advanced neural networks including CNNs, Vision Transformers, and custom architectures 
                optimized for specific computer vision tasks.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Processing</h3>
              <p className="text-gray-600">
                Optimized inference pipelines with GPU acceleration and edge deployment 
                capabilities for real-time visual processing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored computer vision models designed specifically for your industry, 
                use case, and performance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Visual Data?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our computer vision solutions can unlock new insights 
            and opportunities from your visual content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Start Your Vision Project
              </Button>
            </Link>
            <Link to="/custom-ai">
              <Button variant="outline" size="lg" className="px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600">
                Explore Video AI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComputerVision;
