# AJZ Storybook

A minimalist personal website built with React + Vite.

## Quick Start

```bash
# Install dependencies
npm install
cd client && npm install

# Run development server
npm run dev
```

## Structure

```
/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── assets/        # Static assets
│   └── public/            # Public files (vite.svg)
├── legacy/                 # Original static HTML site
│   ├── index.html
│   ├── pages/
│   ├── partials/
│   └── scripts/
└── .github/workflows/      # GitHub Pages deployment
```

## Deploy

- **GitHub Pages**: Push to main branch (auto-deploys via `.github/workflows/pages.yml`)
- **Custom Domain**: Configured via `CNAME` → `ajayzhimire.app`

## Notes

- Legacy static site preserved in `legacy/` folder
- New React app in `client/` folder