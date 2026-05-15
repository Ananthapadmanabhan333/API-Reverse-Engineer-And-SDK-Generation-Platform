import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus | API Intelligence OS",
  description: "Autonomous API Reverse Engineering and SDK Generation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
