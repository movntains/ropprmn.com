<template>
  <AppPageWrapper>
    <section class="pt-16">
      <AppPageHeading>Writing</AppPageHeading>
      <p class="font-light text-base text-brand-slate leading-7">
        This is a collection of posts I've written for the Zaengle blog about a variety of topics, such as accessibility, web app development, cybersecurity, and some of the facets of a software engineering career.
      </p>
      <WritingList />
    </section>
  </AppPageWrapper>
</template>

<script setup lang="ts">
useHead({
  title: 'Writing | Rachel Opperman | Software Engineer',
  meta: [
    {
      name: 'description',
      content: `A collection of posts I've written for the Zaengle blog.`,
    },
  ],
})
</script>
