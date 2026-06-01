"use client";

import { useState, useEffect } from "react";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import "./nav.css";
import Image from "next/image";
import { motion } from "motion/react";

export default function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => (pathname === href ? "active" : "");

  const switchLocale = (newLocale: "en" | "ar") => {
    router.replace(pathname, { locale: newLocale });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isAtHomeTop = pathname === "/" && !scrolled;

  return (
    <nav className={`nav ${isAtHomeTop ? "glass" : "scrolled"}`}>
      {/* Logo */}
      <div className="logo">
        <Image src="/logo2.png" alt="Logo" width={40} height={40} />
        <h3>{t("orgTitle")}</h3>
      </div>

      {/* Navigation Links */}
      <div className="links">
        {[
          { href: "/", label: t("home") },
          { href: "/about", label: t("about") },
          { href: "/goals", label: t("goals") },
          { href: "/contribute", label: t("contribute") },
          { href: "/contact", label: t("contact") },
        ].map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} className={`link ${active ? "active" : ""}`}>
              {active && (
                <motion.div
                  layoutId="active-nav-link"
                  className="active-nav-bg"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="link-label">{label}</span>
            </Link>
          );
        })}
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
