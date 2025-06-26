
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DocumentAI = () => {
  const services = [
    {
      title: "Document Processing",
      description: "Intelligent document analysis and data extraction from various formats including PDFs, images, and scanned documents.",
      features: ["OCR technology", "Multi-format support", "Table extraction", "Form processing"]
    },
    {
      title: "Text Analytics",
      description: "Advanced natural language processing for document understanding and information extraction.",
      features: ["Entity recognition", "Sentiment analysis", "Topic modeling", "Language detection"]
    },
    {
      title: "Document Classification",
      description: "Automated document categorization and routing based on content and structure analysis.",
      features: ["Custom categories", "Confidence scoring", "Batch processing", "API integration"]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Document AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Streamline your document processing workflows with intelligent AI solutions 
            for extraction, analysis, and classification of business documents.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                Get Started
              </Button>
            </Link>
            <Link to="/research">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Explore Feasibility
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DocumentAI;
