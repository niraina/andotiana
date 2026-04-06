import { FloatingHeader } from "@/components/floating-header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="">
      <FloatingHeader />
      <h1>{t("title")}</h1>
    </div>
  );
}
