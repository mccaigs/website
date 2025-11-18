import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="mt-16 rounded-3xl bg-[#0f172a] p-10 text-white shadow-lg md:p-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to build responsibly with AI?</h2>
          <p className="mt-2 text-slate-300">Let’s discuss partnerships, press or collaboration opportunities.</p>
        </div>
        <Button asChild className="rounded-2xl bg-white text-slate-900 hover:bg-white/90">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}
