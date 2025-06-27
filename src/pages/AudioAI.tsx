
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Audio AI Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Transform your audio processing capabilities with our comprehensive suite of AI solutions 
              for speech recognition, voice generation, emotion detection, music analysis, and audio enhancement.
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
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projectTypes.map((project) => (
                <div key={project.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Project Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 ${project.color} rounded-2xl`}>
                        <project.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                        <p className="text-gray-600 mt-1">{project.description}</p>
                      </div>
                    </div>

                    {/* Compact Video Section */}
                    <div className="mb-6">
                      <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video max-w-md mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Play className="h-12 w-12 mx-auto mb-3 opacity-80" />
                            <p className="text-sm font-medium">Demo Video</p>
                            <p className="text-xs opacity-75">{project.videoPlaceholder}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtypes */}
                  <div className="px-8 pb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Capabilities</h3>
                    <div className="space-y-4">
                      {project.subtypes.map((subtype, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 mb-2">{subtype.name}</h4>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl shadow-xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Audio Processing?
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Whether you need speech recognition, voice generation, or audio analysis, 
              our AI solutions can be customized to meet your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/research">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AudioAI;
