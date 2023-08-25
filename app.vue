<template>
  <Html lang="en" class="h-full bg-black text-gray-200 antialiased">
    <Head>
      <Title>Alexander Barkhatov</Title>
      <Meta name="description" content="Software Engineer" />
      <Meta property="og:title" content="Alexander Barkhatov" />
      <Meta property="og:description" content="Software Engineer" />
    </Head>

    <Body class="h-full min-w-[20rem]">
      <div
        class="fixed inset-0 z-[-1] bg-gradient-to-tl from-black via-gray-600/20 to-black"
      ></div>

      <NuxtLoadingIndicator />

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
