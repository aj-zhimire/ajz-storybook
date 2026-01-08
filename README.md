# AJZ Storybook

A minimalist, Ghost‑inspired static site. Drop in your own photos and words.

## Quick Start
1. **Edit** the HTML files (title, bio, posts).
2. **Replace images** in `assets/` with your own (keep the same filenames or update the paths).
3. **Deploy** anywhere:
   - **GitHub Pages**: push to a repo and enable Pages.
   - **Netlify / Vercel**: drag & drop the folder or connect the repo.
   - **Your own domain** `ajz-storybook.com`: point the domain to your hosting provider (A record or CNAME) and set the site root to this folder.

## Structure
```
/
├── index.html              # home with cards
├── pages/about.html        # about page
├── pages/hunger-in-texas.html  # event page
├── scripts/styles.css      # theme
├── scripts/script.js       # partial loader & year stamp
├── partials/               # reusable header/footer
└── assets/                 # images
```

## Customize
- Change the brand text in the header partial.
- Colors live at the top of `scripts/styles.css` in `:root`.
- Add more pages by creating new HTML files in `pages/`.

## Notes
- This is intentionally lightweight (no build step).
- Uses a simple partial loading system for reusable components.