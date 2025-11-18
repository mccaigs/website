"use client";

import { useEffect, useState } from "react";

/**
 * SafeMDX Component
 * 
 * Ensures hydration consistency by preventing client-side rendering
 * until the component is mounted. This prevents hydration mismatches
 * caused by browser extensions or client-only effects.
 * 
 * Use this wrapper if you encounter persistent hydration issues
 * despite having deterministic SSR rendering.
 */
export default function SafeMDX({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null on initial server render to avoid hydration mismatch
  // Once mounted on client, render children
  if (!mounted) {
    return <div className="prose prose-lg dark:prose-invert max-w-none min-h-[400px]" />;
  }

  return <>{children}</>;
}
