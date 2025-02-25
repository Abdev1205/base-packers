import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { montserrat, openSans, poppins } from "@/public/font";
import "./globals.css";
import ConfigProviders from "@/provider/ConfigProvider";
import ENV from "@/config/ENV";

export const metadata: Metadata = {
  title: "Base Packer",
  description:
    "A community-driven platform for sharing and discovering starter packages and templates for various tech stacks.",
  keywords:
    "starter templates, boilerplate, tech stacks, GitHub templates, web development",
  authors: [{ name: "Abhay Mishra", url: "https://abhaymishra.in" }],
  verification: {
    google: "0U3Gt4Ivo_EED11zL8wjf-4O6oMSmQo1jdsv7_IVflM",
  },
  openGraph: {
    title: "Base Packer - Discover & Share Starter Templates",
    description:
      "Find and share starter packages for various tech stacks, simplifying development workflows.",
    url: "https://basepackers.vercel.app", // Update with actual domain
    type: "website",
    images: [
      {
        url: "https://basepackers.vercel.app/assets/common/logo.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Base Packer Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base Packer - Discover & Share Starter Templates",
    description:
      "Find and share starter packages for various tech stacks, simplifying development workflows.",
    images: ["https://basepackers.vercel.app/assets/common/logo.png"], // Replace with your OG image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${poppins.variable}`}
      >
        <ConfigProviders>{children}</ConfigProviders>
        {ENV.GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={ENV.GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
