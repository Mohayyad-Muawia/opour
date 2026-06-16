"use client";
import { useTranslations } from "next-intl";
import "./forms.css";
import { useActionState, useEffect, useRef, useTransition } from "react";
import { sendSupportEmail } from "@/actions";
import toast from "react-hot-toast";
import Button from "@/components/shared/button";

export default function SupportForm() {
  const t = useTranslations("ContributePage.forms.support");
  const [state, formAction] = useActionState(sendSupportEmail, null);

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
    <div className="support form">
      <div className="description card">
        <p>{t("description")}</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="card">
        <div className="fields">
          <div className="field">
            <label htmlFor="name">{t("fields.name.label")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("fields.name.placeholder")}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">{t("fields.email.label")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("fields.email.placeholder")}
              required
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
              pattern="^\+?[0-9]{9,15}$"
              required
              maxLength={15}
            />
          </div>
          <div className="field">
            <label htmlFor="project_type">
              {t("fields.project_type.label")}
            </label>
            <select id="project_type" name="project_type" required>
              {Object.entries(
                t.raw("fields.project_type.options") as Record<string, string>,
              ).map(([key, value]) => (
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
