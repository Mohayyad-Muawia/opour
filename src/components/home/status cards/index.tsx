import { CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import "./Status-cards.css"
import AnimateOnScroll from "@/motion/AnimateOnScroll";

export default function StatusCards() {
    const t = useTranslations("HomePage.StatusCards");

    return (

        <section className="status-cards">
            <AnimateOnScroll className="card" delay={.2} type="fadeInUp">
                <div className="icon">
                    <ShieldCheck />
                </div>
                <div className="text">
                    <b>{t("regNumber")}</b>
                    <p>{t("regNumberSubTitle")}</p>
                </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="card" delay={.25} type="fadeInUp">
                <div className="icon">
                    <CalendarDays />
                </div>
                <div className="text">
                    <b>{t("foundingYear")}</b>
                    <p>{t("foundingYearSubTitle")}</p>
                </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="card" delay={.3} type="fadeInUp">
                <div className="icon">
                    <MapPin />
                </div>
                <div className="text">
                    <b>{t("address")}</b>
                    <p>{t("addressSubTitle")}</p>
                </div>
            </AnimateOnScroll>

        </section>)
}
