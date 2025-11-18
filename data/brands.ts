export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logoSrc: string;
  externalUrl?: string;
  features: string[];
};

export const brands: Brand[] = [
  {
    slug: "pupilsai",
    name: "PupilsAI",
    tagline: "Adaptive AI platform for UK schools",
    description:
      "Privacy-first classroom AI that supports lesson preparation, differentiation and formative feedback, designed with safeguarding in mind.",
    logoSrc: "/brands/pupilsai.svg",
    features: [
      "Pupil-safe prompts and safeguards",
      "Curriculum-aligned planning templates",
      "Teacher controls, oversight and audit logs",
      "UK/EU data hosting options",
      "SSO with leading MIS/LMS platforms",
      "Accessibility-first UI (WCAG 2.2)",
    ],
  },
  {
    slug: "teachersai",
    name: "TeachersAI",
    tagline: "Planning, marking and safeguarding in one suite",
    description:
      "Consistent, time-saving marking with rubric-based workflows and evidence-backed feedback — reducing workload without compromising professional judgement.",
    logoSrc: "/brands/teachersai.svg",
    features: [
      "Rubric-based marking and moderation",
      "Batch workflows with anonymised marking",
      "Export to MIS/LMS and spreadsheets",
      "Comment banks with tone controls",
      "Subject-specific exemplars",
      "Internal quality assurance and audit trails",
    ],
  },
  {
    slug: "studentsai",
    name: "StudentsAI",
    tagline: "Study companions for learners and families",
    description:
      "A research-aware writing assistant that helps plan, draft and reference responsibly — supporting good academic practice, not shortcuts.",
    logoSrc: "/brands/studentsai.svg",
    features: [
      "Referencing guidance (Harvard, APA, MLA)",
      "Plagiarism-aware suggestions and paraphrase coaching",
      "Revision, structure and clarity modes",
      "Reading lists and note-taking aids",
      "Accessibility features and dyslexia-friendly options",
      "Export to Word, Google Docs and Markdown",
    ],
  },
  {
    slug: "graduatesai",
    name: "GraduatesAI",
    tagline: "Career readiness for university leavers",
    description:
      "AI-powered coaching that helps graduates showcase skills, prepare for interviews and transition smoothly into work or postgraduate study.",
    logoSrc: "/logo.svg",
    features: [
      "Personalised employability plans",
      "Mock interviews with role-specific feedback",
      "Portfolio and CV enhancement tools",
      "Graduate labour market insights",
      "Integration with careers services",
      "Accessibility support for neurodiverse users",
    ],
  },
  {
    slug: "careersai",
    name: "CareersAI",
    tagline: "Workforce development for employers",
    description:
      "A talent intelligence platform that maps skills, pathways and training, giving HR teams privacy-safe analytics without compromising staff trust.",
    logoSrc: "/logo.svg",
    features: [
      "Skills taxonomies aligned to UK frameworks",
      "Internal mobility and progression planning",
      "Privacy-first analytics dashboards",
      "Training recommendations and LMS exports",
      "Diversity and inclusion reporting",
      "API access for HRIS integration",
    ],
  },
  {
    slug: "startupsai",
    name: "StartupsAI",
    tagline: "No-code automation for founders",
    description:
      "Templates, datasets and workflow builders that let start-ups launch AI services quickly while staying compliant and investor ready.",
    logoSrc: "/logo.svg",
    features: [
      "Drag-and-drop workflow designer",
      "Marketplace of vetted UK datasets",
      "Built-in governance and audit trails",
      "Deploy to web, chat and API endpoints",
      "Usage analytics with cost controls",
      "Collaboration workspaces for teams",
    ],
  },
];

export function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
}
