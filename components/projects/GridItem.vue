<template>
  <a
    :href="project.link"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="project.title"
    class="custom-border--hover col-span-2 relative backdrop-blur-[10px] focus:outline-none md:col-span-1 before:custom-border"
  >
    <div
      class="flex justify-center items-center h-48 rounded-t-lg"
      :style="{ backgroundColor: project.bgColor }"
    >
      <img
        :src="project.logo"
        :alt="`${project.title} Logo`"
        aria-hidden="true"
        :class="{ 'w-3/4': project.title === 'Relias Media' }"
      >
    </div>
    <div class="p-4">
      <h2 class="mb-1 font-semibold text-lg text-brand-slate-lightest">{{ project.title }}</h2>
      <p class="text-brand-purple">
        {{ project.role }}
      </p>
      <p class="mt-2 font-light text-sm text-brand-slate">
        <span class="font-normal text-brand-slate-light">Highlights: </span>
        {{ project.highlights }}
      </p>
      <p
        v-if="project.techStack"
        class="mt-2 font-light text-sm text-brand-slate"
      >
        <span class="font-normal text-brand-slate-light">Tech stack: </span>
        {{ project.techStack.join(', ') }}.
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Project } from '@/types/Project'

interface GridItemProps {
  project: Project
}

defineProps<GridItemProps>()
</script>
