
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CustomAI = () => {
  const services = [
    {
      title: "Full-Stack AI Development",
      description: "End-to-end AI application development from conception to deployment, including frontend, backend, and AI model integration."
    },
    {
      title: "Data Pipeline Engineering",
      description: "Robust data collection, processing, and preparation pipelines optimized for your AI workflows and requirements."
    },
    {
      title: "Model Integration & APIs",
      description: "Seamless integration of AI models into your existing systems with efficient APIs and microservices architecture."
    },
    {
      title: "UI/UX Design for AI",
      description: "Intuitive user interfaces designed specifically for AI-powered applications with optimal user experience."
    },
    {
      title: "Multi-Platform Deployment",
      description: "Deploy your AI applications across web, mobile, cloud, and edge environments with optimized performance."
    },
    {
      title: "System Architecture",
      description: "Scalable and maintainable AI system architecture designed for performance, reliability, and future growth."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Custom AI Applications
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Transform your vision into reality with full-stack AI applications. We design and deliver 
              complete solutions from data pipelines to user interfaces, tailored to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Discuss Your Vision
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
                  Technical Consultation
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
              Full-Stack AI Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every aspect of AI application development, ensuring seamless integration and optimal performance.
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

      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your AI Solution?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's bring your AI application to life with expert development and seamless integration.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Building
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CustomAI;
