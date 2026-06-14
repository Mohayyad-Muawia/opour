"use client";
import { useSearchParams } from "next/navigation";
import Tabs from "../Tabs";
import SupportForm from "./SupportForm";
import VolunteerForm from "./VolunteerForm";
import PartnershipForm from "./PartnershipForm";
import AnimateOnScroll from "@/motion/AnimateOnScroll";

export default function FormsSection() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "support";

  return (
    <div className="forms">
      <AnimateOnScroll delay={0.2}>
        <Tabs />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <div className="tab-content">
          {tab === "support" && <SupportForm />}
          {tab === "volunteering" && <VolunteerForm />}
          {tab === "partnership" && <PartnershipForm />}
        </div>
      </AnimateOnScroll>
    </div>
  );
}
