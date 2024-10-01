import type { Metadata } from "next";
import "./globals.css";
import { urbanist } from "@/utils/fonts";
import 'swiper/css';
import 'swiper/css/pagination';

export const metadata: Metadata = {
  title: "Brop CO",
  description: "Discover Brop, where experts deliver custom software solutions, web development, and innovative technology services. Transform your vision into reality with our top-tier expertise.",

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
