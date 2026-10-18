import type { Lang } from "@/content";

const labels = {
  clients: { tr: "İSTEMCİLER", en: "CLIENTS" },
  dbNote: { tr: "şema tasarımı · migration · indeks", en: "schema design · migrations · indexes" },
};

/**
 * Hero illüstrasyonu: harici görsel yok, tema değişkenleriyle renk değiştirir.
 * Anlattığı şey gerçek mimari: istemciler → API → veritabanı.
 */
export default function HeroArt({ lang = "tr" }: { lang?: Lang }) {
  const L = (v: { tr: string; en: string }) => (lang === "tr" ? v.tr : v.en);
  return (
    <svg
      viewBox="0 0 560 480"
      role="img"
      aria-label="İstemciler, API ve veritabanı katmanlarını gösteren şema"
      className="hero-art"
    >
      <defs>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-2)" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.35" r="0.75">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.22" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="var(--text)" fillOpacity="0.08" />
        </pattern>
        <clipPath id="frame">
          <rect x="20" y="20" width="520" height="440" rx="20" />
        </clipPath>
      </defs>

      <g clipPath="url(#frame)">
        <rect x="20" y="20" width="520" height="440" rx="20" fill="var(--surface)" />
        <rect x="20" y="20" width="520" height="440" rx="20" fill="url(#grid)" />
        <rect x="-120" y="-140" width="800" height="700" fill="url(#glow)" />
      </g>
      <rect
        x="20.5"
        y="20.5"
        width="519"
        height="439"
        rx="20"
        fill="none"
        stroke="var(--line)"
      />

      {/* İstemciler */}
      <text x="56" y="76" className="art-label">
        {L(labels.clients)}
      </text>
      {[
        { x: 56, label: "iOS" },
        { x: 168, label: "Android" },
        { x: 280, label: "Web" },
      ].map((c) => (
        <g key={c.label}>
          <rect
            x={c.x}
            y="92"
            width="96"
            height="44"
            rx="10"
            fill="var(--surface-2)"
            stroke="var(--line)"
          />
          <text x={c.x + 48} y="120" className="art-chip" textAnchor="middle">
            {c.label}
          </text>
        </g>
      ))}

      {/* bağlantı çizgileri */}
      {[104, 216, 328].map((x) => (
        <line
          key={x}
          x1={x}
          y1="136"
          x2={x}
          y2="196"
          stroke="url(#accent)"
          strokeWidth="1.6"
          strokeOpacity="0.75"
        />
      ))}

      {/* API katmanı */}
      <rect
        x="56"
        y="196"
        width="448"
        height="118"
        rx="14"
        fill="var(--surface-2)"
        stroke="var(--line)"
      />
      <rect x="56" y="196" width="448" height="3" rx="1.5" fill="url(#accent)" />
      <text x="76" y="228" className="art-label">
        API · DJANGO / DRF · NODE.JS
      </text>
      {[
        { y: 246, w: 236, label: "POST  /api/v1/auth/login" },
        { y: 268, w: 300, label: "GET   /api/v1/orders?status=open" },
        { y: 290, w: 176, label: "JWT · RBAC guard" },
      ].map((r) => (
        <g key={r.label}>
          <rect
            x="76"
            y={r.y}
            width={r.w}
            height="16"
            rx="4"
            fill="var(--accent)"
            fillOpacity="0.14"
          />
          <text x="86" y={r.y + 12} className="art-code">
            {r.label}
          </text>
        </g>
      ))}

      {/* aşağı bağlantı */}
      {[104, 216, 328].map((x) => (
        <line
          key={`l-${x}`}
          x1={x}
          y1="314"
          x2={x}
          y2="352"
          stroke="url(#accent)"
          strokeWidth="1.6"
          strokeOpacity="0.75"
        />
      ))}

      {/* Veritabanı */}
      <rect
        x="56"
        y="352"
        width="448"
        height="80"
        rx="14"
        fill="var(--surface-2)"
        stroke="var(--line)"
      />
      <g transform="translate(76 372)">
        <ellipse cx="24" cy="10" rx="24" ry="9" fill="var(--accent-2)" fillOpacity="0.20" />
        <path
          d="M0 10v26a24 9 0 0 0 48 0V10"
          fill="var(--accent-2)"
          fillOpacity="0.10"
          stroke="var(--accent-2)"
          strokeOpacity="0.7"
        />
        <ellipse
          cx="24"
          cy="10"
          rx="24"
          ry="9"
          fill="none"
          stroke="var(--accent-2)"
          strokeOpacity="0.7"
        />
        <path d="M0 22a24 9 0 0 0 48 0" fill="none" stroke="var(--accent-2)" strokeOpacity="0.45" />
      </g>
      <text x="146" y="392" className="art-label">
        POSTGRESQL
      </text>
      <text x="146" y="414" className="art-muted">
        {L(labels.dbNote)}
      </text>

      {/* ödeme rozeti */}
      <g transform="translate(352 200)">
        <rect
          width="136"
          height="30"
          rx="15"
          fill="var(--accent)"
          fillOpacity="0.14"
          stroke="var(--accent)"
          strokeOpacity="0.45"
        />
        <text x="68" y="20" className="art-chip" textAnchor="middle">
          3D Secure
        </text>
      </g>
    </svg>
  );
}
