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
  <main>
    <h1 class="text-4xl font-bold">Work</h1>

    <div class="mt-8">
      <ol class="flex flex-col gap-8">
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

            <div>
              <dt class="sr-only">Achievements</dt>
              <dd>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, dicta modi dolorum provident nobis possimus
                recusandae in nostrum magni earum.
              </dd>
            </div>
          </dl>
        </li>
      </ol>
    </div>
  </main>
</template>
