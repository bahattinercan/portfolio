export type Lang = "tr" | "en";

/** İki dilli metin. Bileşenler `t(lang, field)` ile okur. */
export type L = { tr: string; en: string };

export const t = (lang: Lang, v: L) => (lang === "tr" ? v.tr : v.en);

export const profile = {
  name: "Bahattin Ercan",
  role: "Computer Engineer",
  location: "Kütahya, Türkiye",
  email: "bahattin.ercan.43@gmail.com",
  links: {
    github: "https://github.com/bahattinercan",
    linkedin: "https://www.linkedin.com/in/bahattin-ercan",
    caseStudies: "https://github.com/bahattinercan/case-studies",
  },
  cv: {
    tr: "/cv/Bahattin-Ercan-CV-TR.pdf",
    en: "/cv/Bahattin-Ercan-CV-EN.pdf",
  },
};

export const ui = {
  nav: {
    experience: { tr: "Deneyim", en: "Experience" },
    skills: { tr: "Yetenekler", en: "Skills" },
    work: { tr: "İşler", en: "Work" },
    cases: { tr: "Vaka çalışmaları", en: "Case studies" },
    education: { tr: "Eğitim", en: "Education" },
    contact: { tr: "İletişim", en: "Contact" },
  },
  cta: {
    contact: { tr: "İletişime geç", en: "Contact me" },
    cv: { tr: "CV indir", en: "Download CV" },
    cvOther: { tr: "CV (İngilizce)", en: "CV (Turkish)" },
  },
  availability: {
    tr: "Yurt dışı remote ve Türkiye'de yerinde çalışmaya açık · hemen başlayabilirim",
    en: "Open to remote worldwide and onsite in Türkiye · available immediately",
  },
  labels: {
    language: { tr: "Dil", en: "Language" },
    theme: { tr: "Tema", en: "Theme" },
  },
};

export const hero = {
  title: { tr: "Bahattin Ercan", en: "Bahattin Ercan" },
  subtitle: {
    tr: "Backend & Full Stack · Django / DRF · Node.js · Flutter",
    en: "Backend & Full Stack · Django / DRF · Node.js · Flutter",
  },
  lead: [
    {
      tr: "2019'dan beri kod yazıyorum, 4+ yılı profesyonel. Django ve Django REST Framework ile REST API, JWT kimlik doğrulama ve rol bazlı yetkilendirme sistemleri; Node.js/Express ile servis katmanları; Flutter ile tek kod tabanından iOS ve Android uygulamaları geliştiriyorum.",
      en: "I have been writing code since 2019, with 4+ years of professional experience. I build REST APIs, JWT authentication and role-based authorization with Django and Django REST Framework; service layers with Node.js/Express; and cross-platform iOS/Android apps from a single Flutter codebase.",
    },
    {
      tr: "Web tarafında React, Next.js ve Angular ile arayüz kuruyorum; oyun tarafında Unity ve C# ile hypercasual mobil oyunlar geliştirip yayınladım. Veritabanı şeması, migration'lar ve Docker ile dağıtım bu dört alanın ortak zemini.",
      en: "On the web I build interfaces with React, Next.js and Angular, and on the game side I have developed and published hypercasual mobile games with Unity and C#. Database schema, migrations and Docker deployment are the shared foundation across all four areas.",
    },
  ] as L[],
};

export const pillars: { title: L; body: L }[] = [
  {
    title: { tr: "Backend ve API", en: "Backend & API" },
    body: {
      tr: "Django/DRF ile REST API, JWT kimlik doğrulama, rol bazlı yetkilendirme ve WebSocket ile gerçek zamanlı akış. Node.js/Express servis katmanları; PostgreSQL şema tasarımı ve migration'lar.",
      en: "REST APIs with Django/DRF, JWT authentication, role-based authorization and real-time flows over WebSocket. Service layers with Node.js/Express; PostgreSQL schema design and migrations.",
    },
  },
  {
    title: { tr: "Web", en: "Web" },
    body: {
      tr: "React, Next.js ve Angular ile arayüz. API entegrasyonu, responsive yerleşim, yönetim panelleri ve veri yoğun tablo ekranları.",
      en: "Interfaces with React, Next.js and Angular. API integration, responsive layout, admin panels and data-heavy table screens.",
    },
  },
  {
    title: { tr: "Mobil ve masaüstü", en: "Mobile & desktop" },
    body: {
      tr: "Flutter ile tek kod tabanından iOS ve Android yayınlama, Windows masaüstü uygulamaları, React Native. Kurulum, sürümleme ve yedekleme işin parçası.",
      en: "Single-codebase iOS and Android publishing with Flutter, Windows desktop apps, React Native. Installation, versioning and backup are part of the job.",
    },
  },
  {
    title: { tr: "Oyun", en: "Game" },
    body: {
      tr: "Unity ve C# ile hypercasual mobil oyunlar. Level tasarımı, oyun mekaniği, kontrol ve fizik sistemleri; AdMob ve Unity Ads ile monetizasyon.",
      en: "Hypercasual mobile games with Unity and C#. Level design, game mechanics, control and physics systems; monetisation with AdMob and Unity Ads.",
    },
  },
];

export const experience: { role: L; scope: L; period: L }[] = [
  {
    role: { tr: "Backend & Mobil Geliştirici", en: "Backend & Mobile Developer" },
    period: { tr: "2026", en: "2026" },
    scope: {
      tr: "Django ve DRF ile web platformları, servisler ve REST API'ler. Flutter ile tek kod tabanından iOS/Android yayınlama ve web–mobil istemcilerin backend ile entegrasyonu.",
      en: "Web platforms, services and REST APIs with Django and DRF. Shipped cross-platform iOS/Android apps from a single Flutter codebase and integrated web/mobile clients with the backend.",
    },
  },
  {
    role: { tr: "Askerlik hizmeti", en: "Military service" },
    period: { tr: "2025 – 2026", en: "2025 – 2026" },
    scope: { tr: "Uzun dönem.", en: "Long-term service." },
  },
  {
    role: { tr: "Full Stack Geliştirici", en: "Full Stack Developer" },
    period: { tr: "2023 – 2024", en: "2023 – 2024" },
    scope: {
      tr: "Flutter ile ölçeklenebilir modüler mimari (Provider, Fluro, GetIt, Dio); Node.js/Express REST API ve JWT + rol bazlı yetkilendirme; PostgreSQL şema tasarımı ve Sequelize migration'ları; Docker ile taşınabilir dağıtım; Google Maps, Firebase, bildirim ve WebSocket entegrasyonları.",
      en: "Scalable modular architecture in Flutter (Provider, Fluro, GetIt, Dio); a Node.js/Express REST API with JWT and role-based authorization; PostgreSQL schema design and Sequelize migrations; portable deployment with Docker; Google Maps, Firebase, notifications and WebSocket integrations.",
    },
  },
  {
    role: { tr: "IoT & Mobil Geliştirici", en: "IoT & Mobile Developer" },
    period: { tr: "2022 – 2023", en: "2022 – 2023" },
    scope: {
      tr: "Raspberry Pi, Node.js ve Flutter ile hava iyileştirme cihazına anlık uzaktan kontrol ve otomasyon. Canlı veri takibi, güvenli haberleşme ve rol/izin yöneten admin mimarisi (mobil + web panelleri).",
      en: "Real-time remote control and automation for an air treatment device using Raspberry Pi, Node.js and Flutter. Live data tracking, a secure communication layer, and an admin architecture for roles and permissions (mobile + web panels).",
    },
  },
  {
    role: { tr: "Unity / C# Oyun Geliştirici", en: "Unity / C# Game Developer" },
    period: { tr: "2022", en: "2022" },
    scope: {
      tr: "Hypercasual mobil oyunlar: level tasarımı, oyun mekaniği, kontrol ve fizik sistemleri. AdMob ve Unity Ads monetizasyonu; CPI testleri ve retention analizi.",
      en: "Hypercasual mobile games: level design, game mechanics, control and physics systems. AdMob and Unity Ads monetisation; CPI testing and retention analysis.",
    },
  },
  {
    role: { tr: "Yazılım Stajyeri", en: "Software Intern" },
    period: { tr: "2021", en: "2021" },
    scope: {
      tr: "PHP, Angular ve Node.js ile kurumsal projelerde geliştirme; frontend ve backend tarafında tam geliştirme döngüsü.",
      en: "Contributed to corporate projects with PHP, Angular and Node.js; experienced the full development cycle across frontend and backend.",
    },
  },
];

export const experienceNote: L = {
  tr: "İşveren adları kamuya açık profilde paylaşılmıyor; süreçte ve CV'de belirtiliyor.",
  en: "Employer names are not listed on the public profile; they are shared in the CV and during the process.",
};

type Work = {
  title: string;
  kind: L;
  shot: string;
  body: L;
  metric: L;
  stack: string[];
  href: string;
  live?: string;
};

export const work: Work[] = [
  {
    title: "OpenWeight Radar",
    kind: { tr: "Web · veri hattı", en: "Web · data pipeline" },
    shot: "/work/openweight-radar.webp",
    body: {
      tr: "Yerelde çalıştırılabilir açık ağırlıklı AI modellerini kategori sekmeleriyle takip eden, haber akışı zamanlanmış olarak güncellenen izleme sitesi.",
      en: "A tracking site for locally runnable open-weight AI models, grouped by category, with a news feed that refreshes on a schedule.",
    },
    metric: {
      tr: "Sınıflandırma mantığı 40 fixture'lık regresyon kapısıyla kilitli; kaynak sağlığı ayrı raporlanıyor.",
      en: "Classification logic is locked by a 40-fixture regression gate; source health is reported separately.",
    },
    stack: ["Next.js 16", "TypeScript", "Hugging Face", "GitHub Actions"],
    href: "https://github.com/bahattinercan/local-ai-news",
    live: "https://local-ai-news.vercel.app",
  },
  {
    title: "Güzellik Salonu Platformu",
    kind: { tr: "Ürün · 4 uygulama", en: "Product · 4 apps" },
    shot: "/work/beauty-salon.webp",
    body: {
      tr: "Çok kiracılı salon yönetimi: API, web yönetim paneli ve iki Flutter uygulaması. Tek backend, dört istemci.",
      en: "Multi-tenant salon management: an API, a web admin panel and two Flutter apps. One backend, four clients.",
    },
    metric: {
      tr: "535 test · kiracı izolasyonu test edilmiş · üretimde varsayılan şifreyle çalışmak kodla engelli.",
      en: "535 tests · tenant isolation covered by tests · running in production with default passwords is blocked in code.",
    },
    stack: ["Express", "Sequelize", "Next.js", "Flutter"],
    href: "https://github.com/bahattinercan/beauty-salon",
  },
  {
    title: "Plague Tracker",
    kind: { tr: "Web · açık kaynak", en: "Web · open source" },
    shot: "/work/plague-tracker.webp",
    body: {
      tr: "Haber iddialarını kaç bağımsız kaynağın bildirdiğine göre etiketleyen izleme platformu. Sistem hiçbir yerde \"doğrulandı\" demez; yalnızca kimin ne bildirdiğini raporlar.",
      en: "A monitoring platform that labels news claims by how many independent sources report them. The system never says \"verified\"; it only reports who claimed what.",
    },
    metric: {
      tr: "Beş etiket seviyesi, bağımsızlık grupları ve kaynak sağlığı takibi; TR/EN.",
      en: "Five label levels, independence groups and source-health tracking; TR/EN.",
    },
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "Vercel"],
    href: "https://github.com/bahattinercan/russia-plague-website",
    live: "https://plague-tracker.vercel.app",
  },
  {
    title: "Barber Shops",
    kind: { tr: "Mobil · API", en: "Mobile · API" },
    shot: "/work/barber-shops.webp",
    body: {
      tr: "Berber randevu ve personel yönetimi. Flutter istemcisi ve Node.js/Express REST API'si; müdür, çalışan ve admin rolleri.",
      en: "Barber appointment and staff management. A Flutter client and a Node.js/Express REST API with manager, staff and admin roles.",
    },
    metric: {
      tr: "Randevu, dükkan, servis, yorum ve favori akışlarının tamamı rol bazlı yetkilendirmeyle korunuyor.",
      en: "Appointments, shops, services, reviews and favourites are all protected by role-based authorization.",
    },
    stack: ["Flutter", "Dart", "Node.js", "Express"],
    href: "https://github.com/bahattinercan/barber_shops",
  },
  {
    title: "Döner Sipariş Sitesi",
    kind: { tr: "Web · sıfır bağımlılık", en: "Web · zero dependencies" },
    shot: "/work/doner-website.webp",
    body: {
      tr: "Lokanta için statik sipariş sitesi: WhatsApp üzerinden sipariş, gece modu, localStorage sepet. Derleme adımı ve framework yok.",
      en: "A static ordering site for a restaurant: WhatsApp ordering, dark mode, localStorage cart. No build step, no framework.",
    },
    metric: {
      tr: "Küçük işletme için bakım maliyeti sıfır: dosyayı kopyala, çalışır.",
      en: "Zero maintenance cost for a small business: copy the file, it runs.",
    },
    stack: ["HTML", "CSS", "JavaScript", "MIT"],
    href: "https://github.com/bahattinercan/doner-website",
    live: "https://doner-website.vercel.app",
  },
  {
    title: "Müşteri Sipariş Takip",
    kind: { tr: "Masaüstü · çevrimdışı", en: "Desktop · offline" },
    shot: "/work/siparis-takip.webp",
    body: {
      tr: "İmalat atölyesi için sipariş → üretim → tahsilat takibi. Windows masaüstü, tek bilgisayar, veriler yerel SQLite'ta.",
      en: "Order → production → collection tracking for a manufacturing workshop. Windows desktop, single machine, data in local SQLite.",
    },
    metric: {
      tr: "725 test · kullanıcı tanımlı üretim aşamaları · kısmi tahsilat · çevrimdışı doğrulanan lisans.",
      en: "725 tests · user-defined production stages · partial payments · offline-verifiable licensing.",
    },
    stack: ["Flutter", "Dart", "SQLite", "Windows"],
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/musteri-siparis-takip.md",
  },
];

export const caseStudies: { name: string; note: L; href: string }[] = [
  {
    name: "Müşteri Sipariş Takip",
    note: {
      tr: "Windows masaüstü, 725 test, çevrimdışı lisans doğrulama",
      en: "Windows desktop, 725 tests, offline licence verification",
    },
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/musteri-siparis-takip.md",
  },
  {
    name: "Bakım Onarım Yönetimi (CMMS)",
    note: {
      tr: "Katman sınırları otomatik denetleniyor, API sözleşme kayması CI'da yakalanıyor",
      en: "Layer boundaries enforced automatically, API contract drift caught in CI",
    },
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/bakim-onarim-yonetim.md",
  },
  {
    name: "JobRadar",
    note: {
      tr: "7 kaynaktan ilan toplama, deterministik skorlama, 29 test",
      en: "Ingests from 7 sources, deterministic scoring, 29 tests",
    },
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/find-job.md",
  },
  {
    name: "Taskbar Hero",
    note: {
      tr: "Saf Kotlin sabit adımlı simülasyon motoru, 101 JVM testi",
      en: "Pure-Kotlin fixed-step simulation engine, 101 JVM tests",
    },
    href: "https://github.com/bahattinercan/case-studies/blob/main/docs/new-taskbar-hero.md",
  },
];

/** Öz değerlendirme: ölçülmüş bir iddia değil, ağırlık göstergesi. */
export const proficiency: { label: L; value: number }[] = [
  {
    label: { tr: "Backend ve API", en: "Backend & API" },
    value: 90,
  },
  {
    label: { tr: "Web arayüzü", en: "Web frontend" },
    value: 85,
  },
  {
    label: { tr: "Mobil (Flutter)", en: "Mobile (Flutter)" },
    value: 85,
  },
  {
    label: { tr: "Veritabanı ve şema tasarımı", en: "Database & schema design" },
    value: 80,
  },
  {
    label: { tr: "Oyun geliştirme (Unity/C#)", en: "Game development (Unity/C#)" },
    value: 75,
  },
];

export const proficiencyNote: L = {
  tr: "Öz değerlendirme: ölçülmüş bir gösterge değil, hangi alana ne kadar zaman ayırdığımı anlatıyor.",
  en: "Self-assessment: not a measured metric, just where I have spent most of my time.",
};

export const technologies: { group: L; items: string[] }[] = [
  {
    group: { tr: "Backend", en: "Backend" },
    items: ["Python", "Django", "Django REST Framework", "Node.js", "Express", "NestJS", "PHP"],
  },
  {
    group: { tr: "Veri", en: "Data" },
    items: ["PostgreSQL", "Sequelize", "Prisma", "SQLite", "MongoDB", "Firebase"],
  },
  {
    group: { tr: "Mobil ve masaüstü", en: "Mobile & desktop" },
    items: ["Flutter", "Dart", "React Native", "Android", "iOS"],
  },
  {
    group: { tr: "Web", en: "Web" },
    items: ["TypeScript", "Next.js", "React", "Angular", "Vite", "Tailwind CSS"],
  },
  {
    group: { tr: "Oyun ve sistem", en: "Game & systems" },
    items: ["C#", "Unity", "Unreal Engine", "Kotlin", "C++", "Raspberry Pi", "Linux"],
  },
  {
    group: { tr: "Araçlar", en: "Tools" },
    items: ["Docker", "Git", "GitHub Actions", "Vercel"],
  },
];

/**
 * "Nasıl çalışıyorum" bölümü bilinçli olarak düz yazı, madde listesi değil.
 * Önceki hâli üç paralel slogan cümlesiydi ("X değil Y yazıyorum", "X değil
 * repoda bırakıyorum") ve kart başlığı olarak duruyordu; kulağa broşür gibi
 * geliyordu. İnsanlar böyle anlatmıyor, hikâye gibi anlatıyor.
 */
export const howIWork: { tr: string[]; en: string[] } = {
  tr: [
    "Testleri genelde ilk akla gelen yerden başlatmıyorum. Çöken ekran kendini belli ediyor, çoğu zaman aynı gün düzeltiliyor. Beni asıl korkutan, hiçbir yerde hata vermeden yanlış sonuç üreten kod: yanlış hesaplanmış bir tahsilat, atlanmış bir üretim aşaması, açık kalmış bir yetki. Müşteri Sipariş Takip'te 725, Güzellik Salonu'nda 535, Taskbar Hero'da 101 testin çoğu bu yüzden var.",
    "Kararları kafamda tutmuyorum, repoda bırakıyorum. Bir şeyi neden öyle yaptığımı altı ay sonra kendim de hatırlamıyorum, o yüzden README'ye ya da kodun yanına yazıyorum. Neyi yapmamaya karar verdiğimi de yazıyorum; yoksa aynı tartışma her ay baştan başlıyor.",
    "Demo verisiyle canlıya çıkma ihtimalini sevmiyorum. Geliştirmede uydurma veri kullanıyorum, üretimde varsayılan şifreyle seed çalıştırmayı kodla kapatıyorum. Kuralı yazmak yetmiyor, çünkü kuralı okuyacak kişi de o gün acele eden kişi oluyor.",
  ],
  en: [
    "I do not start tests where most people start them. A crashed screen announces itself and usually gets fixed the same day. What worries me is code that never throws but returns the wrong answer: a miscalculated payment, a skipped production stage, a permission left open. Most of the 725 tests in order tracking, 535 in the salon platform and 101 in Taskbar Hero exist for that reason.",
    "I do not keep decisions in my head, I leave them in the repo. Six months later I will not remember why I did something either, so it goes into the README or next to the code. I also write down what I decided not to do, otherwise the same argument restarts every month.",
    "I do not like the idea of demo data reaching production. Development runs on fake data, and seeding production with the default password is closed off in code. Writing the rule down is not enough, because the person reading the rule is also the person in a hurry that day.",
  ],
};

export const education: { school: string; degree: L; period: string; note?: L }[] = [
  {
    school: "Dumlupınar Üniversitesi",
    degree: { tr: "Bilgisayar Mühendisliği, Lisans", en: "BSc Computer Engineering" },
    period: "2019 – 2023",
    note: { tr: "GNO 3.05 / 4.00", en: "GPA 3.05 / 4.00" },
  },
];

export const certificates: { name: string; issuer: string; year: string }[] = [
  {
    name: "UML ve Nesne Yönelimli Tasarım Temelleri",
    issuer: "Karoly Nyisztor",
    year: "2023",
  },
  { name: "Unity ile Defans Oyunu", issuer: "Code Monkey", year: "2021" },
  {
    name: "Unreal Engine C++ Developer",
    issuer: "Ben Tristem · GameDev.tv",
    year: "2020",
  },
];

export const languages: { name: L; level: L }[] = [
  { name: { tr: "Türkçe", en: "Turkish" }, level: { tr: "Ana dil", en: "Native" } },
  { name: { tr: "İngilizce", en: "English" }, level: { tr: "C1", en: "C1" } },
];

export const footerNote: L = {
  tr: "Bu site Next.js ile yazıldı; harici görsel, font, izleme betiği ve rozet servisi yok.",
  en: "This site is built with Next.js; no external images, fonts, analytics or badge services.",
};
