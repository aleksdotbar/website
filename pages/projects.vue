<template>
  <main>
    <h1 class="text-4xl font-bold">Projects</h1>

    <ul class="mt-8 grid gap-8">
      <li>
        <div class="overflow-hidden rounded-lg border border-gray-400/5">
          <NuxtImg
            src="cineshare.jpg"
            format="webp"
            class="h-60 w-full object-cover object-center"
          />

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
              A Telegram bot that allows users to search for and share movies
              and TV shows in any chat, using inline queries
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="overflow-hidden rounded-lg border border-gray-400/5">
          <NuxtImg
            src="nva.png"
            format="webp"
            class="h-60 w-full object-cover"
          />

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
              A Nuxt module that allows developers to easily add Vercel
              Analytics to their projects
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>
