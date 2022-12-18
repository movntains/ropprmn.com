<template>
  <header class="fixed top-0 z-50 w-full py-8 px-12 transition-colors">
    <div class="container flex justify-between items-baseline md:items-center">
      <NuxtLink
        :to="{ name: 'index' }"
        class="custom-focus rounded-sm text-brand-teal transition hover:scale-110 hover:text-brand-orange"
      >
        <span class="sr-only">Home</span>
        <SvgLogo />
      </NuxtLink>
      <NavDesktopMenu />
      <NavMobileMenu />
    </div>
  </header>
</template>

<script setup lang="ts">

</script>
