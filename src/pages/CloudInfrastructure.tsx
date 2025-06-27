
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Cloud, Server, Shield, Zap } from "lucide-react";

const CloudInfrastructure = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Multi-Cloud Architecture",
      description: "Scalable cloud solutions across AWS, Azure, and GCP with seamless integration and migration capabilities.",
      features: [
        "Multi-Cloud Deployment",
        "Cloud Migration Services", 
        "Hybrid Cloud Solutions",
        "Cloud Cost Optimization",
        "Disaster Recovery Planning"
      ]
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using modern DevOps practices and tools.",
      features: [
        "Terraform & CloudFormation",
        "Kubernetes Orchestration",
        "CI/CD Pipeline Integration",
        "Infrastructure Monitoring",
        "Automated Scaling"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions with compliance frameworks for regulated industries.",
      features: [
        "Zero Trust Architecture",
        "Identity & Access Management",
        "Data Encryption",
        "Compliance Frameworks",
        "Security Monitoring"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Performance Optimization",
      description: "High-performance computing solutions optimized for AI workloads and data-intensive applications.",
      features: [
        "GPU Cluster Management",
        "Load Balancing",
        "Caching Strategies",
        "Network Optimization",
        "Performance Monitoring"
      ]
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      logo: "AWS",
      strengths: ["Comprehensive Services", "Global Reach", "Enterprise Support"],
      specialties: ["EC2", "S3", "Lambda", "SageMaker"]
    },
    {
      name: "Microsoft Azure",
      logo: "Azure", 
      strengths: ["Enterprise Integration", "Hybrid Solutions", "AI Services"],
      specialties: ["Azure ML", "Cognitive Services", "AKS", "Functions"]
    },
    {
      name: "Google Cloud Platform",
      logo: "GCP",
      strengths: ["AI/ML Leadership", "Data Analytics", "Kubernetes"],
      specialties: ["Vertex AI", "BigQuery", "GKE", "Cloud Functions"]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud Infrastructure Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Scalable, secure, and optimized cloud infrastructure solutions designed to power your AI and data-driven applications. 
              From multi-cloud architectures to high-performance computing clusters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Design Your Infrastructure
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Architecture Consultation
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
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end cloud infrastructure solutions tailored for AI workloads and enterprise applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
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
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major cloud providers to deliver the best solution for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {provider.logo}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{provider.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Strengths</h4>
                      <ul className="space-y-1">
                        {provider.strengths.map((strength, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">AI Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI-Optimized Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Purpose-built cloud infrastructure optimized for AI and machine learning workloads, 
                featuring GPU clusters, high-speed networking, and intelligent resource management.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">GPU Clusters for Training & Inference</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">High-Speed Data Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Intelligent Auto-Scaling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Cost Optimization</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Infrastructure Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">GPU Utilization</div>
                    <div className="text-2xl font-bold">87%</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Uptime</div>
                    <div className="text-2xl font-bold">99.9%</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Cost Savings</div>
                    <div className="text-2xl font-bold text-green-300">35%</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">Auto-Scale Events</div>
                    <div className="text-2xl font-bold">142</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's design and implement a cloud infrastructure that scales with your business and optimizes your AI workloads.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Your Cloud Journey
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CloudInfrastructure;
