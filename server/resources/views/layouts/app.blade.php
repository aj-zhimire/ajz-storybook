<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'AJZ Storybook' }}</title>
    <style>
        :root { --bg: #fff; --text: #111; --muted: #666; --accent: #0f766e; --card: #fafafa; --border: #e5e5e5; --maxw: 800px; }
        @media (prefers-color-scheme: dark) { :root { --bg: #0b0b0c; --text: #e8e8ea; --muted: #a3a3a3; --accent: #2dd4bf; --card: #121214; --border: #242428; } }
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font-family: ui-serif, Georgia, 'Times New Roman', serif; line-height: 1.65; }
        a { color: var(--text); text-decoration: none; } a:hover { color: var(--accent); }
        .container, .header-container { max-width: var(--maxw); margin: 0 auto; padding: 0 16px; }
        .header { border-bottom: 1px solid var(--border); position: sticky; top: 0; background: var(--bg); z-index: 10; }
        .header-container { display: flex; align-items: center; justify-content: space-between; min-height: 70px; }
        .brand { display: flex; align-items: center; gap: 16px; } .logo { width: 40px; height: 40px; border-radius: 999px; background: var(--accent); opacity: .9; }
        .title { font-weight: 800; font-size: 20px; } .tagline, .subtitle { color: var(--muted); font-size: 14px; }
        .menu { display: flex; gap: 16px; align-items: center; } .menu a { font-size: 14px; color: var(--muted); } .menu a.active { color: var(--text); font-weight: 600; }
        main { padding-top: 24px; padding-bottom: 48px; } h1, h2, h3 { line-height: 1.2; } h1 { margin-top: 0; }
        .card, .archive-item { background: linear-gradient(135deg, var(--card), var(--bg)); padding: 20px; border: 1px solid var(--border); border-radius: 14px; margin: 16px 0; }
        .archive-list { display: grid; gap: 16px; } .archive-item { margin: 0; } .archive-item h2 { margin-top: 0; }
        .button { display: inline-block; color: var(--accent); font-weight: 600; } .site-footer { border-top: 1px solid var(--border); padding: 24px 0; color: var(--muted); font-size: 14px; }
        .archived-banner { background: #fff4f0; border-block: 1px solid #ffd7c2; margin: 0 0 24px; } .archived-banner p { margin: 0; padding: 10px 16px; color: #7a2b00; font-weight: 600; text-align: center; }
        .thought-of-day { margin: 0 0 32px; } .thought-content { margin: 0; } .thought-label { display: block; margin-bottom: 8px; color: var(--accent); font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; }
        blockquote { margin: 0 0 12px; font-size: 18px; font-style: italic; line-height: 1.5; } .thought-meta, .meta, .card-meta { color: var(--muted); font-size: 12px; }
        .thought-meta a, .card-expand a, .resource-link { color: var(--accent); } .wide-sunset { display: block; width: 100%; max-height: 280px; margin-top: 8px; border-radius: 12px; object-fit: cover; }
        .home-card h2 { margin-top: 0; } .badge { display: inline-block; padding: 2px 8px; border-radius: 6px; background: var(--accent); color: #fff; font-size: .85em; }
        details { margin-top: 12px; } summary { color: var(--accent); cursor: pointer; font-weight: 500; } .card-expand { margin-top: 12px; } .card-expand ul { margin: 12px 0 0 1.25rem; padding: 0; line-height: 1.45; } .card-expand li { margin-bottom: 8px; }
        .fun-facts { margin-top: 18px; padding: 12px 16px; border-radius: 8px; background: var(--bg); border: 1px solid var(--border); } .fun-facts h4 { margin: 0; color: var(--accent); } .fun-facts ul { margin-bottom: 0; }
        .card-meta-links { margin-top: 16px; } .resource-link:hover { text-decoration: underline; }
        .about-contact { margin-top: 30px; } .profile-image-wrap { margin-top: 40px; text-align: center; } .profile-image { width: 200px; height: 200px; border: 3px solid var(--border); border-radius: 50%; object-fit: cover; }
        @media (max-width: 600px) { .header-container { align-items: flex-start; flex-direction: column; padding-top: 12px; padding-bottom: 12px; gap: 10px; } .menu { gap: 12px; } }
    </style>
</head>
<body>
    @php($basePath = rtrim(request()->getBasePath(), '/'))
    <header class="header">
        <div class="header-container">
            <a class="brand" href="{{ $basePath ?: '/' }}">
                <span class="logo" aria-hidden="true"></span>
                <span><span class="title">AJZ Storybook</span><br><span class="tagline">essays, science experiments, notes, music</span></span>
            </a>
            <nav class="menu" aria-label="Primary navigation">
                <a class="{{ request()->routeIs('home') ? 'active' : '' }}" href="{{ $basePath ?: '/' }}">Home</a>
                <a class="{{ request()->routeIs('about') ? 'active' : '' }}" href="{{ $basePath }}/about">About</a>
                <a class="{{ request()->routeIs('archive') ? 'active' : '' }}" href="{{ $basePath }}/archive">Archive</a>
            </nav>
        </div>
    </header>
    <main class="container">@yield('content')</main>
    <footer class="site-footer"><div class="container">&copy; {{ date('Y') }} AJZ Storybook</div></footer>
</body>
</html>