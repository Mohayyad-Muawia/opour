"use client";
import { useTranslations } from "next-intl";
// @ts-ignore: side-effect import for CSS
import "./forms.css";

export default function PartnershipForm() {
    const t = useTranslations("ContributePage.forms.partnership");
    return (
        <div className="partnership form">
            <div className="description card">
                <p>{t("description")}</p>
            </div>

            <form className="card">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="org-name">{t("fields.org_name.label")}</label>
                        <input
                            type="text"
                            id="org-name"
                            name="org_name"
                            placeholder={t("fields.org_name.placeholder")}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="org-type">{t("fields.org_type.label")}</label>
                        <input
                            type="text"
                            id="org-type"
                            name="org_type"
                            placeholder={t("fields.org_type.placeholder")}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="org-email">{t("fields.org_email.label")}</label>
                        <input
                            type="email"
                            id="org-email"
                            name="org_email"
                            placeholder={t("fields.org_email.placeholder")}
                            dir="ltr"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="org-phone">{t("fields.org_phone.label")}</label>
                        <input
                            type="tel"
                            id="org-phone"
                            name="org_phone"
                            placeholder={t("fields.org_phone.placeholder")}
                            dir="ltr"
                        />
                    </div>
                </div>

                <div className="field full">
                    <label htmlFor="proposal">{t("fields.proposal.label")}</label>
                    <textarea
                        id="proposal"
                        name="proposal"
                        rows={5}
                        placeholder={t("fields.proposal.placeholder")}
                    />
                </div>

                <button type="submit" className="btn primary submit">
                    {t("submit")}
                </button>
            </form>
        </div>
    );
}
