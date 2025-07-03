
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, Laptop, BarChart3, Globe, Zap, Shield, Users } from "lucide-react";

const ApplicationsDashboards = () => {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Tailored web solutions built with modern technologies for your specific business needs.",
      icon: Globe,
      features: [
        "React & Next.js Development",
        "Responsive Design",
        "Real-time Features",
        "API Integration",
        "Cloud Deployment"
      ],
      industries: [
        "E-commerce",
        "Healthcare",
        "Education",
        "Finance",
        "Manufacturing"
      ]
    },
    {
      title: "Mobile Solutions",
      description: "Cross-platform mobile applications that deliver native performance and user experience.",
      icon: Smartphone,
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "Native Performance",
        "Offline Capabilities",
        "Push Notifications"
      ],
      industries: [
        "Retail",
        "Transportation",
        "Healthcare",
        "Food & Beverage",
        "Field Services"
      ]
    },
    {
      title: "Desktop Applications",
      description: "Powerful desktop solutions for complex workflows and specialized business processes.",
      icon: Laptop,
      features: [
        "Cross-Platform Desktop Apps",
        "Native OS Integration",
        "High Performance",
        "Advanced UI Components",
        "System Resources Access"
      ],
      industries: [
        "Engineering",
        "Scientific Research",
        "Creative Industries",
        "Enterprise Software",
        "Data Analysis"
      ]
    },
    {
      title: "Interactive Dashboards",
      description: "Data visualization and business intelligence dashboards for informed decision-making.",
      icon: BarChart3,
      features: [
        "Real-time Data Visualization",
        "Custom Charts & Graphs",
        "Interactive Controls",
        "Multi-source Integration",
        "Export & Sharing"
      ],
      industries: [
        "Business Intelligence",
        "Operations Management",
        "Sales & Marketing",
        "Quality Control",
        "Performance Monitoring"
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Development",
      description: "Rapid prototyping and development cycles to get your solution to market quickly."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and robust architecture for reliable performance."
    },
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Intuitive interfaces designed with your users' needs and workflows in mind."
    },
    {
      icon: Monitor,
      title: "Scalable Solutions",
      description: "Applications that grow with your business and adapt to changing requirements."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-6">
              Applications & Dashboards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Custom software solutions and interactive dashboards tailored to your business needs. 
              From web applications to mobile solutions, we deliver user-centric interfaces that drive results.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="px-4 py-2">Web Applications</Badge>
              <Badge variant="secondary" className="px-4 py-2">Mobile Solutions</Badge>
              <Badge variant="secondary" className="px-4 py-2">Desktop Applications</Badge>
              <Badge variant="secondary" className="px-4 py-2">Interactive Dashboards</Badge>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Start Your Project
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Industries:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.industries.map((industry, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {industry}
                            </Badge>
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Our Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project requirements and create a solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ApplicationsDashboards;
