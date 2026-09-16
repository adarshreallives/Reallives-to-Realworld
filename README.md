# RealLives to RealWorld — The ChangeMaker Journey

A React marketing site for the RealLives Foundation immersion programme. Built country agnostic: South Korea is the flagship journey, and every other country is a row in one config file.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in dist/
npm run preview
```

Deploy `dist/` to Netlify, Vercel, Cloudflare Pages or any static host. No server needed.

## Where things are

| File | What it holds |
|---|---|
| `src/content.js` | **Every word on the site.** Headlines, section copy, the destination list, the Korea labs, the timeline, contact details. This is the only file you need for normal edits. |
| `src/styles.css` | The whole design system. Colours and fonts are CSS variables at the top of the file. |
| `src/App.jsx` | Section components. Touch this only when changing layout or adding a new section. |
| `public/assets/` | Photographs, pulled from the parents presentation. |
| `index.html` | Page title, meta description, Open Graph tags for link previews. |

## Adding a country

Open `src/content.js`, find `destinations.items`, and add an object:

```js
{
  country: "Japan",
  script: "日本",                    // shown as a large watermark on the card
  status: "open",                   // "open" | "design" | "proposed"
  when: "March 2027",
  question: "How does a society make quality an ordinary habit?",
  body: "One or two sentences.",
  href: "#japan",                   // optional, links to a deep section
}
```

The card styles itself from `status`. Nothing else needs changing.

To give a country its own full section like Korea has, copy the `korea` object in `content.js`, rename it, and copy the `<Korea />` component in `App.jsx`.

## Photographs

Files live in `public/assets` and are referenced as `/assets/name.jpg`. If a file is missing the page renders a designed navy panel with a Korean glyph instead of a broken image, so the layout never collapses.

Photographs currently in place came out of `Sept_4_RealLives_Korea_Parents_Presentation.pptx`. Replace them with student photographs after the first cohort travels. Faces of members of the public in the Myeongdong photograph are already softened.

Before launch, confirm you have consent to publish for: the Yeomyung School group photograph, the Embassy photograph, and any photograph showing identifiable students.

## Before you launch

1. Replace the four RCMI competency clusters in `content.js` with the canonical eighteen competencies from changemakerindex.com. The current list is a reasonable stand in, not the official set.
2. Confirm the destination pipeline. Everything past Korea and Thailand is marked "Proposed" and is a suggestion, not a commitment.
3. Add a privacy policy page and a cookie note if you add analytics. You collect enquiries by email, so a short privacy statement is enough.
4. Add the Section 8 registration number and registered address in the footer if you want the credibility signal.
5. Point `og:image` at a photograph you have cleared for public use.

## Accessibility and performance

Keyboard focus is visible, motion respects `prefers-reduced-motion`, images below the fold load lazily, and the layout reflows to a single column on phones. Fonts come from Google Fonts; if you prefer to self host, download Fraunces, Inter and Noto Sans KR and replace the `@import` at the top of `styles.css`.
