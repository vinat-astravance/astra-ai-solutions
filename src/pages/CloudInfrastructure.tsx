import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Users, CheckCircle } from "lucide-react";

const CloudInfrastructure = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud Infrastructure Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              We have partnered with leading cloud infrastructure firms to provide comprehensive Infrastructure as a Service (IaaS) solutions. 
              Let us help your company scale with reliable, secure, and cost-effective cloud infrastructure.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Get Infrastructure Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Infrastructure as a Service Partnership
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Through our strategic partnerships with top-tier cloud infrastructure providers, 
                we deliver end-to-end IaaS solutions tailored to your business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700">Multi-Cloud Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Expert Partnership Network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700">Scalable Infrastructure</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/198d1bba-2de5-4091-9fd0-171714330d43.png" 
                alt="Cloud Infrastructure Network" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let our infrastructure partners help you build a robust, scalable cloud solution that grows with your business.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Connect with Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CloudInfrastructure;
