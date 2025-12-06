<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Tradealink — $1,500 Nuxt Studio Web Development'
const description = 'Book a focused, fixed-price engagement. We design, build, and ship a production-ready page or feature in Nuxt with Nuxt Studio.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <UIcon name="i-lucide-zap" class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>
      </template>

      <template #center>
        <nav class="hidden md:flex items-center gap-6">
          <ULink to="/services" class="text-sm font-medium hover:text-primary transition-colors">Services</ULink>
          <ULink to="/#task-pricing" class="text-sm font-medium hover:text-primary transition-colors">Pricing</ULink>
          <ULink to="/directory" class="text-sm font-medium hover:text-primary transition-colors">Free Tools</ULink>
          <ULink to="/vault" class="text-sm font-medium hover:text-primary transition-colors">Vault</ULink>
        </nav>
      </template>

      <template #right>
        <div class="flex items-center gap-3">
          <UButton to="/#task-pricing" color="primary" variant="soft" size="xs" class="hidden sm:inline-flex">
            Start a Task
          </UButton>
          <UColorModeButton />
        </div>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <UIcon name="i-lucide-zap" class="w-4 h-4 text-primary" />
            <span class="font-semibold">Tradealink</span>
          </NuxtLink>
          <p class="text-xs text-muted">
            Fixed-price Nuxt Studio development
          </p>
        </div>
      </template>

      <template #right>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div class="flex flex-col sm:flex-row gap-3 text-xs">
            <ULink to="/services" class="text-muted hover:text-primary transition-colors">Services</ULink>
            <ULink to="/directory" class="text-muted hover:text-primary transition-colors">Free Tools Directory</ULink>
            <ULink to="/vault" class="text-muted hover:text-primary transition-colors">Vault</ULink>
            <ULink to="/#task-pricing" class="text-muted hover:text-primary transition-colors">Pricing</ULink>
          </div>
          <p class="text-xs text-muted">
            © {{ new Date().getFullYear() }}
          </p>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
