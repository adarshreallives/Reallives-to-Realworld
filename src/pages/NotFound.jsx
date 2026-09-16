import React from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../components/ui.jsx";
import { usePrefs } from "../prefs.jsx";

export default function NotFound() {
  const { t } = usePrefs();
  return (
    <section className="nf">
      <div className="nf__in">
        <p className="eyebrow">404</p>
        <h1>{t("notFound.title")}</h1>
        <p className="nf__lede">{t("notFound.lede")}</p>
        <Link className="btn btn--gold nf__home" to="/">
          {t("notFound.home")} <Arrow />
        </Link>
      </div>
    </section>
  );
}
