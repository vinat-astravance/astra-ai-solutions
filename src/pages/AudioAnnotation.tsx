import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AudioAnnotation = () => {
  const services = [
    {
      title: "Speech-to-Text Annotation",
      description: "Accurate transcription and labeling of speech data for ASR model training.",
      features: ["Multi-language support", "Speaker identification", "Timestamp alignment", "Noise handling"]
    },
    {
      title: "Sound Event Detection",
      description: "Precise labeling of acoustic events and environmental sounds.",
      features: ["Event classification", "Temporal boundaries", "Multi-label annotation", "Context labeling"]
    },
    {
      title: "Music & Audio Classification",
      description: "Genre, instrument, and mood classification for music AI applications.",
      features: ["Genre classification", "Instrument detection", "Mood analysis", "Beat tracking"]
    },
    {
      title: "Audio Quality Assessment",
      description: "Quality evaluation and enhancement labeling for audio processing models.",
      features: ["Quality scoring", "Noise assessment", "Distortion detection", "Enhancement targets"]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Audio Annotation Services
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Professional audio labeling services for speech recognition, sound classification, 
              and audio analysis models. Our expert annotators ensure precise temporal and 
              contextual labeling for optimal model performance.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Request Quote
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
              Audio Annotation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From speech transcription to complex acoustic event detection, 
              we provide comprehensive audio annotation services for all your AI audio processing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
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

      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Enhance Your Audio AI?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your audio annotation requirements and deliver the quality data your models need.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AudioAnnotation;
