# AJZ Storybook

A minimalist, Ghost-inspired site built with React + Vite. Essays, researches, and learnings.

## Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
The site will be available at `http://localhost:5173/`

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```
The production files will be in the `dist/` directory.

### Deployment
- **GitHub Pages**: Build and deploy the `dist/` folder
- **Netlify / Vercel**: Connect the repo and they'll automatically build with `npm run build`
- **Custom domain**: Point to your hosting provider and deploy the built `dist/` folder

## Structure
```
/
├── index.html              # React app entry point
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app component
│   ├── styles.css         # Theme styles
│   └── components/
│       ├── Header.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── WordCloud.jsx
│       ├── FollowCard.jsx
│       └── [other components]
├── public/
│   ├── assets/            # Images and static files
│   └── hunger-panel-event.ics
├── pages/                 # Legacy HTML pages
├── package.json
└── vite.config.js
```

## Features
- ✨ Modern React 18 + Vite build system
- 🎨 Preserved original Ghost-inspired design
- 🔤 Interactive word cloud with colors and rotations
- 📬 Follow/subscribe functionality with localStorage
- 🌙 Dark mode support (via CSS prefers-color-scheme)
- 📱 Fully responsive design

## Customize
- Edit React components in `src/components/` to change content
- Colors live at the top of `src/styles.css` in `:root`
- Update `src/App.jsx` to add/remove sections
- Add new components by creating `.jsx` files in `src/components/`

## Technologies
- React 18
- Vite 5
- Vanilla CSS (no preprocessor)