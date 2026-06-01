"use client";
import { useTranslations } from "next-intl";
import "../forms/forms.css";


export default function SupportForm() {
    const t = useTranslations("ContributePage.forms.support");

    return (
        <div className="support form">
            <div className="description card">
                <p>{t("description")}</p>
            </div>

            <form className="card">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="name">{t("fields.name.label")}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder={t("fields.name.placeholder")}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">{t("fields.email.label")}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t("fields.email.placeholder")}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">{t("fields.phone.label")}</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder={t("fields.phone.placeholder")}
                            dir="ltr"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="project_type">{t("fields.project_type.label")}</label>
                        <select id="project_type" name="project_type">
                            {Object.entries(t.raw("fields.project_type.options") as Record<string, string>).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="field full">
                    <label htmlFor="message">{t("fields.message.label")}</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder={t("fields.message.placeholder")}
                    />
                </div>
                <button type="submit" className="btn primary submit">
                    {t("submit")}
                </button>
            </form>
        </div>
    );
}
