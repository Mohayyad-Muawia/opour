import "./hero.css";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <div className="hero">
      <h1 className="title">{t("title")}</h1>
      <p className="subtitle">{t("subtitle")}</p>
    </div>
  );
}
