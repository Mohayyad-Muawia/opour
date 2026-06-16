"use client";
import { sendContactEmail } from "@/actions";
import { useTranslations } from "next-intl";
import { useActionState, useEffect, useRef, useTransition } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const t = useTranslations("ContactPage");

  const [state, formAction] = useActionState(sendContactEmail, null);
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
    <form ref={formRef} onSubmit={handleSubmit} className="card">
      <div className="header">
        <h2>{t("form.title")}</h2>
        <p>{t("form.description")}</p>
      </div>

      <div className="field half">
        <label htmlFor="name">{t("form.fields.name.label")}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t("form.fields.name.placeholder")}
          required
        />
      </div>

      <div className="field half">
        <label htmlFor="email">{t("form.fields.email.label")}</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("form.fields.email.placeholder")}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="subject">{t("form.fields.subject.label")}</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder={t("form.fields.subject.placeholder")}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="message">{t("form.fields.message.label")}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t("form.fields.message.placeholder")}
          rows={5}
          required
        />
      </div>

      <button type="submit" className="submit btn primary" disabled={isLoading}>
        {isLoading ? t("form.submit.submitting") : t("form.submit.idle")}
      </button>
    </form>
  );
}
