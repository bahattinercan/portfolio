import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/content";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "Çok kiracılı iş uygulamaları, Windows masaüstü araçları ve zamanlanmış veri hatları. Flutter, TypeScript, NestJS, PostgreSQL.",
  authors: [{ name: site.name, url: site.links.github }],
  metadataBase: new URL("https://bahattinercan-portfolio.vercel.app"),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Çok kiracılı iş uygulamaları, masaüstü araçları ve veri hatları geliştiriyorum.",
    type: "website",
    locale: "tr_TR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
