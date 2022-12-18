<template>
  <footer class="mt-16 bg-brand-charcoal text-slate-200">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between md:px-12">
      <p class="text-base text-brand-slate-lightest text-center">
        &copy; {{ new Date().getFullYear() }}. All rights reserved.
      </p>
      <div class="flex justify-center items-center gap-8 mt-8 md:mt-0">
        <NuxtLink
          :to="profileLinks.gitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="custom-focus rounded-md"
        >
          <span class="sr-only">View GitHub profile</span>
          <SvgGitHub />
        </NuxtLink>
        <NuxtLink
          :to="profileLinks.linkedIn"
          target="_blank"
          rel="noopener noreferrer"
          class="custom-focus rounded-md"
        >
          <span class="sr-only">View LinkedIn profile</span>
          <SvgLinkedIn />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profileLinks } from '@/utils/profileLinks'
</script>
