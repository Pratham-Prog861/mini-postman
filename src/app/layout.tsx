import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mini-postman-rouge.vercel.app'),
  title: {
    default: "Mini Postman - Free Online API Testing Tool | Postman Alternative",
    template: "%s | Mini Postman"
  },
  description: "Free online API testing tool and Postman alternative. Test REST APIs instantly with GET, POST, PUT, DELETE requests. No installation required. Built with Next.js 16.",
  keywords: [
    "postman alternative",
    "api testing tool",
    "rest api tester",
    "http client",
    "api testing online",
    "free postman",
    "postman clone",
    "api request tool",
    "rest client",
    "http request tool",
    "online postman",
    "web api tester",
    "api development tool",
    "test rest api",
    "api testing free"
  ],
  authors: [{ name: "Pratham" }],
  creator: "Pratham",
  publisher: "Mini Postman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mini-postman-rouge.vercel.app",
    title: "Mini Postman - Free Online API Testing Tool | Postman Alternative",
    description: "Free online API testing tool and Postman alternative. Test REST APIs instantly with GET, POST, PUT, DELETE requests. No installation required.",
    siteName: "Mini Postman",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mini Postman - API Testing Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Postman - Free Online API Testing Tool",
    description: "Free online API testing tool and Postman alternative. Test REST APIs instantly. No installation required.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle",
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
    google: "googleab8c6904ff2e19ca.html",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
