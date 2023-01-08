<template>
  <header
    class="fixed top-0 z-50 w-full py-8 px-8 transition-colors md:px-12"
    :class="{ 'bg-brand-charcoal shadow': scrollPosition > 50 }"
  >
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
import throttle from 'lodash.throttle'

const route = useRoute()
const scrollCookie = useCookie('lastScrollTop')
const scrollPosition = ref(Number(scrollCookie) || 0)

const updateScroll = () => {
  scrollPosition.value = window.scrollY

  scrollCookie.value = scrollPosition.toString()
}

watch(route, () => {
  scrollPosition.value = 0
})

onMounted(() => {
  window.addEventListener('scroll', throttle(updateScroll, 200, { leading: true }))
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>
