import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-titillium-web",
});

export const metadata: Metadata = {
  title: "JusticeSector | Legal Services Nationwide",
  description:
    "Access quality legal services across the country through our network of 11 trusted institutions.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
