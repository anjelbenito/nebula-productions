import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation-bar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nebula Productions",
  description: "Nebula Productions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-light-gray min-h-screen font-sans p-4 md:p-8`}
    >
    <NavBar/>
    {children}

    <footer className="text-center text-gray-500 text-sm py-4 border-t border-mid-gray/50 mt-12">
        &copy; 2025 Nebula Collective. All rights reserved.
    </footer>
    </body>
    </html>
  );
}
