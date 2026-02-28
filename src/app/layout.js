import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ISAConnect | Real Estate Lead Conversion & Appointment Scheduling",
    template: "%s | ISAConnect",
  },
  description: "ISAConnect acts as your dedicated Inside Sales Agent (ISA) team, converting leads into qualified appointments for real estate teams, agents, and home inspection companies. Inbound call handling, outbound calling, appointment scheduling, lead nurturing, CRM follow-up.",
  keywords: ["ISAConnect", "inside sales agent", "lead conversion", "appointment scheduling", "real estate ISA", "CRM follow-up", "lead nurturing"],
  authors: [{ name: "ISAConnect" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isaconnect.com",
    siteName: "ISAConnect",
    title: "ISAConnect | Real Estate Lead Conversion & Appointment Scheduling",
    description: "ISAConnect: Dedicated ISA team for real estate and home inspection companies. Inbound/outbound calling, appointment scheduling, lead nurturing, CRM follow-up.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ISAConnect - Real Estate Lead Conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISAConnect | Real Estate Lead Conversion",
    description: "ISAConnect: Dedicated ISA team for real estate and home inspection companies. Inbound/outbound calling, appointment scheduling, lead nurturing, CRM follow-up.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
