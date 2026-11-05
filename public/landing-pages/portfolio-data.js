/* =====================================================================
   PORTFOLIO DATA — edit THIS file to change the text on your portfolio.
   You don't need to touch kage.html.

   ➕ Add a new project: copy one { ... } block inside `projects`,
      paste it at the end of the list, and change the text.
      The numbering ("04 / 04"), the stats and the footer update by themselves.

   🔗 liveUrl: put the LIVE website link here (e.g. https://xxx.vercel.app).
      Leave it as "" if the project isn't live yet — the card will show
      "Live demo coming soon" and won't be clickable.
      Do NOT put GitHub links here.
   ===================================================================== */
window.PORTFOLIO = {

  /* ------------------------------------------------------------ you */
  name: "Franshin Mizar Husain",
  shortName: "Franshin",
  role: "Frontend Developer",
  /* the giant 3D letters across the hero (short words look best, 4–6 letters) */
  heroWord: "MIZAR",

  /* ------------------------------------------------------------ hero */
  heroEyebrow: "Hello there — I'm Franshin",
  heroLines: ["Building bright,", "friendly web", "experiences."],
  heroSub:
    "I'm a career-switcher turned Frontend Developer who loves turning ideas into fast, " +
    "delightful interfaces — powered by React, Next.js & TypeScript, and sharpened with AI-assisted workflows.",

  /* the four small boxes at the bottom of the hero */
  highlights: [
    { title: "Fresh Perspective", text: "A career switcher who brings real-world thinking to every line of code." },
    { title: "Real Projects",     text: "From a beach club to a pet shop and a finance API — built end to end." },
    { title: "AI-Assisted Speed", text: "I pair modern tooling with AI to learn fast and ship clean work." },
    { title: "Ready to Join",     text: "Open to frontend roles — let's build something great together." }
  ],

  /* ------------------------------------------------------------ about */
  aboutTitle: "From career switcher to frontend builder.",
  aboutLead:
    "My path into tech didn't start in a classroom — it started with curiosity. I made a bold switch " +
    "into software engineering, and every day since has been about learning, building, and getting " +
    "a little bit better than yesterday.",
  aboutBody:
    "Through RevoU I've built real, working products: responsive UIs, booking flows, admin dashboards " +
    "and REST APIs. I work AI-assisted — using AI as a smart pair-programmer to explore ideas, debug " +
    "faster and understand the 'why' behind the code — while keeping quality, security and the user " +
    "experience front and centre. I'm eager, coachable, and ready to grow with a great team.",
  aboutLink: "See my projects",

  /* the four numbers under the About text ("auto" counts your projects / skills for you) */
  stats: [
    { value: "auto-projects", label: "Projects built" },
    { value: "auto-skills",   label: "Core skills" },
    { value: "100%",          label: "Hands-on" },
    { value: "∞",             label: "Curiosity" }
  ],

  /* ------------------------------------------------------------ projects */
  projectsHead: "Featured Projects",
  projects: [
    {
      title: "Saluna Beach Club",
      jp: "参道",                         /* decorative Japanese text — keep or change */
      type: "Full-stack website",
      description:
        "A beach club website with online reservations, a digital menu, customer accounts " +
        "and a secure admin dashboard.",
      tech: "Next.js · NestJS · TypeScript",
      liveUrl: "https://saluna-beach-club.vercel.app"
    },
    {
      title: "Pawpaya Petshop",
      jp: "灯籠",
      type: "Pet shop website",
      description:
        "A cheerful online pet shop experience for browsing products and services for furry friends.",
      tech: "React · TypeScript",
      liveUrl: ""
    },
    {
      title: "Fintrack API",
      jp: "朱月",
      type: "REST API",
      description:
        "A backend API for tracking personal finances — income, expenses and balances, kept tidy and secure.",
      tech: "NestJS · TypeScript",
      liveUrl: ""
    }
    /* ➕ new project? add a comma after the } above and paste a new block here */
  ],

  /* ------------------------------------------------------------ skills */
  skillsHead: "Skills & Tools",
  skillsTitle: "Five tools. One goal. Delightful products.",
  skillsIntro:
    "These are the tools I reach for every day — from crafting pixel-perfect interfaces " +
    "to wiring them up to solid, typed backends.",
  skills: [
    { name: "React",      jp: "山門", tag: "UI Library",
      text: "Building reusable, interactive components that keep interfaces clean and easy to grow." },
    { name: "Next.js",    jp: "借景", tag: "Framework",
      text: "Shipping fast, SEO-friendly apps with routing, server rendering and smooth deploys." },
    { name: "TypeScript", jp: "焼杉", tag: "Language",
      text: "Writing safer, self-documenting code that catches bugs before users ever see them." },
    { name: "JavaScript", jp: "灯籠", tag: "Language",
      text: "The foundation of everything I build — from DOM magic to modern async logic." },
    { name: "NestJS",     jp: "朱月", tag: "Backend",
      text: "Structuring reliable REST APIs so my frontends always have solid data to stand on." }
  ],

  /* ------------------------------------------------------------ contact */
  contactHead: "Let's Talk",
  contactTitle: "Let's build something together.",
  contactText:
    "I'm currently open to Frontend Developer opportunities. Whether you have a role, a project " +
    "or just want to say hi — my inbox is always open!",
  email: "mizarhusein@gmail.com",
  linkedin: "https://www.linkedin.com/in/franshin-mizar-h-aa4b73119",

  /* ------------------------------------------------------------ footer */
  footerBlurb:
    "Frontend Developer crafting cheerful, user-friendly web experiences with React, Next.js and TypeScript.",
  footerTagline: "Built with React · Three.js · lots of curiosity"
};
