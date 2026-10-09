
export type Palette = { from: string; via: string; to: string; accent: string };

const jade: Palette = { from: '#02120b', via: '#064228', to: '#03140c', accent: '#10b981' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const amber: Palette = { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' };
const crimson: Palette = { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' };
const violet: Palette = { from: '#13051a', via: '#511075', to: '#0e0414', accent: '#a742f5' };

export const profile = {
  fullName: 'Pruthvi Joshi',
  displayName: 'Pruthvi Joshi',
  firstName: 'PRUTHVI',
  seriesTag: 'THE SERIES',
  originalLabel: 'A JOSHI ORIGINAL',
  role: 'AI & Full-Stack Developer',
  tagline: ['AI / ML', 'Python', 'Full-Stack'],
  intro: 'A results-driven AI Platform Engineer and Full Stack Developer with experience building intelligent, scalable systems across AI, LLMs, Computer Vision, Automation, IoT, and Web Development.',
  location: 'Ahmedabad, Gujarat',
  email: 'pruthvijsh09@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/pruthvi-joshi-737b76204/',
    github: 'https://github.com/joshibhai13',
  },
  resumePdf: '/portfolio/assets/Pruthvi_Joshi_Resume.pdf',
  portrait: {
    src: '/portfolio/assets/portrait-720.webp',
    srcSet: '/portfolio/assets/portrait-420.webp 420w, /portfolio/assets/portrait-720.webp 720w, /portfolio/assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Pruthvi Joshi',
  },
  interests: ['System Design', 'Machine Learning', 'Computer Vision'],
};

export const education = [
  {
    school: 'AD Patel Institute of Technology',
    place: 'Gujarat',
    degree: 'Bachelor of Technology — Computer Science & Design',
    period: '2023 — 2026',
    score: '',
  },
  {
    school: 'Sir Bhavsinhji Polytechnic Institute',
    place: 'Gujarat',
    degree: 'Diploma — Information Technology',
    period: '2020 — 2023',
    score: '',
  },
];

export const experience = [
  {
    company: 'Foiwe Info Global Solutions',
    role: 'System Analyst — AI & Automation',
    place: 'Bengaluru, Karnataka',
    period: 'Feb 2026 – Present',
    points: [
      'Architect and implement AI-driven automation pipelines using LLMs, prompt engineering, and agent orchestration frameworks to accelerate analytical workflows by 40%.',
      'Design end-to-end system architectures translating complex stakeholder requirements into functional specifications, reducing delivery timelines significantly.',
      'Lead gap analysis and root cause analysis initiatives, optimizing cross-functional processes and improving operational efficiency.',
    ],
  },
  {
    company: 'Bhumitat Technologies',
    role: 'Software Developer — AI, Blockchain & Full Stack',
    place: 'Gujarat',
    period: 'Feb 2022 – Aug 2024',
    points: [
      'Developed and tested scalable web interfaces for enterprise applications; handled backend API integration and cross-functional bug resolution.',
      'Built automated test suites using Selenium WebDriver and PyTest, improving test coverage and release stability.',
      'Developed an AI-powered Voice Assistant System using Python and Artificial Intelligence technologies.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-assistant',
    title: 'Self-Building AI Assistant',
    year: '2025',
    genre: 'AI • NLP • Python',
    logline: 'An AI-powered Voice Assistant with self-extensible architecture.',
    stack: ['Python', 'NLP', 'LLM', 'PyQt5'],
    build: [
      'Developed an AI-powered Voice Assistant using Python, integrating NLP, Large Language Models (LLMs), Speech Recognition, and Neural Text-to-Speech for intelligent voice-based interactions.',
      'Built a modern PyQt5-based desktop application with real-time web search, contextual response generation, and a user-friendly graphical interface.',
    ],
    features: [
      'Voice Assistant with STT/TTS',
      'Real-time web search',
      'Self-extensible architecture',
      'Computer vision functionalities',
    ],
    metrics: [
      { value: 'Real-time', label: 'Processing' },
      { value: 'Self', label: 'Extensible' },
    ],
    github: 'https://github.com/joshibhai13',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'gavedu',
    title: 'Gavedu Platform UI',
    year: '2024',
    genre: 'UI/UX • EdTech • Blockchain',
    logline: 'Blockchain-Powered Connectivity and EdTech platform.',
    stack: ['Figma', 'React', 'Blockchain', 'UI/UX'],
    build: [
      'Led design overhaul of course discovery and enrollment flow, increasing course completion rates by 32% and reducing cart abandonment by 18%.',
      'Developed responsive web interfaces using React and modern CSS frameworks, ensuring cross-device compatibility and accessibility standards.',
    ],
    features: [
      'High-fidelity prototypes',
      'Scalable design system',
      'Responsive web interfaces',
      'Blockchain integration',
    ],
    metrics: [
      { value: '10,000+', label: 'monthly active users' },
      { value: '32%', label: 'increase in completion' },
      { value: '18%', label: 'cart abandonment drop' },
    ],
    github: 'https://github.com/joshibhai13',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'parking-system',
    title: 'Parking Management System',
    year: '2023',
    genre: 'MERN • Full-Stack',
    logline: 'Full-stack real-time parking management with role-based access and live slot tracking.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    build: [
      'Built a full-stack real-time parking management application with role-based access, live slot tracking, JWT authentication, and REST API integration.',
      'Implemented design systems with reusable UI components and documentation, reducing design-to-code time by 30%.',
    ],
    features: [
      'Real-time slot tracking',
      'Role-based access',
      'JWT Authentication',
      'Reusable UI components',
    ],
    metrics: [
      { value: 'Real-time', label: 'Slot tracking' },
      { value: '30%', label: 'faster design-to-code' },
    ],
    palette: violet,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ai-automation',
    title: 'AI Platform Design',
    org: 'Foiwe Info Global Solutions',
    detail: 'Designed comprehensive design system with 80+ components, reducing design inconsistencies by 70%.',
    laurel: 'UI/UX Design',
  },
  {
    id: 'bci-research',
    title: 'Research Interests',
    org: 'BCI / Neurotech',
    detail: 'Neurotechnology & Brain-Computer Interfaces (BCI) — EEG Signal Processing & Transcription.',
    laurel: 'Research',
  }
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Micro1', name: 'Micro1 Certified QA Automation Tester', link: '#' },
  { issuer: 'Microsoft', name: 'Microsoft Azure Certified Data Engineer', link: '#' },
  { issuer: 'Google', name: 'Google Cybersecurity Certificate', link: '#' },
  { issuer: 'Google', name: 'Google UX Design Certificate', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core Programming',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'C/C++', mono: 'C+' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    subtitle: 'Intelligence & Models',
    skills: [
      { name: 'LLMs', mono: 'Ll' },
      { name: 'RAG', mono: 'Ra' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Computer Vision', mono: 'Cv' },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full Stack',
    subtitle: 'Web Development',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express', mono: 'Ex' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'uiux',
    title: 'UI / UX Design',
    subtitle: 'Design Systems',
    skills: [
      { name: 'User Research', mono: 'Ur' },
      { name: 'Wireframing', mono: 'Wi' },
      { name: 'Prototyping', mono: 'Pr' },
      { name: 'Figma', mono: 'Fg' },
      { name: 'Design Systems', mono: 'Ds' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Python': ['Self-Building AI Assistant', 'Home Automation & Drone Nav'],
  'React': ['Gavedu Platform', 'Parking Management System'],
  'Figma': ['Gavedu Platform UI', 'AI-Driven Automation Platform UI'],
  'LLMs': ['System Analyst at Foiwe', 'Self-Building AI Assistant'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2020 — 2023',
    synopsis: 'Diploma in Information Technology at Sir Bhavsinhji Polytechnic Institute.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description: 'Diploma in Information Technology.',
        tags: ['IT', 'Diploma'],
        runtime: '2020 — 2023',
        palette: ocean,
      }
    ],
  },
  {
    number: 2,
    title: 'Entering Tech',
    period: '2023 — Present',
    synopsis: 'B.Tech in Computer Science & Design at AD Patel Institute of Technology.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science & Design.',
        tags: ['B.Tech', 'CS & Design'],
        runtime: 'Oct 2023 — Present',
        palette: violet,
      }
    ],
  },
  {
    number: 3,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Three Originals — an AI platform, a UI/UX platform and a management system.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The AI Builder',
        description: 'Self-Building AI Assistant — Voice interactions and self-extensibility.',
        tags: ['Python', 'NLP', 'LLM'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Architect',
        description: 'Gavedu Platform UI and Parking Management System.',
        tags: ['React', 'MongoDB', 'UI/UX'],
        runtime: '2024',
        palette: amber,
      }
    ],
  }
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'Listed as primary on the resume', palette: amber },
  { label: 'The AI Original', title: 'AI Assistant', detail: 'Self-extensible architecture', palette: crimson },
  { label: 'UI/UX Design', title: 'Gavedu', detail: '10,000+ active users', palette: ocean },
  { label: 'Full Stack', title: 'Parking System', detail: 'Real-time slot tracking', palette: violet },
  { label: 'Current focus', title: 'System Analyst', detail: 'AI & Automation at Foiwe', palette: jade }
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech CS & Design',
    lines: ['AD Patel Institute of Technology, Gujarat', '2023 — Present'],
    chips: [''],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['AI, ML, LLMs, Computer Vision', 'React, Node.js, Express, UI/UX Design'],
    chips: ['Python', 'React', 'Figma', 'Node.js', 'LLMs', 'UI/UX'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['AI Assistant — Self-extensible architecture', 'Gavedu — Blockchain & UI/UX', 'Parking System — MERN Stack'],
  },
  {
    kicker: 'Certified',
    title: 'Certifications',
    lines: ['Microsoft Azure • Google Cybersecurity • Google UX • Micro1 QA'],
  }
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Pruthvi',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
