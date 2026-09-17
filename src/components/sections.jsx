import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  hero,
} from "../content.js";
import { Arrow, SectionHead, Img } from "./ui.jsx";
import { usePrefs } from "../prefs.jsx";
import { useContent } from "../useContent.js";

export function Hero() {
  const { copy } = usePrefs();
  const h = copy.hero;
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true" />
      <div className="wrap hero__copy">
        <p className="eyebrow eyebrow--gold">{h.kicker}</p>
        <h1>
          <span className="hero__line">{h.line1}</span>
          <span className="hero__line hero__line--gold">{h.line2}</span>
        </h1>
        <p className="hero__lede">{h.standfirst}</p>
        <div className="hero__ctas">
          <Link className="btn btn--gold" to={hero.primaryCta.href}>{h.cta1} <Arrow /></Link>
          <Link className="btn btn--ghost" to={hero.secondaryCta.href}>{h.cta2} <Arrow /></Link>
        </div>
        <ul className="hero__meta">
          {h.meta.map((m) => <li key={m}>{m}</li>)}
        </ul>
      </div>
    </section>
  );
}

function IdeaIcon({ i }) {
  if (i === 1) {
    return (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
        <ellipse cx="24" cy="30" rx="11" ry="4.2" stroke="currentColor" strokeWidth="2.1" />
        <ellipse cx="24" cy="22" rx="11" ry="4.2" stroke="currentColor" strokeWidth="2.1" />
        <path d="M13 22v8M35 22v8M13 30c0 2.4 4.9 4.2 11 4.2s11-1.8 11-4.2" stroke="currentColor" strokeWidth="2.1" />
      </svg>
    );
  }
  if (i === 2) {
    return (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
        <rect x="12" y="8" width="20" height="26" rx="2" stroke="currentColor" strokeWidth="2.1" />
        <path d="M17 15h10M17 20h10" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
        <circle cx="30" cy="31" r="8" fill="var(--ivory)" stroke="currentColor" strokeWidth="2.1" />
        <path d="M30 27.5v7M26.8 31h6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (i === 3) {
    return (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.1" />
        <path d="M24 14v4.5M24 29.5V34M14 24h4.5M29.5 24H34" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M24 20.5 26.2 24 24 27.5 21.8 24Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
      <path d="M10 38V16l14-8 14 8v22" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M10 16l14 8 14-8M24 24v14" stroke="currentColor" strokeWidth="2.1" />
      <circle cx="32.5" cy="14" r="5.2" fill="var(--ivory)" stroke="currentColor" strokeWidth="2.1" />
      <circle cx="32.5" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function Idea() {
  const { copy } = usePrefs();
  const i = copy.idea;
  return (
    <section className="sec idea-sec">
      <div className="wrap">
        <header className="idea-sec__head">
          <p className="eyebrow">{i.eyebrow}</p>
          <div className="idea-sec__title-row">
            <h2 className="h-sec">{i.title}</h2>
            <p className="idea-sec__aside">
              Real questions.<br />
              Real clarity.
              <svg className="idea-sec__mark" viewBox="0 0 92 14" aria-hidden="true">
                <path d="M3 9C18 3.5 36 12 54 7.5C68 3.8 80 8.2 89 6" fill="none" stroke="#C89032" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </p>
          </div>
          <p className="lede">{i.intro}</p>
        </header>
        <div className="nots">
          {i.cards.map((c, n) => (
            <article key={c.is} className="nots__row">
              <div className="nots__lead">
                <span className="nots__n">{String(n + 1).padStart(2, "0")}</span>
                <span className={"nots__icon nots__icon--" + n} aria-hidden="true">
                  <IdeaIcon i={n} />
                </span>
                <h3><em>{c.not}</em>{c.is}</h3>
              </div>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
        <div className="featured__strip">Real places / Real people / Real change</div>
      </div>
      <svg className="idea-sec__waves" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 42C160 22 260 62 420 38C590 12 720 58 900 34C1080 12 1240 48 1440 30" fill="none" stroke="#C89032" strokeWidth="1.8" />
        <path d="M0 58C150 40 270 74 460 54C620 36 760 70 940 58" fill="none" stroke="#7EB8B8" strokeWidth="1.8" />
      </svg>
    </section>
  );
}

const ARC_PHOTOS = [
  "/assets/korean-educators.jpg",
  "/assets/korea-school-meeting.jpg",
  "/assets/hero-seoul-student.jpg",
  "/assets/card-universities.jpg",
  "/assets/yeomyung-school.jpg",
];

function ArcIcon({ i }) {
  if (i === 0) {
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="15.5" cy="8.4" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4.5 18c.4-3 2.4-4.6 4.6-4.6S13.3 15 13.6 18M13 13.6c1.8-.3 3.6.8 4.4 4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (i === 1) {
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <path d="M12 4.2a5.3 5.3 0 0 1 2.4 10.1V16.2h-4.8v-1.9A5.3 5.3 0 0 1 12 4.2z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 18.2h4M10.8 20.2h2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (i === 2) {
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <path d="M3.5 17.5 9 11l3.2 3.4L16.2 9l4.3 8.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M14.6 9.4 16.2 6l1.8 2.2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (i === 3) {
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <path d="M14.4 5.2 18.8 9.6 9 19.4H4.6v-4.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12.8 6.8 17.2 11.2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
      <circle cx="8.2" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="9.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.4 18.2c.3-2.6 2-4 3.8-4s3.4 1.3 3.8 3.6M12.2 14.6c1.5-.4 3.4.5 4.2 3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function splitArcTitle(title) {
  const i = String(title).indexOf(",");
  if (i === -1) return { a: title, b: "" };
  return { a: title.slice(0, i + 1), b: title.slice(i + 1).trim() };
}

export function Arc() {
  const { copy } = usePrefs();
  const a = copy.arc;
  const title = splitArcTitle(a.title);
  return (
    <section className="sec sec--tint arcsec">
      <div className="wrap arcsec__in">
        <div className="arcsec__grid">
          <div className="arcsec__left">
            <header className="arcsec__copy">
              <p className="eyebrow">{a.eyebrow}</p>
              <h2>
                <span className="arcsec__t1">{title.a}</span>
                {title.b ? <><br /><span className="arcsec__t2">{title.b}</span></> : null}
              </h2>
              <p className="lede">{a.intro}</p>
            </header>
            <svg className="arcsec__scribble" viewBox="0 0 160 18" aria-hidden="true">
              <path d="M4 12C28 4 52 16 86 8C112 2 136 11 156 6" fill="none" stroke="#C89032" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <figure className="arcsec__hero">
              <img src="/assets/hero-seoul-student.jpg" alt="" />
              <svg className="arcsec__trail" viewBox="0 0 320 180" preserveAspectRatio="none" aria-hidden="true">
                <path d="M48 128C92 96 148 58 214 42C248 34 278 40 302 52" fill="none" stroke="#C89032" strokeWidth="1.8" strokeDasharray="5 6" strokeLinecap="round" />
                <g transform="translate(292 36) rotate(18)">
                  <path d="M0 6 18 0l-5.2 10.4-2.6-3.8-4.2 2 0.8-4.2z" fill="none" stroke="#C89032" strokeWidth="1.4" strokeLinejoin="round" />
                </g>
              </svg>
            </figure>
            <p className="arcsec__note">{a.footnote}</p>
          </div>

          <ol className="arcsec__rail">
            {a.steps.map((s, i) => (
              <li key={s.n}>
                <span className="arc-row__n">{String(s.n).padStart(2, "0")}</span>
                <article className="arc-row">
                  <span className="arc-row__icon" aria-hidden="true"><ArcIcon i={i} /></span>
                  <div className="arc-row__copy">
                    <h3>{s.name}</h3>
                    <p>{s.body}</p>
                  </div>
                  <div className="arc-row__media">
                    <img src={ARC_PHOTOS[i]} alt="" />
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Method() {
  const [mode, setMode] = useState(0);
  const { method } = useContent();
  const { t } = usePrefs();
  const lensColors = ["#A8482A", "#0E6E73", "#C89032", "#2FA3A8", "#091C33", "#B4633A"];
  return (
    <>
      <section className="sec sec--tint">
        <div className="wrap">
          <SectionHead eyebrow={t("pages.method")} title={method.title} lede={method.intro} />
          <h3 className="h-sub" style={{ marginBottom: 8 }}>{method.matrix.label}</h3>
          <p className="lede" style={{ marginBottom: 24 }}>{method.matrix.intro}</p>
          <div className="matrix">
            <div className="matrix__tabs" role="tablist" aria-label={method.matrix.label}>
              {method.matrix.modes.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  role="tab"
                  id={`matrix-tab-${i}`}
                  aria-selected={mode === i}
                  aria-controls="matrix-panel"
                  onClick={() => setMode(i)}
                >
                  <span className="m__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="m__copy">
                    <span className="m__name">{m.name}</span>
                    <span className="m__hint">{m.hint}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="matrix__panel" role="tabpanel" id="matrix-panel" aria-labelledby={`matrix-tab-${mode}`}>
              <p className="matrix__count">0{mode + 1} / 05</p>
              <h4>{method.matrix.modes[mode].name}</h4>
              <p className="matrix__kicker">{method.matrix.modes[mode].hint}</p>
              <p className="matrix__body">{method.matrix.modes[mode].body}</p>
            </div>
          </div>

          <div className="method-block">
            <h3 className="h-sub" style={{ marginBottom: 8 }}>{method.lenses.label}</h3>
            <p className="lede" style={{ marginBottom: 24 }}>{method.lenses.intro}</p>
            <div className="lenses">
              {method.lenses.items.map((l, i) => (
                <div key={l.name}>
                  <h4><span className="dot" style={{ background: lensColors[i] }} />{l.name}</h4>
                  <p>{l.q}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contrast">
            <div className="contrast__side">
              <h4>{method.contrast.a.label}</h4>
              <ul>{method.contrast.a.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
            <div className="contrast__vs">{t("pages.versus")}</div>
            <div className="contrast__side contrast__side--b">
              <h4>{method.contrast.b.label}</h4>
              <ul>{method.contrast.b.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--tint method-day">
        <div className="wrap">
          <p className="eyebrow">{method.rhythm.label}</p>
          <h2 className="h-sub method-day__title">{method.rhythm.note}</h2>
          <div className="rhythm">
            {method.rhythm.blocks.map((b) => (
              <article key={b.when}>
                <h4>{b.when}</h4>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
          <div className="method-lab">
            <p className="eyebrow">{method.labStructure.label}</p>
            <p className="lede">{method.labStructure.intro}</p>
            <ol className="arcsteps">
              {method.labStructure.steps.map((s) => (
                <li key={s.n}>
                  <span className="arcsteps__n">{String(s.n).padStart(2, "0")}</span>
                  <div className="arcsteps__card">
                    <h3>{s.name}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

export function Builds() {
  const { builds } = useContent();
  const { t } = usePrefs();
  return (
    <>
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow={t("pages.builds")} title={builds.title} lede={builds.intro} />
          <div className="quals">
            {builds.qualities.map((q) => (
              <div key={q.name}>
                <h4>{q.name}</h4>
                <p>{q.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec--tint builds-after">
        <div className="wrap">
          <SectionHead eyebrow={t("pages.beforeAfter")} title={t("pages.wholePoint")} />
          <div className="transform">
            <div className="transform__a">
              <h4>{builds.transformation.before.label}</h4>
              <ul>{builds.transformation.before.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
            <div className="transform__b">
              <h4>{builds.transformation.after.label}</h4>
              <ul>{builds.transformation.after.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </div>
          <div style={{ marginTop: "clamp(48px,6vw,84px)" }}>
            <p className="eyebrow">{builds.rcmi.label}</p>
            <p className="lede" style={{ marginBottom: 26 }}>{builds.rcmi.intro}</p>
            <div className="clusters">
              {builds.rcmi.clusters.map((c) => (
                <div key={c.name}>
                  <h4>{c.name}</h4>
                  <ul>{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="grid grid--2" style={{ marginTop: 30 }}>
              {builds.outcomes.map((o) => (
                <div key={o.name} style={{ borderTop: "3px solid var(--gold)", paddingTop: 16 }}>
                  <h4 style={{ fontFamily: "var(--display)", fontSize: 21, marginBottom: 8 }}>{o.name}</h4>
                  <p style={{ fontSize: 15 }}>{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Destinations({ limit }) {
  const { destinations } = useContent();
  const { t } = usePrefs();
  const items = limit ? destinations.items.slice(0, limit) : destinations.items;
  return (
    <section className="sec sec--tint">
      <div className="wrap">
        <SectionHead eyebrow={t("pages.destinations")} title={destinations.title} lede={destinations.intro} />
        <div className="dests">
          {items.map((d) => {
            const inner = (
              <>
                <span className="dest__script" aria-hidden="true">{d.script}</span>
                <div className="dest__top">
                  <h3>{d.country}</h3>
                  <span className={"tag tag--" + d.status}>{d.when}</span>
                </div>
                <p className="dest__q">{d.question}</p>
                <p>{d.body}</p>
                <span className="dest__go">
                  {d.href ? t("pages.destOpen") : t("pages.destSoon")}
                  {d.href ? " →" : ""}
                </span>
              </>
            );
            if (d.href) {
              return (
                <Link key={d.country} className={"dest dest--link" + (d.status === "open" ? " dest--open" : "")} to={d.href}>
                  {inner}
                </Link>
              );
            }
            return <div key={d.country} className="dest dest--soon">{inner}</div>;
          })}
        </div>
        <div style={{ marginTop: 30, borderLeft: "3px solid var(--gold)", paddingLeft: 22 }}>
          <p className="eyebrow" style={{ marginBottom: 8 }}>{destinations.invite.label}</p>
          <p style={{ margin: 0, color: "var(--slate)" }}>{destinations.invite.body}</p>
        </div>
      </div>
    </section>
  );
}

export function Korea() {
  const { korea } = useContent();
  const { t } = usePrefs();
  return (
    <>
      <section className="sec sec--dark korea-intro">
        <div className="wrap">
          <SectionHead eyebrow={t("pages.flagship")} title={korea.title} lede={korea.standfirst} />
          {korea.meta && (
            <ul className="korea-meta">
              {korea.meta.map((m) => <li key={m}>{m}</li>)}
            </ul>
          )}
          <div className="korea-ctas">
            <Link className="btn btn--gold" to="/book">{t("cta.book")} <Arrow /></Link>
            <Link className="btn btn--ghost" to="/contact">{t("talk")} <Arrow /></Link>
          </div>
          <div className="threeup">
            {korea.transformation.map((row) => (
              <article key={row.from}>
                <div className="arrowline">{row.from}<i>{t("pages.to")}</i><b>{row.to}</b></div>
                <p>{row.body}</p>
              </article>
            ))}
          </div>
          <div className="korea-honest">
            <p className="eyebrow">{korea.honest.label}</p>
            <p className="lede">{korea.honest.intro}</p>
            <div className="honest">
              {korea.honest.columns.map((c) => (
                <article key={c.name}>
                  <h4>{c.name}</h4>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow={t("pages.labsEyebrow")}
            title={t("pages.labsTitle")}
            lede={t("pages.labsLede")}
          />
          <ul className="labs">
            {korea.labs.map((l) => (
              <li key={l.n}>
                <span className="labs__n">{String(l.n).padStart(2, "0")}</span>
                <span><b>{l.name}</b> <span className="d">{l.body}</span></span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 18, fontStyle: "italic", color: "var(--slate-soft)", fontSize: 14.5 }}>{korea.labsNote}</p>
          <div style={{ marginTop: "clamp(48px,6vw,84px)" }}>
            {korea.spotlights.map((s) => (
              <article className="spot" key={s.name}>
                <div className="spot__img"><Img src={s.image} alt={s.name} glyph={s.glyph || "참"} /></div>
                <div className="spot__body">
                  <p className="spot__kicker">{s.kicker}</p>
                  <h3>{s.name}</h3>
                  <p>{s.body}</p>
                  <div className="spot__builds">{t("pages.buildsLabel")} <b>{s.builds}</b></div>
                </div>
              </article>
            ))}
          </div>
          <div className="gallery" style={{ marginTop: "clamp(36px,5vw,60px)" }}>
            {korea.gallery.map((g) => (
              <figure key={g.src}>
                <Img src={g.src} alt={g.caption} />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec--tint">
        <div className="wrap">
          <SectionHead eyebrow={t("pages.backHome")} title={korea.homecoming.title} lede={korea.homecoming.intro} />
          <div className="grid grid--3">
            {korea.homecoming.items.map((h) => (
              <div key={h.n} style={{ borderTop: "1px solid var(--rule)", paddingTop: 18 }}>
                <div className="seq__n">{String(h.n).padStart(2, "0")}</div>
                <h3 style={{ fontSize: 23, margin: "6px 0 10px" }}>{h.name}</h3>
                <p style={{ fontSize: 15, color: "var(--slate)" }}>{h.body}</p>
                <p style={{ fontSize: 14, margin: 0, color: "var(--teal)", fontWeight: 600 }}>{h.learns}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function Tool() {
  const { tool } = useContent();
  return (
    <section className="sec sec--tint tool-sec">
      <div className="wrap">
        <div className="tool">
          <div>
            <p className="eyebrow">{tool.sub}</p>
            <h2 className="h-sec" style={{ marginBottom: 16 }}>{tool.title}</h2>
            <p>{tool.body}</p>
            <ul className="tool__feat" style={{ marginTop: 20 }}>
              {tool.features.map((f) => (
                <li key={f.name}><b>{f.name}</b><span>{f.body}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="tool__shot"><Img src={tool.image} alt="The RealBoard learning journey app" glyph="◉" /></div>
            <div className="watchers">
              <h4>{tool.watchers.label}</h4>
              <p>{tool.watchers.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Leader() {
  const { leader } = useContent();
  const { t } = usePrefs();
  return (
    <section className="sec leader">
      <div className="wrap">
        <SectionHead eyebrow={t("pages.whoLeads")} title={leader.title} />
        <div className="leader__profile">
          <figure className="leader__portrait">
            <Img src={leader.portrait} alt={leader.name} />
          </figure>
          <div className="leader__copy">
            <h3 className="leader__name">{leader.name}</h3>
            <ul className="leader__roles">
              {leader.roles.map((r) => <li key={r}>{r}</li>)}
            </ul>
            <p className="lede leader__standfirst">{leader.standfirst}</p>
            <div className="leader__bio">
              {leader.bio.map((b, i) => <p key={i}>{b}</p>)}
            </div>
          </div>
        </div>

        <div className="leader__block">
          <p className="eyebrow">{leader.photosLabel}</p>
          <h3 className="h-sub">{leader.photosTitle}</h3>
          <div className="leader__gallery">
            {leader.photos.map((p) => (
              <figure key={p.src} className="leader__shot">
                <div className="leader__shot-img"><Img src={p.src} alt={p.caption} /></div>
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="leader__block">
          <p className="eyebrow">{leader.pathLabel}</p>
          <h3 className="h-sub">{leader.pathTitle}</h3>
          <ol className="leader__path">
            {leader.timeline.map((item) => (
              <li key={item.when + item.what}>
                <span className="leader__path-when">{item.when}</span>
                <div className="leader__path-card">
                  <h4>{item.what}</h4>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="leader__cards">
          {leader.cards.map((c) => (
            <article key={c.name} className="leader__card">
              <h4>{c.name}</h4>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Assurance() {
  const { assurance } = useContent();
  const { t } = usePrefs();
  return (
    <section className="sec sec--tint">
      <div className="wrap">
        <SectionHead eyebrow={t("pages.forParents")} title={assurance.title} lede={assurance.intro} />
        <div className="assure">
          {assurance.items.map((a) => (
            <div key={a.name}>
              <h4>{a.name}</h4>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
        <div className="safeguard">
          <h4>{assurance.outreachSafeguard.label}</h4>
          <p>{assurance.outreachSafeguard.body}</p>
        </div>
      </div>
    </section>
  );
}

export function Schools() {
  const { schools } = useContent();
  const { t } = usePrefs();
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead eyebrow={t("pages.forSchools")} title={schools.title} />
        <div className="cols2">
          <div>
            <h4>{schools.forStudents.label}</h4>
            <ul>{schools.forStudents.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div>
            <h4>{schools.forSchool.label}</h4>
            <ul>{schools.forSchool.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
        <div className="bigq">
          <p className="eyebrow">{schools.question.label}</p>
          <p className="bigq__q">{schools.question.body}</p>
        </div>
      </div>
    </section>
  );
}
