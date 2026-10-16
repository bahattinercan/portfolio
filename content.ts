export const site = {
  name: "Bahattin Ercan",
  role: "Bilgisayar Mühendisi",
  location: "Kütahya, Türkiye",
  email: "bahattin.ercan.43@gmail.com",
  links: {
    github: "https://github.com/bahattinercan",
    linkedin: "https://www.linkedin.com/in/bahattin-ercan",
    caseStudies: "https://github.com/bahattinercan/case-studies",
  },
};

export const pillars = [
  {
    title: "Çok kiracılı iş uygulamaları",
    body: "Güzellik salonu platformu (API + web admin + iki Flutter uygulaması) ve çok şirketli bakım-onarım yönetim sistemi. İzolasyon sınırı tenant ya da şirket; yetkilendirme rol bazlı ve test edilmiş.",
  },
  {
    title: "Masaüstü ve mobil ürünler",
    body: "Windows'ta kurulan çevrimdışı Flutter masaüstü uygulamaları, Flutter mobil uygulamalar, Kotlin/Android oyun prototipleri. Kurulum, sürümleme ve yedekleme ürünün parçası.",
  },
  {
    title: "Zamanlanmış veri hatları",
    body: "Kaynaklardan toplayan, normalize eden, sınıflandıran ve snapshot olarak yayınlayan ingest sistemleri. Kaynak sağlığı raporu ile \"boru hattı sessizce bozuldu mu?\" sorusu cevaplanır.",
  },
];

type Work = {
  title: string;
  kind: string;
  shot: string;
  body: string;
  metric?: string;
  stack: string[];
  href: string;
  live?: string;
};

export const work: Work[] = [
  {
    title: "OpenWeight Radar",
    kind: "Web · veri hattı",
    shot: "/work/openweight-radar.webp",
    body: "Yerelde çalıştırılabilir açık ağırlıklı AI modellerini kategori sekmeleriyle takip eden, haber akışı zamanlanmış olarak güncellenen izleme sitesi.",
    metric:
      "Sınıflandırma mantığı 40 fixture'lık regresyon kapısıyla korunuyor; kaynak sağlığı ayrı komutla raporlanıyor.",
    stack: ["Next.js 16", "TypeScript", "Hugging Face", "GitHub Actions"],
    href: "https://github.com/bahattinercan/local-ai-news",
    live: "https://local-ai-news.vercel.app",
  },
  {
    title: "Güzellik Salonu Platformu",
    kind: "Ürün · 4 uygulama",
    shot: "/work/beauty-salon.webp",
    body: "Çok kiracılı salon yönetimi: Express + Sequelize API, Next.js admin paneli, Flutter salon ve müşteri uygulamaları. 535 test.",
    metric:
      "Üretimde varsayılan demo şifreleriyle seed çalıştırmayı reddeden koruma; tenant izolasyonu test edilmiş.",
    stack: ["Express", "Sequelize", "Next.js", "Flutter", "SQLite/PostgreSQL"],
    href: "https://github.com/bahattinercan/beauty-salon",
  },
  {
    title: "Plague Tracker",
    kind: "Web · açık kaynak",
    shot: "/work/plague-tracker.webp",
    body: "Haber iddialarını kaç bağımsız kaynağın bildirdiğine göre etiketleyen izleme platformu. Sistem hiçbir yerde \"doğrulandı\" demez; yalnızca kimin ne bildirdiğini raporlar.",
    metric: "Bağımsızlık grupları, çelişkili bilgi etiketi ve kaynak sağlığı takibi.",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Vercel"],
    href: "https://github.com/bahattinercan/russia-plague-website",
    live: "https://plague-tracker.vercel.app",
  },
  {
    title: "Müşteri Sipariş Takip",
    kind: "Masaüstü · çevrimdışı",
    shot: "/work/siparis-takip.webp",
    body: "İmalat atölyesi için sipariş → üretim → tahsilat takibi. Windows masaüstü, tek bilgisayar, veriler yerel SQLite'ta.",
    metric:
      "725 test · çok kalemli sipariş, kullanıcı tanımlı üretim aşamaları, kısmi tahsilat, stok ve raporlar.",
    stack: ["Flutter", "Dart", "SQLite", "Windows"],
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/musteri-siparis-takip.md",
  },
  {
    title: "Barber Shops",
    kind: "Mobil · API",
    shot: "/work/barber-shops.webp",
    body: "Berber randevu ve personel yönetimi: Flutter uygulaması ve Node.js/Express REST API'si; müdür, çalışan ve admin rolleri.",
    metric:
      "Randevu, dükkan, servis, yorum ve favori akışlarının tamamı rol bazlı yetkilendirmeyle korunuyor.",
    stack: ["Flutter", "Dart", "Node.js", "Express"],
    href: "https://github.com/bahattinercan/barber_shops",
  },
  {
    title: "Döner Sipariş Sitesi",
    kind: "Web · sıfır bağımlılık",
    shot: "/work/doner-website.webp",
    body: "Lokanta için statik sipariş sitesi: WhatsApp üzerinden sipariş, gece modu, localStorage sepet. Derleme adımı ve framework yok.",
    metric:
      "CSP/HSTS başlıklarıyla yayında; `vercel.json` kaynak desenindeki geçersiz `/**` düzeltildi.",
    stack: ["HTML", "CSS", "JavaScript", "MIT"],
    href: "https://github.com/bahattinercan/doner-website",
    live: "https://doner-website.vercel.app",
  },
];

export const caseStudies = [
  {
    name: "Müşteri Sipariş Takip",
    note: "Windows masaüstü, 725 test, çevrimdışı lisans/aktivasyon",
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/musteri-siparis-takip.md",
  },
  {
    name: "Bakım Onarım Yönetimi (CMMS)",
    note: "NestJS + Prisma + PostgreSQL, BullMQ outbox, OpenAPI sözleşme kapısı",
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/bakim-onarim-yonetim.md",
  },
  {
    name: "JobRadar",
    note: "7 kaynaktan ilan toplama, deterministik skorlama, 29 test",
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/find-job.md",
  },
  {
    name: "Taskbar Hero",
    note: "Saf Kotlin sabit adımlı simülasyon motoru, 101 JVM testi",
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/new-taskbar-hero.md",
  },
];

export const technologies = [
  {
    group: "Mobil ve masaüstü",
    items: ["Flutter", "Dart", "Riverpod", "go_router", "Dio"],
  },
  {
    group: "Web",
    items: ["TypeScript", "Next.js", "React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    group: "Backend ve veri",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Prisma",
      "Sequelize",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "BullMQ",
      "Drizzle ORM",
    ],
  },
  {
    group: "Oyun ve sistem",
    items: ["C#", "Unity", "Kotlin", "Android", "C++", "Python"],
  },
  {
    group: "Araçlar",
    items: ["Git", "GitHub Actions", "Docker", "Vercel", "Mocha", "Vitest", "dependency-cruiser"],
  },
];

export const rules = [
  {
    title: "Sessizce bozulabilecek mantığa test yazarım",
    body: "Skorlama, sınıflandırma, üretim aşamaları, durum geçişleri, yetkilendirme. Bu mantık bozulduğunda uygulama çökmez — sadece yanlış sonuç verir. Teste ihtiyacı olan yer tam olarak burasıdır.",
  },
  {
    title: "Kararları kodun yanında yazarım",
    body: "Hangi kısıtın kabul edildiği, neden o kütüphanenin seçildiği ve neyi yapmamaya karar verdiğim repo içinde durur. Sözlü aktarılan bilgi kaybolur.",
  },
  {
    title: "Geliştirme verisi ile gerçek veriyi ayırırım",
    body: "Demo veri sentetiktir ve üretimde varsayılan şifreyle çalışmak reddedilir. \"Demo kullanıcıyla canlıya çıkmak\" hatası yapısal olarak imkânsız hâle gelir.",
  },
  {
    title: "Sınırları yazarım",
    body: "Her projenin \"bilinen sınırlar\" bölümü var. Bitmemiş işi bitmiş gibi göstermek, teknik borcu gizlemenin en pahalı yoludur.",
  },
];
