<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('archive_items')
            ->whereIn('route_name', ['intuit-tutor', 'hamro-foolbari'])
            ->delete();
    }

    public function down(): void
    {
        DB::table('archive_items')->insert([
            [
                'title' => 'Intuit Math and Science Tutor',
                'route_name' => 'intuit-tutor',
                'excerpt' => 'Private tutoring in math and physics for high school and college students.',
                'published_at' => '2026-01-01',
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Hamro Foolbari Academy',
                'route_name' => 'hamro-foolbari',
                'excerpt' => 'A nonprofit community school project and proof-of-concept in Ramechhap, Nepal.',
                'published_at' => null,
                'sort_order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
};