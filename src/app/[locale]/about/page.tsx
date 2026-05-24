import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import "./about.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
  };
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <>
      <header className="page-header" style={{ backgroundImage: "url('/imgs/ab.jpg')" }}>
        <div className="header-content">
          <h1 className="title">{t("title")}</h1>
          <p className="description">{t("description")}</p>
        </div>
        <div className="overlay" />
      </header>

      <div className="about page">

      </div>
    </>
  );
}
