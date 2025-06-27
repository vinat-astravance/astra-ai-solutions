import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GenerativeAI = () => {
  const capabilities = [
    {
      title: "Large Language Models",
      description: "Fine-tune and deploy custom LLMs for domain-specific applications, including chatbots, document analysis, and content generation."
    },
    {
      title: "Diffusion Models",
      description: "Advanced image and video synthesis using state-of-the-art diffusion models for creative and technical applications."
    },
    {
      title: "Document Processing",
      description: "Intelligent document summarization, extraction, and analysis using advanced NLP and multimodal models."
    },
    {
      title: "Conversational AI",
      description: "Build sophisticated chatbots and virtual assistants with context awareness and domain expertise."
    },
    {
      title: "Content Generation",
      description: "Automated content creation for marketing, technical documentation, and creative applications."
    },
    {
      title: "Code Generation",
      description: "AI-powered code synthesis and programming assistance tailored to your development workflow."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Generative AI & Large Language Models
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Harness the power of generative AI with custom-trained models that understand your domain. 
              From advanced chatbots to content generation, we deliver LLM solutions that drive innovation.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Start Your Project
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
              Generative AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge generative AI solutions tailored to your specific needs and domain requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Innovate with Generative AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's explore how generative AI can transform your content, processes, and customer experiences.
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

export default GenerativeAI;
