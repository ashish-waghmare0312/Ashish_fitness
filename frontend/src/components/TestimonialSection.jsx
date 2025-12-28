console.log("NEW MANUAL TESTIMONIAL COMPONENT LOADED");

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./marketing/TestimonialCard";

const TestimonialSection = ({ siteContent = {} }) => {
  const testimonials = siteContent?.testimonials?.items ?? [];
  const [index, setIndex] = useState(0);

  if (!testimonials.length) return null;

  const prev = () => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="relative mt-16 w-full max-w-4xl mx-auto px-4">
      {/* Card */}
      <div className="relative overflow-hidden">
        <TestimonialCard
          author={testimonials[index].author}
          text={testimonials[index].text}
          highlights={testimonials[index].highlights}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>

        <span className="text-sm text-gray-500">
          {index + 1} / {testimonials.length}
        </span>

        <button
          onClick={next}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
