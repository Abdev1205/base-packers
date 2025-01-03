import type { Metadata } from "next";
import { montserrat, openSans, poppins } from "@/public/font";
import "./globals.css";
import ConfigProviders from "@/provider/ConfigProvider";

export const metadata: Metadata = {
  title: "Base Packer",
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
        className={`${montserrat.variable} ${openSans.variable} ${poppins.variable}`}
      >
        <ConfigProviders>{children}</ConfigProviders>
      </body>
    </html>
  );
}
