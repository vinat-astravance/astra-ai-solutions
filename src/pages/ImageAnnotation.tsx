
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import SemanticSegmentationCarousel from "@/components/SemanticSegmentationCarousel";
import { Link } from "react-router-dom";

const ImageAnnotation = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Image Annotation Services
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Power your computer vision models with high-quality, human-in-the-loop image labeling. 
              Our expert annotators deliver precise, consistent annotations across all image types including 
              2D bounding boxes, polygons, semantic segmentation, labeling, and point and landmark annotations.
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

      {/* Interactive Semantic Segmentation Carousel */}
      <SemanticSegmentationCarousel />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Image Annotation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Human-annotated data is more accurate and of higher quality than data 
              annotated by a machine. To guarantee an excellent machine learning experience, 
              we provide specialists with the necessary skills for comprehensive image data annotation services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
              <img 
                src="/lovable-uploads/3029fb0a-9008-453e-93ae-ba505b8c7086.png" 
                alt="Image Annotation Interface" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Professional Image Processing & Annotation
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our comprehensive image annotation services include 2D bounding boxes, polygons, 
                semantic segmentation, object labeling, and precise point and landmark annotations. 
                We ensure pixel-perfect accuracy for training robust computer vision models across 
                various industries and use cases.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">99.5%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Quality Control</div>
                </div>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need High-Quality Image Training Data?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your image annotation requirements and deliver the quality data your computer vision models deserve.
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

export default ImageAnnotation;
