import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title:
    "Ajay Amal | Fullstack Developer with 5+ Years Experience in React, Next.js, Node.js, Nest.js, PostgreSQL",
  description:
    "Senior Fullstack Developer with 5+ years of experience building enterprise-grade web apps using React, Next.js, Node.js, Nest.js, PostgreSQL. Proficient in CMS integration, performance optimization, CI/CD, and Agile collaboration.",
  icons: [
    {
      rel: "icon",
      url: "/images/profile-gen.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>{children}</body>
    </html>
  );
}
