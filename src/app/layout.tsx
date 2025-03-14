import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Venue",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <TopMenu/>
        {children}
      </body>
    </html>
  );
}
