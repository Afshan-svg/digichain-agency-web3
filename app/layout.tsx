import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigiChain | Design & Development Studio",
  description: "Grow your business with DigiChain, a design & development studio.",
  openGraph: {
    // images: [
    //   {
    //     url: '/logo.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Logo',
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
