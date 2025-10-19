import React, { useMemo, useState } from "react";
import "@/styles/marketing.css";
import { siteContent, getWhatsAppLink } from "@/mock/mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, ArrowRight, MessageCircle, Dumbbell } from "lucide-react";
import TestimonialCard from "@/components/marketing/TestimonialCard";
import TimelineDemo from "@/components/timelinedemo";
import PillarsSection from "@/components/marketing/PillarsSection";

function Section({ id, children, className = "", padded = true, ...rest }) {
  const classes = [padded ? "py-24 md:py-32" : "", className].filter(Boolean).join(" ");
  return (
    <section id={id} className={classes} {...rest}>{children}</section>
  );
}

export default function Landing() {
  const { toast } = useToast();
  const [heroHover, setHeroHover] = useState(false);

  const waLink = useMemo(() => getWhatsAppLink(), []);

  const onSubmitContact = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
      time: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("af_messages") || "[]");
    prev.push(payload);
    localStorage.setItem("af_messages", JSON.stringify(prev));
    toast({ title: "Message sent (mocked)", description: "I'll get back to you soon.", });
    e.currentTarget.reset();
  };

  return (
    <div className="marketing">
      {/* Hero */}
      <Section id="hero" padded={false} className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col items-center text-center gap-4 md:gap-8">
            <h1 className="af-animate text-6xl md:text-[5.25rem] font-serif leading-tight tracking-tight text-heading">
              {siteContent.hero.headline}
            </h1>
            <p className="af-animate af-animate-delay-sm text-lg md:text-xl text-body max-w-3xl leading-relaxed">
              {siteContent.hero.subheadline}
            </p>
            <div className="af-animate af-animate-delay-md flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                className="btn-transition rounded-full af-btn-primary px-6 h-11"
                onMouseEnter={() => setHeroHover(true)}
                onMouseLeave={() => setHeroHover(false)}
                asChild
              >
                <a href={siteContent.brand.calendly} target="_blank" rel="noreferrer" aria-label="Schedule a meeting on Calendly">
                  <span className="hero-cta-inner">
                    <span className="hero-cta-text hero-cta-text-animate" key={heroHover ? 'hover' : 'default'}>
                      {heroHover ? "Let's Go!" : siteContent.hero.cta}
                    </span>
                    {heroHover ? (
                      <Dumbbell className="hero-cta-icon" aria-hidden />
                    ) : (
                      <ArrowRight className="hero-cta-icon" aria-hidden />
                    )}
                  </span>
                </a>
              </Button>
              <a href={waLink} target="_blank" rel="noreferrer" className="text-sm af-link">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Know the Coach - unboxed */}
      <Section id="about" padded>
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-center">
            <div className="order-2 md:order-1 about-photo-wrapper">
              <div className="hidden md:block absolute -top-8 -left-8 w-24 h-24 rounded-full af-highlight-bg blur-xl opacity-70" aria-hidden />
              <div className="hidden md:block absolute -bottom-10 -right-8 w-20 h-20 rounded-full af-highlight-bg blur-lg opacity-60" aria-hidden />
              <div className="about-photo">
                <img
                  src="/Ashish_Waghmare.jpg"
                  alt="Ashish Waghmare, student fitness coach"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left space-y-4">
              <h2 className="af-animate text-2xl md:text-3xl font-bold text-heading">Know The Coach</h2>
              <p className="af-animate af-animate-delay-sm leading-relaxed text-body text-lg md:text-base">{siteContent.about.body}</p>
              <div className="af-animate af-animate-delay-md mt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="text-sm uppercase tracking-wider text-secondary">Coach</div>
                <div className="hidden sm:flex about-divider" aria-hidden />
                {siteContent.about.highlight && (
                  <div className="text-heading font-semibold">{siteContent.about.highlight}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Coaching */}
      <Section id="coaching" className="" padded>
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="af-animate flex items-center justify-between mb-12 border-b border-neutral-200 pb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-heading">{siteContent.coaching.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {siteContent.coaching.packages.map((pkg, idx) => (
              <Card key={pkg.name} className={`af-animate ${idx === 1 ? "af-animate-delay-sm" : idx === 2 ? "af-animate-delay-md" : ""} af-card-gradient af-card-shadow border af-card-border hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <CardTitle className="text-lg text-heading">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-body">
                        <Check className="h-4 w-4" style={{color: "#7CB342"}} /> {d}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="btn-transition mt-6 w-full rounded-full af-btn-primary">
                    <a href="#contact" title="Start now">{siteContent.coaching.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <PillarsSection />

      {/* Process */}
      <Section id="process" padded>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="af-animate text-2xl md:text-3xl font-bold text-center text-heading mb-12 border-b border-neutral-200 pb-6">How I help you get your dream physique</h2>
          <div className="af-animate af-animate-delay-sm">
            <TimelineDemo />
          </div>
        </div>
      </Section>

      {/* Testimonials - card style */}
      <Section id="testimonials" padded>
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h2 className="af-animate text-2xl md:text-3xl font-bold text-center text-heading mb-12 border-b border-neutral-200 pb-6">{siteContent.testimonials.title}</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {siteContent.testimonials.items.map((t, idx) => (
              <div key={idx} className={`af-animate ${idx % 2 ? "af-animate-delay-sm" : ""}`}>
                <TestimonialCard author={t.author} text={t.text} highlights={t.highlights} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" padded>
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h2 className="af-animate text-2xl md:text-3xl font-bold text-center text-heading mb-8">{siteContent.faq.title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {siteContent.faq.items.map((item, idx) => (
              <AccordionItem value={`q-${idx}`} key={idx} className="af-animate">
                <AccordionTrigger className="text-left text-heading">{item.q}</AccordionTrigger>
                <AccordionContent className="text-body">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" padded>
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="text-center space-y-3">
            <h2 className="af-animate text-2xl md:text-3xl font-bold text-heading">{siteContent.contact.title}</h2>
            <p className="af-animate af-animate-delay-sm text-body">{siteContent.contact.body}</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
            <Card className="af-animate md:col-span-1 bg-white border af-border">
              <CardContent className="p-6">
                <div className="text-sm text-secondary">Direct chat</div>
                <a href={waLink} target="_blank" rel="noreferrer">
                  <Button className="btn-transition mt-3 w-full rounded-full af-btn-primary" title="Chat with Ashish">
                    <MessageCircle className="h-4 w-4 mr-2"/> {siteContent.contact.cta1}
                  </Button>
                </a>
                <div className="mt-4 text-xs text-muted2">WhatsApp mocked link uses your number for quick outreach.</div>
              </CardContent>
            </Card>
            <Card className="af-animate af-animate-delay-sm md:col-span-2 bg-white border af-border">
              <CardContent className="p-6">
                <form onSubmit={onSubmitContact} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-heading">Name</label>
                      <Input name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="text-sm text-heading">Email</label>
                      <Input name="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-heading">Message</label>
                    <Textarea name="message" placeholder="Tell me about your goals" rows={5} required />
                  </div>
                  <div className="flex justify-end">
                    <Button className="btn-transition rounded-full af-btn-primary" title="Chat with Ashish" type="submit">
                      {siteContent.contact.cta2}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <footer className="py-10 af-footer">
        <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="af-animate text-center md:text-left">© {new Date().getFullYear()} Ashish Fitness. All rights reserved.</div>
          <a className="af-animate af-animate-delay-sm hover:underline" href="#hero">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
