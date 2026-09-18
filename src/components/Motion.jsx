import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SELECTOR = [
  ".hero__copy",
  ".pagehero__in",
  ".featured__head",
  ".fcard",
  ".idea-sec__head",
  ".nots__row",
  ".arcsec__copy",
  ".arc-row",
  ".journey__head",
  ".journey__nav",
  ".journey__stage",
  ".teams__head",
  ".lenses__card",
  ".contrast",
  ".cta__in",
  ".sec-head",
  ".dest",
  ".path",
  ".contact-direct",
  ".contact-card",
  ".book__main",
  ".book__side",
  ".leader__profile",
  ".life__head",
  ".life__row",
  ".rhythm > article",
  ".arcsteps li",
  ".foot__grid > div",
].join(", ");

export default function Motion() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll(SELECTOR));
    if (!nodes.length) return undefined;

    if (reduce) {
      nodes.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }

    nodes.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", `${(i % 5) * 80}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    requestAnimationFrame(() => {
      nodes.forEach((el) => io.observe(el));
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
