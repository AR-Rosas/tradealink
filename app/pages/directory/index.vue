<script setup lang="ts">
const { data: posts } = await useAsyncData('directory-list', async () => {
  const docs = await queryCollection('directory').order('title', 'ASC').all()
  return docs
})

type DirectoryPost = {
  slug: string
  title: string
  description: string
  category?: string
  tags?: string[]
}

const directoryPosts = computed(() => (posts.value ?? []) as DirectoryPost[])

const tileLayouts = [
  'md:col-span-4 md:row-span-2',
  'md:col-span-2 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-3 md:row-span-1',
  'md:col-span-3 md:row-span-1',
  'md:col-span-2 md:row-span-2',
  'md:col-span-4 md:row-span-1'
]

function getTileLayout(index: number) {
  return tileLayouts[index % tileLayouts.length]
}

function getTileIcon(slug: string) {
  const map: Record<string, string> = {
    'marketing': 'i-lucide-megaphone',
    'web-development': 'i-lucide-code',
    'web-design': 'i-lucide-palette',
    'web-hosting': 'i-lucide-server',
    'cms': 'i-lucide-layout-template',
    'payment-gateway': 'i-lucide-credit-card',
    'remote-desktop-tools': 'i-lucide-monitor',
    'osint': 'i-lucide-search',
    'ai-and-automation': 'i-lucide-bot',
    'learning-and-research': 'i-lucide-book-open',
    'education': 'i-lucide-graduation-cap',
    'forms': 'i-lucide-clipboard-list',
    'document-utilities': 'i-lucide-file-text',
    'business-ops': 'i-lucide-briefcase-business',
    'career-and-freelance': 'i-lucide-user-round',
    'low-code-platform': 'i-lucide-blocks',
    'social-media-sites': 'i-lucide-message-circle',
    'subreddits-to-market-product': 'i-lucide-messages-square'
  }

  return map[slug] ?? 'i-lucide-folder'
}

useSeoMeta({
  title: 'Free Directory — curateai.xyz',
  description: 'Browse a curated directory of free resources organized by category.'
})
</script>

<template>
  <UContainer class="py-8 md:py-12">
    <div class="max-w-5xl mx-auto space-y-10">
      <div class="text-center space-y-3">
        <div class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted">
          <UIcon name="i-lucide-sparkles" class="w-4 h-4" />
          <span>{{ directoryPosts.length }} categories</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-bold tracking-tight">Free Directory</h1>
        <p class="text-base md:text-lg text-muted max-w-2xl mx-auto">
          A bento-style map of curated resources—pick a category and get straight to the good stuff.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[10.5rem] md:grid-flow-dense">
        <NuxtLink
          v-for="(post, index) in directoryPosts"
          :key="post.slug"
          :to="`/directory/${post.slug}`"
          class="group relative rounded-2xl overflow-hidden border border-gray-200/70 dark:border-gray-800/70 bg-white/60 dark:bg-gray-950/30 backdrop-blur transition-colors hover:border-primary"
          :class="getTileLayout(index)"
        >
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div class="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>

          <div class="relative h-full p-5 flex flex-col gap-4">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-start gap-3">
                <div class="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-950/30">
                  <UIcon :name="getTileIcon(post.slug)" class="w-5 h-5" />
                </div>

                <div class="min-w-0">
                  <h2 class="font-semibold leading-tight truncate">
                    {{ post.title }}
                  </h2>
                  <p class="text-sm text-muted truncate">
                    {{ post.category || 'Category' }}
                  </p>
                </div>
              </div>

              <UIcon
                name="i-lucide-arrow-up-right"
                class="w-5 h-5 text-muted transition-colors group-hover:text-foreground"
              />
            </div>

            <p class="text-sm text-muted leading-relaxed line-clamp-3">
              {{ post.description }}
            </p>

            <div class="mt-auto flex flex-wrap items-center gap-2">
              <UBadge
                v-for="tag in (post.tags || []).slice(0, 3)"
                :key="tag"
                color="neutral"
                variant="soft"
                size="xs"
              >
                {{ tag }}
              </UBadge>

              <UBadge
                v-if="(post.tags || []).length > 3"
                color="neutral"
                variant="outline"
                size="xs"
              >
                +{{ (post.tags || []).length - 3 }}
              </UBadge>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center text-sm text-muted">
        Want a custom, human-filtered shortlist for your exact situation?
        <NuxtLink to="/#pricing" class="text-primary hover:underline">See the answer service</NuxtLink>.
      </div>
    </div>
  </UContainer>
</template>
