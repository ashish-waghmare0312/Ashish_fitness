import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";
import "@/styles/marketing.css";

function parseAuthor(author) {
  const match = author.match(/^(.*?)\s*\((.*?)\)\s*$/);
  if (match) {
    return { name: match[1], role: match[2] };
  }
  return { name: author, role: null };
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightRelevant(text, highlights = []) {
  if (!Array.isArray(highlights) || highlights.length === 0) {
    return text;
  }

  const cleaned = highlights
    .map((phrase) => (typeof phrase === "string" ? phrase.trim() : ""))
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  if (cleaned.length === 0) {
    return text;
  }

  const pattern = new RegExp(`(${cleaned.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, idx) => {
    const matched = cleaned.find((phrase) => phrase.toLowerCase() === part.toLowerCase());
    if (matched) {
      return <mark key={`mark-${idx}`} className="af-mark">{part}</mark>;
    }
    return <span key={`span-${idx}`}>{part}</span>;
  });
}

export default function TestimonialCard({ author, text, highlights }) {
  const { name, role } = parseAuthor(author);
  return (
    <Card className="border af-border bg-white">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold" style={{color: "#1A237E"}}>{name}</div>
          <BadgeCheck size={18} style={{color: "#3949AB"}} aria-hidden />
        </div>
        {role && <div className="text-sm" style={{color: "#757575"}}>{role}</div>}
        <p className="mt-3 leading-relaxed text-body">{highlightRelevant(text, highlights)}</p>
      </CardContent>
    </Card>
  );
}
