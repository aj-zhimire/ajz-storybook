@extends('layouts.app')

@section('content')
    <h1>Archive</h1>
    <p class="subtitle">Older pages moved to the archive for site clarity.</p>
    <div class="archive-list">
        @foreach ($items as $item)
            <article class="archive-item">
                <h2>{{ $item->title }}</h2>
                <p>{{ $item->excerpt }}</p>
                <p><a class="button" href="{{ route($item->route_name, absolute: false) }}">View page</a></p>
            </article>
        @endforeach
    </div>
@endsection