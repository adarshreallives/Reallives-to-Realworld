import React from "react";
import { Link } from "react-router-dom";
import { brand } from "../content.js";
import { Arrow } from "./ui.jsx";
import { usePrefs } from "../prefs.jsx";

export default function CtaBand() {
  const c = brand.contact;
  const tel = c.phone.replace(/\s/g, "");
  const { copy } = usePrefs();
  const band = copy.cta;
  return (
    <section className="cta">
      <div className="wrap cta__in">
        <div className="cta__top">
          <div className="cta__copy">
            <p className="cta__quote">“{band.quote}”</p>
            <h2>{band.title}</h2>
            <p className="cta__body">{band.body}</p>
          </div>
          <aside className="cta__panel">
            <Link className="btn btn--gold" to="/book">
              {band.book} <Arrow />
            </Link>
            <a className="cta__phone" href={`tel:${tel}`}>
              <span className="cta__phone-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M7.2 3.5c.4-.4 1-.5 1.5-.3l2.2.8c.6.2 1 .8 1 1.4l.1 2.2c0 .5-.2 1-.6 1.3l-1.1.9a12.4 12.4 0 0 0 5.3 5.3l.9-1.1c.3-.4.8-.6 1.3-.6l2.2.1c.6 0 1.2.4 1.4 1l.8 2.2c.2.5.1 1.1-.3 1.5l-1.4 1.4c-.4.4-1 .6-1.6.5C11.6 20.6 3.4 12.4 4.3 4.9c0-.6.2-1.2.6-1.6l2.3-1.8Z"
                  />
                </svg>
              </span>
              <span>
                <span className="cta__phone-label">{copy.contact.phone}</span>
                <strong>{c.phone}</strong>
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
