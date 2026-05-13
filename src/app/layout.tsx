import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Fowgate Enterprise",
  description: "Fowgate Enterprise is a powerful and flexible data management platform designed to help businesses efficiently organize, analyze, and visualize their data. With its user-friendly interface and robust features, Fowgate Enterprise enables organizations to make informed decisions and drive growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body className={`${rubik.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
