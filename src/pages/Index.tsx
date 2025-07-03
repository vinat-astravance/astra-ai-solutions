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
      description: "Comprehensive visual AI for image analysis, video processing and real-time analytics—object detection, segmentation & tracking, pose estimation, 2D→3D reconstruction, enhancement, super-resolution & more.",
      link: "/computer-vision",
      image: "/images/home_page/cv.jpg",
      gifUrl: "/gifs/computer_vision.gif"
    },
    {
      title: "Generative AI & LLMs",
      description: "Fine-tuned LLMs and diffusion models for chatbots, content generation, decision automation and document processing.",
      link: "/generative-ai",
      image: "/images/home_page/llm.jpg",
      gifUrl: "/gifs/LLMs.gif"
    },
    {
      title: "Document AI",
      description: "Automated OCR, form-parsing, classification, smart search and content extraction to digitize and analyze documents at scale.",
      link: "/document-ai",
      gifUrl: "/gifs/document_ai.gif"
    },
    {
      title: "Audio AI",
      description: "Speech-to-text, text-to-speech, speaker diarization, emotion detection, audio enhancement & source separation for advanced sound analysis.",
      link: "/audio-ai",
      gifUrl: "/gifs/audio_ai.gif"
    },
    {
      title: "Applications & Dashboards",
      description: "Custom web applications, mobile solutions, desktop applications, and interactive dashboards tailored to your business needs.",
      link: "/applications-dashboards",
      image: "/images/custom-applications.jpg"
    },
    {
      title: "Data Annotation Services",
      description: "Human-in-the-loop annotations for images, video, audio, text, 3D point clouds and multi-sensor data.",
      link: "/data-annotation",
      image: "/images/home_page/da.jpg"
    },
    {
      title: "AI Infrastructure & MLOps",
      description: "Robust MLOps pipelines and scalable deployment across cloud and edge environments.",
      link: "/mlops",
      image: "/images/home_page/mlops.jpg"
    },
    {
      title: "Research & Feasibility",
      description: "POC development backed by literature surveys, open-source solution mapping and strategic feasibility studies.",
      link: "/research",
      image: "/images/research.jpg"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure solutions through strategic partnerships with leading providers for reliable IaaS deployment.",
      link: "/cloud-infrastructure",
      gifUrl: "/gifs/cloud.gif"
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
                <div className="h-48 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <img 
                    src={service.gifUrl || service.image} 
                    alt={service.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
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
