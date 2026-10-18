"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HeroArt from "./HeroArt";
import {
  t,
  type Lang,
  profile,
  ui,
  hero,
  pillars,
  experience,
  experienceNote,
  work,
  caseStudies,
  proficiency,
  proficiencyNote,
  technologies,
  rules,
  education,
  certificates,
  languages,
  footerNote,
} from "@/content";

type Theme = "dark" | "light";

const Icon = {
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.6-2.35 3.24V21h-4V9Z" />
    </svg>
  ),
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.3-.4 7.7 5.6 7.7-5.6H4.3Zm15.7 1.9-8 5.9-8-5.9v11.5c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7Z" />
    </svg>
  ),
  download: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 20h16" />
    </svg>
  ),
  sun: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </svg>
  ),
  moon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  ),
};

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("tr");
  const [theme, setTheme] = useState<Theme>("dark");
  const rootRef = useRef<HTMLDivElement>(null);

  // Kayıtlı tercihleri oku (yoksa sistem teması)
  useEffect(() => {
    const storedLang = localStorage.getItem("pf-lang");
    if (storedLang === "tr" || storedLang === "en") setLang(storedLang);
    const storedTheme = localStorage.getItem("pf-theme");
    if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme);
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("pf-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("pf-lang", lang);
  }, [lang]);

  // Kaydırınca giriş animasyonu — 0 bağımlılık, IntersectionObserver
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els?.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const cvHref = lang === "tr" ? profile.cv.tr : profile.cv.en;
  const cvOther = lang === "tr" ? profile.cv.en : profile.cv.tr;

  return (
    <div ref={rootRef}>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="brand">
            {profile.name} <em>· {profile.role}</em>
          </div>
          <nav className="navlinks">
            <a href="#deneyim">{t(lang, ui.nav.experience)}</a>
            <a href="#yetenekler">{t(lang, ui.nav.skills)}</a>
            <a href="#isler">{t(lang, ui.nav.work)}</a>
            <a href="#vakalar">{t(lang, ui.nav.cases)}</a>
            <a href="#egitim">{t(lang, ui.nav.education)}</a>
            <a href="#iletisim">{t(lang, ui.nav.contact)}</a>
          </nav>
          <div className="toggles">
            <button
              className="tgl"
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              aria-label={`${t(lang, ui.labels.language)}: ${lang.toUpperCase()}`}
              title={t(lang, ui.labels.language)}
            >
              {lang === "tr" ? "TR" : "EN"}
            </button>
            <button
              className="tgl"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={t(lang, ui.labels.theme)}
              title={t(lang, ui.labels.theme)}
            >
              {theme === "dark" ? Icon.sun : Icon.moon}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ---------- hero ---------- */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="reveal">
              <p className="eyebrow">
                {profile.role.toUpperCase()} · {profile.location.toUpperCase()}
              </p>
              <h1>{hero.title[lang]}</h1>
              <p className="sub">{hero.subtitle[lang]}</p>
              {hero.lead.map((p, i) => (
                <p className="lead" key={i}>
                  {p[lang]}
                </p>
              ))}
              <p className="avail">
                <span className="dot" /> {t(lang, ui.availability)}
              </p>
              <div className="socials">
                <a href={profile.links.github} aria-label="GitHub">
                  {Icon.github}
                </a>
                <a href={profile.links.linkedin} aria-label="LinkedIn">
                  {Icon.linkedin}
                </a>
                <a href={`mailto:${profile.email}`} aria-label="E-posta">
                  {Icon.mail}
                </a>
                <a href={cvHref} aria-label={t(lang, ui.cta.cv)}>
                  {Icon.download}
                </a>
              </div>
              <div className="actions">
                <a className="btn btn-primary" href="#iletisim">
                  {t(lang, ui.cta.contact)}
                </a>
                <a className="btn" href={cvHref}>
                  {Icon.download} {t(lang, ui.cta.cv)}
                </a>
              </div>
            </div>
            <div className="reveal">
              <HeroArt lang={lang} />
            </div>
          </div>
        </section>

        {/* ---------- ne yapıyorum ---------- */}
        <section id="ne-yapiyorum">
          <div className="wrap">
            <h2 className="h2 reveal">
              {lang === "tr" ? "Ne yapıyorum" : "What I do"}
            </h2>
            <p className="note reveal">
              {lang === "tr"
                ? "Dört hat: backend, web, mobil ve masaüstü uygulamaları, oyun."
                : "Four tracks: backend, web, mobile and desktop apps, and games."}
            </p>
            <div className="grid-4">
              {pillars.map((p) => (
                <div className="card reveal" key={p.title.tr}>
                  <h3>{t(lang, p.title)}</h3>
                  <p>{t(lang, p.body)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- deneyim ---------- */}
        <section id="deneyim">
          <div className="wrap">
            <h2 className="h2 reveal">{t(lang, ui.nav.experience)}</h2>
            <p className="note reveal">{t(lang, experienceNote)}</p>
            <div className="timeline">
              {experience.map((j) => {
                const muted = j.role.tr === "Askerlik hizmeti";
                return (
                  <div className={`job reveal${muted ? " is-muted" : ""}`} key={j.role.tr}>
                    <div className="job-head">
                      <h3>{t(lang, j.role)}</h3>
                      <span className="period">{t(lang, j.period)}</span>
                    </div>
                    <p>{t(lang, j.scope)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- yetenekler ---------- */}
        <section id="yetenekler">
          <div className="wrap">
            <h2 className="h2 reveal">{t(lang, ui.nav.skills)}</h2>
            <p className="note reveal">{t(lang, proficiencyNote)}</p>
            <div className="bars">
              {proficiency.map((b) => (
                <div
                  className="bar-row reveal"
                  key={b.label.tr}
                  style={{ ["--w" as string]: `${b.value}%` }}
                >
                  <span className="bar-label">
                    <span>{t(lang, b.label)}</span>
                    <span>{b.value}%</span>
                  </span>
                  <span className="bar-track">
                    <span className="bar-fill" />
                  </span>
                </div>
              ))}
            </div>
            <div className="tech-groups">
              {technologies.map((g) => (
                <div className="tech-group reveal" key={g.group.tr}>
                  <h3>{t(lang, g.group)}</h3>
                  <div className="tech-list">
                    {g.items.map((i) => (
                      <span className="chip" key={i}>
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- işler ---------- */}
        <section id="isler">
          <div className="wrap">
            <h2 className="h2 reveal">{t(lang, ui.nav.work)}</h2>
            <p className="note reveal">
              {lang === "tr"
                ? "Her kart çalışan bir uygulamaya ait. Ekran görüntüleri gerçek sürümlerden; demo veri kullanılan yerlerde veriler sentetik."
                : "Every card is a working application. Screenshots come from real builds; where demo data is used, it is synthetic."}
            </p>
            <div className="work-grid">
              {work.map((w) => (
                <article className="work reveal" key={w.title}>
                  <a href={w.live ?? w.href}>
                    <Image
                      src={w.shot}
                      alt={`${w.title} — ${lang === "tr" ? "ekran görüntüsü" : "screenshot"}`}
                      width={1200}
                      height={675}
                      sizes="(max-width: 720px) 100vw, 540px"
                    />
                  </a>
                  <div className="body">
                    <span className="kind">{t(lang, w.kind)}</span>
                    <h3>{w.title}</h3>
                    <p>{t(lang, w.body)}</p>
                    <p className="metric">{t(lang, w.metric)}</p>
                    <div className="stack">
                      {w.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="links">
                      <a className="mini" href={w.href}>
                        {lang === "tr" ? "Kaynak" : "Source"}
                      </a>
                      {w.live ? (
                        <a className="mini mini-primary" href={w.live}>
                          {lang === "tr" ? "Canlı" : "Live"}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- vaka çalışmaları ---------- */}
        <section id="vakalar">
          <div className="wrap">
            <h2 className="h2 reveal">{t(lang, ui.nav.cases)}</h2>
            <p className="note reveal">
              {lang === "tr"
                ? "Bu dört ürünün kaynak kodu özel. Mühendislik anlatımları açık: problem, mimari, ölçülmüş kanıt ve bilinen sınırlar."
                : "The source of these four products is private. The engineering write-ups are open: problem, architecture, measured evidence and known limits."}
            </p>
            <div className="cases">
              {caseStudies.map((c, i) => (
                <a className="case reveal" href={c.href} key={c.name}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <h3>{c.name}</h3>
                    <p>{t(lang, c.note)}</p>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- eğitim ve sertifikalar ---------- */}
        <section id="egitim">
          <div className="wrap">
            <h2 className="h2 reveal">{t(lang, ui.nav.education)}</h2>
            <div className="edu-grid">
              <div className="reveal">
                {education.map((e) => (
                  <div className="edu card" key={e.school}>
                    <h3>{e.school}</h3>
                    <p className="deg">{t(lang, e.degree)}</p>
                    <p className="period">
                      {e.period}
                      {e.note ? ` · ${t(lang, e.note)}` : ""}
                    </p>
                  </div>
                ))}
                <div className="card" style={{ marginTop: 18 }}>
                  <h3>{lang === "tr" ? "Diller" : "Languages"}</h3>
                  <ul className="cert-list">
                    {languages.map((l) => (
                      <li key={l.name.tr}>
                        <span>{t(lang, l.name)}</span>
                        <span className="meta">{t(lang, l.level)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="reveal card">
                <h3 style={{ marginBottom: 16 }}>
                  {lang === "tr" ? "Sertifikalar" : "Certificates"}
                </h3>
                <ul className="cert-list">
                  {certificates.map((c) => (
                    <li key={c.name}>
                      <span>
                        {c.name}
                        <br />
                        <span className="meta">{c.issuer}</span>
                      </span>
                      <span className="meta">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- nasıl çalışıyorum ---------- */}
        <section id="yaklasim">
          <div className="wrap">
            <h2 className="h2 reveal">
              {lang === "tr" ? "Nasıl çalışıyorum" : "How I work"}
            </h2>
            <p className="note reveal">
              {lang === "tr"
                ? "Üç karar, her projede tekrar ediyor."
                : "Three decisions that repeat in every project."}
            </p>
            <div className="grid-4">
              {rules.map((r) => (
                <div className="card reveal" key={r.title.tr}>
                  <h3>{t(lang, r.title)}</h3>
                  <p>{t(lang, r.body)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- iletişim ---------- */}
        <section className="contact" id="iletisim">
          <div className="wrap reveal">
            <h2>
              {lang === "tr"
                ? "İş görüşmesi veya proje için"
                : "For a role or a project"}
            </h2>
            <p>
              {lang === "tr"
                ? "E-posta en hızlı yol. Kısa bir tanım ve zaman çizelgesi gönderirsen uygun olup olmadığımı net biçimde söylerim."
                : "Email is the fastest route. Send a short description and a timeline and I will tell you plainly whether I am a fit."}
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn" href={cvHref}>
                {Icon.download} {t(lang, ui.cta.cv)}
              </a>
              <a className="btn" href={cvOther}>
                {t(lang, ui.cta.cvOther)}
              </a>
              <a className="btn" href={profile.links.linkedin}>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <span>{t(lang, footerNote)}</span>
        </div>
      </footer>
    </div>
  );
}
