<script setup lang="ts">
const socials = [
  {
    href: "mailto:mail@xanderbarkhatov.com",
    title: "Email",
    icon: "lucide:mail",
  },
  {
    href: "https://linkedin.com/in/xanderbarkhatov",
    title: "LinkedIn",
    icon: "lucide:linkedin",
  },
  {
    href: "https://github.com/xanderbarkhatov",
    title: "GitHub",
    icon: "lucide:github",
  },
  {
    href: "https://twitter.com/xanderbarkhatov",
    title: "Twitter",
    icon: "lucide:twitter",
  },
];
</script>

<template>
  <main class="space-y-8">
    <h1 class="text-4xl font-bold">Hello there 👋</h1>

    <p>
      I'm Alexander, a <b>passionate</b> software engineer who enjoys
      <b>learning</b>, coding, and <b>building</b> things
      <span class="text-sm text-gray-400">(and sometimes breaking)</span>
    </p>

    <p>
      Besides technology, I have a keen interest in <b>self-improvement</b>,
      fitness, and <b>nutrition</b>
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

    <div class="relative w-full overflow-hidden rounded-lg ring ring-gray-900">
      <NuxtImg src="/avatar.jpg" format="webp" />
      <div class="absolute inset-0 bg-gray-950/10"></div>
    </div>
  </main>
</template>
