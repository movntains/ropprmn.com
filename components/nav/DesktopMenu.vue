<template>
  <nav
    class="hidden md:flex md:justify-between md:items-center"
    aria-label="Main Navigation"
  >
    <ul class="flex items-center gap-12">
      <li
        v-for="link in navLinks"
        :key="link.label"
        class="relative"
      >
        <NuxtLink
          :to="{ name: link.page }"
          class="custom-underline custom-focus py-2 px-1 rounded-sm text-brand-slate-light"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navLinks } from '@/utils/navLinks'
</script>
