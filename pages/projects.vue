<script setup lang="ts">
const projects = [
  {
    name: "CineShare",
    description:
      "Telegram bot for searching and sharing movies and TV shows in any chat",
    url: "https://t.me/cinesharebot",
  },
  {
    name: "Emoji Search",
    description: "AI-powered emoji search",
    url: "https://emojisearch.xanderbarkhatov.com",
  },
  {
    name: "Tic-Tac-Toe",
    description: "Tic-Tac-Toe with nice animations",
    url: "https://tictactoe.xanderbarkhatov.com",
  },
];
</script>

<template>
  <PageContainer title="Projects">
    <div class="grid gap-4 sm:grid-cols-2">
      <div v-for="half in halfArray(projects)" class="flex flex-col gap-4">
        <NuxtLink v-for="p in half" :key="p.name" :to="p.url" target="_blank">
          <UiCard>
            <h3 class="text-lg font-semibold">{{ p.name }}</h3>

            <div class="text-sm text-gray-300">
              {{ p.description }}
            </div>
          </UiCard>
        </NuxtLink>
      </div>
    </div>
  </PageContainer>
</template>
