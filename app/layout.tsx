import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jamb-eight.vercel.app/"),

  title: {
    default: "Jamb. – Antique Fireplaces, Lighting & Furniture",
    template: "%s | Jamb.",
  },

  description:
    "Jamb specialises in antique and reproduction fireplaces, chimneypieces, lighting and furniture, handcrafted in England.",

  keywords: [
    "antique fireplaces",
    "chimneypieces",
    "antique lighting",
    "reproduction furniture",
    "luxury interiors",
  ],

  openGraph: {
    type: "website",
    siteName: "Jamb",
    title: "Jamb. – Antique Fireplaces, Lighting & Furniture",
    description:
      "Explore Jamb’s collection of antique and reproduction fireplaces, lighting and furniture.",
    url: "https://www.jamb-eight.vercel.app",
    images: [
      {
        url: "/landing/jamb-logo.png",
        width: 1200,
        height: 630,
        alt: "Jamb – Antique Fireplaces, Lighting & Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamb. – Antique Fireplaces, Lighting & Furniture",
    description:
      "Antique and reproduction fireplaces, lighting and furniture by Jamb.",
    images: ["/landing/jamb-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
