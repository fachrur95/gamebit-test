import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTheme from "@/components/NextTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamebit - Test",
  description: "Test about frontend with Next.JS AppDir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTheme>{children}</NextTheme>
      </body>
    </html>
  );
}
