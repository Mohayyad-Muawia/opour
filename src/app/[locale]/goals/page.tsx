import { AlertTriangle, Ban, BookOpen, Briefcase, ClipboardCheck, Coins, Droplet, Globe, GraduationCap, HandHelping, Handshake, HardHat, Heart, HeartPulse, Landmark, Leaf, LucideIcon, ShieldAlert, Sprout, Tent, Trees, Trophy, Truck, Users2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import "./goals.css";
import AnimatedCard from "@/components/shared/Animated-Card";
import AnimateOnScroll from "@/motion/AnimateOnScroll";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GoalsPage" });

  return {
    title: t("title"),
  };
}

interface Goal {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const iconMap: Record<string, LucideIcon> = {
  "01": HandHelping,
  "02": HeartPulse,
  "03": ShieldAlert,
  "04": AlertTriangle,
  "05": GraduationCap,
  "06": Trophy,
  "07": Leaf,
  "08": HardHat,
  "09": Briefcase,
  "10": Ban,
  "11": Coins,
  "12": Sprout,
  "13": Droplet,
  "14": Users2,
  "15": Trees,
  "16": Heart,
};

const methodologyIcons: Record<number, LucideIcon> = {
  0: GraduationCap,
  1: Tent,
  2: Globe,
  3: Handshake,
  4: Landmark,
  5: BookOpen,
  6: Truck,
  7: ClipboardCheck
};

export default function GoalsPage() {
  const t = useTranslations("GoalsPage");

  const goals: Goal[] = t.raw('goals.goalsGrid').map((goal: Goal) => {
    const Icon = iconMap[goal.id];
    return {
      ...goal,
      icon: Icon,
    };
  });

  const methodology: any[] = t.raw('methodology.list').map((method: any, index: number) => {
    const Icon = methodologyIcons[index];
    return {
      ...method,
      icon: Icon,
    };
  });

  return (
    <>
      <header className="page-header" style={{ backgroundImage: "url('/imgs/gm.jpg')" }}>
        <div className="header-content">
          <h1 className="title">{t("title")}</h1>
          <p className="description">{t("description")}</p>
        </div>
        <div className="overlay" />
      </header>

      <div className="goals page container">
        <section className="goals-box">
          <AnimateOnScroll>
            <h1 className="section-title">{t("goals.title")}</h1>
          </AnimateOnScroll>
          <div className="grid">
            {goals.map((goal) => (
              <AnimatedCard className="card" key={goal.id} delay={0.05 * Number(goal.id)}>
                {goal.icon ? <div className="icon"><goal.icon className="icon" /> </div> : <HandHelping className="icon" />}
                <div className="text">
                  <h3>{goal.title}</h3>
                  <p>{goal.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        <section className="methodology-box">
          <AnimateOnScroll>
            <h1 className="section-title">{t("methodology.title")}</h1>
          </AnimateOnScroll>

          <div className="list">
            {methodology.map((method: any, i) => (
              <AnimatedCard key={i} className="card" delay={0.1 * i}>
                <div className="icon">
                  {method.icon ? <method.icon /> : <HandHelping />}
                </div>
                <div className="text">
                  <h3>{method.title}</h3>
                  <p>{method.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>


      </div>
    </>
  );
}
