import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nadine-khalimouads-projects.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Nadine | Fashion Model & Editorial Portfolio", template: "%s | Nadine" },
  description: "Discover Nadine (Nadia Addya): fashion model portfolio featuring runway, Moroccan caftan fashion, editorial portraits, beauty and lifestyle photography. Explore selected work and booking enquiries.",
  applicationName: "Nadine — Fashion Portfolio",
  keywords: ["Nadine model","Nadia Addya","fashion model portfolio","runway model","editorial fashion","Moroccan caftan model","beauty photography","Dubai fashion model"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", url: siteUrl, siteName: "Nadine — Fashion Portfolio",
    title: "Nadine | Runway, Editorial & Fashion Model",
    description: "Discover the fashion portfolio of Nadine (Nadia Addya): runway, Moroccan caftan looks, editorial, beauty and lifestyle photography.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 1600, alt: "Nadine — fashion model portfolio" }],
    locale: "en_US"
  },
  twitter: { card: "summary_large_image", title: "Nadine | Fashion Model Portfolio", description: "Runway, editorial, Moroccan caftan fashion and beauty photography by Nadine (Nadia Addya).", images: ["/images/hero.jpg"] }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}