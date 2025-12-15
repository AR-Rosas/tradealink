<script setup lang="ts">
interface DirectoryArticle {
  slug: string
  title: string
  description: string
  category: string
  date: string
  tags?: string[]
  heroImage?: string
  readingTime?: number
  author?: {
    name: string
    role?: string
    avatar?: string
  }
  body?: unknown
}

const route = useRoute()
const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value[0] : value || ''
})

const { data: category } = await useAsyncData<DirectoryArticle | null>(
  () => `directory-${slug.value}`,
  async () => {
    if (!slug.value) {
      return null
    }
    const entry = await queryCollection('directory').where('slug', '=', slug.value).first()
    return entry as DirectoryArticle | null
  },
  { watch: [slug] }
)

if (!category.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Directory category not found',
    fatal: true
  })
}

const fallbackDescription = 'Field notes, experiments, and templates from the Tradealink crew.'

const metaTitle = computed(() => category.value ? `${category.value.title} · Tradealink Field Notes` : 'Tradealink Field Notes')
const metaDescription = computed(() => category.value?.description ?? fallbackDescription)
const metaImage = computed(() => category.value?.heroImage)

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
  ogTitle: metaTitle,
  ogDescription: metaDescription,
  ogImage: metaImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UContainer class="py-8 md:py-12">
    <div class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <UButton
        to="/directory"
        variant="ghost"
        color="neutral"
        size="sm"
        icon="i-lucide-arrow-left"
        class="mb-6"
      >
        Back to Directory
      </UButton>

      <!-- Hero Section -->
      <div class="space-y-6">
        <!-- Category Badge + Title -->
        <div class="space-y-3">
          <UBadge color="primary" variant="soft" size="lg">
            {{ category?.category || 'Resource' }}
          </UBadge>
          <h1 class="text-3xl md:text-5xl font-bold">
            {{ category?.title }}
          </h1>
        </div>

        <!-- Description -->
        <p class="text-lg md:text-xl text-muted">
          {{ category?.description }}
        </p>

        <!-- Meta Info (Date, Reading Time, Author) -->
        <div class="flex flex-wrap items-center gap-4 text-sm text-muted">
          <div v-if="category?.date" class="flex items-center gap-2">
            <UIcon name="i-lucide-calendar" class="w-4 h-4" />
            <time>{{ new Date(category.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
          </div>
          <div v-if="category?.readingTime" class="flex items-center gap-2">
            <UIcon name="i-lucide-clock" class="w-4 h-4" />
            <span>{{ category.readingTime }} min read</span>
          </div>
          <div v-if="category?.author" class="flex items-center gap-2">
            <UIcon name="i-lucide-user" class="w-4 h-4" />
            <span>{{ category.author.name }}</span>
          </div>
        </div>

        <!-- Tags -->
        <div v-if="category?.tags?.length" class="flex flex-wrap gap-2">
          <UBadge
            v-for="tag in category.tags"
            :key="tag"
            color="neutral"
            variant="soft"
            size="sm"
          >
            {{ tag }}
          </UBadge>
        </div>
      </div>

      <!-- Hero Image -->
      <div v-if="category?.heroImage" class="my-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
        <img
          :src="category.heroImage"
          :alt="category.title"
          class="w-full h-auto"
        />
      </div>

      <!-- Divider -->
      <USeparator class="my-8" />

      <!-- Article Content -->
      <div class="prose prose-gray dark:prose-invert max-w-none">
        <ContentRenderer v-if="category" :value="category" />
      </div>
    </div>
  </UContainer>
</template>
