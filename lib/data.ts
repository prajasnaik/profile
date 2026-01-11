// =============================================================================
// SITE CONFIGURATION
// Edit this file to update your website content without touching component code
// =============================================================================

export const siteConfig = {
  name: "Prajas Naik",
  title: "Prajas Naik",
  description: "Personal website and portfolio",
  url: "https://prajas.dev",

  // Route-specific branding
  portfolio: {
    name: "Prajas Naik",
    tagline: "Full-Stack Developer",
  },
  newspaper: {
    name: "The Daily Developer",
    tagline: "Est. 2024",
  },
  terminal: {
    prompt: "prajas.dev",
    hostname: "prajas@portfolio",
    version: "1.0.0",
  },
};

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================

export const personalInfo = {
  name: "Prajas Naik",
  title: "Full-Stack Developer",
  location: "San Francisco, CA",
  email: "hello@prajas.dev",
  tagline:
    "Full-stack developer crafting elegant solutions to complex problems. Currently building the future, one commit at a time.",

  about: {
    short:
      "I'm a passionate developer who loves building elegant solutions to complex problems.",
    long: "With over 5 years of experience in software development, I specialize in building scalable web applications and developer tools. I'm passionate about clean code, great user experiences, and continuous learning.",
    focus: [
      "React & Next.js applications",
      "System design & architecture",
      "Developer experience & tooling",
    ],
  },
};

// =============================================================================
// SKILLS & TECHNOLOGIES
// =============================================================================

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Go", "Rust"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"],
  devops: ["Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions"],
  tools: ["Git", "VS Code", "Figma", "Linear", "Notion"],
};

// Categorized for display
export const skillCategories = [
  {
    name: "Languages",
    skills: skills.languages,
  },
  {
    name: "Frontend",
    skills: skills.frontend,
  },
  {
    name: "Backend",
    skills: skills.backend,
  },
  {
    name: "DevOps",
    skills: skills.devops,
  },
  {
    name: "Tools",
    skills: skills.tools,
  },
];

// =============================================================================
// WORK EXPERIENCE
// =============================================================================

export const workExperience = [
  {
    id: 1,
    company: "Tech Startup Inc.",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading development of core platform features, mentoring junior developers, and driving technical architecture decisions.",
    highlights: [
      "Led migration from monolith to microservices architecture",
      "Reduced API response times by 40% through optimization",
      "Mentored team of 4 junior developers",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    company: "Digital Agency Co.",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    location: "Remote",
    description:
      "Built custom web applications for enterprise clients across various industries.",
    highlights: [
      "Delivered 15+ client projects on time and budget",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Built reusable component library used across all projects",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    id: 3,
    company: "Freelance",
    role: "Web Developer",
    period: "2018 - 2020",
    location: "Remote",
    description:
      "Provided web development services to small businesses and startups.",
    highlights: [
      "Built 20+ websites for local businesses",
      "Developed e-commerce solutions generating $500k+ in sales",
      "Maintained 100% client satisfaction rate",
    ],
    technologies: ["JavaScript", "React", "WordPress", "Shopify"],
  },
];

// =============================================================================
// PROJECTS
// =============================================================================

export const projects = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A full-stack SaaS application with 10k+ users",
    longDescription:
      "Enterprise-grade SaaS platform featuring real-time collaboration, advanced analytics, and seamless integrations.",
    stack: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    link: "https://github.com/prajas/project-alpha",
    demo: "https://project-alpha.demo",
    featured: true,
  },
  {
    id: 2,
    name: "Open Source CLI Tool",
    description: "Developer productivity tool with 500+ stars",
    longDescription:
      "Command-line tool that automates common development workflows and boilerplate generation.",
    stack: ["Go", "Cobra", "GitHub API"],
    link: "https://github.com/prajas/cli-tool",
    featured: true,
  },
  {
    id: 3,
    name: "Real-time Dashboard",
    description: "Analytics platform with live data visualization",
    longDescription:
      "Real-time analytics dashboard with WebSocket-powered updates and interactive D3.js charts.",
    stack: ["React", "WebSockets", "D3.js", "Node.js"],
    link: "https://github.com/prajas/dashboard",
    demo: "https://dashboard.demo",
    featured: true,
  },
  {
    id: 4,
    name: "E-commerce Platform",
    description: "Modern shopping experience with headless CMS",
    longDescription:
      "Headless e-commerce solution with blazing-fast performance and seamless checkout flow.",
    stack: ["Next.js", "Sanity", "Stripe", "Tailwind"],
    link: "https://github.com/prajas/ecommerce",
    featured: false,
  },
];

// =============================================================================
// SOCIAL LINKS
// =============================================================================

export const socialLinks = {
  email: "hello@prajas.dev",
  github: "https://github.com/prajas",
  linkedin: "https://linkedin.com/in/prajas",
  twitter: "https://twitter.com/prajas_dev",
  blog: "https://blog.prajas.dev",
};

// For display with labels
export const socialLinksArray = [
  { name: "Email", url: "mailto:hello@prajas.dev", handle: "hello@prajas.dev" },
  { name: "GitHub", url: "https://github.com/prajas", handle: "prajas" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/prajas",
    handle: "in/prajas",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/prajas_dev",
    handle: "@prajas_dev",
  },
];

// =============================================================================
// ARTICLES (for Newspaper mode)
// =============================================================================

export const articles = [
  {
    id: 1,
    title: "Building Scalable Applications with Modern Architecture",
    description:
      "An in-depth exploration of how I approach full-stack development, from system design to deployment. Learn about the patterns and practices that enable applications to grow with your business.",
    category: "Featured",
    date: "Today",
    slug: "scalable-applications",
    featured: true,
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    description:
      "Why readability matters more than cleverness in production codebases.",
    category: "Philosophy",
    date: "This Week",
    slug: "clean-code",
    featured: false,
  },
  {
    id: 3,
    title: "From Idea to Production",
    description:
      "A case study of shipping a product from concept to users in 30 days.",
    category: "Case Study",
    date: "Recent",
    slug: "idea-to-production",
    featured: false,
  },
  {
    id: 4,
    title: "Tech Stack Decisions",
    description: "How I choose the right tools for each project.",
    category: "Engineering",
    date: "Archive",
    slug: "tech-stack",
    featured: false,
  },
  {
    id: 5,
    title: "Open Source Contributions",
    description: "My journey in giving back to the community.",
    category: "Community",
    date: "Archive",
    slug: "open-source",
    featured: false,
  },
];

// =============================================================================
// NAVIGATION
// =============================================================================

export const navigation = {
  // Main page routes
  pages: [
    { name: "Portfolio", href: "/", id: "portfolio" },
    { name: "Newspaper", href: "/newspaper", id: "newspaper" },
    { name: "Terminal", href: "/terminal", id: "terminal" },
  ],

  // Portfolio page sections (for scroll navigation)
  portfolioSections: ["Skills", "Experience", "Projects", "Contact"],
};

// =============================================================================
// TERMINAL COMMANDS (generated from data above)
// =============================================================================

export function generateTerminalCommands() {
  return {
    help: [
      "Available commands:",
      "",
      "  about       - Learn more about me",
      "  skills      - View my technical skills",
      "  experience  - See my work history",
      "  projects    - See my featured projects",
      "  contact     - Get in touch",
      "  social      - Social media links",
      "  clear       - Clear the terminal",
      "",
      "Tip: Click on a command to execute it",
    ],
    about: [
      "┌─────────────────────────────────────────────────┐",
      `│  ${personalInfo.name.toUpperCase().padEnd(46)}│`,
      `│  ${personalInfo.title.padEnd(46)}│`,
      "├─────────────────────────────────────────────────┤",
      "│                                                 │",
      ...wrapText(personalInfo.about.short, 47).map(
        (line) => `│  ${line.padEnd(46)}│`
      ),
      "│                                                 │",
      "│  Currently focused on:                          │",
      ...personalInfo.about.focus.map((f) => `│  → ${f.padEnd(44)}│`),
      "│                                                 │",
      "└─────────────────────────────────────────────────┘",
    ],
    skills: [
      "// Technical Proficiencies",
      "",
      `Languages    → ${skills.languages.join(", ")}`,
      `Frontend     → ${skills.frontend.join(", ")}`,
      `Backend      → ${skills.backend.join(", ")}`,
      `DevOps       → ${skills.devops.join(", ")}`,
      `Tools        → ${skills.tools.join(", ")}`,
      "",
      '> Run "projects" to see these skills in action',
    ],
    experience: [
      "// Work Experience",
      "",
      ...workExperience.flatMap((exp) => [
        `◆ ${exp.role} @ ${exp.company}`,
        `  ${exp.period} | ${exp.location}`,
        `  ${exp.description}`,
        "",
      ]),
    ],
    projects: [
      "Featured Projects:",
      "",
      ...projects
        .filter((p) => p.featured)
        .flatMap((p) => [
          `◆ ${p.name}`,
          `  ${p.description}`,
          `  Stack: ${p.stack.join(", ")}`,
          "",
        ]),
      `> View more on GitHub: ${socialLinks.github}`,
    ],
    contact: [
      "Let's connect!",
      "",
      `Email    → ${socialLinks.email}`,
      `GitHub   → ${socialLinks.github}`,
      `LinkedIn → ${socialLinks.linkedin}`,
      `Twitter  → ${socialLinks.twitter}`,
      "",
      "> Always open to interesting opportunities!",
    ],
    social: [
      "Social Links:",
      "",
      ...socialLinksArray.map((s) => `  ${s.name.padEnd(10)} → ${s.handle}`),
    ],
  };
}

// Helper function for text wrapping
function wrapText(text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    if ((currentLine + " " + word).trim().length <= maxWidth) {
      currentLine = (currentLine + " " + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  return lines;
}
