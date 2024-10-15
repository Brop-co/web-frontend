import type { Metadata } from "next";
import "./globals.css";
import { urbanist } from "@/utils/fonts";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const metadata: Metadata = {
  title: "Brop",
  description: "Discover Brop, where experts deliver custom software solutions, web development, and innovative technology services. Transform your vision into reality with our top-tier expertise.",
  keywords: "brop, brop inc, brop co, brop company ",
  openGraph: {
    type: "website",
    url: "https://brop.co.rw",
    title: "Brop CO",
    description: "Discover Brop, where experts deliver custom software solutions, web development, and innovative technology services. Transform your vision into reality with our top-tier expertise.",
    siteName: "Brop",
    images: [{
      url: "/images/logo_full.png",
      width: 800,
      height: 600
    }],
    locale: "en_US",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${urbanist.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
