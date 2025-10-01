import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialBar from "@/components/SocialBar";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boma Flame",
  description: "Fish, Pork and Platters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen w-full">

          {/* <Image
            src="/bg.png"
            alt="background"
            fill
            priority
            className="object-cover -z-10"
          />

          <div className="absolute inset-0 bg-black/30 -z-10" /> */}

          {/* Page Content */}
          <div className="relative mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <SocialBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
