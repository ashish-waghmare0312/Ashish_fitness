import React, { useMemo, useState } from "react";
import "@/styles/marketing.css";
import { siteContent, getWhatsAppLink } from "@/mock/mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Check, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>
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
      <Section id="hero" className="dotted-bg">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                {siteContent.hero.headline}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {siteContent.hero.subheadline}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Button
                  className="btn-transition rounded-full bg-emerald-600 text-white hover:bg-emerald-700 px-6 h-11"
                  onMouseEnter={() => setHeroHover(true)}
                  onMouseLeave={() => setHeroHover(false)}
                  asChild
                >
                  <a href="#coaching">
                    <span className="inline-flex items-center gap-2">
                      {heroHover ? siteContent.hero.ctaHover : siteContent.hero.cta}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                </Button>
                <a href={waLink} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">Chat on WhatsApp</a>
              </div>
            </div>
            <div className="relative">
              <Card className="glass p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 float-up">
                    <AvatarImage src={siteContent.hero.coach.photo} alt="Coach Ashish" />
                    <AvatarFallback>AF</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm text-muted-foreground">Hi, I'm</div>
                    <div className="text-xl font-bold">{siteContent.hero.coach.name}</div>
                    <div className="text-sm text-muted-foreground">{siteContent.hero.coach.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed">Simple, science-backed coaching built for busy students. No fads. Just results.</p>
                <div className="mt-4 flex gap-2">
                  <div className="px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><Sparkles className="h-3 w-3"/> Evidence-based</div>
                  <div className="px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Accountability</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="mx-auto max-w-3xl px-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">{siteContent.about.title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{siteContent.about.body}</p>
        </div>
      </Section>

      {/* Coaching */}
      <Section id="coaching" className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">{siteContent.coaching.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {siteContent.coaching.packages.map((pkg) => (
              <Card key={pkg.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-emerald-600 mt-0.5" /> {d}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="btn-transition mt-6 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
                    <a href="#contact" title={siteContent.coaching.ctaHover}>{siteContent.coaching.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">{siteContent.testimonials.title}</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {siteContent.testimonials.items.map((t, idx) => (
              <Card key={idx} className="border-emerald-100">
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground">{t.author}</div>
                  <p className="mt-3 leading-relaxed"><span className="hero-highlight">{t.text}</span></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-muted/30">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{siteContent.faq.title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {siteContent.faq.items.map((item, idx) => (
              <AccordionItem value={`q-${idx}`} key={idx}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Process (simple 3-step inline) */}
      <Section id="process">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Process</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Assess", "Plan", "Execute"].map((step, i) => (
              <Card key={step}>
                <CardHeader>
                  <CardTitle>{i + 1}. {step}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {step === "Assess" && "Quick audit of schedule, goals, and training access."}
                  {step === "Plan" && "Personalized workouts + nutrition with milestones."}
                  {step === "Execute" && "Weekly reviews, daily nudges (Premium), iterate."}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-muted/30">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">{siteContent.contact.title}</h2>
            <p className="mt-2 text-muted-foreground">{siteContent.contact.body}</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
            <Card className="md:col-span-1">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground">Direct chat</div>
                <a href={waLink} target="_blank" rel="noreferrer">
                  <Button className="btn-transition mt-3 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700" title="Chat with Ashish">
                    <MessageCircle className="h-4 w-4 mr-2"/> {siteContent.contact.cta1}
                  </Button>
                </a>
                <div className="mt-4 text-xs text-muted-foreground">WhatsApp mocked link uses your number for quick outreach.</div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <form onSubmit={onSubmitContact} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm">Name</label>
                      <Input name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="text-sm">Email</label>
                      <Input name="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm">Message</label>
                    <Textarea name="message" placeholder="Tell me about your goals" rows={5} required />
                  </div>
                  <div className="flex justify-end">
                    <Button className="btn-transition rounded-full bg-emerald-600 text-white hover:bg-emerald-700" title="Chat with Ashish" type="submit">
                      {siteContent.contact.cta2}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Ashish Fitness. All rights reserved.</div>
          <a className="hover:text-foreground" href="#hero">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
