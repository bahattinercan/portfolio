import Image from "next/image";
import {
  site,
  pillars,
  work,
  caseStudies,
  technologies,
  rules,
} from "@/content";

export default function Page() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="brand">
            {site.name} <span>· {site.role}</span>
          </div>
          <nav className="navlinks">
            <a href="#isler">İşler</a>
            <a href="#vakalar">Vaka çalışmaları</a>
            <a href="#teknoloji">Teknoloji</a>
            <a href="#iletisim">İletişim</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">BİLGİSAYAR MÜHENDİSİ · KÜTAHYA, TÜRKİYE</p>
            <h1>
              İş yapan yazılım geliştiriyorum:
              <br />
              çok kiracılı uygulamalar, masaüstü araçları, veri hatları.
            </h1>
            <p className="lead">
              Arayüzü <strong>Flutter/Dart</strong> ile mobil ve masaüstünde,{" "}
              <strong>TypeScript</strong> ile web&apos;de (Next.js + NestJS)
              yazıyorum; veri katmanında PostgreSQL, SQLite ve MongoDB
              kullanıyorum.
            </p>
            <p className="lead">
              İşi &quot;çalışıyor&quot; noktasında bırakmamaya çalışıyorum:
              kritik mantığı testle kilitliyorum, kararları repo içinde
              dokümante ediyorum, teslim edilebilir bir sürüm çıkarıyorum.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={site.links.github}>
                GitHub
              </a>
              <a className="btn" href={site.links.caseStudies}>
                Vaka çalışmaları
              </a>
              <a className="btn" href={site.links.linkedin}>
                LinkedIn
              </a>
              <a className="btn" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
        </section>

        <section id="ne-yapiyorum">
          <div className="wrap">
            <h2>Ne yapıyorum</h2>
            <p className="section-note">
              Üç ana hat: kiracılı iş uygulamaları, kurulan masaüstü/mobil
              ürünler ve zamanlanmış veri toplama sistemleri.
            </p>
            <div className="pillars">
              {pillars.map((p) => (
                <div className="pillar" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="isler">
          <div className="wrap">
            <h2>Öne çıkan işler</h2>
            <p className="section-note">
              Her kart gerçek bir uygulamaya ait. Ekran görüntüleri çalışan
              sürümlerden alındı; demo veri kullanılan yerlerde veriler
              sentetiktir.
            </p>
            <div className="work-grid">
              {work.map((w) => (
                <article className="card" key={w.title}>
                  <a href={w.live ?? w.href}>
                    <Image
                      className="shot"
                      src={w.shot}
                      alt={`${w.title} ekran görüntüsü`}
                      width={1200}
                      height={675}
                      sizes="(max-width: 720px) 100vw, 520px"
                    />
                  </a>
                  <div className="body">
                    <span className="kind">{w.kind}</span>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                    {w.metric ? <p className="metric">{w.metric}</p> : null}
                    <div className="stack">
                      {w.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="actions" style={{ marginTop: 12 }}>
                      <a className="btn" href={w.href}>
                        Kaynak
                      </a>
                      {w.live ? (
                        <a className="btn btn-primary" href={w.live}>
                          Canlı
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vakalar">
          <div className="wrap">
            <h2>Vaka çalışmaları</h2>
            <p className="section-note">
              Bu dört ürünün kaynak kodu özel. Mühendislik anlatımları açık:
              problem, mimari, ölçülmüş kanıt ve bilinen sınırlar.
            </p>
            <div className="cases">
              {caseStudies.map((c, i) => (
                <a className="case" href={c.href} key={c.name}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <h3>{c.name}</h3>
                    <p>{c.note}</p>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="teknoloji">
          <div className="wrap">
            <h2>Teknoloji</h2>
            <p className="section-note">
              Yalnızca ürün geliştirirken gerçekten kullandığım araçlar.
            </p>
            <div className="tech-groups">
              {technologies.map((t) => (
                <div className="tech-group" key={t.group}>
                  <h3>{t.group}</h3>
                  <div className="tech-list">
                    {t.items.map((i) => (
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

        <section id="yaklasim">
          <div className="wrap">
            <h2>Nasıl çalışıyorum</h2>
            <p className="section-note">
              Dört projede tekrar eden kararlar — tesadüf değil, tercih.
            </p>
            <div className="rules">
              {rules.map((r) => (
                <div className="rule" key={r.title}>
                  <span>
                    <strong>{r.title}</strong>
                    <p>{r.body}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="iletisim">
          <div className="wrap">
            <h2>İş görüşmesi veya proje için</h2>
            <p>
              E-posta en hızlı yol. Kısa bir tanım ve zaman çizelgesi
              gönderirseniz, uygun olup olmadığımı net biçimde söylerim.
            </p>
            <div className="actions" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="btn" href={site.links.linkedin}>
                LinkedIn
              </a>
              <a className="btn" href={site.links.github}>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </span>
          <span>
            Bu site Next.js ile yazıldı; harici görsel, font ve izleme betiği
            yok.
          </span>
        </div>
      </footer>
    </>
  );
}
