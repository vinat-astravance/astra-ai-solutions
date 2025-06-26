
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blogs = () => {
  const blogArticles = [
    {
      title: "YOLOv12: The Future of Real-Time Object Detection with Attention Mechanisms",
      url: "https://medium.com/@fahey_james/yolov12-the-future-of-real-time-object-detection-with-attention-mechanisms-df6d910722e7",
      image: "/images/computer-vision.jpg",
      description: "Exploring the latest advancements in object detection with YOLOv12 and attention mechanisms for real-time applications."
    },
    {
      title: "Generative AI: Transforming Content Creation",
      url: "#",
      image: "/images/generative-ai.jpg",
      description: "How generative AI is revolutionizing content creation across industries and applications."
    },
    {
      title: "The Future of Video AI Processing",
      url: "#",
      image: "/images/custom-applications.jpg",
      description: "Advanced video processing techniques and their applications in modern AI systems."
    },
    {
      title: "MLOps Best Practices for AI Deployment",
      url: "#",
      image: "/images/ai-development.jpg",
      description: "Essential practices for deploying and maintaining AI systems in production environments."
    },
    {
      title: "Data Annotation: Quality Assurance in AI",
      url: "#",
      image: "/images/data-annotation.jpg",
      description: "The importance of high-quality data annotation in training robust AI models."
    },
    {
      title: "Research Methodologies in AI Development",
      url: "#",
      image: "/images/research.jpg",
      description: "Systematic approaches to AI research and development for practical applications."
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Insights & Research
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments in artificial intelligence, 
            research findings, and industry insights from our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight hover:text-cyan-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {article.description}
                  </p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
