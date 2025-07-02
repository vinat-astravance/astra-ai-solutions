import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataAnnotation = () => {
  const annotationTypes = [
    {
      title: "Image Annotation",
      description: "Precision labeling for computer vision models including bounding boxes, polygons, semantic segmentation, and landmark annotations.",
      features: ["2D Bounding Boxes", "Polygon Annotation", "Semantic Segmentation", "Point & Landmark Detection"],
      image: "/lovable-uploads/3029fb0a-9008-453e-93ae-ba505b8c7086.png",
      link: "/image-annotation",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      title: "Audio Annotation",
      description: "Professional audio labeling services for speech recognition, sound classification, and audio analysis models.",
      features: ["Speech-to-Text", "Sound Event Detection", "Music Classification", "Audio Quality Assessment"],
      image: "/gifs/audio_ai_annotations.gif",
      link: "/audio-annotation",
      bgColor: "from-green-50 to-teal-50"
    },
    {
      title: "Video Annotation",
      description: "Comprehensive video labeling for object tracking, action recognition, and temporal analysis in video sequences.",
      features: ["Object Tracking", "Action Recognition", "Temporal Segmentation", "Frame-by-Frame Analysis"],
      image: "/lovable-uploads/198d1bba-2de5-4091-9fd0-171714330d43.png",
      link: "/video-annotation",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      title: "Text Annotation",
      description: "Advanced text labeling services for NLP models including entity recognition, sentiment analysis, and classification.",
      features: ["Named Entity Recognition", "Sentiment Analysis", "Text Classification", "Intent Labeling"],
      image: "/gifs/text_annotation.gif",
      link: "/text-annotation",
      bgColor: "from-cyan-50 to-blue-50"
    },
    {
      title: "Multi Sensor Data",
      description: "Complex multi-modal annotation services combining data from various sensors for advanced AI applications.",
      features: ["LiDAR Point Clouds", "Radar Data", "IoT Sensor Fusion", "Autonomous Vehicle Data"],
      image: "/lovable-uploads/fea3c9cb-6aa5-4dd2-8afb-702aec3b9a04.png",
      link: "/multi-sensor-annotation",
      bgColor: "from-purple-50 to-pink-50"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Annotation Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform your raw data into high-quality training datasets with our comprehensive annotation services. 
              From images to multi-sensor data, we provide expert human-in-the-loop labeling for all your AI needs.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Get Quote
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
              Comprehensive Annotation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert annotators deliver precise, consistent labeling across all data types, 
              ensuring your AI models have the highest quality training data.
            </p>
          </div>

          <div className="space-y-20">
            {annotationTypes.map((type, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`bg-gradient-to-br ${type.bgColor} rounded-lg p-8 flex justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="max-w-full h-auto rounded-lg shadow-lg max-h-64 object-contain"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to={type.link}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                      LEARN MORE
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Additional Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We also offer data cleaning, enrichment, and standardization services to optimize your datasets.
          </p>
          <Link to="/other-services">
            <Button size="lg" variant="secondary" className="px-8 py-3 mr-4">
              Other Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DataAnnotation;