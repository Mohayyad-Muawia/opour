import { getTranslations } from "next-intl/server";
import './contribute.css';
import Tabs from "./Tabs";
import SupportForm from "./forms/SupportForm";
import VolunteerForm from "./forms/VolunteerForm";
import PartnershipForm from "./forms/PartnershipForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContributePage" });

  return {
    title: t("title"),
  };
}

export default async function ContributePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  const rawTab = (await searchParams).tab;
  const tab = (Array.isArray(rawTab) ? rawTab[0] : rawTab) ?? "support";
  const t = await getTranslations("ContributePage");

  return (
    <>
      <header className="page-header" style={{ backgroundImage: "url('/imgs/cn.jpg')" }}>
        <div className="header-content">
          <h1 className="title">{t("title")}</h1>
          <p className="description">{t("description")}</p>
        </div>
        <div className="overlay" />
      </header>
      <div className="contribute page">
        <div className="container">
          <div className="forms">
            <Tabs tab={tab} />
            <div className="tab-content">
              {tab === "support" && <SupportForm />}
              {tab === "volunteering" && <VolunteerForm />}
              {tab === "partnership" && <PartnershipForm />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
