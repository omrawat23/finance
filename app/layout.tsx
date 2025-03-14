import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white suppressHydrationWarning`}
      >
              {/* Grid Background */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] before:bg-[size:4rem_4rem] before:opacity-">
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
      </div>
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
