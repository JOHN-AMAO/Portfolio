import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopSidebar from "@/components/DesktopSidebar";
import MobileNav from "@/components/MobileNav";
import { Analytics } from "@vercel/analytics/react";
import LeftSideBar from "@/components/LeftSideBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Amao || AJy",
  description: "This is the official website of John Amao.",
  icons: "./favicon.ico",
  twitter: {
    card: "summary_large_image",
    title: "John Amao || AJy - Personal Website",
    description: "Explore John Amao's portfolio, blog, and projects. Full-stack developer passionate about web technologies and innovation.",
    images: "/my-image.png", // Replace with your actual OG image URL
    site: "@johnamao4",
    creator: "@johnamao4", // Use 'creator' instead of 'handle'
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
