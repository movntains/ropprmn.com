<template>
  <div class="min-h-screen bg-brand-black font-body">
    <AppSkipLink />
    <NavHeader />
    <div class="flex flex-col flex-1 min-h-screen pt-24">
      <main
        id="main"
        class="flex-1 z-0 focus:outline-none"
      >
        <div class="max-w-7xl mx-auto p-3 sm:p-4 md:p-8">
          <slot />
        </div>
      </main>
    </div>
    <AppFooter />
  </div>
</template>
