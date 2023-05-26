<script setup lang="ts">
const { y } = useWindowScroll();
const isScrolled = computed(() => y.value > 32);
const links = [
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "OSS",
    path: "/oss",
  },
];
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
      class="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-4 font-medium text-gray-400"
    >
      <NuxtLink
        to="/"
        class="mr-auto text-lg font-bold uppercase tracking-wider transition hover:text-gray-200"
        active-class="text-gray-200"
      >
        AB
      </NuxtLink>

      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="transition hover:text-gray-200"
        active-class="text-gray-200"
        >{{ link.name }}
      </NuxtLink>
    </nav>
  </header>
</template>
