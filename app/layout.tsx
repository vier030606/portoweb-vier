import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Vier | Portfolio",
  description: "Javier Nur Hidayat (Vier) - Data Science & Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col relative bg-background text-foreground">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
