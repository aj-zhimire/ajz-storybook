<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArchiveItem extends Model
{
    protected $fillable = [
        'title',
        'route_name',
        'excerpt',
        'published_at',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'published_at' => 'date',
        ];
    }
}
