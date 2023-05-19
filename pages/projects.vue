<template>
  <main>
    <h1 class="text-4xl font-bold">Projects</h1>

    <div class="mt-8">
      <div class="overflow-hidden rounded-lg border border-gray-400/5">
        <NuxtImg
          src="cineshare.jpg"
          format="webp"
          class="h-60 w-full object-cover object-center"
        />

        <div class="space-y-2 p-5">
          <div class="flex items-center gap-2">
            <h3 class="text-lg font-semibold">CineShare</h3>
            <NuxtLink
              to="https://t.me/cinesharebot"
              target="_blank"
              class="flex items-center"
              ><Icon name="lucide:link" class="h-4 w-4 text-gray-400"
            /></NuxtLink>
          </div>

          <div class="text-sm text-gray-300">
            A Telegram bot that allows users to search for and share movies and
            TV shows in any chat, using inline queries
          </div>

          <div class="text-right text-xs text-gray-500">
            Built with Rust btw
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
