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
 * "Nasıl çalışıyorum" bölümü: alan alan konu başlığı + düz yazı.
 * Başlıklar slogan değil, konu etiketi ("Testler", "Veri modeli").
 * Önceki sürüm üç paralel karşıtlık cümlesiydi ("X değil Y yazıyorum");
 * arka arkaya üç tanesi broşür gibi okunuyordu.
 */
export const howIWork: { label: L; body: L }[] = [
  {
    label: { tr: "Testler", en: "Tests" },
    body: {
      tr: "Testleri genelde ilk akla gelen yerden başlatmıyorum. Çöken ekran kendini belli ediyor, çoğu zaman aynı gün düzeltiliyor; asıl mesele hiçbir yerde hata vermeden yanlış sonuç üreten kod. Müşteri Sipariş Takip'te 725 testin çoğu bu yüzden var: kısmi tahsilat, bakiye, üretim aşaması geçişleri. Güzellik Salonu'nda 535, Taskbar Hero'da 101, bakım-onarım sisteminde 68 test dosyası. Test sayısını kendi başına bir başarı olarak görmüyorum; işe yaradığı yer, bir şeyi değiştirirken korkmamam.",
      en: "I do not start tests where most people start them. A crashed screen announces itself and usually gets fixed the same day; the real problem is code that never throws but returns the wrong answer. That is why most of the 725 tests in order tracking exist: partial payments, balances, production stage transitions. 535 in the salon platform, 101 in Taskbar Hero, 68 test files in the maintenance system. I do not treat a test count as an achievement in itself; what it buys me is not being afraid when I change something.",
    },
  },
  {
    label: { tr: "Veri modeli", en: "Data model" },
    body: {
      tr: "Bir projeye başlarken önce ekranı değil veriyi düşünüyorum, çünkü veri modeli koddan uzun yaşıyor. Müşteri Sipariş Takip'te \"ödendi mi\" sorusunun cevabı siparişteki bir alan değil: ödeme tahsilata bağlı, bakiye türetilmiş bir değer. Siparişe tek bir \"ödendi\" alanı koymak daha kolay olurdu ama üç parçalı tahsilatta o alan yalan söylüyor. Çok kiracılı sistemlerde kiracı kimliği sessiz bir varsayım değil, modüller arası çağrıda zorunlu parametre.",
      en: "When I start a project I think about the data before the screen, because the data model outlives the code. In order tracking, the answer to \"is it paid\" is not a field on the order: the payment hangs off the collection and the balance is a derived value. A single \"paid\" flag would have been easier, but with three-part payments that flag lies. In multi-tenant systems the tenant id is not a silent assumption; it is a required parameter on every cross-module call.",
    },
  },
  {
    label: { tr: "Backend ve API", en: "Backend and API" },
    body: {
      tr: "İş kurallarını HTTP'ye bağlamıyorum. Bakım-onarım sisteminde her modül application / domain / infrastructure diye ayrılmış durumda ve domain katmanı saf TypeScript: Nest, Prisma, HTTP import etmiyor. Aynı servis hem API'den hem kuyruk tüketicisinden çağrılıyor. Bu katman kurallarını dependency-cruiser denetliyor, yani kural dokümanda kalıp çürümüyor. Modülün dışa açık yüzeyi tek bir index dosyası; başka modülün repository'sine veya tablosuna doğrudan yazmıyorum. İstemci tarafını elle yazmıyorum: API'nin OpenAPI çıktısından üretiliyor, böylece alan adı değiştiğinde istemci sessizce eskimesin.",
      en: "I do not tie business rules to HTTP. In the maintenance system every module is split into application / domain / infrastructure, and the domain layer is plain TypeScript: no Nest, no Prisma, no HTTP imports. The same service is called from the API and from the queue consumer. Those layer rules are checked by dependency-cruiser, so the rule does not rot in a document. A module exposes exactly one index file; I do not write directly into another module's repository or table. I do not hand-write the client: it is generated from the API's OpenAPI output, so a renamed field cannot leave the client quietly stale.",
    },
  },
  {
    label: { tr: "Arayüz", en: "Interface" },
    body: {
      tr: "Web'de React, Next.js ve Angular, mobilde Flutter kullanıyorum; kararlar aynı kalıyor. Boş hâl, yükleniyor hâli ve hata hâli sonradan eklenen şeyler değil, ekranın parçası. Responsive'i işin sonunda düzeltmiyorum, ilk günden 360 px'te bozulmayacak şekilde kuruyorum. Flutter'da tek kod tabanından iOS ve Android çıkıyor; platforma özel davranan yeri ayırıyorum, geri kalanı ortak kalıyor.",
      en: "React, Next.js and Angular on the web, Flutter on mobile; the decisions stay the same. Empty, loading and error states are part of the screen, not something bolted on later. I do not fix responsiveness at the end; I build it so it does not break at 360 px from day one. Flutter gives me iOS and Android from one codebase; I separate the parts that behave platform-specifically and keep the rest shared.",
    },
  },
  {
    label: { tr: "Oyun", en: "Games" },
    body: {
      tr: "Oyun tarafında ölçülebilirlik bana görselden önce geliyor. Taskbar Hero'da savaş motoru saf Kotlin ve arayüzden tamamen ayrı, simülasyon sabit adımlı. Aynı seed aynı sonucu verdiği için bir denge değişikliğini tahminle değil JVM testiyle karşılaştırıyorum; cihaz ya da emülatör açmam gerekmiyor. Unity tarafında hypercasual oyunlarda level, mekanik, fizik ve kontrol sistemleri üzerinde çalıştım; 23 prototip unity-prototypes-archive içinde duruyor.",
      en: "On the game side, measurability comes before visuals for me. In Taskbar Hero the combat engine is pure Kotlin, fully separate from the UI, and the simulation is fixed-step. The same seed produces the same result, so I compare a balance change with a JVM test instead of a guess, without opening a device or emulator. On Unity I worked on levels, mechanics, physics and control systems in hypercasual games; 23 prototypes are in unity-prototypes-archive.",
    },
  },
  {
    label: { tr: "Kararlar ve dokümantasyon", en: "Decisions and documentation" },
    body: {
      tr: "Kararları kafamda tutmuyorum, repoda bırakıyorum; bir şeyi neden öyle yaptığımı altı ay sonra kendim de hatırlamıyorum. Neyi yapmamaya karar verdiğimi de yazıyorum, çünkü asıl tartışma \"bunu neden yapmadın\" sorusunda çıkıyor ve cevabı yazmazsam her ay baştan tartışılıyor. README'ler mimariyi övmüyor, sınırları anlatıyor: ne nerede duruyor, neyin oraya girmemesi gerekiyor.",
      en: "I do not keep decisions in my head, I leave them in the repo; six months later I will not remember why I did something either. I also write down what I decided not to do, because the real argument starts with \"why did you not build this\" and without a written answer it restarts every month. READMEs do not praise the architecture, they describe the boundaries: what lives where, and what must not move in.",
    },
  },
  {
    label: { tr: "Dağıtım ve ortam", en: "Deployment and environments" },
    body: {
      tr: "Geliştirme, test ve üretim birbirinden ayrı. Üretimde varsayılan şifreyle seed çalıştırmayı kodla kapatıyorum; kuralı yazmak yetmiyor, çünkü kuralı okuyacak kişi de o gün acele eden kişi oluyor. Dağıtımda Docker kullanıyorum, migration'ı dağıtımın parçası sayıyorum ve sırları repoya koymuyorum. Testler ve tip kontrolü geçmeden birleştirme yapmıyorum.",
      en: "Development, test and production are separate. Seeding production with the default password is closed off in code; writing the rule down is not enough, because the person reading the rule is also the person in a hurry that day. I use Docker for deployment, treat migrations as part of the deploy and keep secrets out of the repo. Nothing gets merged before tests and type checks pass.",
    },
  },
  {
    label: { tr: "Ekip içi çalışma", en: "Working in a team" },
    body: {
      tr: "Ekipte en çok işe yarayan şeyin kod yazma hızı değil devredilebilirlik olduğunu düşünüyorum; bir işi bitirdiğimde sorduğum soru \"çalışıyor mu\" değil, \"ben yokken de yürür mü\". İncelemeye küçük ve tek amaçlı değişiklikler gönderiyorum, çünkü içinde iki ayrı iş olan bir PR okunmuyor ve geri alınması gerektiğinde ikisini birden götürüyor. Yorumu koda yazıyorum, kişiye değil; \"bunu neden böyle yaptın\" yerine \"şu durumda ne oluyor\" diye soruyorum, çünkü ikincisi cevap alıyor. Stil tartışmasını otomatiğe bağlıyorum: biçimlendirici, linter, tip kontrolü ve testler CI'da çalışıyorsa tartışılacak bir şey kalmıyor. Katılmadığım bir karar verildiğinde gerekçemi bir kez söyleyip uyguluyorum, itirazı da yazıya geçiriyorum; sözlü kalan itiraz üç ay sonra \"ben demiştim\"e dönüşüyor ve kimseye faydası olmuyor. Yeni gelen birine düzeltmeyi göstermekle kalmayıp nedenini de söylüyorum, bir sonraki benzer durumda sormak zorunda kalmasın diye.",
      en: "What helps most in a team is not how fast you write code but whether the work can be handed over; when I finish something the question I ask is not \"does it run\" but \"does it run without me\". I send small, single-purpose changes for review, because a PR holding two jobs does not get read and takes both down when it has to be reverted. I put the comment on the code, not the person: \"what happens in this case\" gets an answer, \"why did you do it like that\" does not. I automate style arguments: with a formatter, a linter, type checks and tests running in CI there is nothing left to debate. When a decision I disagreed with is made, I state my reason once and then build it, and I write the objection down; a verbal objection turns into \"I told you so\" three months later and helps nobody. When I explain something to someone new I do not just show the fix, I say why, so the next similar case does not need a question.",
    },
  },
  {
    label: { tr: "İş akışı ve kapsam", en: "Delivery and scope" },
    body: {
      tr: "Büyük bir teslimle gelmek yerine uçtan uca çalışan küçük bir dilimle başlıyorum, sonra üstüne ekliyorum. Emin olmadığım yerde soruyorum; özellikle kapsam ve öncelik konusunda tahmin yürütmek sonra daha pahalıya patlıyor. Bir şeyi yapmamayı önerdiysem sebebini de söylüyorum, sadece \"olmaz\" demiyorum.",
      en: "Instead of arriving with one big delivery I start with a small slice that works end to end, then build on it. When I am unsure I ask; guessing at scope and priority especially tends to cost more later. If I suggest not building something, I give the reason rather than just saying no.",
    },
  },
];

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
