# Portfolyo

Kişisel portfolyo sitesi — Backend & Full Stack geliştirici olarak işlerim, deneyimim
ve vaka çalışmalarım.

**Canlı:** https://bahattinercan-portfolio.vercel.app

GitHub profilindeki README'nin görsel sürümü; aynı hikâyeyi anlatır ama GitHub dışında
paylaşılabilir bir adres sağlar (LinkedIn, CV, başvuru formları).

## Bölümler

| Bölüm | İçerik |
|---|---|
| Hero | Unvan, konum, konumlandırma paragrafı, çalışma durumu, sosyal ikonlar, CV indirme, mimari şeması |
| Ne yapıyorum | Dört hat: backend/API, ödeme entegrasyonu, mobil-masaüstü, veri-altyapı |
| Deneyim | Altı satırlık zaman çizelgesi (beş rol + askerlik) |
| Yetenekler | Öz değerlendirme çubukları + altı grupta teknoloji listesi |
| İşler | Altı proje kartı: ekran görüntüsü, özet, ölçü, teknolojiler, kaynak/canlı bağlantı |
| Vaka çalışmaları | Kaynak kodu özel olan dört ürünün mühendislik anlatımı |
| Eğitim | Üniversite, üç sertifika, diller |
| Nasıl çalışıyorum | Üç karar: test, dokümantasyon, demo/gerçek veri ayrımı |
| İletişim | E-posta, iki dilde CV, LinkedIn |

## Teknik

| | |
|---|---|
| Çerçeve | Next.js 16 (App Router), TypeScript |
| Üretim | Tamamen statik — `next build` ile önceden üretilir |
| Stil | Tek CSS dosyası; tüm renkler `app/globals.css` içindeki token'lardan |
| İçerik | `content.ts` — tüm metin iki dilli (`{tr, en}`), bileşenlerden ayrı |
| Görseller | `public/work/` (webp, toplam ~290 KB) + elle yazılmış SVG hero şeması |
| CV | `public/cv/` — iki dilde PDF, telefon numarası redakte edilmiş |

**Harici bağımlılık yok:** sistem fontu kullanılır; rozet servisi, izleme betiği, CDN ve
üçüncü parti görsel çağrısı yoktur.

### Türkçe / İngilizce ve açık / koyu tema

İki tercih de `localStorage`'da tutulur ve **ilk boyamadan önce** uygulanır
(`app/layout.tsx` içindeki bootstrap script), böylece sayfa açılırken titreme olmaz.
Kayıtlı tercih yoksa sistem teması (`prefers-color-scheme`) kullanılır.

### Animasyonlar

Kaydırma animasyonları `IntersectionObserver` + CSS geçişiyle yapılır; `react-reveal`
gibi bir paket yoktur. `prefers-reduced-motion: reduce` verildiğinde tüm geçişler kapanır.

## Yerel geliştirme

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

## İçerik güncelleme

Tüm metin `content.ts` içinde. Yeni bir proje eklemek için `work` dizisine bir kayıt ve
`public/work/` altına 16:9 (1200×675) bir görsel eklemek yeterli; iki dilde metin
verilmezse tip denetimi uyarır.

CV dosyalarını güncellerken telefon numarasını **koymayın** — public bir adreste
duruyorlar.

## Erişilebilirlik ve başlıklar

- Tüm görsellerde açıklayıcı `alt`; hero şemasında `role="img"` ve `aria-label`.
- Tema düğmelerinde `aria-label` ve `title` var.
- Koyu/açık iki temada da metin kontrastı korunur.
- `next.config.mjs` içinde `X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options`, `Permissions-Policy` başlıkları tanımlı.

## Bilinen sınırlar

- **Blog yok.** Teknik yazılar için bölüm kurulmadı.
- **Öz değerlendirme çubukları ölçüm değil.** Sayfada da açıkça öyle etiketlendi;
  kendini değerlendirme, ölçülmüş bir gösterge değil.
- **Vaka çalışmaları site içinde değil**, GitHub'daki `case-studies` reposunda. Site
  oraya bağlantı veriyor.
- **Tek sayfa.** Bölümler çoğalırsa (yazılar, konuşmalar) ayrı rotalara taşınmalı.

## Lisans

MIT
