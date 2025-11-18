import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrandBySlug } from "@/data/brands";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/cta-section";
import { Check } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return {};
  return {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    openGraph: {
      title: `${brand.name} — ${brand.tagline}`,
      description: brand.description,
      images: [brand.logoSrc],
    },
  };
}

export default function BrandDetailPage({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug);
  if (!brand) return notFound();

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border bg-card p-8 shadow-soft md:p-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-muted p-3 shadow">
              <Image src={brand.logoSrc} alt={`${brand.name} logo`} width={56} height={56} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{brand.name}</h1>
              <p className="text-muted-foreground">{brand.tagline}</p>
            </div>
          </div>
          <div className="flex gap-3">
            {brand.externalUrl ? (
              <Button asChild className="rounded-2xl">
                <a href={brand.externalUrl} target="_blank" rel="noopener noreferrer">Visit site</a>
              </Button>
            ) : null}
            <Button asChild variant="outline" className="rounded-2xl">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{brand.description}</p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Key features</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {brand.features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 rounded-2xl border bg-card p-4">
              <Check className="mt-0.5 h-5 w-5 text-blue-600" />
              <span className="text-foreground/90">{feat}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </div>
  );
}
