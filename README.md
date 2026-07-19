# Security+ Study Desk (SY0-701)

A self-contained, offline-friendly practice companion for the CompTIA
Security+ (SY0-701) exam — a full practice question bank, flashcards
(concepts + every official acronym), performance-based question (PBQ)
exercises, an acronym glossary, in-depth study method guidance, and a
customizable dashboard, all running entirely client-side.

## File structure

```
security-plus-study-desk/
├── index.html        Page markup (structure + routes' mount point)
├── css/
│   └── styles.css     All styling: design tokens, 48 themes, 10 layouts
├── js/
│   └── app.js          All app logic: data, question/flashcard generators,
│                        router, and every screen's render function
└── README.md          This file
```

## Running it

No build step and no server required.

- **Easiest:** double-click `index.html` to open it directly in a browser.
- **Recommended (avoids any local file-security restrictions some browsers
  apply to `file://` pages):** serve the folder with any static file server, e.g.:
  ```
  cd security-plus-study-desk
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000/`.

## How it works

- **No backend, no build tools.** `index.html` loads `css/styles.css` and
  `js/app.js` directly; everything renders client-side with plain JavaScript
  (no framework, no bundler).
- **Data lives in `js/app.js`.** The question bank, flashcards, acronym
  glossary, PBQs, domain/objective taxonomy, and study methods are all
  defined as JavaScript arrays/objects near the top of the file. Some
  question sets (acronym-based and objective-taxonomy-based) are generated
  at page load from that reference data rather than hand-typed individually.
- **Progress is local-only.** Quiz results, PBQ attempts, and settings are
  saved in the browser's `localStorage` — nothing is sent to a server.
  Clearing browser data or switching browsers/devices resets progress.
- **Themes & layout** are implemented as CSS attribute selectors
  (`html[data-theme="..."]`, `html[data-layout="..."]`) toggled by
  Settings; see the top of `css/styles.css` for the full token list.

## Editing content

- To add/edit hand-authored questions, find `QBANK_CORE` in `js/app.js`.
- To add/edit flashcards, find `FLASHCARDS` in `js/app.js`.
- To add/edit acronyms, find `ACRONYMS` in `js/app.js`.
- To add/edit PBQs, find `PBQS` in `js/app.js`.
- To add/edit a theme, copy an existing `html[data-theme="..."]{...}` block
  in `css/styles.css` and adjust the CSS custom properties.
