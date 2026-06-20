import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import "@fontsource/syne/400.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/600.css";
import "@/styles/tokens.css";
import "@/styles/typography.css";
import "@/styles/motion.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cellardoor",
  description: "Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
