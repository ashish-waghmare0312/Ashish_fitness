import React from "react";
import { Check } from "lucide-react";
import "@/styles/marketing.css";

const PILLARS = [
  "Personalized workout programming backed by exercise science",
  "Safe, efficient hypertrophy training using machines and cables",
  "Nutrition plans built on macros, flexibility, and real-world sustainability",
  "Weekly progress tracking with RIR, performance, and body feedback",
  "Technique correction through video form checks",
  "Habit and mindset coaching focused on consistency and recovery",
  "Science-based education — clear explanations behind every change",
];

export default function PillarsSection() {
  return (
    <section id="pillars">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <h2 className="af-animate text-2xl md:text-3xl font-bold text-center text-heading">Evidence‑Based Coaching Pillars</h2>
        <div className="af-animate af-animate-delay-sm mt-8 af-bento-grid">
          {PILLARS.map((item) => (
            <div key={item} className="af-bento-item">
              <Check className="af-bento-icon" aria-hidden />
              <span className="af-bento-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


