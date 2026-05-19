import { CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import "./Status-cards.css"

export default function StatusCards() {
    const t = useTranslations("HomePage.StatusCards");

    return (
        <section className="status-cards">
            <div className="card">
                <div className="icon">
                    <ShieldCheck />
                </div>
                <div className="text">
                    <b>{t("regNumber")}</b>
                    <p>{t("regNumberSubTitle")}</p>
                </div>
            </div>

            <div className="card">
                <div className="icon">
                    <CalendarDays />
                </div>
                <div className="text">
                    <b>{t("foundingYear")}</b>
                    <p>{t("foundingYearSubTitle")}</p>
                </div>
            </div>

            <div className="card">
                <div className="icon">
                    <MapPin />
                </div>
                <div className="text">
                    <b>{t("address")}</b>
                    <p>{t("addressSubTitle")}</p>
                </div>
            </div>

        </section>)
}
