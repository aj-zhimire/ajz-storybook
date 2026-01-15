# AJZ Storybook

A minimalist, Ghost-inspired site built with React + Vite.  
Live at: [ajayzhimire.app](https://ajayzhimire.app)

---

## Project Structure

```
/
├── client/                    # React + Vite app
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── App.css            # global theme + layout
│       ├── components/
│       ├── pages/
│       └── assets/
│
├── .github/workflows/pages.yml
├── CNAME
└── README.md
```

---

## Styling Approach

- Global theme and shared layout live in `client/src/App.css`.
- Component/page-specific styles live alongside their JSX files.
- Keep shared styles global and avoid duplicate class definitions in component CSS.

---

## Quick Start

```bash
cd client
npm install
npm run dev
```
