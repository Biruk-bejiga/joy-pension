import type { Metadata } from "next";
import { Inter, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joy Pension | Kotebe Kara",
  description:
    "Comfortable and affordable pension in Kotebe Kara, Addis Ababa. Safe, clean rooms with 24/7 reception, Wi-Fi, and easy access.",
  keywords: [
    "Joy Pension",
    "Kotebe Kara",
    "pension in Kotebe Kara",
    "Addis Ababa pension",
    "affordable stay",
    "guest house",
  ],
  openGraph: {
    title: "Joy Pension | Kotebe Kara",
    description:
      "Comfortable and affordable pension in Kotebe Kara, Addis Ababa. Safe, clean rooms with 24/7 reception, Wi-Fi, and easy access.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy Pension | Kotebe Kara",
    description:
      "Comfortable and affordable pension in Kotebe Kara, Addis Ababa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoEthiopic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
