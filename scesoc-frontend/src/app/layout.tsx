// src/app/layout.tsx

import "./globals.css"; // already there
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCESoc",
  description: "Official SCESoc website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
        style={{ backgroundColor: "#0e1012", color: "#ffffff", minHeight: "100vh" }}
      >
        {children}
      </body>
    </html>
  );
}
