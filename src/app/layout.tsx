import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stock Mockup - Professional Trading UI Generator",
  description: "Create professional stock trading app mockups with pixel-perfect precision. Input data and generate beautiful mockups for your trading application.",
  keywords: "stock mockup, trading app, UI generator, mockup tool, stock trading, mobile app design",
  authors: [{ name: "Trần Trung Hiếu" }],
  creator: "Trần Trung Hiếu",
  publisher: "Stock Mockup",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stock-mockup.vercel.app'),
  openGraph: {
    title: "Stock Mockup - Professional Trading UI Generator",
    description: "Create professional stock trading app mockups with pixel-perfect precision",
    type: "website",
    locale: "en_US",
    siteName: "Stock Mockup",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Mockup - Professional Trading UI Generator",
    description: "Create professional stock trading app mockups with pixel-perfect precision",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
