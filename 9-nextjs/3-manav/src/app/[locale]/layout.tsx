import "@/assets/globals.css";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ToastContainer } from "react-toastify/unstyled";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 text-black">{children}</main>

            <Footer />
          </div>

          <ToastContainer
            autoClose={2500}
            theme="colored"
            position="bottom-left"
            hideProgressBar
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
