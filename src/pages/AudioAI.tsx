
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, Mic, Volume2, Brain, Music, AlertTriangle, Settings } from "lucide-react";

const AudioAI = () => {
  const projectTypes = [
    {
      id: 1,
      title: "Speech Processing",
      description: "AI systems that analyze and interpret human speech.",
      icon: Mic,
      videoPlaceholder: "speech-processing-demo.mp4",
      color: "bg-blue-500",
      subtypes: [
        {
          name: "Automatic Speech Recognition (ASR)",
          description: "Convert spoken language into accurate, real-time text.",
          applications: ["Voice assistants", "Live transcription", "Subtitling"]
        },
        {
          name: "Speaker Identification",
          description: "Match audio clips to a known speaker's voiceprint.",
          applications: ["Biometric authentication", "Access control", "Smart homes"]
        },
        {
          name: "Audio-based Surveillance Systems",
          description: "Detect anomalies (gunshots, screams) in live audio feeds.",
          applications: ["Smart policing", "Crowd monitoring", "Transport safety"]
        },
        {
          name: "Speaker Diarization",
          description: "Segment conversations by identifying 'who spoke when.'",
          applications: ["Meeting transcription", "Podcast indexing", "Legal recordings"]
        }
      ]
    },
    {
      id: 2,
      title: "Text-to-Speech and Voice Generation",
      description: "Converting text into expressive and human-like audio.",
      icon: Volume2,
      videoPlaceholder: "tts-voice-generation-demo.mp4",
      color: "bg-green-500",
      subtypes: [
        {
          name: "Text-to-Speech (TTS)",
          description: "Convert any text into spoken audio with customizable voices.",
          applications: ["Chatbots", "Audiobooks", "Virtual guides", "IVR systems"]
        },
        {
          name: "Voice Cloning",
          description: "Replicate a specific individual's voice from sample data.",
          applications: ["Personalized assistants", "Branding", "Voice synthesis"]
        },
        {
          name: "Multilingual TTS",
          description: "Generate speech in multiple global and regional languages.",
          applications: ["Global content delivery", "Accessibility"]
        }
      ]
    },
    {
      id: 3,
      title: "Emotion and Sentiment Recognition",
      description: "Extracting emotional cues and affective states from audio.",
      icon: Brain,
      videoPlaceholder: "emotion-recognition-demo.mp4",
      color: "bg-purple-500",
      subtypes: [
        {
          name: "Emotion Detection from Voice",
          description: "Analyze tone, pitch, and prosody to detect emotions.",
          applications: ["Customer support analytics", "Healthcare", "Mood-based assistants"]
        },
        {
          name: "Stress or Mental State Monitoring",
          description: "Use vocal biomarkers to assess stress, fatigue, or depression.",
          applications: ["Telehealth", "Call center well-being", "Performance monitoring"]
        }
      ]
    },
    {
      id: 4,
      title: "Music and Sound Understanding",
      description: "Analyzing and generating music or general soundscapes.",
      icon: Music,
      videoPlaceholder: "music-sound-demo.mp4",
      color: "bg-pink-500",
      subtypes: [
        {
          name: "Music Genre and Mood Classification",
          description: "Categorize music by genre, mood, or tempo.",
          applications: ["Streaming recommendations", "Music therapy"]
        },
        {
          name: "Music Transcription and Beat Tracking",
          description: "Convert audio into musical notation, detect tempo and key.",
          applications: ["Music education", "DJ software", "Music analysis"]
        },
        {
          name: "Audio Generation (Music & SFX)",
          description: "AI-generated music and sound effects.",
          applications: ["Games", "Films", "Branded content", "Generative design"]
        }
      ]
    },
    {
      id: 5,
      title: "Audio Classification and Event Detection",
      description: "Identifying and tagging audio events in real-time or recorded streams.",
      icon: AlertTriangle,
      videoPlaceholder: "audio-classification-demo.mp4",
      color: "bg-orange-500",
      subtypes: [
        {
          name: "Environmental Sound Classification",
          description: "Detect and classify events like alarms, glass breaking, or footsteps.",
          applications: ["Surveillance", "Smart cities", "Home security"]
        },
        {
          name: "Keyword Spotting & Wake Word Detection",
          description: "Recognize trigger words like 'Hey Siri' or 'OK Google.'",
          applications: ["Voice-controlled systems", "Privacy-aware triggers"]
        },
        {
          name: "Wildlife and Bioacoustics Analysis",
          description: "Detect animal calls in natural recordings.",
          applications: ["Ecology", "Species monitoring", "Conservation tech"]
        }
      ]
    },
    {
      id: 6,
      title: "Audio Enhancement and Source Separation",
      description: "Improving audio quality and isolating target sources.",
      icon: Settings,
      videoPlaceholder: "audio-enhancement-demo.mp4",
      color: "bg-indigo-500",
      subtypes: [
        {
          name: "Noise Reduction and Echo Cancellation",
          description: "Clean up noisy audio for clearer speech.",
          applications: ["Video conferencing", "Hearing aids", "Podcasts"]
        },
        {
          name: "Speech Enhancement",
          description: "Boost voice quality from poor recordings.",
          applications: ["Forensics", "Journalism", "Telehealth"]
        },
        {
          name: "Source Separation",
          description: "Separate overlapping sound sources like vocals from background music.",
          applications: ["Karaoke", "Forensic analysis", "Broadcast editing"]
        }
      ]
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Audio AI Solutions
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Transform your audio processing capabilities with our comprehensive suite of AI solutions 
              for speech recognition, voice generation, emotion detection, music analysis, and audio enhancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Get Started
                </Button>
              </Link>
              <Link to="/research">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                  Explore Feasibility
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
              Our Audio AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive audio AI solutions covering every aspect of sound processing, 
              analysis, and generation to meet your specific business needs.
            </p>
          </div>

          <div className="space-y-16">
            {projectTypes.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden w-80 h-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Play className="h-8 w-8 mx-auto mb-2 opacity-80" />
                          <p className="text-sm font-medium">Demo Video</p>
                          <p className="text-xs opacity-75">{project.videoPlaceholder}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Card className="h-full border-0 shadow-none">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-gray-900">{project.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-600">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-gray-900 mb-4">Capabilities</h4>
                      <div className="space-y-4">
                        {project.subtypes.map((subtype, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                            <h5 className="font-semibold text-gray-900 mb-2">{subtype.name}</h5>
                            <p className="text-gray-600 text-sm mb-3">{subtype.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {subtype.applications.map((app, appIndex) => (
                                <Badge 
                                  key={appIndex} 
                                  variant="secondary" 
                                  className="text-xs bg-white text-gray-700 hover:bg-gray-200"
                                >
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Audio Processing?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Whether you need speech recognition, voice generation, or audio analysis, 
            our AI solutions can be customized to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Start Your Project
              </Button>
            </Link>
            <Link to="/research">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AudioAI;
