import { getTranslations } from "next-intl/server";
import "./contribute.css";
import FormsSection from "./forms/FormsSection";
import { Link } from "@/i18n/routing";
import { CircleAlert } from "lucide-react";
import AnimateOnScroll from "@/motion/AnimateOnScroll";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContributePage" });

  return {
    title: t("title"),
  };
}

export default async function ContributePage() {
  const t = await getTranslations("ContributePage");

  return (
    <>
      <header
        className="page-header"
        style={{ backgroundImage: "url('/imgs/cn.jpg')" }}
      >
        <div className="header-content">
          <AnimateOnScroll type="fadeInRight">
            <h1 className="title">{t("title")}</h1>
          </AnimateOnScroll>
          <AnimateOnScroll type="fadeInRight" delay={0.1}>
            <p className="description">{t("description")}</p>
          </AnimateOnScroll>
        </div>
        <div className="overlay" />
      </header>

      <div className="contribute page">
        <div className="container">
          <AnimateOnScroll>
            <div className="notice card">
              <div className="icon">
                <CircleAlert />
              </div>
              <div className="text">
                <h2>{t("notice.title")}</h2>
                <p>{t("notice.description")}</p>
              </div>
              <Link href="/contact" className="btn primary">
                {t("notice.button")}
              </Link>
            </div>
          </AnimateOnScroll>
          <FormsSection />
        </div>
      </div>
    </>
  );
}
