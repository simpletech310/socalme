import type { Metadata } from "next";
import { jakarta, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://socalme.4everforward.net"),
  title: "SoCalEM | Urgent Care Centers in the Inland Empire, CA",
  description:
    "Walk-in urgent care open 7 days a week across 7 Inland Empire locations. In and out in an hour. On-site X-ray & lab, DOT physicals, occupational medicine. PPO, IEHP, Medi-Cal, Molina accepted.",
  keywords: [
    "urgent care Inland Empire",
    "walk-in clinic Riverside CA",
    "urgent care Colton CA",
    "urgent care Hemet CA",
    "urgent care Moreno Valley",
    "urgent care Norco CA",
    "urgent care Redlands CA",
    "urgent care Yucaipa CA",
    "DOT physical near me",
    "occupational medicine Inland Empire",
    "SoCalEM",
    "SoCal Emergency Medicine",
    "Medi-Cal urgent care",
    "IEHP urgent care",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SoCalEM | Urgent Care Centers in the Inland Empire",
    description:
      "Walk-in urgent care open 7 days a week. 7 locations, in and out in an hour. Insurance and self-pay options.",
    url: "https://socalme.4everforward.net",
    siteName: "SoCalEM",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoCalEM - Urgent Care Centers in the Inland Empire",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoCalEM | Urgent Care Centers in the Inland Empire",
    description:
      "Walk-in urgent care open 7 days a week. 7 locations across the IE.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] bg-white text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
