import { useMemo } from "react";
import * as en from "./content.js";
import { overlays } from "./i18n/overlays.js";
import { usePrefs } from "./prefs.jsx";

function merge(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base)) return base.map((item, i) => merge(item, over[i]));
  if (base && typeof base === "object" && over && typeof over === "object") {
    const out = { ...base };
    for (const k of Object.keys(base)) {
      if (k in over) out[k] = merge(base[k], over[k]);
    }
    return out;
  }
  return over;
}

export function useContent() {
  const { locale } = usePrefs();
  return useMemo(() => {
    const over = overlays[locale] || {};
    return {
      method: merge(en.method, over.method),
      builds: merge(en.builds, over.builds),
      destinations: merge(en.destinations, over.destinations),
      korea: merge(en.korea, over.korea),
      tool: merge(en.tool, over.tool),
      leader: merge(en.leader, over.leader),
      assurance: merge(en.assurance, over.assurance),
      schools: merge(en.schools, over.schools),
      footerNote: over.footerNote || en.footerNote,
    };
  }, [locale]);
}
