import React, { useState } from "react";

export function Img({ src, alt, glyph = "참", style, eager = false }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) return <div className="imgfall" style={style}>{glyph}</div>;
  return <img src={src} alt={alt} style={style} loading={eager ? "eager" : "lazy"} onError={() => setFailed(true)} />;
}

export function ScriptWall({ glyphs, seed = 0 }) {
  const spots = [
    { top: "4%", left: "62%", size: 180 },
    { top: "38%", left: "-3%", size: 240 },
    { top: "64%", left: "78%", size: 150 },
    { top: "16%", left: "31%", size: 120 },
    { top: "82%", left: "18%", size: 200 },
  ];
  return (
    <div className="scriptwall" aria-hidden="true">
      {spots.map((s, i) => (
        <span key={i} style={{ top: s.top, left: s.left, fontSize: s.size }}>
          {glyphs[(i + seed) % glyphs.length]}
        </span>
      ))}
    </div>
  );
}

export function SectionHead({ eyebrow, title, lede, children }) {
  return (
    <div className="sec-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h-sec">{title}</h2>
      {lede && <p className="lede" style={{ marginTop: 18 }}>{lede}</p>}
      {children}
    </div>
  );
}

export function Mark() {
  return (
    <span className="mark">
      <img src="/assets/logo-rl.png" alt="" width="52" height="52" />
    </span>
  );
}

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FlagKR() {
  return (
    <svg className="flagkr" viewBox="0 0 48 48" width="28" height="28" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#fff"/>
      <path d="M8 24a16 16 0 0 1 32 0Z" fill="#CD2E3A"/>
      <path d="M40 24a16 16 0 0 1-32 0Z" fill="#0047A0"/>
      <circle cx="24" cy="18" r="6" fill="#CD2E3A"/>
      <circle cx="24" cy="30" r="6" fill="#0047A0"/>
    </svg>
  );
}

export function PageHero({ kicker, title, lede }) {
  return (
    <section className="pagehero">
      <div className="wrap pagehero__in">
        {kicker && <p className="eyebrow eyebrow--gold">{kicker}</p>}
        <h1>{title}</h1>
        {lede && <p className="pagehero__lede">{lede}</p>}
      </div>
    </section>
  );
}
