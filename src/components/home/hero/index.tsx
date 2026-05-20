"use client";

import { useState, useEffect } from "react";
import "./hero.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import AnimateOnScroll from "@/motion/AnimateOnScroll";

const images = [
  "/imgs/h1.jpg",
  "/imgs/h2.jpg",
  "/imgs/h3.jpg",
  "/imgs/h4.jpg",
  "/imgs/h5.jpg",
  "/imgs/h6.jpg",
];

export default function Hero() {
  const t = useTranslations("HomePage.Hero");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background Slider */}
      <div className="hero-slider">
        {images.map((image, index) => {
          const isActive = index === currentImageIndex;
          return (
            <div
              key={index}
              className={`hero-slide ${isActive ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          );
        })}
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="text-box">
          <AnimateOnScroll type="fadeInUp">
            <h1 className="title">{t("title")}</h1>
          </AnimateOnScroll>
          <AnimateOnScroll type="fadeInUp" delay={0.1}>
            <p className="subtitle">{t("subtitle")}</p>
          </AnimateOnScroll>
        </div>

        <div className="btns">
          <AnimateOnScroll type="fadeInUp" delay={0.1}>
            <Link href="/contribute" className="btn primary">
              {t("contributeBtn")}
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll type="fadeInUp" delay={.15}>
            <Link href="/about" className="btn secondary">
              {t("aboutBtn")}
            </Link>
          </AnimateOnScroll>
        </div>



      </div>
    </section>
  );
}
