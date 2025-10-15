import React from "react";
import { Card } from "@/components/ui/card";
import "@/styles/marketing.css";
import { Plus } from "lucide-react";

const cards = [
  {
    title: "Assess: Personalized Audit",
    img: "https://images.unsplash.com/photo-1648659487787-79db84e9b2e2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Plan: Workout + Nutrition",
    img: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Execute: Coaching & Safety",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProcessCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((c, idx) => (
        <Card key={idx} className="process-card relative overflow-hidden">
          <img src={c.img} alt="background" className="process-bg" />
          <div className="process-overlay" />
          <div className="process-dots" />
          <div className="process-content">
            <h3 className="process-title">{c.title}</h3>
            <Plus className="process-plus" aria-hidden />
          </div>
        </Card>
      ))}
    </div>
  );
}
