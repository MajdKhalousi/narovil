import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://narovil.vercel.app"),

  title: {
    default: "NAROVIL | Premium Software Studio",
    template: "%s | NAROVIL",
  },

  description:
    "NAROVIL is a premium software studio by Majd Khalousi, specialized in web development, Flutter apps, dashboards, APIs, e-commerce solutions, and custom software systems.",

  keywords: [
    "NAROVIL",
    "Majd Khalousi",
    "software studio",
    "web development",
    "Flutter apps",
    "dashboard development",
    "API development",
    "e-commerce development",
    "custom software",
    "تطوير مواقع",
    "تطوير تطبيقات Flutter",
    "برمجة مواقع",
    "أنظمة إدارة",
    "متاجر إلكترونية",
    "لوحات تحكم",
  ],

  authors: [{ name: "Majd Khalousi" }],
  creator: "Majd Khalousi",
  publisher: "NAROVIL",

  icons: {
    icon: "/narovil-logo.png",
    shortcut: "/narovil-logo.png",
    apple: "/narovil-logo.png",
  },

  openGraph: {
    title: "NAROVIL | Premium Software Studio",
    description:
      "Premium software solutions for websites, Flutter apps, dashboards, APIs, e-commerce, and custom systems.",
    url: "https://narovil.vercel.app",
    siteName: "NAROVIL",
    images: [
      {
        url: "/narovil-logo.png",
        width: 1024,
        height: 1024,
        alt: "NAROVIL Logo",
      },
    ],
    locale: "ar",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NAROVIL | Premium Software Studio",
    description:
      "Premium software solutions for websites, Flutter apps, dashboards, APIs, e-commerce, and custom systems.",
    images: ["/narovil-logo.png"],
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
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}