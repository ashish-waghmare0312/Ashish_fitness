import React, { useMemo } from 'react'
import TestimonialCard from './marketing/TestimonialCard';

const DEFAULT_DURATIONS = [28, 34];

const TestimonialSection = ({ siteContent = {} }) => {
  const testimonials = siteContent?.testimonials?.items ?? [];

  if (!testimonials.length) {
    return null;
  }

  const durations = useMemo(() => {
    const configured = siteContent?.testimonials?.marqueeDurations;

    if (Array.isArray(configured) && configured.length) {
      return [
        configured[0] ?? DEFAULT_DURATIONS[0],
        configured[1] ?? configured[0] ?? DEFAULT_DURATIONS[1],
      ];
    }

    const speed = siteContent?.testimonials?.speed;

    if (typeof speed === 'number' && Number.isFinite(speed)) {
      return [speed, Math.max(speed * 1.15, speed + 4)];
    }

    return DEFAULT_DURATIONS;
  }, [siteContent]);

  const rows = useMemo(() => [
    { id: 'testimonial-row-primary', direction: 'rtl', duration: durations[0] },
    { id: 'testimonial-row-secondary', direction: 'ltr', duration: durations[1] ?? durations[0] },
  ], [durations]);

  const loopedTestimonials = useMemo(() => {
    if (!testimonials.length) {
      return [];
    }

    return [...testimonials, ...testimonials, ...testimonials];
  }, [testimonials]);

  return (
    <section className="relative mt-16 w-full max-w-7xl px-4 sm:px-6 mx-auto">
      <div className="testimonial-marquee-wrapper mx-auto">
        <div className="testimonial-edge testimonial-edge-left" aria-hidden="true" />
        <div className="testimonial-edge testimonial-edge-right" aria-hidden="true" />

        <div className="flex flex-col gap-10">
          {rows.map(({ id, direction, duration }) => (
            <div
              key={id}
              className={`testimonial-marquee testimonial-marquee--${direction}`}
              style={{ '--marquee-duration': `${duration}s` }}
            >
              <div className="testimonial-marquee__track">
                {loopedTestimonials.map((t, idx) => (
                  <div key={`${id}-${idx}`} className="testimonial-marquee__item">
                    <TestimonialCard
                      author={t.author}
                      text={t.text}
                      highlights={t.highlights}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection