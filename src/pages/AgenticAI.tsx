
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction, Clock, Zap } from "lucide-react";

const AgenticAI = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Construction className="w-20 h-20 mx-auto mb-6 text-orange-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Agentic AI
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Our Agentic AI solutions are currently under development. We're building 
              intelligent autonomous agents that can perform complex tasks, make decisions, 
              and interact with various systems on your behalf.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Clock className="w-8 h-8 text-orange-200" />
                <h2 className="text-2xl font-semibold">Coming Soon</h2>
              </div>
              <p className="text-orange-100 text-lg">
                We're working hard to bring you cutting-edge agentic AI capabilities. 
                This page will be updated with comprehensive information about our 
                autonomous AI agent services very soon.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Get Notified When Ready
                </Button>
              </Link>
              <Link to="/generative-ai">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
                  Explore Other AI Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <Zap className="w-16 h-16 mx-auto mb-6 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                When our Agentic AI services launch, you'll have access to autonomous 
                intelligent agents capable of complex reasoning, task execution, and 
                seamless integration with your existing workflows.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                <p className="text-orange-800 font-medium">
                  Stay tuned for updates on our autonomous AI agent capabilities!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AgenticAI;
