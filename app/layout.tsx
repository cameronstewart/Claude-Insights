import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Insights - Analyze Your Claude Data",
  description: "Upload your Claude data export and get insights about your usage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
