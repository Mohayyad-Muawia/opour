import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Toaster } from "react-hot-toast";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["latin", "arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </head>
      <body className={ibmPlexSansArabic.variable}>
        <NextIntlClientProvider messages={messages}>
          <Toaster
            position="bottom-center"
            toastOptions={
              {
                // style: {
                //   fontFamily: "inherit",
                //   borderRadius: "10px",
                //   background: "#fff",
                //   color: "#334155",
                // },
              }
            }
          />
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
