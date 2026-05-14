import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elektro Juříček | Hranice na Moravě",
  description:
    "Odborné elektroinstalace, revize elektrozařízení a servis v Hranicích na Moravě a okolí. Spolehlivá práce, férové ceny. Volejte +420 606 726 086.",
  keywords: [
    "elektrikář",
    "Hranice na Moravě",
    "elektroinstalace",
    "revize elektro",
    "elektroservis",
    "montáž osvětlení",
    "podlahové topení",
    "zabezpečovací technika",
    "chytrá domácnost",
    "Juříček",
  ],
  openGraph: {
    title: "Elektro Juříček | Hranice na Moravě",
    description:
      "Spolehlivé elektroinstalace, revize a servis. 15+ let zkušeností. Volejte +420 606 726 086.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0f172a] text-white">
        {children}
      </body>
    </html>
  );
}
