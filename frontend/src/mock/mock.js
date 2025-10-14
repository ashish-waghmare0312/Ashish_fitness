export const siteContent = {
  brand: {
    name: "Ashish Fitness",
    logoText: "ashish fitness",
    phone: "+919920926651",
  },
  hero: {
    headline: "Science-Backed Fitness & Nutrition for Students",
    subheadline: "Stronger. Leaner. Healthier. Real results, no gimmicks.",
    cta: "Start Your Plan",
    ctaHover: "Let's Go!",
    coach: {
      name: "Ashish",
      title: "Student Fitness Coach",
      // Subtle placeholder photo
      photo:
        "https://images.unsplash.com/photo-1571907480495-0b4d1f3f1e7b?q=80&w=400&auto=format&fit=crop",
    },
  },
  about: {
    title: "About Ashish",
    body:
      "Hi, I’m Ashish. I coach students with simple, science-backed workouts and meal plans that fit your busy schedule. No fads. No overcomplicated diets. Just real results.",
  },
  coaching: {
    title: "Coaching",
    cta: "Join Now",
    ctaHover: "Start now",
    packages: [
      {
        name: "Starter Plan – Online 1-on-1",
        details: [
          "Personalized workouts & nutrition",
          "Weekly check-ins",
        ],
      },
      {
        name: "Group Grind – 3-Person Group",
        details: [
          "Plans for students",
          "Weekly progress check-ins",
          "Community motivation",
        ],
      },
      {
        name: "Premium Hybrid – In-Person + Online",
        details: [
          "In-person sessions + video calls",
          "Daily check-ins",
          "Personalized nutrition",
        ],
      },
    ],
  },
  testimonials: {
    title: "Student results",
    items: [
      {
        author: "Ayush (Student)",
        text:
          "In less than a month, from June 19th to July 13th, I dropped 5 kgs! I started at 81 kgs and am now down to 76 kgs. The deficit worked magic, and it's all thanks to Ashish's guidance.”",
      },
      {
        author: "Aryan (Student)",
        text:
          "In just about 10 weeks since May 1st, I've had a massive body recomposition. I started at 68-69 kgs and lost around 4 kgs, but the best part is my strength has increased massively too! Ashish's guidance has been incredible, especially for being so consistent and pushing me, even for free sometimes. This is proof that body recomp done well can make a huge difference. Thanks, boss!”",
      },
      {
        author: "Hemant (Student)",
        text:
          "I started my lean bulking phase at 50 kgs and, in just 2.5 months, I'm up to 52.8 kgs! That's a solid 2.8 kg gain in total, with no excess fat. The results are amazing—I've seen major improvements in strength in the gym, too. The real benefit of Ashish's coaching is the accountability; he pushes me to eat enough and provides strategic advice, like when to increase my calories, which is why I haven't hit a plateau. The guidance has definitely helped!”",
      },
      {
        author: "Shreeya (Working Professional)",
        text:
          "Since starting with Ashish in mid-May, and over the course of about 2.5 to 3 months, I've achieved a significant milestone! Despite being a working professional and having to battle frustrating weight fluctuations, I've successfully dropped 5 kgs in total. I started at 74.5 kgs and am now at 69.5 kgs. Ashish's consistent guidance has been key to overcoming those hurdles and achieving this great result. Big Ws, indeed!”",
      },
      {
        author: "Areeb (Working Professional & Exam Prep)",
        text:
          "I needed a weight loss plan that was realistic and sustainable, especially while juggling work and preparing for an exam. Ashish delivered! In just 2 months, I successfully went from 79 kgs to 75 kgs—a solid 4 kg drop. The best part is that I achieved this without losing any strength. Ashish's approach is truly peak; he proved you can lose weight effectively even during stressful periods.”",
      },
      {
        author: "Nirzar (16-year-old student)",
        text:
          "I upgraded my chest fly to 30 kg and hit 40 kg barbell bench press for 5 reps today. Never thought I’d be lifting like this at 16. The progress has been steady and feels solid every week.”",
      },
      {
        author: "Aditya (Student)",
        text:
          "When I started, I could barely lift properly on incline bench. Now I’m hitting 17.5 kg dumbbells for 6 reps and doing cable flies with 20 kg each side. Never thought I’d reach this level so soon. Three months of consistency — that’s all it took to feel stronger, more confident, and see real progress.”",
      },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "How do check-ins work?",
        a: "Weekly for Starter/Group; daily messages + weekly calls for Premium.",
      },
      { q: "Do I need a gym?", a: "No. I’ll tailor home or gym plans based on your access." },
      {
        q: "Is this only for students?",
        a: "Students first, but professionals are welcome if schedules align.",
      },
      { q: "Refunds?", a: "Pause anytime. 7-day refund window for new clients." },
    ],
  },
  contact: {
    title: "Let’s Get Started",
    body:
      "Message me on WhatsApp or fill the form below. I’ll get back to you fast.",
    cta1: "WhatsApp Me",
    cta2: "Send Message",
  },
};

export function getWhatsAppLink(message = "Hi Ashish, I'd like to start my plan.") {
  const phone = siteContent.brand.phone.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}
