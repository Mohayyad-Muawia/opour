"use client"
import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Tabs({ tab }: { tab: string }) {
    const t = useTranslations("ContributePage");

    const tabsList = [
        { id: "support", label: t("tabs.support") },
        { id: "volunteering", label: t("tabs.volunteering") },
        { id: "partnership", label: t("tabs.partnership") },
    ];

    return (
        <div className="tabs">
            {tabsList.map((item) => {
                const isActive = tab === item.id;
                return (
                    <Link
                        key={item.id}
                        href={`/contribute?tab=${item.id}`}
                        className={`tab ${isActive ? "active" : ""}`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-tab"
                                className="active-bg"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="tab-label">{item.label}</span>
                    </Link>
                );
            })}
        </div>
    )
}
