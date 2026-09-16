import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav } from "../content.js";
import { Arrow, Mark } from "./ui.jsx";
import { usePrefs } from "../prefs.jsx";

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M15.2 3.3A9 9 0 1 0 20.7 14 7.2 7.2 0 0 1 15.2 3.3z" fill="currentColor" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function HeaderTools() {
  const { theme, toggleTheme, t } = usePrefs();
  return (
    <div className="nav__tools">
      <button
        type="button"
        className="theme-btn"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
        title={theme === "dark" ? t("theme.light") : t("theme.dark")}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = usePrefs();
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const mq = window.matchMedia("(min-width: 1025px)");
    const onMq = () => { if (mq.matches) setOpen(false); };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={"nav" + (scrolled ? " nav--scrolled" : "") + (open ? " nav--open" : "")}>
      <a className="skip" href="#main">{t("skip")}</a>
      <div className="nav__in">
        <Link className="nav__mark" to="/" onClick={close} aria-label="RealLives to RealWorld">
          <Mark />
          <span className="nav__lockup">
            <span className="nav__lockup-row">
              <span className="nav__lockup-name">RealLives</span>
              <span className="nav__lockup-to">to</span>
              <span className="nav__lockup-world">RealWorld</span>
            </span>
            <span className="nav__lockup-tag">The ChangeMaker Journey</span>
          </span>
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {nav.map((n) => (
            <NavLink key={n.path} to={n.path} className={({ isActive }) => (isActive ? "is-active" : "")}>
              {t(`nav.${n.path}`)}
            </NavLink>
          ))}
        </nav>
        <div className="nav__end">
          <Link className="nav__cta" to="/contact">{t("talk")} <Arrow /></Link>
          <HeaderTools />
          <button
            className="nav__burger"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <span />
            <span />
            <span />
            <em>{open ? t("close") : t("menu")}</em>
          </button>
        </div>
      </div>
      <div className="nav__drawer" id="site-menu" aria-hidden={!open} {...(!open ? { inert: "" } : {})}>
        <div className="nav__drawer-in">
          <NavLink to="/" end onClick={close} className={({ isActive }) => (isActive ? "is-active" : "")}>{t("home")}</NavLink>
          {nav.map((n) => (
            <NavLink key={n.path} to={n.path} onClick={close} className={({ isActive }) => (isActive ? "is-active" : "")}>{t(`nav.${n.path}`)}</NavLink>
          ))}
          <Link className="nav__drawer-cta" to="/contact" onClick={close}>{t("talk")}</Link>
        </div>
      </div>
    </header>
  );
}
