import React from "react";
import { 
  Dumbbell, 
  Shield, 
  Apple, 
  TrendingUp, 
  Video, 
  Brain, 
  GraduationCap 
} from "lucide-react";
import "@/styles/marketing.css";

const PILLARS = [
  {
    icon: Dumbbell,
    text: "Personalized workout programming backed by exercise science",
    colorClass: "af-bento-icon-lime"
  },
  {
    icon: Shield,
    text: "Safe, efficient hypertrophy training using machines and cables",
    colorClass: "af-bento-icon-lime"
  },
  {
    icon: Apple,
    text: "Nutrition plans built on macros, flexibility, and real-world sustainability",
    colorClass: "af-bento-icon-lime"
  },
  {
    icon: TrendingUp,
    text: "Weekly progress tracking with RIR, performance, and body feedback",
    colorClass: "af-bento-icon-lime"
  },
  {
    icon: Video,
    text: "Technique correction through video form checks",
    colorClass: "af-bento-icon-lime"
  },
  {
    icon: Brain,
    text: "Habit and mindset coaching focused on consistency and recovery",
    colorClass: "af-bento-icon-lime"
  },
  {
    icon: GraduationCap,
    text: "Science-based education — clear explanations behind every change",
    colorClass: "af-bento-icon-lime"
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars">
      <div className="mx-auto max-w-5xl px-6 md:px-8 py-20">
        <h2 className="af-animate text-3xl md:text-4xl lg:text-5xl font-bold text-center text-heading mb-2">Evidence‑Based Coaching Pillars</h2>
        <p className="af-animate af-animate-delay-sm text-center text-body/70 mb-12 text-sm md:text-base">Seven core principles that drive real, sustainable results</p>
        <div className="af-animate af-animate-delay-sm mt-8 af-bento-grid">
          {PILLARS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="af-bento-item">
                <div className={`af-bento-icon-wrapper ${item.colorClass}`}>
                  <IconComponent className="af-bento-icon-svg" aria-hidden />
                </div>
                <span className="af-bento-text">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


