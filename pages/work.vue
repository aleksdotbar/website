<script setup>
const jobs = [
  {
    title: "Frontend Engineer",
    company: "Uzum Technologies",
    start: "2022",
  },
  {
    title: "Frontend Engineer",
    company: "BirdsBuild",
    start: "2021",
    end: "2022",
  },
  {
    title: "Software Engineer",
    company: "Rosneft",
    start: "2020",
    end: "2021",
  },
];
</script>

<template>
  <main class="space-y-8">
    <h1 class="text-4xl font-bold">Work</h1>

    <ol class="grid gap-8">
      <li v-for="({ title, company, start, end }, idx) in jobs" :key="idx">
        <dl class="space-y-3 rounded-lg border border-gray-400/5 p-5">
          <div class="flex items-center gap-1">
            <dt class="sr-only">Company</dt>
            <dd class="text-lg font-semibold">
              {{ company }}
            </dd>

            <dt class="sr-only">Date</dt>
            <dd
              class="ml-auto text-xs text-gray-400"
              :aria-label="`${start} until ${end}`"
            >
              <time :date-time="start">
                {{ start }}
              </time>
              <span aria-hidden="true">{{ " — " }}</span>
              <time :date-time="end">
                {{ end ?? "Now" }}
              </time>
            </dd>
          </div>

          <div class="text-sm text-gray-400">
            <dt class="sr-only">Role</dt>
            <dd>
              {{ title }}
            </dd>
          </div>
        </dl>
      </li>
    </ol>

    <div class="flex flex-col gap-2 text-sm italic text-gray-500">
      <code>// TODO: add job descriptions</code>
      <code>// TODO: come up with better desktop layout</code>
    </div>
  </main>
</template>
