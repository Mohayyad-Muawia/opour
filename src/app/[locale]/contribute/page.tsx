import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

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

export default function ContributePage() {
  const t = useTranslations("ContributePage");
  return (
    <>
      <header className="page-header" style={{ backgroundImage: "url('/imgs/cn.jpg')" }}>
        <div className="header-content">
          <h1 className="title">{t("title")}</h1>
          <p className="description">{t("description")}</p>
        </div>
        <div className="overlay" />
      </header>
      <div className="page">
        <div className="container">

        </div>
      </div>
    </>
  );
}
