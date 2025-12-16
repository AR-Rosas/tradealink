<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <UApp>
    <header class="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="flex items-center justify-between h-16">
          <!-- Left: Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <UIcon name="i-lucide-zap" class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <AppLogo class="w-auto h-6 shrink-0" />
          </NuxtLink>

          <!-- Center: Nav Links (Desktop) -->
          <nav class="hidden md:flex items-center gap-6">
            <ULink to="/#how-it-works" class="text-sm font-medium hover:text-primary transition-colors">How it works</ULink>
            <ULink to="/#pricing" class="text-sm font-medium hover:text-primary transition-colors">Pricing</ULink>
            <ULink to="/build" class="text-sm font-medium hover:text-primary transition-colors">Build-Out ($1,500)</ULink>
            <ULink to="/products" class="text-sm font-medium hover:text-primary transition-colors">Products</ULink>
            <ULink to="/directory" class="text-sm font-medium hover:text-primary transition-colors">Free Directory</ULink>
          </nav>

          <!-- Right: CTA + Color Mode + Mobile Menu -->
          <div class="flex items-center gap-3">
            <UButton
              to="/"
              color="primary"
              variant="soft"
              size="xs"
              class="hidden sm:inline-flex"
            >
              Get Quick Answer ($5)
            </UButton>
            <ColorModeButton />

            <UButton
              :icon="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
              color="neutral"
              variant="ghost"
              size="sm"
              class="md:hidden"
              aria-label="Toggle menu"
              @click="isOpen = !isOpen"
            />
          </div>
        </div>
      </UContainer>
    </header>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="md:hidden border-b border-gray-200 dark:border-gray-800 bg-background shadow-lg">
        <UContainer class="py-4">
          <nav class="flex flex-col gap-4">
            <ULink to="/#how-it-works" class="text-sm font-medium hover:text-primary transition-colors" @click="isOpen = false">
              How it works
            </ULink>
            <ULink to="/#pricing" class="text-sm font-medium hover:text-primary transition-colors" @click="isOpen = false">
              Pricing
            </ULink>
            <ULink to="/build" class="text-sm font-medium hover:text-primary transition-colors" @click="isOpen = false">
              Build-Out ($1,500)
            </ULink>
            <ULink to="/products" class="text-sm font-medium hover:text-primary transition-colors" @click="isOpen = false">
              Products
            </ULink>
            <ULink to="/directory" class="text-sm font-medium hover:text-primary transition-colors" @click="isOpen = false">
              Free Directory
            </ULink>
            <UButton
              to="/"
              color="primary"
              variant="soft"
              size="sm"
              block
              @click="isOpen = false"
            >
              Get Quick Answer ($5)
            </UButton>
          </nav>
        </UContainer>
      </div>
    </Transition>

    <UMain>
      <slot />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <UIcon name="i-lucide-zap" class="w-4 h-4 text-primary" />
            <span class="font-semibold">curateai.xyz</span>
          </NuxtLink>
          <p class="text-xs text-muted">
            Human-filtered answers delivered by email
          </p>
        </div>
      </template>

      <template #right>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div class="flex flex-col sm:flex-row gap-3 text-xs">
            <ULink to="/#how-it-works" class="text-muted hover:text-primary transition-colors">How it works</ULink>
            <ULink to="/#pricing" class="text-muted hover:text-primary transition-colors">Pricing</ULink>
            <ULink to="/build" class="text-muted hover:text-primary transition-colors">Build-Out</ULink>
            <ULink to="/products" class="text-muted hover:text-primary transition-colors">Products</ULink>
          </div>
          <p class="text-xs text-muted">
            © {{ new Date().getFullYear() }}
          </p>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
