import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer"
 import TopBar from "./_components/TopBar"
 import Navbar from "./_components/Navbar"
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title:  "مجموعة الظاهرى",
  description: "شركة رائدة في تقديم الحلول والخدمات المتكاملة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        
 
<Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
