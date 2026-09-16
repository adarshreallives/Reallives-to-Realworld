import React from "react";
import { Link } from "react-router-dom";
import { brand } from "../content.js";
import { Arrow, PageHero } from "../components/ui.jsx";
import { usePrefs } from "../prefs.jsx";

export default function ContactPage() {
  const c = brand.contact;
  const tel = c.phone.replace(/\s/g, "");
  const { copy } = usePrefs();
  const page = copy.contact;

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lede={page.lede} />
      <section className="sec contact-sec">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-direct">
              <p className="eyebrow">{page.direct}</p>
              <h2>{c.name}</h2>
              <p className="contact-role">{c.role}</p>
              <dl className="contact-list">
                <div>
                  <dt>{page.email}</dt>
                  <dd><a href={`mailto:${c.email}`}>{c.email}</a></dd>
                </div>
                <div>
                  <dt>{page.phone}</dt>
                  <dd><a href={`tel:${tel}`}>{c.phone}</a></dd>
                </div>
                <div>
                  <dt>{page.studio}</dt>
                  <dd>{page.pune}</dd>
                </div>
              </dl>
            </div>
            <aside className="contact-card">
              <p className="eyebrow">{page.book}</p>
              <h3>{page.cardTitle}</h3>
              <p>{page.cardBody}</p>
              <div className="contact-card__actions">
                <Link className="btn btn--gold" to="/book">
                  {page.bookCta} <Arrow />
                </Link>
                <a className="btn btn--line" href={`tel:${tel}`}>{c.phone}</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
