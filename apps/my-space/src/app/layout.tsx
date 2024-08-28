import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul Chevilley",
  description: "Paul Chevilley's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js" />
      <Script src="https://mediafiles.botpress.cloud/797f51e3-c774-4755-85d4-ca0f7142f473/webchat/v2.1/config.js"/>
    </html>
  );
}
