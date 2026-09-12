@extends('layouts.app')

@section('content')
    <h1>About Me</h1>
    <section class="card about-card">
        <p>I began my PhD in Finance as a hobby. It soon grew into a passion for knowledge and self-learning. It has helped me understand the power of experiments to uncover economic challenges, their catalysts, and solutions.</p>
        <p>I work as a data architect professionally and research the intersection of technology, investments, and asset pricing. My first research is to aid with policy proposals on investments as they relate to underserved and marginalized communities.</p>
        <p>I will share essays, blog discussions, and reflections drawn from both lived and learned experiences.</p>
        <p>I hope to see you around!</p>
        <p class="about-contact"><strong>Stay in touch:</strong> <a class="button" href="mailto:ajay@ajayzhimire.app">ajay@ajayzhimire.app</a></p>
        <div class="profile-image-wrap">
            <img class="profile-image" src="{{ rtrim(request()->getBasePath(), '/') }}/assets/profile.jpeg" alt="Ajay Zhimire">
        </div>
    </section>
@endsection