
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Audio AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
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

        {/* Project Types */}
        <div className="space-y-16">
          {projectTypes.map((project, index) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-100 rounded-lg">
                    <project.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                    <p className="text-lg text-gray-600 mt-2">{project.description}</p>
                  </div>
                </div>

                {/* Video Section */}
                <div className="mb-8">
                  <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video max-w-2xl mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                        <p className="text-lg font-medium">Demo Video</p>
                        <p className="text-sm opacity-75">{project.videoPlaceholder}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtypes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.subtypes.map((subtype, subtypeIndex) => (
                    <Card key={subtypeIndex} className="hover:shadow-md transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-gray-900">{subtype.name}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {subtype.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Applications:</p>
                          <div className="flex flex-wrap gap-2">
                            {subtype.applications.map((app, appIndex) => (
                              <Badge 
                                key={appIndex} 
                                variant="secondary" 
                                className="text-xs bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
                              >
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Audio Processing?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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
      </div>
    </Layout>
  );
};

export default AudioAI;
