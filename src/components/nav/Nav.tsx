"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import "./nav.css";
import Image from "next/image";

export default function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: "en" | "ar") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="logo">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <h3>{t("orgTitle")}</h3>
      </div>

      {/* Navigation Links */}
      <div className="links">
        <Link href="/" className="link">
          {t("home")}
        </Link>
        <Link href="/about" className="link">
          {t("about")}
        </Link>
        <Link href="/goals" className="link">
          {t("goals")}
        </Link>
        <Link href="/structure" className="link">
          {t("structure")}
        </Link>
        <Link href="/contribute" className="link">
          {t("contribute")}
        </Link>
        <Link href="/contact" className="link">
          {t("contact")}
        </Link>
      </div>

      {/* Language Switcher */}
      <div className="lang">
        <div className="toggle">
          <button
            onClick={() => switchLocale("ar")}
            className={`btn ${locale === "ar" ? "active" : ""}`}
          >
            {t("arabic")}
          </button>
          <button
            onClick={() => switchLocale("en")}
            className={`btn ${locale === "en" ? "active" : ""}`}
          >
            {t("english")}
          </button>
        </div>
      </div>
    </nav>
  );
}
