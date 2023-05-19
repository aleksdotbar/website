<script setup lang="ts">
const socials = [
  {
    href: "mailto:mail@xanderbarkhatov.com",
    title: "Email",
    icon: "mdi:email",
  },
  {
    href: "https://linkedin.com/in/xanderbarkhatov",
    title: "LinkedIn",
    icon: "mdi:linkedin",
  },
  {
    href: "https://github.com/xanderbarkhatov",
    title: "GitHub",
    icon: "mdi:github",
  },
  {
    href: "https://twitter.com/xanderbarkhatov",
    title: "Twitter",
    icon: "mdi:twitter",
  },
];
</script>

<template>
  <main class="space-y-8 text-lg">
    <h1 class="text-4xl font-bold">Hello there 👋</h1>

    <div class="relative w-fit overflow-hidden rounded-full ring ring-gray-900">
      <NuxtImg src="/avatar.jpg" format="webp" width="100" height="100" />
    </div>

    <p>
      I'm <b>Alexander</b>, a software engineer passionate about
      <b>learning</b>, building stuff and <b>coding</b>
    </p>

    <p>
      I'm also interested in <b>health</b>, nutrition, <b>fitness</b>, and I
      like to cook
    </p>

    <div class="flex items-center gap-6">
      <NuxtLink
        v-for="({ icon, ...props }, idx) in socials"
        v-bind="props"
        :key="idx"
        target="_blank"
        class="text-gray-400 transition hover:rotate-6 hover:text-gray-300"
        ><Icon :name="icon"
      /></NuxtLink>
    </div>
  </main>
</template>
