
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const services = [
    {
      title: "Computer Vision",
      description: "Advanced vision models for object detection, recognition, segmentation, OCR, and real-time analytics across industries.",
      link: "/computer-vision",
      image: "/images/computer-vision.jpg"
    },
    {
      title: "Generative AI & LLMs",
      description: "Fine-tuned language models and diffusion systems for chatbots, content generation, and document processing.",
      link: "/generative-ai",
      image: "/images/generative-ai.jpg"
    },
    {
      title: "Video AI Solutions",
      description: "Advanced video processing, detection, and generation capabilities including image-to-video transformation.",
      link: "/custom-ai",
      image: "/images/custom-applications.jpg"
    },
    {
      title: "Data Annotation Services",
      description: "High-quality, human-in-the-loop data labeling for images, video, audio, and text classification.",
      link: "/data-annotation",
      image: "/images/data-annotation.jpg"
    },
    {
      title: "AI Infrastructure & MLOps",
      description: "Robust MLOps pipelines and scalable deployment across cloud and edge environments.",
      link: "/mlops",
      image: "/images/infrastructure.jpg"
    },
    {
      title: "Research & Feasibility",
      description: "Deep research and feasibility studies to validate AI approaches before development begins.",
      link: "/research",
      image: "/images/research.jpg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/hero-bg.jpg" 
            alt="AI Technology Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-black">AI that Works the Way </span>
              <span className="text-cyan-600">You Want</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Astravance AI delivers cutting-edge artificial intelligence solutions tailored to your unique challenges. 
              From computer vision to generative AI, we provide the expertise and innovation to transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end AI services designed for technical decision-makers who demand 
              excellence, reliability, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Link to={service.link} onClick={handleLinkClick}>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Visual Elements */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Astravance AI?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Excellence</h3>
              <p className="text-gray-600">
                Our team of AI experts brings deep technical knowledge and proven experience 
                across multiple domains and industries.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation-Driven</h3>
              <p className="text-gray-600">
                We leverage the latest AI technologies and methodologies to deliver 
                cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Results</h3>
              <p className="text-gray-600">
                From concept to deployment, we ensure robust, scalable solutions 
                that deliver measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can address your specific challenges 
            and unlock new opportunities for growth.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Your AI Journey
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
