import React, { useMemo } from "react";
import "@/styles/marketing.css";
import { siteContent, getWhatsAppLink } from "@/mock/mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, ArrowRight } from "lucide-react";
import TestimonialCard from "@/components/marketing/TestimonialCard";
import TimelineDemo from "@/components/timelinedemo";
import PillarsSection from "@/components/marketing/PillarsSection";
import WhatsAppIcon from "@/assets/whatsapp-svgrepo-com.svg";

function Section({ id, children, className = "", padded = true, ...rest }) {
  const classes = [padded ? "py-24 md:py-32" : "", className].filter(Boolean).join(" ");
  return (
    <section id={id} className={classes} {...rest}>{children}</section>
  );
}

export default function Landing() {
  const { toast } = useToast();

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

  // Removed hero testimonial snippets
  
  return (
    <div className="marketing">
      {/* Hero */}
      <Section id="hero" padded={false} className="relative  pb-0 md:pt-24 md:pb-0 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-lime-200/30 to-transparent blur-3xl opacity-60 -translate-y-1/2 animate-pulse" aria-hidden />
          <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-200/20 to-transparent blur-3xl opacity-40 -translate-x-1/3" aria-hidden />
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 rounded-full bg-gradient-to-t from-lime-100/20 to-transparent blur-3xl opacity-50 -translate-x-1/2" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px] md:min-h-[700px] py-12 md:py-20">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="af-animate mb-6 inline-flex w-fit">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-50 border border-lime-200/60 text-xs font-semibold text-lime-900 uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                  </span>
                  Live Coaching
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="af-animate af-animate-delay-sm text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight text-heading space-y-2 md:space-y-3">
                <div>
                  Science-Backed{' '}
                  <span className="hero-highlight-word inline-block px-2 py-1 rounded-sm" style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(205, 220, 57, 0.4) 0%, rgba(220, 231, 117, 0.3) 100%)'
                  }}>
                    Fitness
                  </span>
                </div>
                <div>for Students</div>
            </h1>

              {/* Subheadline */}
              <p className="af-animate af-animate-delay-md text-lg md:text-xl text-body/90 max-w-md leading-relaxed mt-4 md:mt-6">
                Transform your body without <span className="font-semibold text-heading">sacrificing your college life</span>. Real results, personalized plans, science-backed guidance.
              </p>

              {/* CTA Buttons */}
              <div className="af-animate af-animate-delay-lg flex flex-col sm:flex-row gap-3 md:gap-4 items-start sm:items-center mt-8 md:mt-10">
              <Button
                  className="btn-transition rounded-full af-btn-primary px-8 md:px-9 h-11 md:h-12 text-sm md:text-base font-semibold shadow-md hover:shadow-lg"
                asChild
              >
                <a href={siteContent.brand.calendly} target="_blank" rel="noreferrer" aria-label="Schedule a meeting on Calendly">
                  {siteContent.hero.cta}
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-1.5" aria-hidden />
                </a>
              </Button>
              <a 
                href={waLink} 
                target="_blank" 
                rel="noreferrer" 
                  className="btn-transition inline-flex items-center justify-center gap-2 px-7 md:px-8 h-11 md:h-12 rounded-full border-2 border-heading/30 hover:border-lime-400 hover:bg-lime-50 text-heading hover:text-lime-900 font-semibold text-sm md:text-base transition-all"
                aria-label="Chat on WhatsApp"
              >
                  <img src={WhatsAppIcon} alt="WhatsApp" className="h-4 w-4 md:h-5 md:w-5" style={{ filter: 'brightness(0) saturate(1) hue-rotate(120deg)' }} aria-hidden />
                  Chat Now
                </a>
              </div>

              {/* Trust Element */}
              <div className="af-animate af-animate-delay-lg mt-8 flex items-center gap-2 text-sm text-body/70">
                <Check className="h-4 w-4 text-lime-600" aria-hidden />
                <span>No credit card required. Free consultation.</span>
              </div>
            </div>

            {/* Right Side - Stats/Achievement Card */}
            <div className="af-animate af-animate-delay-md relative flex justify-center md:justify-end items-center">
              <Card className="bg-gradient-to-br from-lime-50 via-white to-blue-50 border-2 border-lime-100/50 shadow-xl overflow-hidden w-full max-w-md">
                <CardContent className="p-8 space-y-6">
                  {/* Quick Stats */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-heading">Track Record</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-lime-100">
                        <div className="text-3xl font-bold text-lime-900">20+</div>
                        <div className="text-sm text-body/70 mt-1">Happy Clients</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-blue-100">
                        <div className="text-3xl font-bold text-blue-900">4.9/5</div>
                        <div className="text-sm text-body/70 mt-1">Results</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-lime-100">
                        <div className="text-3xl font-bold text-lime-900">100%</div>
                        <div className="text-sm text-body/70 mt-1">Science-Backed</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur rounded-lg p-4 border border-blue-100">
                        <div className="text-3xl font-bold text-blue-900">24/7</div>
                        <div className="text-sm text-body/70 mt-1">Support Available</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlight */}
                  <div className="bg-gradient-to-r from-lime-100/50 to-blue-100/50 rounded-lg p-5 border border-lime-200/50">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-heading mb-1">Student-Focused Approach</p>
                        <p className="text-xs text-body/70">Plans designed specifically for college students juggling studies, social life, and fitness goals.</p>
                </div>
                </div>
              </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-200 to-transparent opacity-60" aria-hidden></div>
      </Section>

      {/* Know the Coach - unboxed */}
      <Section id="about" padded>
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Coach Image */}
            <div className="order-2 md:order-1 about-photo-wrapper relative">
              <div className="hidden md:block absolute -top-8 -left-8 w-24 h-24 rounded-full af-highlight-bg blur-xl opacity-70" aria-hidden />
              <div className="hidden md:block absolute -bottom-10 -right-8 w-20 h-20 rounded-full af-highlight-bg blur-lg opacity-60" aria-hidden />
              
              {/* Message Box - positioned to the left */}
              <div className="absolute top-8 -left-32 md:-left-48 lg:-left-44 bg-white/95 backdrop-blur-sm border-2 border-lime-200 rounded-2xl px-5 py-4 shadow-xl max-w-[220px] z-20 hidden md:block">
                <div className="relative">
                  <p className="text-sm font-semibold text-heading leading-relaxed">
                    Hi! Ready to get your Dream Physique?
                  </p>
                  {/* Speech bubble arrow pointing right towards Ashish */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-white" aria-hidden></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[18px] w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[14px] border-l-lime-200" aria-hidden></div>
                </div>
              </div>

              <div className="about-photo">
                <img
                  src="/Ashish_Waghmare.jpg"
                  alt="Ashish Waghmare, student fitness coach"
                  loading="lazy"
                />
                
                {/* Badge at bottom left */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur border border-lime-200 rounded-lg px-3.5 py-2.5 shadow-lg z-10">
                  <div className="text-sm font-bold text-heading">Ashish</div>
                  <div className="text-xs font-semibold text-lime-700">Fitness Coach</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 text-center md:text-left space-y-6">
              {/* Section Title */}
              <div className="space-y-2">
                <h2 className="af-animate text-3xl md:text-4xl font-bold text-heading">
                  Know The Coach
                </h2>
                {siteContent.about.highlight && (
                  <p className="af-animate af-animate-delay-sm text-lg text-lime-800 font-semibold">
                    {siteContent.about.highlight}
                  </p>
                )}
              </div>

              {/* Body Text */}
              <p className="af-animate af-animate-delay-sm leading-relaxed text-body text-base md:text-lg">
                {siteContent.about.body}
              </p>

              {/* Credentials */}
              {siteContent.about.credentials && (
                <div className="af-animate af-animate-delay-md space-y-3 pt-2">
                  <div className="text-sm font-semibold text-heading uppercase tracking-wide">
                    Credentials & Expertise
                  </div>
                  <ul className="space-y-2">
                    {siteContent.about.credentials.map((credential, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-body">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{color: "#7CB342"}} />
                        <span className="text-sm md:text-base">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Coaching */}
      <Section id="coaching" className="" padded>
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="af-animate flex items-center justify-between mb-12 border-b border-neutral-200 pb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading">{siteContent.coaching.title}</h2>
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
          <div className="mb-12">
            <h2 className="af-animate text-3xl md:text-4xl lg:text-5xl font-bold text-center text-heading mb-2">How I Help You Get Your Dream Physique</h2>
            <p className="af-animate af-animate-delay-sm text-center text-body/70 text-sm md:text-base">A proven step-by-step process designed for your success</p>
          </div>
          <div className="af-animate af-animate-delay-sm">
            <TimelineDemo />
          </div>
        </div>
      </Section>

      {/* Testimonials - card style */}
      <Section id="testimonials" padded>
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-12">
            <h2 className="af-animate text-3xl md:text-4xl lg:text-5xl font-bold text-center text-heading mb-2">{siteContent.testimonials.title}</h2>
            <p className="af-animate af-animate-delay-sm text-center text-body/70 text-sm md:text-base">Real transformations and success stories from students and professionals</p>
          </div>
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
          <h2 className="af-animate text-3xl md:text-4xl lg:text-5xl font-bold text-center text-heading mb-8">{siteContent.faq.title}</h2>
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
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="af-animate text-3xl md:text-4xl font-bold text-heading">{siteContent.contact.title}</h2>
            <p className="af-animate af-animate-delay-sm text-lg text-body/90 max-w-2xl mx-auto">{siteContent.contact.body}</p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp Card */}
            <Card className="af-animate bg-gradient-to-br from-lime-50/50 to-white border-2 border-lime-100/50 hover:border-lime-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-100">
                    <img src={WhatsAppIcon} alt="WhatsApp" className="h-6 w-6" style={{ filter: 'brightness(0) saturate(1) hue-rotate(120deg)' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading mb-1">Quick Chat</h3>
                    <p className="text-sm text-body/70">Get instant replies on WhatsApp. Perfect for quick questions or to book your consultation.</p>
                  </div>
                <a href={waLink} target="_blank" rel="noreferrer">
                    <Button className="btn-transition w-full rounded-full af-btn-primary mt-4" title="Chat with Ashish">
                      <img src={WhatsAppIcon} alt="WhatsApp" className="h-4 w-4 mr-2" style={{ filter: 'brightness(0) invert(1)' }} /> 
                      {siteContent.contact.cta1}
                  </Button>
                </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="af-animate af-animate-delay-sm bg-gradient-to-br from-blue-50/50 to-white border-2 border-blue-100/50 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={onSubmitContact} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-heading mb-4">Send Me a Message</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-heading block mb-2">Name</label>
                      <Input name="name" placeholder="Your name" required className="rounded-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-heading block mb-2">Email</label>
                      <Input name="email" type="email" placeholder="you@example.com" required className="rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-heading block mb-2">Message</label>
                    <Textarea name="message" placeholder="Tell me about your fitness goals..." rows={4} required className="rounded-lg" />
                  </div>
                  <Button className="btn-transition w-full rounded-full af-btn-primary mt-2" title="Send message" type="submit">
                      {siteContent.contact.cta2}
                    </Button>
                  <p className="text-xs text-body/60 text-center mt-3">I'll respond within 24 hours</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <footer className="py-10 af-footer">
        <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="af-animate text-center md:text-left">© {new Date().getFullYear()} Ashish Waghmare. All rights reserved.</div>
          <a className="af-animate af-animate-delay-sm hover:underline" href="#hero">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
