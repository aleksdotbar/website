<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <main class="space-y-8">
    <h1 v-if="title || $slots.title" class="text-3xl font-bold sm:text-4xl">
      <slot name="title">{{ title }}</slot>
    </h1>

    <slot />
  </main>
</template>
