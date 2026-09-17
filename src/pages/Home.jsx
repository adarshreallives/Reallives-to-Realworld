import React from "react";
import { Link } from "react-router-dom";
import { featured } from "../content.js";
import { Arrow } from "../components/ui.jsx";
import { Hero, Idea, Arc } from "../components/sections.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { usePrefs } from "../prefs.jsx";

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 12h18M12 3c2.6 2.4 4 5.5 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.5-4-9s1.4-6.6 4-9z" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ChipIcon({ name }) {
  if (name === "edu") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M3 10 12 5l9 5-9 5-9-5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7 12.5v4.2c0 .6 2.2 2.3 5 2.3s5-1.7 5-2.3v-4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (name === "world") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3.5 12h17M12 3.5c2.4 2.2 3.6 5 3.6 8.5S14.4 18.3 12 20.5C9.6 18.3 8.4 15.5 8.4 12S9.6 5.7 12 3.5z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M9 18c0-4 6-4.5 6-9a3 3 0 1 0-6 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="20" r="1.1" fill="currentColor" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const CHIP_ICONS = ["idea", "edu", "world"];

function splitTags(value) {
  return String(value || "").split(/\s*·\s*/).map((t) => t.trim()).filter(Boolean);
}

export default function Home() {
  const { copy } = usePrefs();
  const f = copy.featured;
  const lead = featured.items[0];
  const leadCopy = f.items[0];
  const side = featured.items.slice(1);

  return (
    <>
      <Hero />

      <section className="featured" id="featured">
        <div className="featured__art" aria-hidden="true">
          <span className="featured__blob featured__blob--a" />
          <span className="featured__blob featured__blob--b" />
          <span className="featured__blob featured__blob--c" />
          <span className="featured__blob featured__blob--d" />
        </div>
        <div className="wrap featured__in">
          <header className="featured__head">
            <p className="eyebrow">{f.kicker}</p>
            <div className="featured__head-row">
              <h2>{f.title1}<br />{f.title2}</h2>
              <div className="featured__lede">
                <span className="featured__globe" aria-hidden="true"><GlobeIcon /></span>
                <p>{f.intro}</p>
                <Link className="textlink" to={featured.cta.href}>{f.cta} <Arrow /></Link>
              </div>
            </div>
          </header>

          <div className="featured__grid">
            <article className="fcard fcard--lead">
              <div className="fcard__copy">
                <span className="fcard__kicker">{leadCopy.kicker}</span>
                <h3>{leadCopy.title}</h3>
                <p className="fcard__blurb">{leadCopy.blurb}</p>
                <ul className="fcard__chips">
                  {splitTags(leadCopy.tags).map((tag, i) => (
                    <li key={tag}>
                      <ChipIcon name={CHIP_ICONS[i]} />
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="fcard__meta">
                  <CalIcon />
                  {Array.isArray(lead.meta) ? lead.meta.join("  /  ") : leadCopy.meta}
                </p>
                <Link className="fcard__cta" to={lead.href}>
                  {f.koreaCta} <Arrow />
                </Link>
              </div>
              <div className="fcard__media" aria-hidden="true">
                <img src={lead.image} alt="" />
              </div>
            </article>

            <div className="featured__side">
              {side.map((d, i) => {
                const item = f.items[i + 1];
                return (
                  <Link
                    key={d.title}
                    className={"fcard fcard--side" + (i === 1 ? " fcard--schools" : " fcard--unis")}
                    to={d.href}
                  >
                    <div className="fcard__copy">
                      <span className="fcard__kicker">{item.kicker}</span>
                      <strong>{item.title}</strong>
                      <em>{item.tags}</em>
                      <span className="fcard__meta">{item.meta}</span>
                      <span className="fcard__go">{f.more} <Arrow /></span>
                    </div>
                    <span className="fcard__shot">
                      <img src={d.image} alt="" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="featured__strip">Real places / Real people / Real change</div>
        </div>
      </section>
      <Idea />
      <Arc />
      <CtaBand />
    </>
  );
}
