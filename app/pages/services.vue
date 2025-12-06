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

const title = 'All Services — Tradealink'
const description = 'Professional business services at $1,500 flat. Delivery timeline depends on the service. Each includes lifetime vault access.'

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
