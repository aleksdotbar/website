<template>
  <Html lang="en" class="h-full bg-gray-950 text-gray-300 antialiased">
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Title>Alexander B</Title>
      <Meta name="description" content="Full-stack engineer" />
      <Meta property="og:title" content="Alexander B" />
      <Meta property="og:description" content="Full-stack engineer" />
    </Head>

    <Body
      class="h-full min-w-[20rem] bg-gray-950 bg-gradient-to-tr from-gray-950 via-gray-700/10 to-gray-950 px-6"
    >
      <header class="py-4">
        <nav
          class="flex items-center justify-between gap-4 font-medium text-gray-400"
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
            active-class="text-gray-50"
            >/projects
          </NuxtLink>
          <NuxtLink
            to="/work"
            class="transition hover:text-gray-300"
            active-class="text-gray-50"
            >/work</NuxtLink
          >
        </nav>
      </header>

      <div class="py-16">
        <NuxtPage
          :transition="{
            mode: 'out-in',
            enterActiveClass: 'transition ease-in-out',
            leaveActiveClass: 'transition ease-in-out',
            enterFromClass: 'opacity-0 scale-95 blur-sm',
            leaveToClass: 'opacity-0 scale-95 blur-sm',
          }"
        />
      </div>
    </Body>
  </Html>
</template>
