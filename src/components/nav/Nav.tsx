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

  const isActive = (href: string) => (pathname === href ? "active" : "");

  const switchLocale = (newLocale: "en" | "ar") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className="nav glass">
      {/* Logo */}
      <div className="logo">
        <Image src="/logo2.png" alt="Logo" width={50} height={50} />
        <h3>{t("orgTitle")}</h3>
      </div>

      {/* Navigation Links */}
      <div className="links">
        <Link href="/" className={`link ${isActive("/")}`}>
          {t("home")}
        </Link>
        <Link href="/about" className={`link ${isActive("/about")}`}>
          {t("about")}
        </Link>
        <Link href="/goals" className={`link ${isActive("/goals")}`}>
          {t("goals")}
        </Link>
        <Link href="/contribute" className={`link ${isActive("/contribute")}`}>
          {t("contribute")}
        </Link>
        <Link href="/contact" className={`link ${isActive("/contact")}`}>
          {t("contact")}
        </Link>
      </div>

      {/* Language Switcher */}
      <div className="lang">
        <div className="toggle glass">
          <button
            onClick={() => switchLocale("ar")}
            className={`btn ${locale === "ar" ? "active" : ""}`}
          >
            AR
          </button>
          <button
            onClick={() => switchLocale("en")}
            className={`btn ${locale === "en" ? "active" : ""}`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
