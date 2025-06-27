
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TextAnnotation = () => {
  const services = [
    {
      title: "Named Entity Recognition",
      description: "Identify and classify entities like persons, organizations, locations, and custom entities.",
      features: ["Person identification", "Organization detection", "Location tagging", "Custom entity types"]
    },
    {
      title: "Sentiment Analysis",
      description: "Annotate text with sentiment labels for opinion mining and emotion detection.",
      features: ["Positive/negative sentiment", "Emotion classification", "Aspect-based sentiment", "Intensity scoring"]
    },
    {
      title: "Text Classification",
      description: "Categorize documents and text passages for content organization and filtering.",
      features: ["Document categorization", "Topic classification", "Content filtering", "Multi-label annotation"]
    },
    {
      title: "Intent & Dialog Annotation",
      description: "Label conversational data for chatbots and virtual assistant training.",
      features: ["Intent classification", "Entity extraction", "Dialog flow mapping", "Response quality rating"]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Text Annotation Services
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Advanced text labeling services for NLP models including entity recognition, 
              sentiment analysis, and classification. Our linguistic experts ensure accurate 
              and contextually relevant annotations for your language AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Quote
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3">
                  Annotation Guidelines
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
              Text Annotation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our linguistic experts provide comprehensive text annotation services 
              to power your NLP models with high-quality, contextually accurate training data.
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
      </section>

      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enhance Your NLP Models
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your text annotation needs and create the perfect dataset for your language AI projects.
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

export default TextAnnotation;
