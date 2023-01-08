<template>
  <AppPageWrapper>
    <section class="pt-16">
      <AppPageHeading>About</AppPageHeading>
      <div class="space-y-7 font-light text-base text-brand-slate leading-7">
        <p>
          I'm a full-stack web developer with a passion for building fully accessible user interfaces
          and performant, secure APIs. I work primarily with Vue and React on the frontend and Laravel
          on the backend. Thorough test coverage is also a must-have in my book; I use Jest, Cypress,
          and PHPUnit, along with GitHub Actions, to build well-tested applications.
        </p>
        <p>
          When I'm not coding, I can usually be found reading, watching The Big Bang Theory, or
          learning a new language.
        </p>
        <p>
          Feel free to
          <a
            href="https://www.notion.so/906e35079c3b43769cbedf536bab3f4a?v=aac27d0e71f24037a4c71cbbc4a7361b"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-link custom-focus"
          >
            check out my latest reads
          </a>
          in the Zaengle Book Club archive.
        </p>
      </div>
    </section>
  </AppPageWrapper>
</template>

<script setup lang="ts">
useHead({
  title: 'About | Rachel Opperman | Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Full-stack web developer with a passion for building fully accessible user interfaces and performant, secure APIs.',
    },
  ],
})
</script>
