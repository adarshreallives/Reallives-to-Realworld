import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, languages, lookup } from "./i18n.js";

const PrefsContext = createContext(null);

function readStore(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v || fallback;
  } catch {
    return fallback;
  }
}

export function PrefsProvider({ children }) {
  const [theme, setTheme] = useState(() => (readStore("rl-theme", "light") === "dark" ? "dark" : "light"));
  const [locale, setLocale] = useState(() => {
    const v = readStore("rl-lang", "en");
    return languages.some((l) => l.id === v) ? v : "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("rl-theme", theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    try { localStorage.setItem("rl-lang", locale); } catch { /* ignore */ }
  }, [locale]);

  const value = useMemo(() => ({
    theme,
    locale,
    languages,
    setTheme,
    setLocale,
    toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    t: (key) => lookup(locale, key),
    copy: dictionaries[locale] || dictionaries.en,
  }), [theme, locale]);

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used within PrefsProvider");
  return ctx;
}
