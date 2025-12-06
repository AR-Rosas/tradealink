<script setup lang="ts">
const { data: page } = await useAsyncData('template-page', async () => {
  return await queryCollection('pages').where('slug', '=', 'template').first()
})

useSeoMeta({
  title: page.value?.hero?.title || 'Template Showcase',
  description: page.value?.hero?.description || 'Explore our ready-to-ship templates: micro-task landing pages and a full white-label platform you can brand and deploy.'
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero :title="page.hero?.title" :description="page.hero?.description" />

    <UPageBody class="space-y-12">
      <UPageSection :title="(page.sections as any)?.whatYouGet?.title">
        <div v-if="(page.sections as any)?.whatYouGet?.features?.length" class="grid md:grid-cols-2 gap-4 mt-4">
          <UCard v-for="f in (page.sections as any).whatYouGet.features" :key="f" class="p-4">
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-check-circle" class="text-primary" />
              <p class="text-sm">{{ f }}</p>
            </div>
          </UCard>
        </div>
      </UPageSection>

      <UPageSection :title="(page.sections as any)?.whyItSells?.title">
        <ul class="space-y-2">
          <li v-for="p in (page.sections as any)?.whyItSells?.points" :key="p" class="text-sm">• {{ p }}</li>
        </ul>
      </UPageSection>

      <UPageSection :title="(page.sections as any)?.howItWorks?.title">
        <div class="grid md:grid-cols-4 gap-4">
          <UCard v-for="s in (page.sections as any)?.howItWorks?.steps" :key="s" class="p-4 text-sm">
            {{ s }}
          </UCard>
        </div>
      </UPageSection>

      <UPageSection :title="(page.sections as any)?.pricing?.title">
        <div class="grid md:grid-cols-3 gap-6">
          <UCard v-for="pkg in (page.sections as any)?.pricing?.packages" :key="pkg.name" class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="font-semibold">{{ pkg.name }}</h3>
              <UBadge color="primary" variant="soft">{{ pkg.price }}</UBadge>
            </div>
            <ul class="text-sm space-y-1">
              <li v-for="inc in pkg.includes" :key="inc">• {{ inc }}</li>
            </ul>
          </UCard>
        </div>
      </UPageSection>

      <UPageSection :title="(page.sections as any)?.whoFor?.title">
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="a in (page.sections as any)?.whoFor?.audience" :key="a" color="neutral" variant="soft">{{ a }}</UBadge>
        </div>
      </UPageSection>

      <UPageSection :title="(page.sections as any)?.faq?.title">
        <UAccordion :items="(page.sections as any)?.faq?.items" />
      </UPageSection>
    </UPageBody>
  </UPage>
</template>
