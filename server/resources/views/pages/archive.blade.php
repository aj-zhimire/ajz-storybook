@extends('layouts.app')

@section('content')
    <h1>Archive</h1>
    <p class="subtitle">Older pages moved to the archive for site clarity.</p>
    <div class="archive-list">
        @foreach ($items as $item)
            <article class="archive-item">
                <h2>{{ $item->title }}</h2>
                <p>{{ $item->excerpt }}</p>
                <p><a class="button" href="{{ rtrim(request()->getBasePath(), '/') }}/{{ $item->route_name }}">View page</a></p>
            </article>
        @endforeach
    </div>
@endsection