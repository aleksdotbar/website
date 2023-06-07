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

const shouldAnimate = useState("should-animate", () => true);

onUnmounted(() => {
  shouldAnimate.value = false;
});
</script>

<template>
  <PageContainer>
    <template #title>
      Hello there
      <span
        :class="
          shouldAnimate && 'inline-block origin-bottom-right animate-wave'
        "
        >👋</span
      >
    </template>

    <div class="grid gap-8 sm:grid-cols-2">
      <div class="space-y-8">
        <p class="max-w-xl">
          I'm Alexander, a <b>passionate</b> software engineer who enjoys
          <b>learning</b>, coding, and <b>building</b> things
          <span class="text-sm text-gray-400">(and sometimes breaking)</span>
        </p>

        <p class="max-w-xl">
          Besides technology, I have a keen interest in <b>self-improvement</b>,
          fitness, <b>health</b>, movies, TV shows, and other usual stuff
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
      </div>

      <div
        class="relative w-full max-w-xs justify-self-center overflow-hidden rounded-lg ring ring-gray-900 sm:justify-self-end"
      >
        <img src="/avatar.jpg" alt="" width="400" height="400" />
        <div class="absolute inset-0 bg-gray-950/10"></div>
      </div>
    </div>
  </PageContainer>
</template>
