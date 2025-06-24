
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Technical Excellence",
      description: "We maintain the highest standards of technical expertise, staying current with the latest AI research and best practices."
    },
    {
      title: "Innovation-Driven",
      description: "We push the boundaries of what's possible, bringing cutting-edge AI solutions to real-world challenges."
    },
    {
      title: "Reliable Partnership",
      description: "We deliver on our commitments with transparent communication and measurable results that drive business value."
    },
    {
      title: "Ethical AI",
      description: "We prioritize responsible AI development with focus on fairness, transparency, and positive societal impact."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Astravance AI
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We are a team of AI experts dedicated to delivering cutting-edge artificial intelligence solutions 
              that transform businesses and create lasting value for our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Astravance AI, we believe that artificial intelligence should be accessible, practical, 
                and transformative. Our mission is to bridge the gap between cutting-edge AI research and 
                real-world business applications.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We work with technical decision-makers who understand the potential of AI and need trusted 
                partners to bring their vision to life. From initial research to full deployment, we provide 
                the expertise and innovation necessary to achieve AI success.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  Partner With Us
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our team combines deep technical expertise with practical industry experience across 
                  multiple AI domains and applications.
                </p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  We have successfully delivered AI solutions across industries, from computer vision 
                  systems to generative AI applications.
                </p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Service Approach</h3>
                <p className="text-gray-600">
                  From research and feasibility studies to deployment and maintenance, we provide 
                  comprehensive AI services under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every project we undertake and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise and values align with your AI goals and business objectives.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
