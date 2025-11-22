import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-16 lg:gap-20 rounded-3xl bg-card/60 p-8 shadow-soft md:grid-cols-2 md:p-12">
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-5xl leading-tight tracking-tight text-brand dark:text-white">
          <span className="font-semibold">AI</span>
          <span className="font-normal"> is in our </span>
          <span className="font-semibold">DNA</span>
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400">
          McCaigs AI is the umbrella brand for our ventures across education,
          business automation and research — building privacy-first systems that
          respect user data and deliver real impact.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-brand hover:bg-[#124E75] text-white font-medium px-6 py-3 rounded-2xl shadow-md transition-all duration-300">
            <Link href="/what-we-do">Discover More</Link>
          </Button>
          <Button asChild variant="outline" className="border-2 border-brand text-brand hover:bg-brand hover:text-white font-medium px-6 py-3 rounded-2xl transition-all duration-300">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-slate-900/10 blur-2xl" />
        {/* Light mode DNA image */}
        <Image
          src="/assets/hero-dna-binary-light.png"
          alt="Digital DNA representation light mode"
          width={600}
          height={400}
          className="block dark:hidden rounded-2xl shadow-lg object-cover brightness-105 transition-all duration-700 hover:scale-[1.02] drop-shadow-[0_4px_8px_rgba(21,96,143,0.25)] opacity-100"
          priority
        />
        {/* Dark mode DNA image */}
        <Image
          src="/assets/hero-dna-binary.png"
          alt="Digital DNA representation dark mode"
          width={600}
          height={400}
          className="hidden dark:block rounded-2xl shadow-lg object-cover brightness-110 transition-all duration-700 hover:scale-[1.02] opacity-100"
          priority
        />
      </div>
    </section>
  );
}
