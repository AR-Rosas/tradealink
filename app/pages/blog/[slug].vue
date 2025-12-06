<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(() => `blog-post-${slug}`, () =>
  queryCollection('blog')
    .where('slug', '=', slug)
    .first()
)

const pageTitle = computed(() => post.value?.title || 'Blog Post')
const pageDescription = computed(() => post.value?.description || 'Tradealink field notes.')

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription
})
</script>

<template>
  <UPage>
    <UPageBody>
      <UContainer class="py-10 md:py-16 space-y-6">
        <div class="flex items-center gap-3 text-sm text-muted">
          <ULink to="/blog" class="inline-flex items-center gap-1 text-primary">
            <UIcon name="i-lucide-arrow-left" />
            Blog
          </ULink>
          <span>/</span>
          <span>{{ pageTitle }}</span>
        </div>

        <div v-if="post" class="space-y-4">
          <h1 class="text-3xl md:text-4xl font-semibold">{{ post.title }}</h1>
          <p class="text-sm text-muted">{{ post.date }}</p>
          <p class="text-base text-muted max-w-2xl">{{ post.description }}</p>
          <ContentRenderer :value="post" />
        </div>

        <div v-else class="text-sm text-muted">
          This post isn\'t published yet. Check back soon.
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
