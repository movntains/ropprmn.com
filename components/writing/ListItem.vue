<template>
  <article class="md:grid md:grid-cols-4 md:items-baseline">
    <span class="hidden relative z-10 mt-1 mb-3 text-sm text-brand-slate md:flex md:items-center">
      {{ post.date }}
    </span>
    <div class="post__container group relative flex flex-col items-start md:col-span-3">
      <h2 class="font-semibold text-base text-brand-slate-lightest">
        <span class="relative z-10 flex items-center mb-3 pl-3.5 text-sm text-brand-slate md:hidden">
          <span
            class="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span class="h-4 w-0.5 rounded-full bg-brand-slate/80" />
          </span>
          <span>{{ post.date }}</span>
        </span>
        <a
          :href="post.link"
          target="_blank"
          rel="noopener noreferrer"
          class="post__link focus:outline-none"
        >
          <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span class="relative z-10">{{ post.title }}</span>
        </a>
        <div class="post__item absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 sm:-inset-x-6 sm:rounded-2xl before:custom-border" />
      </h2>
      <p class="mt-2 font-light text-sm text-brand-slate">
        {{ post.description }}
      </p>
      <div
        aria-hidden="true"
        class="relative z-10 flex items-center mt-4 text-sm text-brand-teal"
      >
        <span>Read article</span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          class="w-4 h-4 mt-[1.5px] ml-1 stroke-current"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/BlogPost'

interface ListItemProps {
  post: BlogPost
}

defineProps<ListItemProps>()
</script>
