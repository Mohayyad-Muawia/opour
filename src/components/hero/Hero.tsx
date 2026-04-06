"use client";

import { useState, useEffect } from "react";
import "./hero.css";
import { useTranslations } from "next-intl";

const images = [
  "/imgs/h1.jpg",
  "/imgs/h2.jpg",
  "/imgs/h3.jpg",
  "/imgs/h4.jpg",
  "/imgs/h5.jpg",
  "/imgs/h6.jpg",
];

export default function Hero() {
  const t = useTranslations("Hero");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {/* Background Slider */}
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImageIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1 className="title">{t("title")}</h1>
        <p className="subtitle">{t("subtitle")}</p>
      </div>
    </div>
  );
}
