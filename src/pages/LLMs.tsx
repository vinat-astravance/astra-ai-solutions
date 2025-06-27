import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Globe, Wrench, Target } from "lucide-react";

const LLMs = () => {
  const services = [
    {
      title: "Multilingual LLM",
      description: "Deploy large language models that understand and generate content in multiple languages with cultural context awareness.",
      icon: Globe,
      features: ["100+ Language Support", "Cultural Context Understanding", "Cross-lingual Translation", "Regional Dialect Recognition"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Domain Specific LLMs",
      description: "Custom-trained language models specialized for your industry, from healthcare and finance to legal and technical domains.",
      icon: Target,
      features: ["Industry-Specific Training", "Domain Vocabulary", "Compliance Aware", "Specialized Knowledge Base"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "LLM Training Services",
      description: "End-to-end training solutions for custom large language models tailored to your specific use cases and requirements.",
      icon: Wrench,
      features: ["Custom Model Architecture", "Fine-tuning Services", "Data Pipeline Setup", "Model Optimization"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "LLM Quality Assessment & Optimization",
      description: "Comprehensive evaluation and optimization services to ensure your language models deliver reliable, accurate, and efficient performance.",
      icon: Brain,
      features: ["Performance Benchmarking", "Bias Detection & Mitigation", "Response Quality Analysis", "Efficiency Optimization"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Large Language Models (LLMs)
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Unlock the power of advanced language AI with our comprehensive LLM services. 
              From multilingual capabilities to domain-specific expertise, we deliver tailored 
              language models that understand and generate human-like content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Start Your LLM Project
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                  Feasibility Consultation
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
              Our comprehensive suite of LLM services covers every aspect of language model development, 
              deployment, and optimization to meet your specific business needs.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Card className="h-full border-0 shadow-none">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-purple-600" />
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
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
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

      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with LLMs?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our large language model solutions can revolutionize 
            your content generation, customer interactions, and business processes.
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

export default LLMs;
