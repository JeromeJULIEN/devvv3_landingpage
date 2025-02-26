import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devvv3.com"),
  title: "devvv3 | Blockchain & Web3 Freelance Developer",
  description:
    "Freelance web3 fullstack developer, Ethereum & Solana smart contracts, and decentralized web3 applications. Based in Marseille, France.",
  keywords:
    "blockchain, web3, ethereum, solana, smart contracts, dapp, freelance developer, defi, nft, fullstack",
  openGraph: {
    title: "devvv3 | Blockchain & Web3 Freelance Developer",
    description:
      "Freelance web3 fullstack developer, Ethereum & Solana smart contracts, and decentralized web3 applications.",
    type: "website",
    locale: "en_US",
    siteName: "devvv3",
    url: "https://www.devvv3.com",
    images: [
      {
        url: "https://www.devvv3.com/devvv3.png", // Ajoutez une image OpenGraph
        width: 1200,
        height: 630,
        alt: "devvv3 | Blockchain & Web3 Freelance Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "devvv3 | Blockchain & Web3 Freelance Developer",
    description:
      "Freelance web3 fullstack developer, Ethereum & Solana smart contracts, and decentralized web3 applications.",
    images: [
      {
        url: "https://www.devvv3.com/devvv3.png", // Ajoutez une image OpenGraph
        width: 1200,
        height: 630,
        alt: "devvv3 | Blockchain & Web3 Freelance Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://devvv3.com",
    languages: {
      en: "https://devvv3.com/en",
      fr: "https://devvv3.com/fr",
    },
  },
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
