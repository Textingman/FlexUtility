import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "BWO Verify | Omnichannel Transactional Messaging Platform",
  description: "BWO Verify is a complete transactional messaging platform — delivering consumer identity verification, account notifications, and one-time passwords across SMS, email, voice, RCS, and push. One platform, every channel.",
  keywords: "transactional messaging, SMS verification, OTP, one-time password, identity verification, account notifications, omnichannel messaging, 2FA, RCS, push notifications",
  openGraph: {
    title: "BWO Verify | Omnichannel Transactional Messaging Platform",
    description: "Reach customers on any channel. BWO Verify delivers identity verification, account notifications, and OTPs across SMS, email, voice, RCS, and push — all from one platform.",
    url: "https://bwoverify.com",
    siteName: "BWO Verify",
    images: [
      {
        url: "https://bwoverify.com/bwo-verify-logo-trimmed.png",
        width: 1200,
        height: 630,
        alt: "BWO Verify — Omnichannel Transactional Messaging",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BWO Verify | Omnichannel Transactional Messaging Platform",
    description: "Reach customers on any channel. Identity verification, account notifications, and OTPs across SMS, email, voice, RCS, and push.",
    images: ["https://bwoverify.com/bwo-verify-logo-trimmed.png"],
  },
  metadataBase: new URL("https://bwoverify.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V4BBDNTTF9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V4BBDNTTF9');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}
