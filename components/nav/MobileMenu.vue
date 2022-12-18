<template>
  <div class="flex justify-between items-center md:hidden">
    <button
      type="button"
      class="custom-focus rounded-sm transition text-slate-400 hover:text-brand-orange"
      @click="setIsOpen(true)"
    >
      <span class="sr-only">Open Navigation</span>
      <Bars3Icon
        aria-hidden="true"
        class="w-8 h-8 stroke-current focus:outline-none"
      />
    </button>
    <TransitionRoot :show="isOpen">
      <Dialog
        class="fixed inset-0 flex z-[1000] lg:hidden"
        :class="isOpen ? 'pointer-events-auto' : 'pointer-events-none'"
        @close="setIsOpen(false)"
      >
        <TransitionChild
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/75" />
        </TransitionChild>
        <TransitionChild
          enter="transform transition ease-in-out duration-300"
          enter-from="-translate-x-full"
          enter-to="opacity-100"
          leave="transform transition ease-in-out duration-300"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
          class="relative flex flex-col flex-1 w-full max-w-xs pb-4 bg-brand-charcoal"
        >
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
            class="absolute top-0 right-0 -mr-14 p-1"
          >
            <button
              type="button"
              class="flex justify-center items-center w-12 h-12 rounded-full text-white transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              @click="setIsOpen(false)"
            >
              <span class="sr-only">Close navigation</span>
              <XMarkIcon
                class="w-6 h-6 stroke-current"
                aria-hidden="true"
              />
            </button>
          </TransitionChild>
          <div class="flex-1 h-0 overflow-y-auto">
            <nav aria-label="Main Navigation">
              <div class="flex items-center flex-shrink-0 py-5 pl-8 pr-4">
                <NuxtLink
                  :to="{ name: 'index' }"
                  class="custom-focus rounded-md text-brand-teal"
                >
                  <span class="sr-only">Home</span>
                  <SvgLogo />
                </NuxtLink>
              </div>
              <ul class="mt-5 px-8 space-y-10">
                <li
                  v-for="navLink in navLinks"
                  :key="navLink.label"
                  :class="{ 'pb-2 last-of-type:pb-0': $route.name === navLink.page }"
                >
                  <NuxtLink
                    :to="{ name: navLink.page }"
                    class="custom-underline custom-focus rounded-sm font-body text-slate-200"
                  >
                    {{ navLink.label }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Dialog, TransitionRoot, TransitionChild } from '@headlessui/vue'

import { navLinks } from '@/utils/navLinks'

const route = useRoute()
const isOpen = ref(false)

const setIsOpen = (value: boolean) => {
  isOpen.value = value
}

watch(route, () => {
  setIsOpen(false)
})
</script>
