"use client";
import { FloatingHeader } from "@/components/floating-header";
import Hero from "@/components/hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="px-3">
      <FloatingHeader />
      <Hero />
      <h1>{t("title")}</h1>
    </div>
  );
}
