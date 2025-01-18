import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devvv3",
  description: "blockchain, web3 and decentralized applications development",
};

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: any;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={rubik.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-QF624S56MY" />
    </html>
  );
}
