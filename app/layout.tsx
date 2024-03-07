import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopSidebar from "@/components/DesktopSidebar";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Amao || AJy",
  description: "This is the official website of John Amao",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}  m-5 bg-[#0e1631] `}>
        <div className='flex flex-row'>
          <DesktopSidebar />
          {children}
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
