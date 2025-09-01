import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopSidebar from "@/components/DesktopSidebar";
import MobileNav from "@/components/MobileNav";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Amao: Fullstack Software Engineer(Web & Mobile) & AI Engineer",
  description: "I develop modern applications across the full stack(Web & Mobile), combining front-end, backend, and AI to create reliable, defensible products",
  icons: "./favicon.ico",
  openGraph: {
    title: "John Amao: Fullstack Software Engineer(Web & Mobile) & AI Engineer",
    description: "I develop modern applications across the full stack(Web & Mobile), combining front-end, backend, and AI to create reliable, defensible products",
    url: "https://johnamao.com",
    images: [{
      url: "https://johnamao.com/banner.jpg", 
      width: 1200,
      height: 630,
      alt: "John Amao: Fullstack Software Engineer(Web & Mobile) & AI Engineer",
    }],
    siteName: "John Amao",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Amao: Fullstack Software Engineer(Web & Mobile) & AI Engineer",
    description: "I develop modern applications across the full stack(Web & Mobile), combining front-end, backend, and AI to create reliable, defensible products",
    images: "https://johnamao.com/banner.jpg", 
    site: "@johnama0",
    creator: "@johnama0", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#0a0f24]`}>
        <div className='flex flex-row min-h-screen'>
          <DesktopSidebar />
          {children}
          <Analytics />
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
