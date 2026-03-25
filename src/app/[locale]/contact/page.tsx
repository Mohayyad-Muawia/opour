import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("title"),
  };
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <div className="page">
      <h1 className="title">{t("title")}</h1>
      <p className="description">{t("description")}</p>
    </div>
  );
}
