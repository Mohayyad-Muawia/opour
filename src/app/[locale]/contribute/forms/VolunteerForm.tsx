"use client";
import { useTranslations } from "next-intl";
import "./forms.css";
import { useActionState, useEffect, useRef, useTransition } from "react";
import { sendVolunteerEmail } from "@/actions";
import toast from "react-hot-toast";

export default function VolunteerForm() {
  const t = useTranslations("ContributePage.forms.volunteering");
  const availabilityOptions = t.raw("fields.availability.options") as Record<
    string,
    string
  >;
  const [state, formAction] = useActionState(sendVolunteerEmail, null);
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
    <div className="volunteer form">
      <div className="description card">
        <p>{t("description")}</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="card">
        <div className="fields">
          <div className="field">
            <label htmlFor="v-name">{t("fields.name.label")}</label>
            <input
              type="text"
              id="v-name"
              name="name"
              placeholder={t("fields.name.placeholder")}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="v-email">{t("fields.email.label")}</label>
            <input
              type="email"
              id="v-email"
              name="email"
              placeholder={t("fields.email.placeholder")}
              required
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
              pattern="^\+?[0-9]{9,15}$"
              required
              maxLength={15}
            />
          </div>
          <div className="field">
            <label htmlFor="v-specialization">
              {t("fields.specialization.label")}
            </label>
            <input
              type="text"
              id="v-specialization"
              name="specialization"
              placeholder={t("fields.specialization.placeholder")}
              required
            />
          </div>
        </div>

        <div className="field full radio">
          <label>{t("fields.availability.label")}</label>
          <div className="radio-group">
            {Object.entries(availabilityOptions).map(([key, value]) => (
              <label key={key} className="radio-option">
                <input type="radio" name="availability" value={key} required />
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

        <button
          type="submit"
          className="btn primary submit"
          disabled={isLoading}
        >
          {isLoading ? t("submit.submitting") : t("submit.idle")}
        </button>
      </form>
    </div>
  );
}
