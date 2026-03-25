"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="page">
      <h1 className="title">{t("title")}</h1>
      <p className="description">{t("description")}</p>
    </div>
  );
}
