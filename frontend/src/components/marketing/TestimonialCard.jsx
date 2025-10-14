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

function highlightRelevant(text) {
  const tokens = text.split(/(\s+)/);
  const numberKg = /^(?:\d+(?:\.\d+)?)\s?(?:kg|kgs)$/i;
  const numbers = /^(?:\d{1,2}(?:\.\d+)?|\d{4})$/;
  const timeWords = /^(?:week|weeks|month|months|days?)$/i;
  const verbs = /^(dropped|lost|gain(?:ed)?|increased|recomposition|progress|strength)$/i;
  const connectors = /^(from|to)$/i;

  const out = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.trim() === "") { out.push(t); continue; }
    const next = tokens[i + 2] || ""; // skip whitespace in between
    const pair = `${t}${next}`.trim();

    // Composite like "5 kgs"
    if (/^\d+(?:\.\d+)?$/.test(t) && /^(kg|kgs|months?|weeks?)$/i.test(next)) {
      out.push(<mark key={i} className="af-mark">{t} {next}</mark>);
      i += 2; // skip number, space, unit
      continue;
    }

    // Single token highlights
    if (numberKg.test(t) || timeWords.test(t) || verbs.test(t) || connectors.test(t) || numbers.test(t)) {
      out.push(<mark key={i} className="af-mark">{t}</mark>);
      continue;
    }

    out.push(<span key={i}>{t}</span>);
  }
  return out;
}

export default function TestimonialCard({ author, text }) {
  const { name, role } = parseAuthor(author);
  return (
    <Card className="border af-border bg-white">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold" style={{color: "#1A237E"}}>{name}</div>
          <BadgeCheck size={18} style={{color: "#3949AB"}} aria-hidden />
        </div>
        {role && <div className="text-sm" style={{color: "#757575"}}>{role}</div>}
        <p className="mt-3 leading-relaxed text-body">{highlightRelevant(text)}</p>
      </CardContent>
    </Card>
  );
}
