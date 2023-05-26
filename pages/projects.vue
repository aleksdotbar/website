<template>
  <main class="space-y-8">
    <h1 class="text-4xl font-bold">Projects</h1>

    <div class="grid gap-8 sm:grid-cols-2">
      <NuxtLink to="https://t.me/cinesharebot" target="_blank">
        <UiCard class="!space-y-0 !p-0">
          <NuxtImg
            src="/cineshare.jpg"
            alt="Cinema clapperboard"
            width="640"
            height="640"
            format="webp"
          />

          <div class="space-y-2 p-5">
            <h3 class="text-lg font-semibold">CineShare</h3>

            <div class="text-sm text-gray-300">
              Find and share movies and TV shows in any Telegram chat, using
              inline queries
            </div>
          </div>
        </UiCard>
      </NuxtLink>
    </div>
  </main>
</template>
