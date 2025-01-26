import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fihram Cahyo L - Portfolio",
  description:
    "Saya seorang web developer yang berpengalaman dalam membuat website yang responsif, cepat, dan aman. Saya memiliki kemampuan dalam menggunakan teknologi seperti Laravel, Livewire, Filament, Tailwind CSS, dan JavaScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111111]`}
      >

        <Navigation />
        {children}
      </body>
    </html>
  );
}
