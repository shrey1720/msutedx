import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEDx MSU Baroda - Echoes of Tomorrow",
  description: "Ideas worth spreading. Join us for TEDx MSU Baroda's 'Echoes of Tomorrow' - a celebration of innovation, culture, and human potential.",
  keywords: "TEDx, MSU Baroda, ideas, innovation, culture, technology, speakers",
  authors: [{ name: "TEDx MSU Baroda Team" }],
  openGraph: {
    title: "TEDx MSU Baroda - Echoes of Tomorrow",
    description: "Ideas worth spreading. Join us for TEDx MSU Baroda's 'Echoes of Tomorrow'",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
