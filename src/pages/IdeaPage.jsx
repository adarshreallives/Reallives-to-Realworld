import React from "react";
import { Idea, Arc } from "../components/sections.jsx";
import { PageHero } from "../components/ui.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { usePrefs } from "../prefs.jsx";

export default function IdeaPage() {
  const { t } = usePrefs();
  return (
    <>
      <PageHero
        kicker={t("nav./the-idea")}
        title={t("pages.ideaHeroTitle")}
        lede={t("pages.ideaHeroLede")}
      />
      <Idea />
      <Arc />
      <CtaBand />
    </>
  );
}
