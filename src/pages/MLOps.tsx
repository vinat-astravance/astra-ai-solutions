
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, BarChart3, Cloud, Activity } from "lucide-react";

const MLOps = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Model Optimization",
      description: "Advanced techniques to optimize your AI models for peak performance, including quantization, pruning, and knowledge distillation.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      features: [
        "Model Compression & Quantization",
        "Neural Architecture Search (NAS)",
        "Hyperparameter Optimization",
        "Memory & Compute Efficiency",
        "Multi-GPU Training Optimization"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Model Benchmarking",
      description: "Comprehensive benchmarking solutions to evaluate and compare model performance across different deployment environments.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      features: [
        "Performance Profiling & Analysis",
        "A/B Testing for Model Variants",
        "Deployment Environment Testing",
        "Latency & Throughput Analysis",
        "Cross-Platform Compatibility"
      ]
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-600" />,
      title: "Monitoring & Retraining",
      description: "Continuous monitoring and automated retraining pipelines to maintain model performance over time with real-time drift detection.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      features: [
        "Data Drift Detection",
        "Model Performance Monitoring", 
        "Automated Retraining Pipelines",
        "Feature Store Management",
        "Experiment Tracking & Versioning"
      ]
    }
  ];

  const deploymentOptions = [
    {
      title: "Edge Deployment",
      description: "Optimized deployment for edge devices with minimal latency and offline capabilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      features: ["Device Optimization", "Offline Processing", "Real-time Inference", "Resource Constraints Handling"]
    },
    {
      title: "Cloud Deployment", 
      description: "Scalable cloud solutions with auto-scaling and high availability across multiple regions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      features: ["Multi-Region Deployment", "Auto-scaling", "Load Balancing", "99.9% Uptime SLA"]
    },
    {
      title: "Hybrid Infrastructure",
      description: "Seamless integration between edge and cloud for optimal performance and cost efficiency.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      features: ["Edge-Cloud Sync", "Data Pipeline Management", "Cost Optimization", "Flexible Scaling"]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise MLOps Solutions
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Comprehensive MLOps services to optimize, deploy, and maintain your AI models at scale. 
              From model optimization to production monitoring, we ensure your AI systems perform reliably in real-world environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Plan Your MLOps Strategy
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
                  Technical Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete MLOps Lifecycle Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions covering every aspect of machine learning operations, from optimization to production monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    {service.icon}
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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

      {/* Monitoring Section with Dashboard */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real-time Model Health Monitoring
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Keep your models performing at their best with real-time monitoring, automated drift detection, 
                and intelligent retraining pipelines that adapt to changing data patterns.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time Performance Metrics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Data Quality Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Automated Alert Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Intelligent Retraining Triggers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Model Health Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Accuracy</div>
                    <div className="text-2xl font-bold">94.7%</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Latency</div>
                    <div className="text-2xl font-bold">12ms</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Throughput</div>
                    <div className="text-2xl font-bold">1.2k RPS</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Drift Score</div>
                    <div className="text-2xl font-bold text-green-300">0.02</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Deployment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right deployment strategy for your specific needs, from edge devices to cloud-scale infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{option.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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

      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your AI Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's build the MLOps infrastructure that will power your AI success and ensure reliable performance at scale.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Build Your MLOps Pipeline
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default MLOps;
