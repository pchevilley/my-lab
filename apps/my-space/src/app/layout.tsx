import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Theme } from '@chevpa/design-system';

import "remixicon/fonts/remixicon.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Paul Chevilley",
  description: "Hi! This is my personal website where I talk about my career",
  openGraph: {
    title: "Paul Chevilley",
    description: "Hi! This is my personal website where I talk about my career",
    url: "https://yourwebsite.com",
    siteName: "Paul Chevilley",
    images: [
      {
        url: "https://pchevilley.me/profile.jpg",
        width: 400,
        height: 400,
        alt: "Paul Chevilley's Personal Website",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Theme>
        {children}
        </Theme>
      </body>
      <Script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js" />
      <Script src="https://mediafiles.botpress.cloud/797f51e3-c774-4755-85d4-ca0f7142f473/webchat/v2.1/config.js"/>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FKSFJ5D8DD" />
      <Script>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FKSFJ5D8DD');
      `}
      </Script>
    </html>
  );
}
