import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Search, ScanLine } from "lucide-react";

const DocumentAI = () => {
  const services = [
    {
      title: "Document Classification",
      description: "Automatically categorize and organize documents using advanced AI models that understand document structure, content, and context.",
      icon: FileText,
      features: ["Multi-format Support", "Custom Categories", "Confidence Scoring", "Batch Processing"],
      videoUrl: "https://videos.unsplash.com/video/854: Seconds of a person typing on a laptop"
    },
    {
      title: "Smart Search & Document Q&A",
      description: "Enable intelligent document search and question-answering capabilities that understand context and provide precise answers from your document corpus.",
      icon: Search,
      features: ["Semantic Search", "Natural Language Queries", "Context-Aware Answers", "Multi-document Reasoning"],
      videoUrl: "https://videos.unsplash.com/video/1072: Person using a computer with documents"
    },
    {
      title: "OCR & Content Extraction",
      description: "Extract text, tables, and structured data from scanned documents, images, and PDFs with high accuracy using advanced OCR technology.",
      icon: ScanLine,
      features: ["High-Accuracy OCR", "Table Extraction", "Form Processing", "Handwriting Recognition"],
      videoUrl: "https://videos.unsplash.com/video/1234: Document scanning process"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Document AI Solutions
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Transform your document processing workflows with intelligent AI solutions 
              for classification, search, extraction, and analysis of business documents. 
              Automate manual processes and unlock insights from your document repositories.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Start Your Document AI Project
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive document AI services help you extract maximum value from your 
              documents through intelligent automation and advanced AI capabilities.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg max-w-full">
                      <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <service.icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <p className="text-lg font-medium">Video Demo</p>
                          <p className="text-sm opacity-80">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Card className="h-full border-0 shadow-none">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-cyan-600" />
                        </div>
                        <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Document Workflows?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's explore how our document AI solutions can streamline your processes, 
            reduce manual work, and unlock valuable insights from your documents.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentAI;
