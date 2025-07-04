import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ComputerVision = () => {
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
            </div>
          </div>
        </div>
      </section>

      {/* What is Computer Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Computer Vision?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Computer vision is a field of artificial intelligence that enables machines to interpret and understand 
              visual information from the world. It combines deep learning, image processing, and pattern recognition 
              to extract meaningful insights from images and videos. Our computer vision solutions help businesses 
              automate visual tasks, enhance decision-making, and unlock new possibilities across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Image AI vs Video AI: Understanding the Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">Image AI</h3>
                <p className="text-gray-600 leading-relaxed">
                  Image AI focuses on analyzing and understanding static visual content. It excels at tasks like 
                  object detection, classification, segmentation, and optical character recognition. Perfect for 
                  applications requiring detailed analysis of individual frames or photographs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Video AI</h3>
                <p className="text-gray-600 leading-relaxed">
                  Video AI processes sequential visual data to understand motion, temporal patterns, and dynamic 
                  events. It combines frame-by-frame analysis with temporal modeling for applications like action 
                  recognition, surveillance, and real-time video analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image AI Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Image AI Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Transform static images into actionable insights with our advanced image AI models. 
                From object detection to real-time analytics, we develop tailored solutions that see, 
                understand, and respond to your visual world.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Object Detection & Classification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Semantic & Instance Segmentation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Optical Character Recognition (OCR)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Facial Recognition & Biometrics</span>
                </div>
              </div>
              <Link to="/image-ai">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-3">
                  Explore Image AI
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/images/home_page/cv.jpg" 
                alt="Image AI Solutions"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video AI Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <img 
                src="/gifs/video_ai.gif" 
                alt="Video AI Solutions"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Video AI Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Comprehensive video processing, analysis, and generation capabilities including real-time 
                video analytics, content moderation, and advanced temporal understanding for dynamic 
                visual content.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Real-time Video Analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Action & Event Recognition</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Video Enhancement & Super-resolution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Content Moderation & Compliance</span>
                </div>
              </div>
              <Link to="/custom-ai">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3">
                  Explore Video AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComputerVision;
