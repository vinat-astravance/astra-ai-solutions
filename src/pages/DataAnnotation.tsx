
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SemanticSegmentationCarousel from "@/components/SemanticSegmentationCarousel";
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

      {/* Interactive Semantic Segmentation Carousel */}
      <SemanticSegmentationCarousel />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Screenshot/Image */}
            <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
              <img 
                src="/lovable-uploads/3029fb0a-9008-453e-93ae-ba505b8c7086.png" 
                alt="Data Annotation Interface" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Image Processing/Annotation
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Human-annotated data is more accurate and of higher quality than data 
                annotated by a machine. To guarantee an excellent machine learning experience, 
                Mindy Support finds specialists with the necessary skills to provide data 
                annotation services: 2D bounding boxes, polygons, semantic segmentation, 
                labeling, and point and landmark annotations.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold">
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Video Annotation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Frame-by-frame labeling, object tracking, action recognition, and temporal event annotation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Text Classification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Sentiment analysis, intent classification, named entity recognition, and document categorization.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Audio Annotation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Speech transcription, speaker identification, emotion recognition, and acoustic event labeling.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Multi-tier review processes with expert validators to ensure annotation accuracy and consistency.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Custom Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Tailored annotation pipelines designed for your specific use case and quality requirements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">3D Point Cloud Annotation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Precise 3D object detection and segmentation for autonomous vehicles and robotics applications.
                  </CardDescription>
                </CardContent>
              </Card>
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
