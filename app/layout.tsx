import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Nadia | Model Portfolio", description: "Nadia — runway, editorial, beauty and commercial model. Portfolio and bookings." };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}