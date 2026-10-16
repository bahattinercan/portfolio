# Portfolyo

Kişisel portfolyo sitesi — çok kiracılı iş uygulamaları, masaüstü araçları ve
zamanlanmış veri hatları.

**Canlı:** https://bahattinercan-portfolio.vercel.app

GitHub profilindeki README'nin görsel sürümü; içerik olarak aynı hikâyeyi anlatır
ama GitHub dışında paylaşılabilir bir adres sağlar.

## Teknik

| | |
|---|---|
| Çerçeve | Next.js 16 (App Router), TypeScript |
| Üretim | Tamamen statik — `next build` ile önceden üretilir |
| Stil | Tek CSS dosyası, tasarım token'ları `app/globals.css` içinde |
| İçerik | `content.ts` — metin ve proje verisi bileşenlerden ayrı |
| Görseller | `public/work/` altında webp (toplam ~290 KB) |

**Harici bağımlılık yok:** font olarak sistem yazı tipi kullanılır, rozet servisi,
izleme betiği, CDN veya üçüncü parti görsel çağrısı yoktur. Sayfa 107 kB ilk yükle
açılır.

## Yerel geliştirme

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

## İçerik güncelleme

Metin ve proje listesi `content.ts` içinde; bileşenlere dokunmadan düzenlenebilir.
Yeni bir proje eklemek için `work` dizisine bir kayıt ve `public/work/` altına
16:9 (1200×675) bir görsel eklemek yeterli.

## Erişilebilirlik ve başlıklar

- Tüm görsellerde açıklayıcı `alt` metni var.
- Renk paleti koyu zemin üzerine yüksek kontrastlı metin kullanır.
- `next.config.mjs` içinde `X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options` ve `Permissions-Policy` başlıkları tanımlı.

## Bilinen sınırlar

- **Tek tema.** Site koyu tema için tasarlandı; açık tema yok. Profildeki GitHub
  banner'ı iki temayı destekliyor, site desteklemiyor.
- **Blog yok.** Teknik yazılar için ayrı bir bölüm kurulmadı.
- **İngilizce sürüm yok.** İçerik Türkçe; uluslararası başvurular için
  `content.ts` üzerinden ikinci bir sözlük eklenmesi gerekir.

## Lisans

MIT
