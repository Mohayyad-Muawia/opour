"use client";
import { useTranslations } from "next-intl";
import "./forms.css";
import { useActionState, useEffect, useRef, useTransition } from "react";
import { sendPartnershipEmail } from "@/actions";
import toast from "react-hot-toast";
import Button from "@/components/shared/button";

export default function PartnershipForm() {
  const t = useTranslations("ContributePage.forms.partnership");
  const [state, formAction] = useActionState(sendPartnershipEmail, null);
  const [isLoading, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message);
      formRef.current?.reset();
    } else {
      toast.error(state.message);
    }
  }, [state]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      await formAction(formData);
    });
  };

  return (
    <div className="partnership form">
      <div className="description card">
        <p>{t("description")}</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="card">
        <div className="fields">
          <div className="field">
            <label htmlFor="org-name">{t("fields.org_name.label")}</label>
            <input
              type="text"
              id="org-name"
              name="org_name"
              placeholder={t("fields.org_name.placeholder")}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="org-type">{t("fields.org_type.label")}</label>
            <input
              type="text"
              id="org-type"
              name="org_type"
              placeholder={t("fields.org_type.placeholder")}
              required
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
              required
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
              pattern="^\+?[0-9]{9,15}$"
              required
              maxLength={15}
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
            required
          />
        </div>

        <Button
          type="submit"
          className="btn primary submit"
          disabled={isLoading}
        >
          {isLoading ? t("submit.submitting") : t("submit.idle")}
        </Button>
      </form>
    </div>
  );
}
