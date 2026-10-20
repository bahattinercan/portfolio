import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/content";

export const metadata: Metadata = {
  title: `${profile.name}, Computer Engineer · Backend & Full Stack`,
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
    title: `${profile.name}, Computer Engineer · Backend & Full Stack`,
    description:
      "Django/DRF, Node.js ve Flutter ile üretim yazılımı. 4+ yıl profesyonel deneyim.",
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://bahattinercan-portfolio.vercel.app",
    images: [
      {
        url: "/og.png",
        width: 1280,
        height: 640,
        alt: `${profile.name}, Computer Engineer · Django/DRF · Node.js · Flutter`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}, Computer Engineer · Backend & Full Stack`,
    description:
      "Django/DRF, Node.js ve Flutter ile üretim yazılımı. 4+ yıl profesyonel deneyim.",
    images: ["/og.png"],
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

/* Tema ve dil tercihini ilk boyamadan önce uygula (ekran titremesini önler).
 * Dil sırası: kayıtlı tercih > tarayıcı dili (Türkçe ise TR, değilse EN).
 * Sunucu HTML'i her zaman TR üretildiği için, sonuç EN ise içerik React
 * devralana kadar gizlenir; böylece ziyaretçi önce yanlış dilde metin görmez. */
const bootstrap = `(function(){try{
var th=localStorage.getItem('pf-theme');
if(th!=='dark'&&th!=='light'){th=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}
document.documentElement.dataset.theme=th;
var lg=localStorage.getItem('pf-lang');
if(lg!=='tr'&&lg!=='en'){
var nav=(navigator.languages&&navigator.languages[0])||navigator.language||'en';
lg=/^tr/i.test(nav)?'tr':'en';
}
if(lg==='en'){document.documentElement.setAttribute('data-lang-pending','');
setTimeout(function(){document.documentElement.removeAttribute('data-lang-pending');},2500);}
document.documentElement.lang=lg;
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
