import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import "@/styles/marketing.css";

function parseAuthor(author) {
  const match = author?.match(/^(.*?)\s*\((.*?)\)\s*$/);
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
      return <mark key={`mark-${idx}`} className="bg-[#FDAA48]/40 rounded-md px-1.5 py-0.5">{part}</mark>;
    }
    return <span key={`span-${idx}`}>{part}</span>;
  });
}

export default function TestimonialCard({ author, text, highlights, className }) {
  const { name, role } = parseAuthor(author ?? "");

  return (
    <Card
      className={cn(
        "testimonial-card border af-border bg-white/95 shadow-sm h-full w-full rounded-2xl",
        "transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold text-[#1A237E]">{name}</div>
          <BadgeCheck size={18} className="text-[#3949AB]" aria-hidden />
        </div>
        {role && <div className="text-sm text-[#757575]">{role}</div>}
        <div className="mt-2 flex-1 text-sm leading-relaxed text-body">{highlightRelevant(text, highlights)}</div>
      </CardContent>
    </Card>
  );
}
