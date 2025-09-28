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
├── index.html        # home with cards
├── about.html        # about page
├── archive.html      # simple archive list
├── post.html         # sample post template
├── styles.css        # theme
├── script.js         # tiny JS (year stamp)
└── assets/
    ├── placeholder.jpg
    └── avatar-placeholder.svg
```

## Customize
- Change the brand text in the header of each page.
- Colors live at the top of `styles.css` in `:root`.
- Add more posts by duplicating `post.html` and linking from the home or archive.
- For an email sign‑up, link the **Subscribe** nav item to your tool (Mailchimp, Ghost, ConvertKit, Formspree).

## Notes
- This is intentionally lightweight (no build step).
- If you prefer React/Next.js routing or a markdown blog, I can generate that version too.