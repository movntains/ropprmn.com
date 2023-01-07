<template>
  <div class="grid grid-cols-2 gap-10 mt-10">
    <ProjectsGridItem
      v-for="(project, index) in projects"
      :key="`project-${index}`"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/utils/projects'
</script>
