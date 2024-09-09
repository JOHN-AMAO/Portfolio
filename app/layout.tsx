import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopSidebar from "@/components/DesktopSidebar";
import MobileNav from "@/components/MobileNav";
import { Analytics } from "@vercel/analytics/react";
import LeftSideBar from "@/components/LeftSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Amao || AJy",
  description: "Explore John Amao's portfolio, blog, and projects. Full-stack developer passionate about web technologies and innovation.",
  icons: "./favicon.ico",
  twitter: {
    card: "summary_large_image",
    title: "John Amao || AJy - Personal Website",
    description: "Explore John Amao's portfolio, blog, and projects. Full-stack developer passionate about web technologies and innovation.",
    images: "/my-image.png", // Replace with your actual OG image URL
    site: "@johnamao4",
    creator: "@johnamao4", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}  m-5 bg-[#0e1631] mb-5`}>
        <div className='flex flex-row '>
          <DesktopSidebar />
          {children}
          <Analytics />
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
