<script setup lang="ts">
const projects = [
  {
    name: "CineShare",
    description:
      "Find and share movies and TV shows in any Telegram chat, using inline queries",
    url: "https://t.me/cinesharebot",
  },
  {
    name: "Tic-Tac-Toe",
    description: "Simple Tic-Tac-Toe game with nice animations",
    url: "https://tictactoe.xanderbarkhatov.com",
  },
];
</script>

<template>
  <main class="space-y-8">
    <h1 class="text-4xl font-bold">Projects</h1>

    <div class="grid gap-8 sm:grid-cols-2">
      <NuxtLink v-for="p in projects" :key="p.name" :to="p.url" target="_blank">
        <UiCard>
          <h3 class="text-lg font-semibold">{{ p.name }}</h3>

          <div class="text-sm text-gray-300">
            {{ p.description }}
          </div>
        </UiCard>
      </NuxtLink>
    </div>
  </main>
</template>
