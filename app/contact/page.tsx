"use client";

import { MapPin, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-soft">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-slate-900/20 blur-3xl" />

      <div className="relative grid gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1 text-sm font-medium text-blue-900 dark:text-blue-200">
            <Sparkles className="h-4 w-4" />
            Let’s build something responsible together
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Start the conversation
          </h1>
          <p className="text-base text-muted-foreground">
            McCaigs AI supports organisations across education, civic services and high-growth sectors with privacy-first platforms, datasets and no-code automations. Share a few details and we’ll respond within two working days.
          </p>

          <div className="space-y-4 rounded-2xl border border-border/70 bg-muted/40 p-6 text-left">
            <div className="flex items-start gap-3">
              <span className="mt-1 rounded-full bg-blue-600/15 p-2 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Based in Edinburgh, Scotland</p>
                <p className="text-sm text-muted-foreground">Serving clients across the UK and internationally.</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-border/60 bg-background/80 p-6 backdrop-blur"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement & { name: { value: string }; email: { value: string }; message: { value: string } };
            const subject = encodeURIComponent(`Website enquiry from ${form.name.value}`);
            const body = encodeURIComponent(form.message.value + "\n\n" + form.email.value);
            window.location.href = `mailto:info@mccaigs.ai?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" name="email" type="email" placeholder="you@organisation.co.uk" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your project, service needs or partnership idea." required rows={6} />
          </div>
          <Button type="submit" className="w-full rounded-2xl bg-brand text-base font-semibold hover:bg-[#124E75]">
            Send message
          </Button>
          <p className="text-xs text-muted-foreground">
            We only use your details to respond to this enquiry and will never share them with third parties.
          </p>
        </form>
      </div>
    </section>
  );
}
