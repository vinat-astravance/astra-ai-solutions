
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AudioAnnotation = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const services = [
    {
      title: "Speech-to-Text Annotation",
      description: "Accurate transcription and labeling of speech data for ASR model training.",
      detailedDescription: "Our speech-to-text annotation service provides precise transcription of audio content with speaker identification, timestamp alignment, and multi-language support. Essential for building robust automatic speech recognition systems that can handle diverse accents, background noise, and speaking patterns.",
      features: ["Multi-language support", "Speaker identification", "Timestamp alignment", "Noise handling"],
      gif: "/gifs/audio_ai_annotations.gif"
    },
    {
      title: "Sound Event Detection",
      description: "Precise labeling of acoustic events and environmental sounds.",
      detailedDescription: "Identify and classify acoustic events in complex audio environments. Our sound event detection annotation covers everything from environmental sounds to specific audio patterns, providing temporal boundaries and context labels essential for audio monitoring and classification systems.",
      features: ["Event classification", "Temporal boundaries", "Multi-label annotation", "Context labeling"],
      gif: "/gifs/audio_ai_annotations.gif"
    },
    {
      title: "Music & Audio Classification",
      description: "Genre, instrument, and mood classification for music AI applications.",
      detailedDescription: "Comprehensive music and audio classification services including genre identification, instrument detection, mood analysis, and beat tracking. Perfect for music recommendation systems, content analysis, and audio processing applications that require deep understanding of musical content.",
      features: ["Genre classification", "Instrument detection", "Mood analysis", "Beat tracking"],
      gif: "/gifs/audio_ai_annotations.gif"
    },
    {
      title: "Audio Quality Assessment",
      description: "Quality evaluation and enhancement labeling for audio processing models.",
      detailedDescription: "Evaluate and label audio quality metrics including noise levels, distortion detection, and enhancement targets. Our quality assessment annotations help train models for audio restoration, enhancement, and quality control applications across various audio processing scenarios.",
      features: ["Quality scoring", "Noise assessment", "Distortion detection", "Enhancement targets"],
      gif: "/gifs/audio_ai_annotations.gif"
    }
  ];

  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

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
              Interactive Audio Annotation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive audio annotation capabilities. 
              Navigate through different annotation types to see detailed information and examples.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel 
              className="w-full"
              opts={{
                loop: true,
                align: "start"
              }}
              setApi={setApi}
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
                          {/* GIF Display */}
                          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 flex items-center justify-center">
                            <div className="max-w-full">
                              <img 
                                src={service.gif} 
                                alt={service.title} 
                                className="w-full h-auto rounded-lg shadow-lg max-h-96 object-contain"
                              />
                            </div>
                          </div>
                          
                          {/* Service Information */}
                          <div className="p-8 flex flex-col justify-center bg-white">
                            <div className="mb-6">
                              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                {service.title}
                              </h3>
                              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {service.detailedDescription}
                              </p>
                            </div>
                            
                            <div className="mb-8">
                              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                              <div className="grid grid-cols-1 gap-3">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-gray-700">
                                    <span className="w-3 h-3 bg-green-600 rounded-full mr-4"></span>
                                    <span className="text-base">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-4">
                              <Link to="/contact">
                                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                                  Get Quote
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-green-600 hover:bg-green-700 text-white border-none" />
              <CarouselNext className="right-4 bg-green-600 hover:bg-green-700 text-white border-none" />
            </Carousel>

            {/* Service Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    current === index ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollToSlide(index)}
                />
              ))}
            </div>
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
