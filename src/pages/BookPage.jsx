import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { brand, bookPage as copy } from "../content.js";
import { Arrow, PageHero } from "../components/ui.jsx";

const TZ = "Asia/Kolkata";
const STORE = "rl-bookings";

function pad(n) {
  return String(n).padStart(2, "0");
}

function istParts(date = new Date()) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hour12: false,
  });
  const parts = Object.fromEntries(fmt.formatToParts(date).map((p) => [p.type, p.value]));
  return parts;
}

function todayISO() {
  const p = istParts();
  return `${p.year}-${p.month}-${p.day}`;
}

function addDaysISO(iso, days) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`;
}

function weekdayFromISO(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

function isWeekend(iso) {
  const day = weekdayFromISO(iso);
  return day === 0 || day === 6;
}

function prettyDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function slots() {
  const list = [];
  for (let min = 10 * 60; min <= 17 * 60 + 40; min += 20) {
    list.push(`${pad(Math.floor(min / 60))}:${pad(min % 60)}`);
  }
  return list;
}

function minutesNow() {
  const p = istParts();
  return Number(p.hour) * 60 + Number(p.minute);
}

function slotMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function loadBookings() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE) || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function saveBooking(entry) {
  const next = [...loadBookings(), entry];
  localStorage.setItem(STORE, JSON.stringify(next));
}

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  role: "parent",
  org: "",
  date: "",
  time: "",
  note: "",
};

export default function BookPage() {
  const c = brand.contact;
  const allSlots = useMemo(() => slots(), []);
  const minDate = todayISO();
  const maxDate = addDaysISO(minDate, 60);
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [done, setDone] = useState(null);

  const taken = useMemo(() => {
    if (!form.date) return new Set();
    return new Set(
      loadBookings()
        .filter((b) => b.date === form.date)
        .map((b) => b.time)
    );
  }, [form.date, done]);

  const set = (key) => (e) => {
    const value = e.target.value;
    setError("");
    setForm((f) => {
      const next = { ...f, [key]: value };
      if (key === "date") next.time = "";
      return next;
    });
  };

  const pickTime = (time) => {
    setError("");
    setForm((f) => ({ ...f, time }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    if (!name || !email || !phone || !form.date || !form.time) {
      setError(copy.required);
      return;
    }
    if (isWeekend(form.date)) {
      setError(copy.weekend);
      return;
    }
    if (taken.has(form.time)) {
      setError(copy.taken);
      return;
    }

    const role = copy.roles.find((r) => r.id === form.role)?.label || form.role;
    const entry = {
      ...form,
      name,
      email,
      phone,
      role,
      created: new Date().toISOString(),
    };
    const subject = `Book a 20 minute call — ${prettyDate(form.date)}, ${form.time} IST`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Role: ${role}`,
      form.org.trim() ? `School / organisation: ${form.org.trim()}` : null,
      `Date: ${prettyDate(form.date)}`,
      `Time: ${form.time} IST (20 minutes)`,
      form.note.trim() ? `Note: ${form.note.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    saveBooking(entry);
    setDone(entry);
    const mailto = `mailto:${c.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => { window.location.href = mailto; }, 80);
  };

  if (done) {
    return (
      <>
        <PageHero kicker={copy.kicker} title={copy.doneTitle} lede={copy.doneBody} />
        <section className="sec contact-sec">
          <div className="wrap">
            <div className="book-done">
              <dl className="contact-list">
                <div>
                  <dt>When</dt>
                  <dd>{prettyDate(done.date)} · {done.time} IST · {copy.duration}</dd>
                </div>
                <div>
                  <dt>With</dt>
                  <dd>{c.name}, {c.role}</dd>
                </div>
                <div>
                  <dt>{copy.name}</dt>
                  <dd>{done.name}</dd>
                </div>
                <div>
                  <dt>{copy.email}</dt>
                  <dd>{done.email}</dd>
                </div>
                <div>
                  <dt>{copy.phone}</dt>
                  <dd>{done.phone}</dd>
                </div>
              </dl>
              <div className="contact-card__actions">
                <button type="button" className="btn btn--gold" onClick={() => { setDone(null); setForm(EMPTY); }}>
                  {copy.another}
                </button>
                <Link className="btn btn--line" to="/contact">{copy.back} <Arrow /></Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero kicker={copy.kicker} title={copy.title} lede={copy.lede} />
      <section className="sec contact-sec">
        <div className="wrap">
          <form className="book" onSubmit={onSubmit} noValidate>
            <div className="book__main">
              <p className="eyebrow">Your details</p>
              <div className="book__grid">
                <label>
                  {copy.name}
                  <input type="text" value={form.name} onChange={set("name")} autoComplete="name" required />
                </label>
                <label>
                  {copy.email}
                  <input type="email" value={form.email} onChange={set("email")} autoComplete="email" required />
                </label>
                <label>
                  {copy.phone}
                  <input type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" required />
                </label>
                <label>
                  {copy.role}
                  <select value={form.role} onChange={set("role")}>
                    {copy.roles.map((r) => (
                      <option key={r.id} value={r.id}>{r.label}</option>
                    ))}
                  </select>
                </label>
                <label className="book__wide">
                  {copy.org}
                  <input type="text" value={form.org} onChange={set("org")} autoComplete="organization" />
                </label>
                <label className="book__wide">
                  {copy.note}
                  <textarea value={form.note} onChange={set("note")} rows={3} placeholder={copy.notePh} />
                </label>
              </div>
            </div>

            <aside className="book__side">
              <p className="eyebrow">{copy.date}</p>
              <p className="book__hint">{copy.tz} {copy.weekday}</p>
              <label className="book__date">
                {copy.date}
                <input
                  type="date"
                  value={form.date}
                  min={minDate}
                  max={maxDate}
                  onChange={set("date")}
                  required
                />
              </label>
              {form.date && isWeekend(form.date) && <p className="book__err">{copy.weekend}</p>}
              {form.date && !isWeekend(form.date) && (
                <div className="book__slots" role="listbox" aria-label={copy.time}>
                  {allSlots.map((time) => {
                    const past = form.date === minDate && slotMinutes(time) <= minutesNow();
                    const busy = taken.has(time);
                    const disabled = past || busy;
                    return (
                      <button
                        key={time}
                        type="button"
                        role="option"
                        aria-selected={form.time === time}
                        className={"book__slot" + (form.time === time ? " is-on" : "")}
                        disabled={disabled}
                        onClick={() => pickTime(time)}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              )}
              <p className="book__with">{copy.with} {c.name} · {copy.duration}</p>
              {error && <p className="book__err">{error}</p>}
              <button className="btn btn--gold book__submit" type="submit">
                {copy.submit} <Arrow />
              </button>
            </aside>
          </form>
        </div>
      </section>
    </>
  );
}
