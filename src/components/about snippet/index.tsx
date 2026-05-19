import { useTranslations } from "next-intl";
import "./about-snippet.css";
import Image from "next/image";

export default function AboutSnippet() {
    const t = useTranslations("HomePage.AboutSnippet");
    return (
        <section className="about-snippet">
            <div className="img-box">
                <Image src="/imgs/snippit.jpg" alt="About" width={350} height={350} />
            </div>
            <div className="text">
                <h1>{t("title")}</h1>
                <p>{t("p1")}</p>
                <p>{t("p2")}</p>
                <button className="btn primary">{t("aboutBtn")}</button>
            </div>
        </section>
    )
}


