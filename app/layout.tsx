import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vgts-mobility.cz"),

  title: {
    default: "VGTS Mobility | Prověřené vozy z Evropy",
    template: "%s | VGTS Mobility",
  },

  description:
    "Prověřené vozy z Evropy. Prodej kvalitních vozů, individuální dovoz automobilů na zakázku a kompletní prověření historie každého vozu.",

  keywords: [
    "VGTS Mobility",
    "dovoz aut",
    "auta z Evropy",
    "prodej automobilů",
    "elektromobily",
    "ojeté vozy",
    "Škoda",
    "Tesla",
    "Volkswagen",
    "BMW",
    "Audi",
  ],

  applicationName: "VGTS Mobility",

  authors: [
    {
      name: "VGTS Mobility",
    },
  ],

  creator: "VGTS Mobility",

  publisher: "VGTS Mobility",

  openGraph: {
    title: "VGTS Mobility",
    description:
      "Prověřené vozy z Evropy a individuální dovoz automobilů na zakázku.",
    url: "https://vgts-mobility.cz",
    siteName: "VGTS Mobility",
    locale: "cs_CZ",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}