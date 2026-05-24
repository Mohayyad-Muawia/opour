"use client"
import { Component, Eye, HandFist, Lightbulb, Target, Telescope } from "lucide-react";
import "./values.css"
import { useTranslations } from "next-intl";
import { div, h2 } from "motion/react-client";
import AnimateOnScroll from "@/motion/AnimateOnScroll";
export default function Values() {
    const t = useTranslations("HomePage.Values");

    const values = [
        {
            icon: HandFist,
            title: t('value_1.title'),
            description: t('value_1.description'),
            color: "var(--primary)",
            bg: "#16a34a1a"
        },
        {
            icon: Lightbulb,
            title: t('value_2.title'),
            description: t('value_2.description'),
            color: "#e6bc22ff",
            bg: "#e6bc2227"
        },
        {
            icon: Component,
            title: t('value_3.title'),
            description: t('value_3.description'),
            color: "#af53df",
            bg: "#af53df1a"
        },
        {
            icon: Eye,
            title: t('value_4.title'),
            description: t('value_4.description'),
            color: "#00a5d8",
            bg: "#00a5d81a"
        },
    ];
    return (
        <section className="values container">
            <AnimateOnScroll type="fadeInUp">

                <h1 className="section-title">{t('title')}</h1>
            </AnimateOnScroll>
            <div className="vision-mission">
                <AnimateOnScroll type="fadeInLeft" delay={.1} className="card">
                    <div className="icon">
                        <Telescope />
                    </div>
                    <div className="text">
                        <h2>{t('vision.title')}</h2>
                        <p>{t('vision.description')}</p>
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll type="fadeInLeft" delay={.2} className="card">
                    <div className="icon">
                        <Target />
                    </div>
                    <div className="text">
                        <h2>{t('mission.title')}</h2>
                        <p>{t('mission.description')}</p>
                    </div>
                </AnimateOnScroll>
            </div >
            <div className="values-list">
                <AnimateOnScroll type="fadeInUp" delay={.25} >
                    <h2>{t('title_2')}</h2>
                </AnimateOnScroll>
                <div className="grid">
                    {values.map((value, index) => (
                        <AnimateOnScroll key={index} type="fadeInUp" delay={.3 + index * .1} className="card">
                            <div className="icon" style={{ color: value.color, backgroundColor: value.bg }}>
                                <value.icon />
                            </div>
                            <div className="text">
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section >
    )
}

