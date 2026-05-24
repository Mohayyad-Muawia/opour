import { useTranslations } from "next-intl";
import "./about-snippet.css";
import Image from "next/image";
import AnimateOnScroll from "@/motion/AnimateOnScroll";

export default function AboutSnippet() {
    const t = useTranslations("HomePage.AboutSnippet");
    return (
        <section className="about-snippet container">
            <AnimateOnScroll type="fadeInLeft">
                <div className="img-box">
                    <Image src="/imgs/snippit.jpg" alt="About" width={350} height={350} />
                </div>
            </AnimateOnScroll>
            <div className="text">
                <AnimateOnScroll type="fadeInLeft" delay={.1}>
                    <h1>{t("title")}</h1>
                    <p>{t("p1")}</p>
                </AnimateOnScroll>
                <AnimateOnScroll type="fadeInLeft" delay={.15}>
                    <p>{t("p2")}</p>
                </AnimateOnScroll>
                <AnimateOnScroll type="fadeInLeft" delay={.2}>
                    <button className="btn primary">{t("aboutBtn")}</button>
                </AnimateOnScroll>
            </div>
        </section>
    )
}


