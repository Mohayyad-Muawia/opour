import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import "./about.css";
import Image from "next/image";
import { CalendarDays, HandHeart, MapPin, ShieldCheck, User } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
  };
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const members = [
    {
      name: t("members.list.0.name"),
      position: t("members.list.0.position"),
    },
    {
      name: t("members.list.1.name"),
      position: t("members.list.1.position"),
    },
    {
      name: t("members.list.2.name"),
      position: t("members.list.2.position"),
    },
    {
      name: t("members.list.3.name"),
      position: t("members.list.3.position"),
    },
    {
      name: t("members.list.4.name"),
      position: t("members.list.4.position"),
    },
    {
      name: t("members.list.5.name"),
      position: t("members.list.5.position"),
    },
    {
      name: t("members.list.6.name"),
      position: t("members.list.6.position"),
    },
    {
      name: t("members.list.7.name"),
      position: t("members.list.7.position"),
    },
    {
      name: t("members.list.8.name"),
      position: t("members.list.8.position"),
    }
  ]
  return (
    <>
      <header className="page-header" style={{ backgroundImage: "url('/imgs/ab.jpg')" }}>
        <div className="header-content">
          <h1 className="title">{t("title")}</h1>
          <p className="description">{t("description")}</p>
        </div>
        <div className="overlay" />
      </header>

      <div className="about page container" >

        <section className="info">
          <div className="img-box">
            <Image src="/imgs/info.jpg" alt="info" width={600} height={450} />
            <div className="frame" />
          </div>

          <div className="text">
            <h3>{t("info.title")}</h3>
            <h1>{t("info.subtitle")}</h1>
            <p>{t("info.paragraph")}</p>

            <div className="list">
              <div className="item">
                <div className="icon" style={{ backgroundColor: "#16a34a20", color: "#16a34a" }}>
                  <ShieldCheck />
                </div>
                <b>{t("info.list.0")}</b>
              </div>
              <div className="item">
                <div className="icon" style={{ backgroundColor: "#e6bc2227", color: "#e6bc22ff" }}>
                  <CalendarDays />
                </div>
                <b>{t("info.list.1")}</b>
              </div>
              <div className="item">
                <div className="icon" style={{ backgroundColor: "#00a5d81a", color: "#00a5d8" }}>
                  <MapPin />
                </div>
                <b>{t("info.list.2")}</b>
              </div>
              <div className="item">
                <div className="icon" style={{ backgroundColor: "#af53df1a", color: "#af53df" }}>
                  <HandHeart />
                </div>
                <b>{t("info.list.3")}</b>
              </div>
            </div>
          </div>
        </section>

        <section className="members">
          <h1 className="section-title">{t("members.title")}</h1>
          <div className="grid">
            {
              members.map((member, index) => (
                <div className="card" key={index}>
                  <div className="icon">
                    <User />
                  </div>
                  <b>{member.name}</b>
                  <p>{member.position}</p>
                </div>
              ))
            }
          </div>
        </section>

      </div>
    </>
  );
}
