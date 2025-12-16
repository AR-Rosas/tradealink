<script setup lang="ts">
const fallbackTitle = 'curateai.xyz — Notes'
const fallbackDescription = 'Short, practical notes on research, clarity, and finding the best sources fast.'

const { data: page } = await useAsyncData('blog-page', async () => {
  return await queryCollection('pages').where('slug', '=', 'blog').first()
})

const { data: posts } = await useAsyncData('blog-posts', async () => {
  return await queryCollection('blog').order('date', 'DESC').all()
})

useSeoMeta({
  title: page.value?.hero?.title || fallbackTitle,
  description: page.value?.hero?.description || fallbackDescription,
  ogTitle: page.value?.hero?.title || fallbackTitle,
  ogDescription: page.value?.hero?.description || fallbackDescription
})
</script>

<template>
  <UPage>
    <UPageHero
      :title="page?.hero?.title || fallbackTitle"
      :description="page?.hero?.description || fallbackDescription"
    />

    <UPageBody class="space-y-10">
      <UPageSection
        title="Latest Posts"
        description="We publish small, focused pieces you can read in a few minutes and apply the same day."
      >
        <div v-if="posts?.length" class="grid md:grid-cols-2 gap-6 mt-6">
          <UCard v-for="post in posts" :key="post.slug" class="space-y-2">
            <ULink :to="`/blog/${post.slug}`" class="text-base font-semibold hover:text-primary">
              {{ post.title }}
            </ULink>
            <p class="text-xs text-muted">{{ post.date }}</p>
            <p class="text-sm text-muted">{{ post.description }}</p>
          </UCard>
        </div>

        <div v-else class="text-sm text-muted mt-6">
          No posts yet. The first field notes will appear here soon.
        </div>
      </UPageSection>
    </UPageBody>
  </UPage>
</template>
