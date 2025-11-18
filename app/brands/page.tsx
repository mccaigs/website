import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Building2, Cpu, LineChart, Cloud } from "lucide-react";

const sectors = [
  {
    title: "AI for Education & Learning",
    body:
      "We invest heavily in next-generation EdTech: adaptive learning platforms, curriculum-aligned assistants, and tools that support teachers, pupils and professional training. Our work prioritises safety, accessibility and impact across schools, colleges and lifelong learning.",
    icon: GraduationCap,
  },
  {
    title: "Productivity & Workplace Efficiency",
    body:
      "We build secure SaaS tools that streamline workflows, automate routine tasks, and support research and operational decision-making. Our products help teams save time, reduce complexity and increase clarity across every industry.",
    icon: Briefcase,
  },
  {
    title: "Professional & Civic Services",
    body:
      "We design responsible AI systems for public services, regulated industries and professional environments. These platforms prioritise transparency, policy alignment and trust, enabling safe, compliant AI adoption at scale.",
    icon: Building2,
  },
  {
    title: "On-Device AI & Edge Computing",
    body:
      "A key area of our R&D is dedicated to small, fast, high-performance AI models that run directly on consumer devices. This work enables privacy-first, offline intelligence for mobile apps, embedded systems and secure environments.",
    icon: Cpu,
  },
  {
    title: "FinTech & Financial Intelligence",
    body:
      "We develop tools that support finance teams, founders and investors through modern data pipelines and tailored AI models. Our solutions deliver forecasting, automation and insights while meeting regulatory expectations.",
    icon: LineChart,
  },
  {
    title: "SaaS & Cloud Platforms",
    body:
      "All our brands are powered by scalable cloud infrastructure designed for reliability, governance and enterprise-grade performance. This foundation ensures each product remains secure, fast and adaptable as customer needs evolve.",
    icon: Cloud,
  },
];

export default function BrandsPage() {
  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Brands</h1>
        <p className="mt-3 text-muted-foreground">
          A family of privacy-first platforms, datasets and SaaS products spanning education, productivity, civic services and research. As our R&D evolves, each brand is shaped around real-world needs, responsible AI principles and high-performance engineering across multiple sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map(({ title, body, icon: Icon }) => (
          <Card key={title} className="card-hover h-full">
            <CardHeader className="flex items-start gap-4 pb-4">
              <span className="rounded-2xl bg-muted p-3 text-foreground shadow">
                <Icon className="h-6 w-6" />
              </span>
              <div className="space-y-1 text-left">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{body}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-2 rounded-xl bg-gradient-to-r from-blue-600/30 to-slate-900/20" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-2xl border bg-card p-6 text-center text-muted-foreground">
        Growing soon: additional sector datasets, civic platforms and partner-led no-code solutions.
      </div>
    </div>
  );
}
