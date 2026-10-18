import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/content";

export const metadata: Metadata = {
  title: `${profile.name} — Computer Engineer · Backend & Full Stack`,
  description:
    "Django/DRF, Node.js ve Flutter ile üretim yazılımı geliştiren bilgisayar mühendisi. REST API, JWT ve rol bazlı yetkilendirme, 3D Secure doğrulamalı ödeme akışları, PostgreSQL şema tasarımı, Docker ile dağıtım. 4+ yıl profesyonel deneyim.",
  keywords: [
    "Backend Developer",
    "Full Stack Developer",
    "Django",
    "Django REST Framework",
    "Node.js",
    "Flutter",
    "PostgreSQL",
    "Bilgisayar Mühendisi",
    "Kütahya",
  ],
  authors: [{ name: profile.name, url: profile.links.github }],
  metadataBase: new URL("https://bahattinercan-portfolio.vercel.app"),
  openGraph: {
    title: `${profile.name} — Computer Engineer · Backend & Full Stack`,
    description:
      "Django/DRF, Node.js ve Flutter ile üretim yazılımı. 4+ yıl profesyonel deneyim.",
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://bahattinercan-portfolio.vercel.app",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f14" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

/* Tema ve dil tercihini ilk boyamadan önce uygula (ekran titremesini önler). */
const bootstrap = `(function(){try{
var th=localStorage.getItem('pf-theme');
if(th!=='dark'&&th!=='light'){th=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}
document.documentElement.dataset.theme=th;
var lg=localStorage.getItem('pf-lang');
if(lg==='tr'||lg==='en'){document.documentElement.lang=lg;}
}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
