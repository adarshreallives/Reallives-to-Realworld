import React from "react";
import { Link } from "react-router-dom";
import { brand, nav, moreNav } from "../content.js";
import { Mark } from "./ui.jsx";
import { usePrefs } from "../prefs.jsx";

export default function Footer() {
  const c = brand.contact;
  const { t, copy } = usePrefs();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div className="foot__brand">
            <div className="foot__mark">
              <Mark />
              <span className="nav__word">
                <b>{brand.org}</b>
                <i>{t("tagline")}</i>
              </span>
            </div>
            <p className="foot__prog">{brand.programme}</p>
            <p className="foot__note">{t("footer.note")}</p>
          </div>
          <div>
            <h3>{t("footer.explore")}</h3>
            <ul>
              <li><Link to="/">{t("home")}</Link></li>
              {nav.map((n) => (
                <li key={n.path}><Link to={n.path}>{t(`nav.${n.path}`)}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t("footer.more")}</h3>
            <ul>
              {moreNav.map((n) => (
                <li key={n.path}><Link to={n.path}>{t(`nav.${n.path}`)}</Link></li>
              ))}
            </ul>
            <h3 style={{ marginTop: 22 }}>{t("footer.contact")}</h3>
            <ul>
              <li><a href={`mailto:${c.email}`}>{c.email}</a></li>
              <li><a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a></li>
              <li>{t("contact.pune")}</li>
            </ul>
          </div>
          <div>
            <h3>{t("footer.arc")}</h3>
            <ul className="foot__arc">
              {copy.arc.steps.map((a) => (
                <li key={a.n}><b>{a.n}</b>{a.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot__base">
          <p>© {new Date().getFullYear()} {brand.org}. {t("footer.rights")}</p>
          <div className="foot__sites">
            {brand.sites.map((s) => (
              <a key={s} href={`https://${s}`} target="_blank" rel="noreferrer">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
