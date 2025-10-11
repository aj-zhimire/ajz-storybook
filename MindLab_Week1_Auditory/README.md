# Mind Lab — Neuroscience Planner (Week 1: Auditory Processing)

A lightweight, offline‑friendly **interactive dashboard** that fuses **experiments + intuition** for your neuroscience learning. Built in vanilla HTML/CSS/JS with **localStorage** persistence (no accounts, no tracking).

## Features
- ✅ Daily modules with editable checklists (auto‑save)
- 📝 Journal with three panels (auto‑save) + **Export Notes (JSON)**
- 🎧 **Tone generator** (Web Audio API) with stereo panner (Left/Center/Right)
- ⏳ **Pomodoro timer** (configurable focus/break)
- 📈 Progress tracking per day and week
- 📱 Responsive layout

## How to Use
1. Open `index.html` in your browser.
2. Expand each day, complete tasks, and write reflections.
3. Use Experiments → Tone Generator and Attention Flip.
4. Export your notes anytime (JSON).

> Data persists locally in your browser. Clearing site data or switching browsers will reset it.

## Customize
- Double‑click any checklist item to edit the text.
- Add custom tasks via the **Add** box inside each day.
- Edit the week’s content directly in `index.html` or create new weeks as additional sections/files.

## Deploy to GitHub Pages
1. Create a new repo (or use your existing `ajz-storybook` if you want a subfolder).
2. Add these files at the root (or under `neuro/` if using your existing site).
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add Mind Lab — Week 1 (Auditory Processing)"
   git push origin main
   ```
4. In GitHub, go to **Settings → Pages**:
   - **Source:** Deploy from branch (e.g., `main`)
   - **Folder:** `/root` (or `/docs` if you prefer placing files in a `docs/` directory)
5. Your site will be available at `https://<username>.github.io/<repo>/`.
   - If using your existing site, consider hosting at `https://aj-zhimire.github.io/ajz-storybook/neuro/`.

## Roadmap (Next Versions)
- Week 2: Visual Processing (receptive fields, contrast, edges)
- Week 3: Attention & Working Memory
- Week 4: Reinforcement Learning & Decision Making
- Optional: Embedded small Python visual demos via Pyodide

---

© 2025 Mind Lab — built for Ajay
