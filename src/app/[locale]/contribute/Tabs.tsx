"use client";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { HandHeart, Users, Handshake } from "lucide-react";

const tabsList = [
    { id: "support", icon: HandHeart },
    { id: "volunteering", icon: Users },
    { id: "partnership", icon: Handshake },
] as const;

export default function Tabs() {
    const t = useTranslations("ContributePage");
    const searchParams = useSearchParams();
    const router = useRouter();
    const tab = searchParams.get("tab") || "support";

    const navigate = (id: string) => {
        router.push(`/contribute?tab=${id}`, { scroll: false });
    };

    return (
        <div className="tabs">
            {tabsList.map(({ id, icon: Icon }) => {
                const isActive = tab === id;
                return (
                    <button
                        key={id}
                        onClick={() => navigate(id)}
                        className={`tab ${isActive ? "active" : ""}`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-tab"
                                className="active-bg"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                        )}
                        <span className="tab-label">
                            <Icon size={16} />
                            {t(`tabs.${id}`)}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
