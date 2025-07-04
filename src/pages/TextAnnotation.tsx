import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const TextAnnotation = () => {
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
      title: "Named Entity Recognition",
      description: "Identify and classify entities like persons, organizations, locations, and custom entities.",
      detailedDescription: "Our Named Entity Recognition (NER) service provides comprehensive identification and classification of entities within text data. We specialize in recognizing standard entities like persons, organizations, and locations, as well as custom domain-specific entities tailored to your industry needs. Essential for information extraction, knowledge graphs, and content analysis systems.",
      features: ["Person identification", "Organization detection", "Location tagging", "Custom entity types"],
      gif: "/gifs/text_annotation.gif"
    },
    {
      title: "Layout Analysis",
      description: "Analyze document structure and identify text regions, headers, paragraphs, and layout elements.",
      detailedDescription: "Advanced layout analysis annotation services that understand document structure and hierarchy. Our experts identify and classify different text regions including headers, paragraphs, tables, figures, and captions. Essential for document processing, content extraction, and automated document understanding systems.",
      features: ["Region identification", "Hierarchy mapping", "Table detection", "Figure captioning"],
      gif: "/gifs/text/la.jpg"
    },
    {
      title: "OCR (Optical Character Recognition)",
      description: "Convert images of text into machine-encoded text with high accuracy and formatting preservation.",
      detailedDescription: "Professional OCR annotation services that transform scanned documents, images, and handwritten text into structured digital format. Our OCR specialists ensure accurate character recognition, preserve formatting, and handle complex layouts including tables, forms, and multi-column documents for digitization projects.",
      features: ["Character recognition", "Format preservation", "Handwriting support", "Multi-language OCR"],
      gif: "/gifs/text/OCR.gif"
    },
    {
      title: "Sentiment Analysis",
      description: "Annotate text with sentiment labels for opinion mining and emotion detection.",
      detailedDescription: "Advanced sentiment analysis annotation services that go beyond simple positive/negative classifications. Our expert annotators provide nuanced emotion detection, aspect-based sentiment analysis, and intensity scoring to help you understand the full emotional context of textual content for social media monitoring, customer feedback analysis, and brand reputation management.",
      features: ["Positive/negative sentiment", "Emotion classification", "Aspect-based sentiment", "Intensity scoring"],
      gif: "/gifs/text/sentiment_analysis.gif"
    },
    {
      title: "Text Classification",
      description: "Categorize documents and text passages for content organization and filtering.",
      detailedDescription: "Comprehensive text classification services for organizing and categorizing large volumes of textual content. Our classification annotations support document categorization, topic modeling, content filtering, and multi-label classification scenarios. Perfect for content management systems, automated routing, and information retrieval applications.",
      features: ["Document categorization", "Topic classification", "Content filtering", "Multi-label annotation"],
      gif: "/gifs/text/text_classification.gif"
    },
    {
      title: "Summarization",
      description: "Create concise summaries and key point extraction from long-form content.",
      detailedDescription: "Expert text summarization annotation services that create high-quality abstractive and extractive summaries. Our linguists identify key information, main themes, and critical points while maintaining context and coherence. Ideal for news summarization, document analysis, and content curation applications.",
      features: ["Abstractive summaries", "Extractive summaries", "Key point extraction", "Multi-document summarization"],
      gif: "/gifs/text/summarization.gif"
    },
    {
      title: "Translation",
      description: "High-quality translation annotation with cultural context and linguistic nuance preservation.",
      detailedDescription: "Professional translation annotation services that go beyond word-for-word conversion. Our native linguists provide culturally appropriate translations, maintain context and tone, and ensure linguistic accuracy across multiple language pairs. Essential for multilingual AI systems, localization, and cross-cultural communication applications.",
      features: ["Cultural adaptation", "Context preservation", "Multi-language pairs", "Domain expertise"],
      gif: "/gifs/text/translation.gif"
    },
    {
      title: "Question Answering",
      description: "Annotate question-answer pairs for reading comprehension and information retrieval systems.",
      detailedDescription: "Specialized question answering annotation services that create high-quality QA datasets for training intelligent systems. Our annotators develop comprehensive question-answer pairs, reading comprehension tasks, and factual verification annotations to enhance AI's ability to understand and respond to natural language queries.",
      features: ["Reading comprehension", "Factual QA pairs", "Context understanding", "Answer validation"],
      gif: "/gifs/text/QA.gif"
    }
  ];

  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Text Annotation Services
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Advanced text labeling services for NLP models including entity recognition, 
              sentiment analysis, and classification. Our linguistic experts ensure accurate 
              and contextually relevant annotations for your language AI applications.
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
              Interactive Text Annotation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive text annotation capabilities. 
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
                          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 flex items-center justify-center">
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
                                    <span className="w-3 h-3 bg-cyan-600 rounded-full mr-4"></span>
                                    <span className="text-base">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-4">
                              <Link to="/contact">
                                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2">
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
              <CarouselPrevious className="left-4 bg-cyan-600 hover:bg-cyan-700 text-white border-none" />
              <CarouselNext className="right-4 bg-cyan-600 hover:bg-cyan-700 text-white border-none" />
            </Carousel>

            {/* Service Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    current === index ? 'bg-cyan-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => scrollToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enhance Your NLP Models
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your text annotation needs and create the perfect dataset for your language AI projects.
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

export default TextAnnotation;
