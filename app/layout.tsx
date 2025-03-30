import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono, Work_Sans, Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const blackRiver = localFont({
  src: [
    {
      path: "/fonts/BlankRiver.ttf",
      weight: "400",
    },
  ],
  variable: "--font-black-river",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
});

const inter = Inter({
  subsets: [ "latin" ],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: [ "latin" ],
  weight: [ "100", "400", "700" ],
  variable: "--font-roboto-mono"
});

const workSans = Work_Sans({
  subsets: [ "latin" ],
  weight: [ "100", "400", "700" ],
  variable: "--font-work-sans"
});

export const metadata: Metadata = {
  title: "Vaibhav Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
        ${geistMono.variable} 
        ${robotoMono.variable} 
        ${workSans.variable} 
        ${inter.variable}
        ${blackRiver.variable}
        antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
