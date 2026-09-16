import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Loader() {
  const { pathname } = useLocation();
  const [on, setOn] = useState(true);
  const first = useRef(true);

  useEffect(() => {
    setOn(true);
    const ms = first.current ? 720 : 360;
    first.current = false;
    const t = window.setTimeout(() => setOn(false), ms);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div className={"loader" + (on ? " is-on" : "")} aria-hidden={!on} aria-busy={on} role="status">
      <span className="loader__mark">
        <img src="/assets/logo-rl.png" alt="" width="52" height="52" />
      </span>
      <span className="loader__ring" />
      <span className="loader__sr">Loading</span>
    </div>
  );
}
