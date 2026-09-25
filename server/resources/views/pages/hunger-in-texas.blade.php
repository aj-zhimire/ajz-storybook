@extends('layouts.app')

@section('content')
    <div class="archived-banner"><p>Archived event: January 30, 2026</p></div>
    <section class="card">
        <h1>Hunger in North Texas</h1>
        <h2>Facts • Policy • Community Action</h2>
        <p class="subtitle">A Public Panel Discussion on Food Insecurity</p>

        <p><strong>Hosted by:</strong> Ajay Ghimire, Unique Toastmasters Club, Frisco TX</p>
        <p><strong>Featuring:</strong> <a href="https://ntfb.org" target="_blank" rel="noopener noreferrer">North Texas Food Bank</a></p>

        <h3>Panel Topics</h3>
        <div class="topics-rsvp-row">
            <ul>
                <li>Hunger in Texas statistics and impact</li>
                <li>NTFB mission &amp; community impact</li>
                <li>SNAP Changes and policy updates</li>
                <li>Community action opportunities</li>
            </ul>
            <div class="rsvp-inline">
                <div class="qr-container">
                    <img src="{{ rtrim(request()->getBasePath(), '/') }}/assets/rsvp-qr-code.png" alt="RSVP QR Code" class="qr-code-small">
                </div>
                <p class="rsvp-email-link">
                    <a href="mailto:UniqueTMFrisco@gmail.com,ajayzhimire@yahoo.com?subject=RSVP%20-%20Hunger%20in%20North%20Texas%20Event">📧 Email RSVP</a>
                </p>
            </div>
        </div>

        <div class="event-datetime">
            <p><strong>📅 Date:</strong> Friday, January 30, 2026</p>
            <p><strong>🕐 Time:</strong> 7:00 AM - 7:45 AM</p>
            <p><strong>📍 Location:</strong> Rosa's Café, 12275 Custer Rd, Frisco, TX</p>
        </div>

        <p class="event-note">Live Audience Q&amp;A • Live Streaming Available</p>

        <div class="partners">
            <p><em>In partnership with Toastmasters International and North Texas Food Bank</em></p>
            <p class="tagline">Awareness leads to action. Action leads to impact.</p>
        </div>

        <div class="officials-invited">
            <h3>Officials Invited</h3>
            <p>Invitations have been extended to federal, state, and City of Frisco officials. Attendance is voluntary, and confirmations are pending.</p>
        </div>

        <p>
            <a href="https://unique.toastmastersclubs.org" target="_blank" rel="noopener noreferrer">unique.toastmastersclubs.org</a> |
            <a href="https://ntfb.org" target="_blank" rel="noopener noreferrer">ntfb.org</a>
        </p>
    </section>
@endsection