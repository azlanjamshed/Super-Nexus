import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Super Nexus| Construction & Real Estate",
  description: "Premium construction and real estate development company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f6f5f2] text-black antialiased">
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
