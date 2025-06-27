
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataAnnotation = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Annotation Services
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Power your AI models with high-quality, human-in-the-loop data labeling. Our expert annotators 
              deliver precise, consistent annotations across all data types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Quote
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                  Quality Guidelines
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
              What We Offer
            </h2>
          </div>

          {/* Image Annotation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
              <img 
                src="/lovable-uploads/3029fb0a-9008-453e-93ae-ba505b8c7086.png" 
                alt="Image Annotation Interface" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Image Processing/Annotation
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Human-annotated data is more accurate and of higher quality than data 
                annotated by a machine. To guarantee an excellent machine learning experience, 
                we provide specialists with the necessary skills for data annotation services: 
                2D bounding boxes, polygons, semantic segmentation, labeling, and point and landmark annotations.
              </p>
              <Link to="/image-annotation">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>

          {/* Text Annotation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Text Annotation & Classification
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Comprehensive text annotation services including sentiment analysis, 
                named entity recognition, intent classification, and document categorization. 
                Our expert linguists ensure accurate labeling for NLP model training with 
                multilingual support and domain-specific expertise.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-semibold">
                LEARN MORE
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex justify-center order-1 lg:order-2">
              <img 
                src="/images/data-annotation.jpg" 
                alt="Text Annotation Interface" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Audio Annotation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
              <img 
                src="/images/computer-vision.jpg" 
                alt="Audio Annotation Interface" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Audio Annotation & Transcription
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Professional audio annotation services including speech transcription, 
                speaker identification, emotion recognition, and acoustic event labeling. 
                We handle multiple languages and dialects with precise timestamp accuracy 
                for speech recognition and audio analysis models.
              </p>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 text-lg font-semibold">
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Video Annotation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Video Annotation & Tracking
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Comprehensive video annotation services including frame-by-frame labeling, 
                object tracking, action recognition, and temporal event annotation. 
                Our specialists provide precise tracking of objects across video sequences 
                for computer vision and video analysis applications.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold">
                LEARN MORE
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex justify-center order-1 lg:order-2">
              <img 
                src="/images/custom-applications.jpg" 
                alt="Video Annotation Interface" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Multi Sensor Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
              <img 
                src="/images/ai-development.jpg" 
                alt="Multi Sensor Data Annotation" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Multi Sensor Data Annotation
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Advanced annotation services for multi-modal data including LiDAR point clouds, 
                radar data, and sensor fusion datasets. Our team specializes in 3D object detection, 
                semantic segmentation, and cross-modal data alignment for autonomous systems 
                and robotics applications.
              </p>
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 text-lg font-semibold">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need High-Quality Training Data?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your annotation requirements and deliver the quality data your models deserve.
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

export default DataAnnotation;
