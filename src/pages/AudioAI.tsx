
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AudioAI = () => {
  const services = [
    {
      title: "Speech Recognition",
      description: "Advanced speech-to-text capabilities with high accuracy across multiple languages and accents.",
      features: ["Multi-language support", "Real-time processing", "Noise cancellation", "Custom vocabulary"]
    },
    {
      title: "Audio Classification",
      description: "Intelligent audio content analysis and classification for various applications.",
      features: ["Music genre detection", "Sound event recognition", "Audio quality assessment", "Content moderation"]
    },
    {
      title: "Voice Synthesis",
      description: "Natural-sounding text-to-speech generation with customizable voice characteristics.",
      features: ["Multiple voice options", "Emotion control", "SSML support", "Custom voice training"]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Audio AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your audio processing capabilities with our advanced AI solutions 
            for speech recognition, audio analysis, and voice synthesis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                Get Started
              </Button>
            </Link>
            <Link to="/research">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Explore Feasibility
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AudioAI;
