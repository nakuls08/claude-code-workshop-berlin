// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const hero = {
  name: "Nakul",
  role: "Engineer",
  location: "Berlin, Germany",
  headline:
    "I build systems that make hard things feel simple. I like the layer where clean design meets code that has to survive real users, real traffic, and real 3 a.m. incidents.",
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm an engineer who's happiest a level or two below the surface — in the APIs, data models, and edge cases that decide whether a product feels solid or flaky. I care about the parts nobody notices when they work and everybody notices when they don't.",
    "I've shipped across the stack: backend services that quietly hold everything up, and the interfaces people actually touch. My rule of thumb is that good engineering is mostly good decisions made early, plus the discipline to delete code that no longer earns its place.",
    "Away from the keyboard I'm usually chasing a good espresso, taking things apart to see how they work, and trading strong opinions about tabs, spaces, and where the semicolons go.",
  ],
};

export const experience = {
  heading: "Experience",
  roles: [
    {
      title: "Senior Software Engineer",
      company: "Fintech Startup",
      period: "2023 — Present",
      summary:
        "Leading backend work on the payments platform. Redesigned a core service to cut p99 latency in half and made deploys boring — which, for infrastructure, is the highest compliment.",
    },
    {
      title: "Software Engineer",
      company: "Scale-up",
      period: "2020 — 2023",
      summary:
        "Built and owned APIs used across the product. Introduced contract testing and cleaner service boundaries that let the team ship faster without stepping on each other.",
    },
    {
      title: "Engineer",
      company: "Freelance & early-stage",
      period: "2017 — 2020",
      summary:
        "Helped a handful of early-stage teams go from prototype to production — picking pragmatic tools, keeping things simple, and shipping before perfect.",
    },
  ],
};

export const projects = {
  heading: "Selected work",
  items: [
    {
      title: "Real-time Payments Engine",
      year: "2024",
      summary:
        "Rebuilt a transaction pipeline to handle bursts of traffic without breaking a sweat. Halved p99 latency and turned a fragile service into one the on-call rotation stopped worrying about.",
      link: { label: "Case study", href: "#" },
    },
    {
      title: "Developer Platform & CLI",
      year: "2022",
      summary:
        "Designed the internal tooling and APIs that other engineers built on every day. Good developer experience is a product too — this one saved the team hours a week.",
      link: { label: "Read the writeup", href: "#" },
    },
    {
      title: "Berlin Transit Side Project",
      year: "2023",
      summary:
        "A weekend project that turned into a small habit for a few thousand people. Built end to end, deployed on a shoestring, and a great excuse to try tools I'd never use at work.",
      link: { label: "View live", href: "#" },
    },
  ],
};

export const skills = {
  heading: "What I work with",
  groups: [
    {
      label: "Languages",
      items: ["TypeScript", "Java", "Go", "Python", "SQL"],
    },
    {
      label: "Backend & Infra",
      items: ["Node.js", "Spring Boot", "PostgreSQL", "Docker", "REST & APIs"],
    },
    {
      label: "Frontend & Tools",
      items: ["React", "Next.js", "Git", "CI/CD"],
    },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [
    {
      text:
        "Nakul is the engineer you want on the hard problems. He goes quiet, disappears into the details, and comes back with something that's both simpler and more correct than what everyone else was arguing about.",
      author: "A former manager",
      role: "Engineering Lead",
    },
    {
      text:
        "He has a knack for making complicated systems feel obvious. Half the time the best code review comment is just 'oh, of course it should work like that.'",
      author: "A teammate",
      role: "Senior Engineer",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Open to interesting engineering problems, collaborations, and the occasional coffee. Berlin or remote.",
  email: "nakul@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/nakuls08" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
    { label: "Twitter / X", href: "https://twitter.com/yourname" },
  ],
};

export const meta = {
  title: "Nakul — Engineer",
  description: "Berlin-based engineer building systems that make hard things feel simple.",
};
