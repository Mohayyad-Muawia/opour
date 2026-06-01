"use client";
import { useSearchParams } from "next/navigation";
import Tabs from "../Tabs";
import SupportForm from "./SupportForm";
import VolunteerForm from "./VolunteerForm";
import PartnershipForm from "./PartnershipForm";

export default function FormsSection() {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "support";

    return (
        <div className="forms">
            <Tabs />
            <div className="tab-content">
                {tab === "support" && <SupportForm />}
                {tab === "volunteering" && <VolunteerForm />}
                {tab === "partnership" && <PartnershipForm />}
            </div>
        </div>
    );
}
