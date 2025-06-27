
import React from 'react';

const TechnicalApproachSection: React.FC = () => {
  const industries = [
    "Manufacturing & Quality Control",
    "Healthcare & Medical Imaging",
    "Retail & E-commerce",
    "Security & Surveillance",
    "Automotive & Transportation",
    "Agriculture & Environmental Monitoring"
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Technical Approach
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">State-of-the-Art Models</h3>
                <p className="text-gray-600">
                  We leverage cutting-edge architectures including CNNs, Vision Transformers, 
                  and hybrid models optimized for your specific use case.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Training & Fine-tuning</h3>
                <p className="text-gray-600">
                  Our models are trained on your domain-specific data to achieve superior 
                  performance compared to generic solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge & Cloud Deployment</h3>
                <p className="text-gray-600">
                  Optimized for both real-time edge processing and scalable cloud inference, 
                  ensuring optimal performance for your deployment scenario.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Applications</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalApproachSection;
