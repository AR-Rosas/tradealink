<script setup lang="ts">
const { data: page } = await useAsyncData('services-page', () =>
  queryCollection('pages')
    .where('slug', '=', 'services')
    .first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Services page not found',
    fatal: true
  })
}

const title = 'Concierge Services — curateai.xyz'
const description = 'Done-for-you Nuxt web development + business systems at $1,500 flat. Timeline depends on scope. Includes documentation, handoff, and training.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UContainer v-if="page" class="py-10 md:py-16">
    <div class="prose prose-slate dark:prose-invert max-w-4xl mx-auto">
      <ContentRenderer :value="page" />
    </div>
  </UContainer>
</template>
