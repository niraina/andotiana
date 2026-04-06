"use client";
import About from "@/components/about";
import { FloatingHeader } from "@/components/floating-header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="px-3 font-mono">
      <FloatingHeader />
      <Hero />
      <About />
    </div>
  );
}
