
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactMethods = [
    {
      title: "Project Consultation",
      description: "Schedule a technical discussion about your AI project requirements and objectives.",
      action: "Book Consultation"
    },
    {
      title: "Feasibility Study",
      description: "Request a comprehensive analysis of your AI approach and technical requirements.",
      action: "Request Study"
    },
    {
      title: "Technical Partnership",
      description: "Explore long-term collaboration opportunities for ongoing AI development needs.",
      action: "Discuss Partnership"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss your project requirements 
              and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your AI Journey</h2>
              
              <div className="space-y-6 mb-8">
                {contactMethods.map((method, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        {method.description}
                      </CardDescription>
                      <Button variant="outline" size="sm">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Initial consultation within 24 hours</li>
                  <li>• Detailed technical assessment</li>
                  <li>• Customized solution proposal</li>
                  <li>• Clear timeline and deliverables</li>
                </ul>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you with insights and next steps.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Input id="projectType" placeholder="e.g., Computer Vision, Custom AI App" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your AI project, requirements, timeline, and any specific challenges you're facing..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
