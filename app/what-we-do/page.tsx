import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, FlaskConical } from "lucide-react";

const sections = [
  {
    title: "Sector AI Platforms",
    summary: "Tailored learning, civic, and enterprise platforms that embed responsible AI across classrooms, public services, and industry.",
    details: [
      "Our sector-focused tools are designed to meet strict governance, accessibility, and security requirements, allowing organisations to deploy AI safely and transparently. These solutions combine curriculum-aligned assistance, domain-specific datasets, policy-aware models, and robust administrative oversight — ensuring that AI augments human expertise rather than replacing it.",
      "We continue to expand our portfolio of platforms that empower education, health, public sector, and enterprise teams to operate more efficiently while maintaining compliance and trust.",
    ],
    icon: GraduationCap,
  },
  {
    title: "Productivity & Insights",
    summary: "Secure SaaS and automation suites that streamline operations, finance, and research without compromising on compliance.",
    details: [
      "We develop cloud-native applications that help teams accelerate decision-making, automate routine work, extract insights from complex data, and deploy AI workflows safely at scale. These products are built on modern, dependable infrastructure with an emphasis on transparency, auditability, and operational resilience.",
      "Whether improving internal reporting, reducing administrative overhead, or enabling AI-assisted research, our tools are designed to enhance productivity while maintaining the highest standards of security and governance.",
    ],
    icon: Briefcase,
  },
  {
    title: "Data & No-Code",
    summary: "Curated British datasets and no-code tools that let teams build, experiment, and deploy AI workflows in days, not months.",
    details: [
      "Our dataset practice focuses on ethically sourced, UK-aligned, high-quality corpora that underpin safer, more representative AI systems. Paired with our no-code builder tools, researchers, analysts, and product teams can rapidly prototype, evaluate, and deploy AI solutions without writing a single line of code.",
      "We also invest in next-generation dataset compression and model-distillation techniques, allowing powerful AI systems to run on consumer-grade devices while preserving privacy and reducing costs.",
    ],
    icon: FlaskConical,
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="space-y-12">
      <div className="mx-auto max-w-3xl space-y-4 text-left">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">What We Do</h1>
        <p className="text-muted-foreground">
          We design privacy-first platforms, curated datasets, and cloud services that help organisations adopt AI with confidence — from regulated sectors to fast-moving start-ups.
        </p>
        <p className="text-muted-foreground">
          Alongside delivering world-class products, we invest heavily in research and development. Around 50% of our time is dedicated to advancing compact AI systems, optimising model efficiency, and pushing the limits of on-device intelligence. This dual focus allows us to build smaller, faster, and more capable models while creating practical tools for consumers, businesses and public institutions.
        </p>
        <p className="text-muted-foreground">
          Our work spans cloud-based AI services, enterprise-grade automation, and offline AI applications that bring intelligent computing directly to the edge.
        </p>
      </div>

      <div className="space-y-6">
        {sections.map(({ title, summary, details, icon: Icon }) => (
          <Card key={title} className="card-hover w-full">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-muted p-2 text-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle>{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>{summary}</p>
              {details.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mx-auto max-w-3xl space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-foreground">Our R&amp;D Mission</h2>
        <p className="text-muted-foreground">
          Innovation is at the core of everything we deliver. Half of our time is committed to:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Developing compact, efficient AI models that run locally on phones, tablets, laptops and embedded devices.</li>
          <li>Reducing model size while improving accuracy, latency, safety and robustness.</li>
          <li>Exploring new architectures for edge-first, privacy-preserving AI.</li>
          <li>Building consumer and business products that bring real value to everyday workflows.</li>
          <li>Advancing dataset curation and model evaluation for safer and more representative artificial intelligence.</li>
          <li>Designing tools that allow organisations to adopt AI responsibly, even in highly regulated industries.</li>
        </ul>
        <p className="text-muted-foreground">
          This ongoing research fuels the products and platforms we release — ensuring they remain modern, resilient, and aligned with responsible AI principles.
        </p>
      </section>
    </div>
  );
}
