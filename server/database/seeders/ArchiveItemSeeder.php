<?php

namespace Database\Seeders;

use App\Models\ArchiveItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArchiveItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ArchiveItem::upsert([
            ['title' => 'Hunger in North Texas', 'route_name' => 'hunger-in-texas', 'excerpt' => 'A public panel discussion and community resources around food insecurity.', 'published_at' => '2026-01-30', 'sort_order' => 2],
        ], ['route_name'], ['title', 'excerpt', 'published_at', 'sort_order']);
    }
}
