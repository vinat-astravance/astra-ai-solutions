
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DataAnnotation = () => {
  const services = [
    {
      title: "Image Annotation",
      description: "Bounding boxes, polygons, semantic segmentation, and keypoint annotation for computer vision projects."
    },
    {
      title: "Video Annotation",
      description: "Frame-by-frame labeling, object tracking, action recognition, and temporal event annotation."
    },
    {
      title: "Text Classification",
      description: "Sentiment analysis, intent classification, named entity recognition, and document categorization."
    },
    {
      title: "Audio Annotation",
      description: "Speech transcription, speaker identification, emotion recognition, and acoustic event labeling."
    },
    {
      title: "Quality Assurance",
      description: "Multi-tier review processes with expert validators to ensure annotation accuracy and consistency."
    },
    {
      title: "Custom Workflows",
      description: "Tailored annotation pipelines designed for your specific use case and quality requirements."
    }
  ];

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
              Professional Data Annotation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive annotation services with rigorous quality control for all your machine learning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
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
