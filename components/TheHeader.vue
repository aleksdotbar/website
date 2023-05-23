<script setup lang="ts">
const scroll = reactive(useWindowScroll());
const isScrolled = computed(() => scroll.y > 32);
</script>

<template>
  <header
    class="sticky top-0 border-b"
    :class="[
      isScrolled
        ? ' border-gray-400/5 backdrop-blur-md'
        : 'border-transparent backdrop-blur-none',
    ]"
  >
    <nav
      class="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4 font-medium text-gray-500"
    >
      <NuxtLink
        to="/"
        class="mr-auto text-lg font-bold uppercase tracking-wider transition hover:text-gray-300"
        active-class="text-gray-300"
      >
        AB
      </NuxtLink>
      <NuxtLink
        to="/projects"
        class="transition hover:text-gray-300"
        active-class="text-gray-300"
        >/projects
      </NuxtLink>
    </nav>
  </header>
</template>
