import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GPTcat-App",
    default: "GPTcat-App",
  },
  description: "GPTcat-App: A GPT-4 powered chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <head>
          <link
            rel='icon'
            href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
            <text y=%22.9em%22 font-size=%2290%22> 💟</text>
            </svg>'
          />
        </head>

        <body
          className={`bg-base-200 ${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Providers> {children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
