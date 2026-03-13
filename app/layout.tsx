import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waterloo IV 2026 | Tournament Package",
  description:
    "Centralized tournament information for Waterloo IV 2026, including deadlines, logistics, forms, and contact details.",
  keywords: [
    "debate tournament",
    "Waterloo IV",
    "tournament package",
    "registration",
    "judge form",
  ],
  openGraph: {
    title: "Waterloo IV 2026 | Tournament Package",
    description:
      "Deadlines, venue logistics, forms, and contact details for Waterloo IV 2026.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterloo IV 2026 | Tournament Package",
    description:
      "Centralized tournament information for all Waterloo IV attendees.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
