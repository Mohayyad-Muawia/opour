import { MapPin, Mail, Phone } from "lucide-react";
import "./footer.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="about">
            <div className="logo-container">
              <div className="logo">
                <Image src="/logo2.png" alt="Logo" width={40} height={40} />
              </div>
              <span className="title">{t("title")}</span>
            </div>
            <p className="description">{t("description")}</p>
          </div>

          <div>
            <h3 className="heading">{t("quick_links")}</h3>
            <ul className="list">
              <li>
                <Link href="/" className="link">
                  {t("links.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="link">
                  {t("links.about")}
                </Link>
              </li>
              <li>
                <Link href="/goals" className="link">
                  {t("links.goals")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading">{t("contact_us")}</h3>
            <ul className="list">
              <li className="item">
                <MapPin className="icon icon-mt" />
                <span className="contact-text">
                  {t("contact_info.address")}
                </span>
              </li>
              <li className="item">
                <Mail className="icon" />
                <a href={`mailto:${t("contact_info.email")}`} className="link">
                  {t("contact_info.email")}
                </a>
              </li>
              <li className="item">
                <Phone className="icon" />
                <a href={`tel:${t("contact_info.phone")}`} className="link">
                  {t("contact_info.phone")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading">{t("social_media")}</h3>
            <div className="socials">
              <a
                href="https://web.facebook.com/profile.php?id=61584970924828"
                target="_blank"
                className="social-btn"
              >
                {/* Facebook */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L258.2 544L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z" />
                </svg>
              </a>
              <a
                href="https://x.com/opour_org"
                target="_blank"
                className="social-btn"
              >
                {/* X-Twitter */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM457.1 180L353.3 298.6L475.4 460L379.8 460L305 362.1L219.3 460L171.8 460L282.8 333.1L165.7 180L263.7 180L331.4 269.5L409.6 180L457.1 180zM419.3 431.6L249.4 206.9L221.1 206.9L392.9 431.6L419.3 431.6z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/opour-org"
                className="social-btn"
              >
                {/* LinkedIn */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="separator" />

      <div className="bottom">
        <div className="container">
          <p className="left">
            {t("rights")} {new Date().getFullYear()}
          </p>
          <p className="right">
            {t("dev_by")}{" "}
            <a
              className="link"
              href="https://mohayyad.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="highlight">{t("developer")}</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
