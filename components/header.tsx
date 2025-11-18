"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/brands", label: "Brands" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-8 md:px-12 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center transition-colors duration-300">
          {/* Light mode logo */}
          <Image 
            src="/assets/logo-light.svg" 
            alt="McCaigs AI logo light mode" 
            width={190} 
            height={40} 
            className="block dark:hidden scale-105 hover:scale-110 transition-transform duration-300"
            priority
          />
          {/* Dark mode logo */}
          <Image 
            src="/assets/logo-dark.svg" 
            alt="McCaigs AI logo dark mode" 
            width={190} 
            height={40} 
            className="hidden dark:block scale-105 hover:scale-110 transition-transform duration-300"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex font-poppins">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 pb-1 pt-2 text-sm md:text-[15px] font-medium transition-all duration-300",
                pathname === item.href
                  ? "text-[#15608F] dark:text-white border-b-2 border-[#15608F] dark:border-white"
                  : "text-[#15608F]/80 dark:text-gray-300 hover:text-[#15608F] dark:hover:text-white border-b-2 border-transparent"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)} />
          <div className="fixed inset-x-0 top-20 z-50 rounded-b-2xl border border-t-0 border-border bg-background p-4 shadow-lg">
            <div className="mx-auto max-w-7xl px-8 md:px-12 flex flex-col gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 min-h-[48px] flex items-center text-base font-medium transition-all duration-300 border-l-4",
                    pathname === item.href
                      ? "text-[#15608F] dark:text-white border-[#15608F] dark:border-white bg-gray-50 dark:bg-gray-800/50"
                      : "text-[#15608F]/80 dark:text-gray-300 hover:text-[#15608F] dark:hover:text-white border-transparent hover:border-[#15608F]/30 dark:hover:border-white/30 hover:bg-gray-50 dark:hover:bg-gray-800/30"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
