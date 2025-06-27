import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Research = () => {
  const services = [
    {
      title: "Feasibility Studies",
      description: "Comprehensive analysis to validate AI approaches and assess technical viability before development begins."
    },
    {
      title: "Literature Surveys",
      description: "Deep research into state-of-the-art methods, benchmarks, and best practices for your specific domain."
    },
    {
      title: "Technical Validation",
      description: "Proof-of-concept development and testing to validate technical approaches and performance expectations."
    },
    {
      title: "Market Analysis",
      description: "Analysis of competitive landscape, technology trends, and market opportunities for AI solutions."
    },
    {
      title: "Risk Assessment",
      description: "Identification and evaluation of technical, operational, and business risks associated with AI projects."
    },
    {
      title: "Strategic Planning",
      description: "Roadmap development for AI implementation with clear milestones, timelines, and success metrics."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research & Technical Feasibility
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Make informed decisions with comprehensive research and feasibility studies. We validate AI approaches 
              and provide strategic insights before you invest in development.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Study
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
              Research & Validation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research services to validate your AI strategy and ensure successful project outcomes.
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

      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Strategic AI Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's validate your AI approach and create a roadmap for successful implementation.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Research
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
