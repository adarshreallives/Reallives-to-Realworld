import React from "react";
import { Link } from "react-router-dom";
import { featured } from "../content.js";
import { Arrow } from "../components/ui.jsx";
import { Hero, Idea, Arc } from "../components/sections.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { usePrefs } from "../prefs.jsx";

export default function Home() {
  const { copy } = usePrefs();
  const f = copy.featured;
  return (  

    <>
      <Hero />
      
      <section className="featured">
        <div className="wrap featured__in">
          <header className="featured__head">
            <p className="eyebrow">{f.kicker}</p>
            <div className="featured__head-row">
              <h2>{f.title1}<br />{f.title2}</h2>
              <div className="featured__lede">
                <p>{f.intro}</p>
                <Link className="textlink" to={featured.cta.href}>{f.cta} <Arrow /></Link>
              </div>
            </div>
          </header>

          <div className="featured__grid">
            {featured.items.map((d, i) => (
              <Link key={d.title} className={`fcard${i === 0 ? " fcard--lead" : ""}`} to={d.href}>
                <span className="fcard__kicker">{f.items[i].kicker}</span>
                <strong>{f.items[i].title}</strong>
                {f.items[i].blurb && <p className="fcard__blurb">{f.items[i].blurb}</p>}
                <em>{f.items[i].tags}</em>
                <span className="fcard__meta">{f.items[i].meta}</span>
                <span className="fcard__go">{i === 0 ? f.koreaCta : f.more} <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Idea />
      <Arc />
      <CtaBand />
    </>
  );
}
