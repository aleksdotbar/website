<template>
  <Html lang="en" class="h-full bg-black text-gray-200 antialiased">
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
      <Meta name="description" content="Software engineer" />
      <Meta property="og:title" content="Alexander B" />
      <Meta property="og:description" content="Software engineer" />
    </Head>

    <Body class="h-full min-w-[20rem]">
      <div
        class="fixed inset-0 z-[-1] bg-gradient-to-tl from-black via-gray-600/20 to-black"
      ></div>

      <TheHeader />

      <div class="mx-auto max-w-4xl px-6 py-8 sm:py-20">
        <NuxtPage
          :transition="{
            mode: 'out-in',
            enterActiveClass: 'transition ease-in-out',
            leaveActiveClass: 'transition ease-in-out',
            enterFromClass: 'opacity-0 blur-sm',
            leaveToClass: 'opacity-0 blur-sm',
          }"
        />
      </div>
    </Body>
  </Html>
</template>
