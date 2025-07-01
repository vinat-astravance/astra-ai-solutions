
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CVCapabilitiesSection from "@/components/CVCapabilitiesSection";
import TechnicalApproachSection from "@/components/TechnicalApproachSection";

const ImageAI = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Image AI Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform static images into actionable insights with our advanced image AI models. 
              From object detection to real-time analytics, we develop tailored solutions that see, 
              understand, and respond to your visual world.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image AI Capabilities */}
      <CVCapabilitiesSection />

      {/* Technical Approach */}
      <TechnicalApproachSection />

      {/* Call to Action */}
      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to See What's Possible?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's explore how image AI can transform your visual data into competitive advantage.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Your Vision Project
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ImageAI;
