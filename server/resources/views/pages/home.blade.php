@extends('layouts.app')

@section('content')
    <section class="thought-of-day">
        <div class="card thought-content">
            <span class="thought-label">Today's Reflection</span>
            <blockquote>
                "The important thing is not to stop questioning. Curiosity has its own reason for existing." by Albert Einstein
            </blockquote>
            <div class="thought-meta">
                <small>
                    Oct 4, 2025 &bull;
                    <a href="https://youtu.be/cRmbwczTC6E" target="_blank" rel="noopener noreferrer">Watch: The Power of Curiosity</a>
                </small>
            </div>
        </div>
        <img class="wide-sunset" src="{{ rtrim(request()->getBasePath(), '/') }}/assets/sunset.jpg" alt="Beautiful sunset landscape">
    </section>

    <section class="card home-card">
        <h2>Evolution of Math</h2>
        <div class="meta">Sep 20, 2025 &middot; 3 min read &middot; <span class="badge">Math</span></div>
        <blockquote>
            Mathematics began as a survival tool for counting and measuring. Over time, it evolved into structured systems that stabilized societies and eventually into an abstract science seeking universal truth.
        </blockquote>
        <details>
            <summary>Read More</summary>
            <div class="card-expand">
                <ul>
                    <li>Tallies: counting for trade and time. &mdash; <a href="https://www.britannica.com/topic/history-of-mathematics" target="_blank" rel="noopener noreferrer">Britannica</a></li>
                    <li>Mesopotamia: symbols and base-60 time and angles. &mdash; <a href="https://www.britannica.com/science/sexagesimal-system" target="_blank" rel="noopener noreferrer">Britannica</a></li>
                    <li>Egypt: practical geometry for land and measurement. &mdash; <a href="https://www.britannica.com/topic/geometry/History-of-geometry" target="_blank" rel="noopener noreferrer">Britannica</a></li>
                    <li>Greeks: a shift to abstraction, logic, and proof. &mdash; <a href="https://plato.stanford.edu/entries/greek-mathematics/" target="_blank" rel="noopener noreferrer">Stanford</a></li>
                </ul>
            </div>
        </details>
    </section>

    <section class="card home-card">
        <h2>Understanding Sound for Young Scientists</h2>
        <div class="meta">Sep 20, 2025 &middot; 3 min read &middot; <span class="badge">Science</span></div>
        <p>Why can't we hear what dogs hear? Explore the amazing world of sound waves, frequency, and how different animals experience sound. Perfect for curious middle schoolers.</p>
        <div class="fun-facts">
            <h4>Quick Facts</h4>
            <ul>
                <li><strong>Dogs hear:</strong> 67Hz to 45,000Hz</li>
                <li><strong>Humans hear:</strong> 20Hz to 20,000Hz</li>
            </ul>
        </div>
        <details>
            <summary>Read More</summary>
            <div class="card-expand">
                <ul>
                    <li><strong>Elephants hear:</strong> Really low sounds we cannot.</li>
                    <li><strong>Sound travels:</strong> About 343 meters per second.</li>
                </ul>
            </div>
        </details>
        <div class="card-meta card-meta-links">
            <small>
                <a class="resource-link" href="https://www.youtube.com/watch?v=TsQL-sXZOLc" target="_blank" rel="noopener noreferrer">How Sound Works (3 min)</a>
                &bull;
                <a class="resource-link" href="https://www.youtube.com/watch?v=_2By2ane2I4" target="_blank" rel="noopener noreferrer">Animal Hearing vs Human Hearing</a>
                &bull;
                <a class="resource-link" href="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600" target="_blank" rel="noopener noreferrer">Frequency Chart</a>
            </small>
        </div>
    </section>
@endsection