import Hero from "@/components/hero";
import CTASection from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />

      <section className="container-wide grid grid-cols-1 gap-6 md:grid-cols-3">
        {[{title: "Education", text: "Pioneering AI for primary, secondary and higher education."},
          {title: "Business", text: "Automation and analytics that respect privacy and compliance."},
          {title: "Innovation", text: "Research and datasets advancing responsible AI."}].map(({title, text}) => (
          <Card key={title} className="card-hover">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <CTASection />
    </div>
  );
}
