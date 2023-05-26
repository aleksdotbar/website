<script setup lang="ts">
const { data } = useFetch("/api/oss", { immediate: process.server });
</script>

<template>
  <main class="space-y-8">
    <h1 class="text-4xl font-bold">My open-source journey</h1>

    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="chunk in chunks(data?.repositories ?? [], 2)"
        class="grid gap-4"
      >
        <NuxtLink
          v-for="(r, idx) in chunk"
          :key="idx"
          :to="r.url"
          target="_blank"
        >
          <UiCard>
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-lg font-semibold">{{ r.name }}</h3>

              <div
                class="flex items-center gap-2 text-xs font-medium text-gray-400"
              >
                <Icon name="lucide:star" class="h-4 w-4" />
                <span>{{ r.stars }}</span>
              </div>
            </div>

            <div v-if="r.description" class="text-sm text-gray-300">
              {{ r.description }}
            </div>
          </UiCard>
        </NuxtLink>
      </div>
    </div>

    <hr class="border-gray-400/5" />

    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="chunk in chunks(data?.contributions ?? [], 2)"
        class="grid gap-4"
      >
        <NuxtLink
          v-for="(r, idx) in chunk"
          :key="idx"
          :to="r.url"
          target="_blank"
        >
          <UiCard>
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-lg font-semibold">{{ r.name }}</h3>

              <div
                class="flex items-center gap-2 text-xs font-medium text-gray-400"
              >
                <Icon name="lucide:git-pull-request" class="h-4 w-4" />
                <span>{{ r.prs }}</span>
              </div>
            </div>

            <div v-if="r.description" class="text-sm text-gray-300">
              {{ r.description }}
            </div>
          </UiCard>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
