# AJZ Storybook

A minimalist, Ghost-inspired site built with Laravel and Blade.

---

## Project Structure

```
/
├── server/                    # Laravel application
│   ├── app/
│   ├── database/
│   ├── resources/views/       # Blade pages and shared layout
│   └── routes/web.php
│
├── CNAME
└── README.md
```

## Laravel Quick Start

```bash
cd server
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

The local default uses SQLite for quick setup. For a LAMP deployment, set `DB_CONNECTION=mysql` and the MySQL connection values in `server/.env`, then run `php artisan migrate --seed`. Configure Apache's document root to `server/public` and enable `mod_rewrite`.

---

## Styling Approach

- Shared theme and layout styles live in `server/resources/views/layouts/app.blade.php`.
- Page-specific markup lives in `server/resources/views/pages/`.
- Public images and static files live in `server/public/assets/`.

Production should serve `server/public` through Apache or another PHP-capable web server. GitHub Pages cannot run Laravel/PHP, so the old static Pages workflow was removed.

The public domain is hosted separately at `uta.cloud`. Configure DNS for `ajayzhimire.app` with an apex `A` record pointing to `104.248.69.80`, and configure `www` as a `CNAME` to `uta.cloud`. Remove the old GitHub Pages records (`185.199.108.153` through `185.199.111.153`) before verifying HTTPS and the canonical redirect.
