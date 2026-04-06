import { useTranslations } from "next-intl"

const About = () => {
  const t = useTranslations("About")
  return (
    <div className="mx-auto w-full max-w-3xl ">
      <h2 className="text-center md:text-left text-2xl font-bold mb-4">{t("title")}</h2>
      <p className="text-center md:text-left text-muted-foreground italic">{t("description")}</p>
    </div>
  )
}

export default About