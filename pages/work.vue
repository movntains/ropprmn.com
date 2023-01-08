<template>
  <AppPageWrapper>
    <section class="pt-16">
      <AppPageHeading>Work</AppPageHeading>
      <p class="font-light text-base text-brand-slate leading-7">
        This is a collection of some of the applications and sites I've worked on in the past few
        years. They include full-stack web apps, CMS sites, and projects on which I didn't do any
        active development but performed accessibility audits and helped the engineers doing the
        coding to ensure that the sites would be fully accessible and meet WCAG standards.
      </p>
      <ProjectsGrid />
    </section>
  </AppPageWrapper>
</template>

<script setup lang="ts">
useHead({
  title: 'Work | Rachel Opperman | Software Engineer',
  meta: [
    {
      name: 'description',
      content: `A collection of some of the applications and sites I've worked on in the past few years.`,
    },
  ],
})
</script>
