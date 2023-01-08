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
          <div class="py-16 px-4 sm:py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
            <div class="max-w-max mx-auto">
              <div class="sm:flex">
                <p class="font-bold text-4xl text-brand-orange sm:text-5xl">
                  404
                </p>
                <div class="sm:ml-6">
                  <div class="sm:pl-6 sm:border-l sm:border-brand-slate">
                    <h1 class="font-bold text-4xl text-brand-slate sm:text-5xl">
                      Page not found.
                    </h1>
                    <p class="mt-2 text-base text-brand-slate-lightest">
                      Please check the URL in the address bar and try again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <AppFooter />
  </div>
</template>
