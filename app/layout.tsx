import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Nadine | Model Portfolio", description: "Nadine (Nadia Addya) — runway, editorial, beauty and commercial model. Portfolio and bookings." };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}