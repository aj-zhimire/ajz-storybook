<?php

namespace Tests\Feature;

use Database\Seeders\ArchiveItemSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_about_and_archive_pages_are_available(): void
    {
        $this->seed(ArchiveItemSeeder::class);

        $this->get('/about')
            ->assertOk()
            ->assertSee('About Me');

        $this->get('/archive')
            ->assertOk()
            ->assertSee('Hunger in North Texas')
            ->assertDontSee('Intuit Math and Science Tutor')
            ->assertDontSee('Hamro Foolbari Academy');
    }
}
