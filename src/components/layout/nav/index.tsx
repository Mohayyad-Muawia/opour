"use client";

import { useState, useEffect } from "react";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import "./nav.css";
import Image from "next/image";
import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/goals", label: t("goals") },
    { href: "/contribute", label: t("contribute") },
    { href: "/contact", label: t("contact") },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    closeMenu();
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
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`link ${active ? "active" : ""}`}
            >
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

      <LangSwitcher />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>

        <div className="menu">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`link ${active ? "active" : ""}`}
              >
                <span className="link-label">{label}</span>
              </Link>
            );
          })}
          <LangSwitcher />
        </div>

        <motion.div
          initial={{ opacity: 0, zIndex: -1, pointerEvents: "none" }}
          animate={{
            opacity: isOpen ? 1 : 0,
            zIndex: isOpen ? 1 : -1,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.35 }}
          className="overlay"
          onClick={() => setIsOpen(false)}
        ></motion.div>
      </div>
    </nav>
  );
}

function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: "en" | "ar") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
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
  );
}
