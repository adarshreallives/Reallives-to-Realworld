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
        <path d="M0 58C160 38 260 78 420 54C590 28 720 74 900 50C1080 28 1240 64 1440 46" fill="none" stroke="#7EB8B8" strokeWidth="1.8" />
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
              <svg className="arcsec__trail" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path
                  d="M22 158 C 48 92, 118 22, 248 36 C 300 44, 338 40, 372 28"
                  fill="none"
                  stroke="#D69A27"
                  strokeWidth="2"
                  strokeDasharray="6 7"
                  strokeLinecap="round"
                />
                <g transform="translate(368 16) rotate(-28)">
                  <path d="M1 9.5 22 1 11.5 22.5 11.2 12.6Z" fill="#D69A27" />
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

function JourneyIcon({ i }) {
  const props = { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", "aria-hidden": "true" };
  if (i === 0) {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.6 12S6.8 6.4 12 6.4 20.4 12 20.4 12 17.2 17.6 12 17.6 3.6 12 3.6 12z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (i === 1) {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5.5 19.2c.8-3.4 3.4-5 6.5-5s5.7 1.6 6.5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (i === 2) {
    return (
      <svg {...props}>
        <rect x="4" y="7" width="16" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.2 7 9.4 4.8h5.2L16 7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="2.6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (i === 3) {
    return (
      <svg {...props}>
        <path d="M14.2 4.8 19.2 9.8 9 20H4v-5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12.6 6.4 17.6 11.4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <rect x="6" y="3.8" width="12" height="16.4" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 8.2h6M9 11.4h6M9 14.6h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function TeamIcon({ i }) {
  const props = { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", "aria-hidden": "true" };
  if (i === 0) {
    return (
      <svg {...props}>
        <circle cx="9" cy="8.5" r="2.6" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="15.4" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4.6 18.4c.7-3.2 2.8-4.8 5.4-4.8s4.7 1.6 5.4 4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M14 13.8c1.8-.2 3.6.8 4.6 2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (i === 1) {
    return (
      <svg {...props}>
        <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 13 16 8.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 4.4h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (i === 2) {
    return (
      <svg {...props}>
        <path d="M12 19.2s-6.4-4-6.4-8.2A3.5 3.5 0 0 1 12 8.4a3.5 3.5 0 0 1 6.4 2.6c0 4.2-6.4 8.2-6.4 8.2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (i === 3) {
    return (
      <svg {...props}>
        <path d="M9 18c0-4 6-4.5 6-9a3 3 0 1 0-6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="20" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (i === 4) {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 4.4v2.2M12 17.4v2.2M4.4 12h2.2M17.4 12h2.2M6.6 6.6l1.6 1.6M15.8 15.8l1.6 1.6M17.4 6.6l-1.6 1.6M8.2 15.8l-1.6 1.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="8.6" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.4" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.4 18.4c.6-2.8 2.4-4.3 4.6-4.3s4 1.5 4.6 4.3M10.8 18.4c.6-2.8 2.4-4.3 4.6-4.3s4 1.5 4.6 4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ListMark({ ok }) {
  if (ok) {
    return (
      <span className="contrast__mark contrast__mark--ok" aria-hidden="true">
        <svg viewBox="0 0 16 16" width="12" height="12"><path d="M3.5 8.2 6.6 11.2 12.5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
    );
  }
  return (
    <span className="contrast__mark contrast__mark--no" aria-hidden="true">
      <svg viewBox="0 0 16 16" width="11" height="11"><path d="M5 5l6 6M11 5l-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
    </span>
  );
}

export function Method() {
  const [mode, setMode] = useState(0);
  const { method } = useContent();
  const steps = method.matrix.modes;
  const current = steps[mode];
  const nextIndex = (mode + 1) % steps.length;
  const next = steps[nextIndex];
  const journey = method.journey;
  return (
    <>
      <section className="journey" aria-labelledby="journey-title">
        <div className="wrap journey__in">
          <header className="journey__head">
            <div className="journey__intro">
              <p className="journey__label">{journey.label}</p>
              <h2 id="journey-title" className="journey__title">{journey.title}</h2>
              <p className="journey__lede">{journey.intro}</p>
            </div>
            <p className="journey__aside">
              {journey.aside}
              <svg className="journey__aside-mark" viewBox="0 0 90 14" fill="none" aria-hidden="true">
                <path d="M2 9c18-6 38-8 56-4 10 2 20 5 30 2" stroke="#D69A27" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </p>
          </header>

          <div className="journey__layout">
            <div className="journey__nav matrix__tabs" role="tablist" aria-label={journey.label}>
              {steps.map((m, i) => {
                const n = String(i + 1).padStart(2, "0");
                const on = mode === i;
                return (
                  <button
                    key={m.name}
                    type="button"
                    className={`journey__item${on ? " is-on" : ""}`}
                    role="tab"
                    id={`matrix-tab-${i}`}
                    aria-selected={on}
                    aria-controls="matrix-panel"
                    onClick={() => setMode(i)}
                  >
                    <span className="journey__ico"><JourneyIcon i={i} /></span>
                    <span className="journey__item-copy">
                      <span className="journey__item-n">{on ? `${n} / 05` : n}</span>
                      <span className="m__name journey__item-name">{m.name}</span>
                      <span className="m__hint journey__item-hint">{m.hint}</span>
                    </span>
                    <span className="journey__go" aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="14" height="14">
                        <path d="M4 8h8M9 4.5 12.5 8 9 11.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            <article className="journey__stage matrix__panel" role="tabpanel" id="matrix-panel" aria-labelledby={`matrix-tab-${mode}`}>
              <div className="journey__copy" key={mode}>
                <p className="matrix__count journey__count">{String(mode + 1).padStart(2, "0")} / 05</p>
                <h3 className="journey__step-title">{current.name}</h3>
                <p className="matrix__kicker journey__kicker">{current.hint}</p>
                <p className="matrix__body journey__body">{current.body}</p>
                <div className="journey__insight">
                  <p className="journey__insight-title">{current.insightTitle}</p>
                  <p>{current.insight}</p>
                </div>
                <button type="button" className="journey__next" onClick={() => setMode(nextIndex)}>
                  {journey.nextPrefix}: {next.name} <Arrow />
                </button>
              </div>
              <figure className="journey__media">
                <div className="journey__photo">
                  <Img src={current.image} alt="" />
                  {current.caption && <span className="journey__caption">{current.caption}</span>}
                </div>
                {current.quote && (
                  <blockquote className="journey__quote">{current.quote}</blockquote>
                )}
              </figure>
            </article>
          </div>
        </div>
      </section>

      <section className="teams" aria-labelledby="teams-title">
        <div className="wrap teams__in">
          <header className="teams__head">
            <div>
              <p className="teams__label">{method.lenses.kicker}</p>
              <h2 id="teams-title" className="teams__title">{method.lenses.label}</h2>
              <p className="teams__lede">{method.lenses.intro}</p>
            </div>
            <p className="teams__aside">
              {method.lenses.aside}
              <svg className="teams__aside-mark" viewBox="0 0 90 14" fill="none" aria-hidden="true">
                <path d="M2 9c18-6 38-8 56-4 10 2 20 5 30 2" stroke="#D69A27" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </p>
          </header>

          <div className="lenses">
            {method.lenses.items.map((l, i) => (
              <article key={l.name} className={`lenses__card lenses__card--${i}`}>
                <span className="lenses__ico"><TeamIcon i={i} /></span>
                <div className="lenses__copy">
                  <h3>{l.name}</h3>
                  <p>{l.q}</p>
                </div>
                <span className="lenses__go" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path d="M4 8h8M9 4.5 12.5 8 9 11.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </article>
            ))}
          </div>

          <div className="contrast">
            <article className="contrast__side">
              <div className="contrast__copy">
                <p className="contrast__kicker">{method.contrast.a.label}</p>
                <h3>{method.contrast.a.title}</h3>
                <ul>
                  {method.contrast.a.points.map((p) => (
                    <li key={p}><ListMark />{p}</li>
                  ))}
                </ul>
              </div>
              <figure className="contrast__shot">
                <Img src={method.contrast.a.image} alt="" />
              </figure>
            </article>
            <div className="contrast__vs" aria-hidden="true"><span>VS</span></div>
            <article className="contrast__side contrast__side--b">
              <div className="contrast__copy">
                <p className="contrast__kicker">{method.contrast.b.label}</p>
                <h3>{method.contrast.b.title}</h3>
                <ul>
                  {method.contrast.b.points.map((p) => (
                    <li key={p}><ListMark ok />{p}</li>
                  ))}
                </ul>
              </div>
              <figure className="contrast__shot contrast__note">
                <span className="contrast__note-text">{method.contrast.b.note}</span>
              </figure>
            </article>
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

function LifeIcon({ name }) {
  if (name === "road") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="48" rx="12" fill="#D9EFE6" />
        <path d="M8 42c8-8 14-16 22-18 8-2 12 4 18 2 6-2 10-8 10-8" fill="#8FBF8A" />
        <path d="M8 48c10-6 18-14 28-14s18 8 20 10" fill="#6FA86A" />
        <path d="M24 50 32 22l8 28Z" fill="#7A8B97" />
        <path d="M32 26v20" stroke="#fff" strokeWidth="1.6" strokeDasharray="3 3" />
        <circle cx="46" cy="18" r="5" fill="#F4D27A" />
      </svg>
    );
  }
  if (name === "peaks") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="48" rx="12" fill="#D7E8F6" />
        <path d="M10 48 24 22l8 12 8-16 14 30Z" fill="#7EA4C9" />
        <path d="M24 22l4 8-3 2-5-4Z" fill="#F4F7FB" />
        <path d="M40 18l3 7-4 2-3-5Z" fill="#F4F7FB" />
      </svg>
    );
  }
  if (name === "hospital") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="48" rx="12" fill="#E7DFF4" />
        <rect x="18" y="22" width="28" height="24" rx="3" fill="#C9B6E4" />
        <rect x="26" y="16" width="12" height="8" rx="2" fill="#B39AD4" />
        <path d="M32 19v8M28 23h8" stroke="#E85A5A" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="22" y="28" width="6" height="6" rx="1" fill="#F7F2FF" />
        <rect x="36" y="28" width="6" height="6" rx="1" fill="#F7F2FF" />
        <rect x="28" y="38" width="8" height="8" fill="#F7F2FF" />
      </svg>
    );
  }
  if (name === "camp") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="48" rx="12" fill="#D8F0E4" />
        <path d="M8 44h48v6H8Z" fill="#8FBF8A" />
        <path d="M16 44 32 22l16 22Z" fill="#E8C37A" />
        <path d="M32 22v22" stroke="#C48A3A" strokeWidth="1.6" />
        <circle cx="44" cy="18" r="5" fill="#F4D27A" />
        <path d="M12 36c4-6 10-8 16-6" stroke="#6FA86A" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  if (name === "flag-peak") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="48" rx="12" fill="#F8E3DC" />
        <path d="M10 48 28 20l10 14 16 14Z" fill="#5C6570" />
        <path d="M28 20l4 8-4 2-6-4Z" fill="#EDE6DC" />
        <path d="M28 20v-6" stroke="#3E4650" strokeWidth="1.8" />
        <path d="M28 14h12l-3 4 3 4H28Z" fill="#E25B4C" />
      </svg>
    );
  }
  if (name === "book") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="48" rx="12" fill="#D9E7F8" />
        <path d="M16 44c8-3 16-3 24 0V20c-8-3-16-3-24 0v24Z" fill="#3D6DB5" />
        <path d="M28 20v24" stroke="#F4F7FB" strokeWidth="1.6" />
        <path d="M20 26h6M20 31h6M32 26h6M32 31h6" stroke="#F4F7FB" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "podium") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="48" rx="12" fill="#F6EBD4" />
        <circle cx="32" cy="22" r="7" fill="#C9844A" />
        <path d="M24 30c2 6 14 6 16 0" fill="#C9844A" />
        <path d="M18 46h28l-4-12H22Z" fill="#8A5A28" />
        <circle cx="32" cy="20" r="2.2" fill="#F6EBD4" />
      </svg>
    );
  }
  if (name === "capitol") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="8" width="52" height="48" rx="12" fill="#DCEFE4" />
        <path d="M18 44V30h28v14" fill="#4F8F78" />
        <path d="M16 30h32l-16-10Z" fill="#3F7A66" />
        <circle cx="32" cy="16" r="4" fill="#4F8F78" />
        <path d="M22 36v8M27 36v8M32 36v8M37 36v8M42 36v8" stroke="#E7F6EE" strokeWidth="2" />
        <path d="M14 44h36" stroke="#3F7A66" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="6" y="8" width="52" height="48" rx="12" fill="#F3E6C8" />
      <path d="M8 46 24 26l8 10 8-14 16 24Z" fill="#7FA36A" />
      <path d="M8 48h48v4H8Z" fill="#8FBF8A" />
      <circle cx="44" cy="18" r="6" fill="#F4D27A" />
    </svg>
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
      </div>

      <div className="life" aria-labelledby="life-title">
        <div className="life__blob life__blob--tr" aria-hidden="true" />
        <div className="life__blob life__blob--bl" aria-hidden="true" />
        <svg className="life__peaks" viewBox="0 0 220 70" fill="none" aria-hidden="true">
          <path d="M40 70 92 18l28 22 30-28 70 58" stroke="#C9D5CC" strokeWidth="1.6" />
          <path d="M70 70 120 28l24 18 26-22 50 46" stroke="#D7E0D8" strokeWidth="1.4" />
        </svg>
        <div className="wrap life__in">
          <header className="life__head">
            <p className="life__label">{leader.pathLabel}</p>
            <h3 id="life-title" className="life__title">{leader.pathTitle}</h3>
            <p className="life__lede">{leader.pathLede}</p>
          </header>
          <ol className="life__list">
            {leader.timeline.map((item) => (
              <li key={item.what} className={`life__row life__row--${item.tone}`}>
                <div className="life__when">
                  <span className="life__dot" aria-hidden="true" />
                  <b>{item.when}</b>
                  <i>{item.tag}</i>
                </div>
                <article className="life__card">
                  <span className="life__icon"><LifeIcon name={item.icon} /></span>
                  <div className="life__copy">
                    <h4>{item.what}</h4>
                    <p>{item.body}</p>
                  </div>
                  <span className="life__go" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="16" height="16">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="wrap">
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
