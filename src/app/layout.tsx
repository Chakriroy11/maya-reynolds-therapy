import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy for Anxiety, Trauma & Burnout in Santa Monica",
  description:
    "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica, California, providing therapy for adults navigating anxiety, panic, trauma, burnout, perfectionism, and chronic stress.",
  keywords: [
    "therapist Santa Monica",
    "therapy Santa Monica",
    "psychologist Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapy Santa Monica",
    "panic therapy Santa Monica",
    "perfectionism therapy",
    "adult therapy California",
    "online therapy California",
  ],
  authors: [
    {
      name: "Dr. Maya Reynolds, PsyD",
    },
  ],
  creator: "Dr. Maya Reynolds, PsyD",
  metadataBase: new URL("https://maya-reynolds-therapy-mocha.vercel.app"),
  openGraph: {
    title:
      "Dr. Maya Reynolds, PsyD | Therapy for Anxiety, Trauma & Burnout in Santa Monica",
    description:
      "Warm, collaborative, and grounded therapy for adults in Santa Monica and across California.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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