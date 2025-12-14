<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <UApp>
    <UHeader :panel="false">
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <UIcon name="i-lucide-zap" class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>
      </template>

      <template #center>
        <nav class="hidden md:flex items-center gap-6">
          <ULink to="/services" class="text-sm font-medium hover:text-primary transition-colors">Services</ULink>
          <ULink to="/" class="text-sm font-medium hover:text-primary transition-colors">Pricing</ULink>
          <ULink to="/directory" class="text-sm font-medium hover:text-primary transition-colors">Free Tools</ULink>
        </nav>
      </template>

      <template #right>
        <div class="flex items-center gap-3">
          <UButton 
            to="/" 
            color="primary" 
            variant="soft" 
            size="xs" 
            class="hidden sm:inline-flex"
          >
            Book Service
          </UButton>
          <ColorModeButton />
          
          <UButton
            :icon="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            color="gray"
            variant="ghost"
            size="sm"
            class="md:hidden"
            @click="isOpen = !isOpen"
            aria-label="Toggle menu"
          />
        </div>
      </template>
    </UHeader>

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
            <ULink to="/services" class="text-sm font-medium hover:text-primary transition-colors" @click="isOpen = false">
              Services
            </ULink>
            <ULink to="/" class="text-sm font-medium hover:text-primary transition-colors" @click="isOpen = false">
              Pricing
            </ULink>
            <ULink to="/directory" class="text-sm font-medium hover:text-primary transition-colors" @click="isOpen = false">
              Free Tools
            </ULink>
            <UButton 
              to="/" 
              color="primary" 
              variant="soft" 
              size="sm" 
              block
              @click="isOpen = false"
            >
              Book Service
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
            <span class="font-semibold">Tradealink</span>
          </NuxtLink>
          <p class="text-xs text-muted">
            Business Automation & Systems
          </p>
        </div>
      </template>

      <template #right>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div class="flex flex-col sm:flex-row gap-3 text-xs">
            <ULink to="/services" class="text-muted hover:text-primary transition-colors">Services</ULink>
            <ULink to="/" class="text-muted hover:text-primary transition-colors">Pricing</ULink>
          </div>
          <p class="text-xs text-muted">
            © {{ new Date().getFullYear() }}
          </p>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
