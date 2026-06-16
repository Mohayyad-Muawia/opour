import { useTranslations } from "next-intl";
import "./cta.css";
import { HandHeart, Users, Handshake } from "lucide-react";
import AnimatedCard from "@/components/shared/Animated-Card";
import Button from "@/components/shared/button";

const icons: Record<string, React.ComponentType<any>> = {
  0: HandHeart,
  1: Users,
  2: Handshake,
};
export default function CTA() {
  const t = useTranslations("HomePage");
  const data = t.raw("CTA");
  return (
    <section className="cta container">
      <h1 className="section-title">{t("CTA.title")}</h1>
      <div className="grid">
        {data.cards.map((card: any, idx: number) => {
          const Icon = icons[idx];
          return (
            <AnimatedCard delay={0.1 * idx} key={idx}>
              <div className="icon">{Icon && <Icon />}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Button
                href={card.link}
                className={`btn ${idx === 0 ? "primary" : "secondary"}`}
              >
                {card.action}
              </Button>
            </AnimatedCard>
          );
        })}
      </div>
    </section>
  );
}
