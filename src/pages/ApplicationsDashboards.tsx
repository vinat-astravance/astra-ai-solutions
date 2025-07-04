import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, Laptop, BarChart3, Globe, Zap, Shield, Users, MapPin } from "lucide-react";
import { useEffect } from "react";

const ApplicationsDashboards = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const services = [
    {
      title: "Industry-Focused Web Platforms",
      description: "Web applications tailored to the workflows and data needs of specific sectors. Browser-based, centrally hosted, and highly customizable with interactive features.",
      icon: Globe,
      features: [
        "Interactive maps for fleet tracking",
        "Widgetized data-overlays for quality control",
        "Geospatial crop-health visualizations",
        "Sector-specific workflow optimization",
        "Centralized hosting & management"
      ],
      industries: [
        "Logistics",
        "Manufacturing",
        "Agriculture",
        "Supply Chain",
        "Transportation"
      ]
    },
    {
      title: "Mobile & Edge Field Apps",
      description: "Native or cross-platform smartphone/tablet applications that bring AI tools directly into the hands of on-site teams with offline capabilities.",
      icon: Smartphone,
      features: [
        "Offline operation capabilities",
        "On-device inference for low-latency",
        "Barcode scanning integration",
        "Plant-disease detection AI",
        "Automatic sync when connected"
      ],
      industries: [
        "Warehouses",
        "Agriculture",
        "Remote Inspection",
        "Field Services",
        "Quality Control"
      ]
    },
    {
      title: "Desktop & Control-Room Software",
      description: "Standalone clients designed for heavy-duty processing and situational awareness in control rooms or back-offices with native system integrations.",
      icon: Monitor,
      features: [
        "Bulk video review capabilities",
        "Batch inference job processing",
        "Simulation modules for predictive maintenance",
        "Drag-and-drop data-ops pipelines",
        "Native OS integrations"
      ],
      industries: [
        "Control Rooms",
        "Back-office Operations",
        "Video Analytics",
        "Predictive Maintenance",
        "Data Processing"
      ]
    },
    {
      title: "Adaptive Analytics Dashboards",
      description: "Role-based dashboards that deliver exactly what each user needs—real-time KPIs, drill-down charts, anomaly alerts, and automated notifications.",
      icon: BarChart3,
      features: [
        "Role-based access & views",
        "Real-time KPI monitoring",
        "Drill-down analytics charts",
        "ML-powered anomaly alerts",
        "Automated notifications (Slack/email)"
      ],
      industries: [
        "Executive Management",
        "Business Analytics",
        "Operations Monitoring",
        "Retail Intelligence",
        "Performance Tracking"
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Applications & Dashboards
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Custom software solutions and interactive dashboards tailored to your business needs. 
              From web applications to mobile solutions, we deliver user-centric interfaces that drive results.
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive application development solutions covering every aspect of software creation, 
              from design to deployment, tailored to meet your specific business requirements.
            </p>
          </div>

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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need web applications, mobile solutions, or interactive dashboards, 
            our development team can create the perfect solution for your business.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationsDashboards;
