<template>
  <main class="space-y-8">
    <h1 class="text-4xl font-bold">Projects</h1>

    <ul class="grid gap-8 sm:grid-cols-2">
      <li>
        <div class="h-full overflow-hidden rounded-lg border border-gray-400/5">
          <div class="space-y-2 p-5">
            <NuxtLink
              to="https://t.me/cinesharebot"
              target="_blank"
              class="inline-flex items-center justify-start gap-2 hover:text-gray-300"
            >
              <h3 class="text-lg font-semibold">CineShare</h3>
              <Icon name="lucide:link" class="h-3 w-3 text-gray-400" />
            </NuxtLink>

            <div class="text-sm text-gray-300">
              Search for and share movies and TV shows in any Telegram chat,
              using inline queries
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="h-full overflow-hidden rounded-lg border border-gray-400/5">
          <div class="space-y-2 p-5">
            <NuxtLink
              to="https://www.npmjs.com/package/nuxt-vercel-analytics"
              target="_blank"
              class="inline-flex items-center justify-start gap-2 hover:text-gray-300"
            >
              <h3 class="text-lg font-semibold">Nuxt Vercel Analytics</h3>
              <Icon name="lucide:link" class="h-3 w-3 text-gray-400" />
            </NuxtLink>

            <div class="text-sm text-gray-300">
              Easily add Vercel Analytics to your Nuxt project
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>
