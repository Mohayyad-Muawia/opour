"use client";
import { useTranslations } from "next-intl";
import "./forms.css";

export default function VolunteerForm() {
    const t = useTranslations("ContributePage.forms.volunteering");
    const availabilityOptions = t.raw("fields.availability.options") as Record<string, string>;

    return (
        <div className="volunteer form">
            <div className="description card">
                <p>{t("description")}</p>
            </div>

            <form className="card">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="v-name">{t("fields.name.label")}</label>
                        <input
                            type="text"
                            id="v-name"
                            name="name"
                            placeholder={t("fields.name.placeholder")}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="v-email">{t("fields.email.label")}</label>
                        <input
                            type="email"
                            id="v-email"
                            name="email"
                            placeholder={t("fields.email.placeholder")}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="v-phone">{t("fields.phone.label")}</label>
                        <input
                            type="tel"
                            id="v-phone"
                            name="phone"
                            placeholder={t("fields.phone.placeholder")}
                            dir="ltr"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="v-specialization">{t("fields.specialization.label")}</label>
                        <input
                            type="text"
                            id="v-specialization"
                            name="specialization"
                            placeholder={t("fields.specialization.placeholder")}
                        />
                    </div>
                </div>

                <div className="field full">
                    <label>{t("fields.availability.label")}</label>
                    <div className="radio-group">
                        {Object.entries(availabilityOptions).map(([key, value]) => (
                            <label key={key} className="radio-option">
                                <input type="radio" name="availability" value={key} />
                                <span>{value}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="field full">
                    <label htmlFor="v-reason">{t("fields.reason.label")}</label>
                    <textarea
                        id="v-reason"
                        name="reason"
                        rows={4}
                        placeholder={t("fields.reason.placeholder")}
                    />
                </div>

                <button type="submit" className="btn primary submit">
                    {t("submit")}
                </button>
            </form>
        </div>
    );
}