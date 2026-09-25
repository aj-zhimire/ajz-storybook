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
            ['title' => 'Intuit Math and Science Tutor', 'route_name' => 'intuit-tutor', 'excerpt' => 'Private tutoring in math and physics for high school and college students.', 'published_at' => '2026-01-01', 'sort_order' => 1],
            ['title' => 'Hunger in North Texas', 'route_name' => 'hunger-in-texas', 'excerpt' => 'A public panel discussion and community resources around food insecurity.', 'published_at' => '2026-01-30', 'sort_order' => 2],
            ['title' => 'Hamro Foolbari Academy', 'route_name' => 'hamro-foolbari', 'excerpt' => 'A nonprofit community school project and proof-of-concept in Ramechhap, Nepal.', 'published_at' => null, 'sort_order' => 3],
        ], ['route_name'], ['title', 'excerpt', 'published_at', 'sort_order']);
    }
}
