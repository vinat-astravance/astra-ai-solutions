
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MLOps = () => {
  const services = [
    {
      title: "CI/CD for ML",
      description: "Automated pipelines for model training, testing, validation, and deployment with version control and rollback capabilities."
    },
    {
      title: "Model Monitoring",
      description: "Real-time monitoring of model performance, data drift detection, and automated alerting systems."
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud deployment on AWS, Azure, GCP with auto-scaling and cost optimization."
    },
    {
      title: "Edge Deployment",
      description: "Optimized model deployment for edge devices, mobile applications, and IoT environments."
    },
    {
      title: "Compute Resources",
      description: "Access to high-performance computing infrastructure through our trusted partner network."
    },
    {
      title: "DevOps Integration",
      description: "Seamless integration with existing DevOps workflows and enterprise infrastructure."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Infrastructure & MLOps
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Build robust, scalable AI infrastructure with our MLOps expertise. From automated pipelines 
              to cloud deployment, we ensure your models perform reliably in production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Plan Your Infrastructure
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
                  Architecture Review
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
              Enterprise MLOps Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure and operations solutions for reliable, scalable AI deployment.
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

      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your AI Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's build the infrastructure foundation that will power your AI success.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Build Infrastructure
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default MLOps;
