<script setup lang="ts">
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: any) => void
      closePopup: (formId: string) => void
    }
  }
}

const DEEP_BRIEF_TALLY_FORM_ID = 'jaeo4J'

// NOTE: Replace these with your real Whop product URLs when ready.
const DEEP_BRIEF_CHECKOUT_URL = 'https://whop.com/tradealink/systems-diagnostic-report/'

// High-ticket build-out offer (kept as a separate path from the fast answer service).
const BUILD_OUT_URL = '/build'

const openTallyThenCheckout = (formId: string, checkoutUrl: string) => {
  if (!import.meta.client) return

  // If embed isn't ready yet, fall back to direct checkout.
  if (!window.Tally) {
    window.location.href = checkoutUrl
    return
  }

  window.Tally.openPopup(formId, {
    layout: 'modal',
    width: 700,
    onSubmit: () => {
      window.location.href = checkoutUrl
    }
  })
}

const openDeepBrief = () => openTallyThenCheckout(DEEP_BRIEF_TALLY_FORM_ID, DEEP_BRIEF_CHECKOUT_URL)

useHead({
  script: [
    {
      src: 'https://tally.so/widgets/embed.js',
      async: true
    }
  ]
})

useSeoMeta({
  title: 'Human-Filtered Search & Answer Service — curateai.xyz',
  description: 'Get clear, curated answers without sifting through noise. Human-verified research delivered via email. Minimum $5.'
})
</script>

<template>
  <UContainer class="py-10 md:py-16 space-y-14">
    <!-- Hero / Top Section -->
    <section class="text-center space-y-6">
      <UBadge color="primary" variant="soft" size="lg">
        Human-Filtered Search & Answer Service
      </UBadge>

      <h1 class="text-3xl md:text-5xl font-bold tracking-tight">
        Get clear, curated answers — without sifting through noise.
      </h1>

      <div class="max-w-2xl mx-auto space-y-2">
        <p class="text-base md:text-lg text-muted">
          <span class="font-medium text-foreground">I’ll personally research, filter, and summarize</span>
          the best answers to your question.
        </p>
        <p class="text-sm md:text-base text-muted">
          Delivered directly via email. Minimum $5.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <UButton size="lg" color="primary" @click="openDeepBrief">
          Get Deep Brief ($39)
        </UButton>
      </div>

      <p class="text-xs text-muted max-w-2xl mx-auto">
        You are purchasing a <span class="font-medium">human-filtered answer brief</span> delivered by email.
        This is <span class="font-medium">not</span> automated output only.
      </p>
    </section>

    <!-- Trust Cues / Indicators -->
    <section class="max-w-5xl mx-auto w-full">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-badge-check" class="w-5 h-5 text-primary mt-0.5" />
            <p class="text-sm"><span class="font-medium">100% human-verified</span> outputs</p>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-mail" class="w-5 h-5 text-primary mt-0.5" />
            <p class="text-sm">Delivered via <span class="font-medium">email</span> for clarity</p>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-circle-dot" class="w-5 h-5 text-primary mt-0.5" />
            <p class="text-sm"><span class="font-medium">One question</span> per order</p>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-clock" class="w-5 h-5 text-primary mt-0.5" />
            <p class="text-sm">Same-day delivery <span class="font-medium">available</span></p>
          </div>
        </UCard>
      </div>
    </section>

    <!-- How it works -->
    <section id="how-it-works" class="max-w-5xl mx-auto w-full space-y-6">
      <div class="text-center space-y-2">
        <h2 class="text-2xl md:text-3xl font-bold">How It Works</h2>
        <p class="text-sm md:text-base text-muted max-w-2xl mx-auto">
          I use multiple AI tools to assist me, but all answers are personally verified and curated.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">1) You submit your question</p>
            <p class="text-sm text-muted">Add context so I can filter results to what actually matters.</p>
          </div>
        </UCard>
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">2) I research & filter the best info</p>
            <p class="text-sm text-muted">I pull trusted sources, remove fluff, and check claims.</p>
          </div>
        </UCard>
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">3) You get a clean answer via email</p>
            <p class="text-sm text-muted">Summary + links + the most useful next step (if needed).</p>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="max-w-5xl mx-auto w-full space-y-6">
      <div class="text-center space-y-2">
        <h2 class="text-2xl md:text-3xl font-bold">Pricing</h2>
        <p class="text-sm md:text-base text-muted">Professional research and development services for your business.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <UCard class="border-2 border-primary/30">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-xl font-bold">Deep Brief</p>
              </div>
              <UBadge color="primary" variant="solid" size="lg">$39</UBadge>
            </div>

            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p class="text-sm">Full analysis & comparison</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p class="text-sm">Recommendation based on context</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p class="text-sm">Pros, cons, caveats</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p class="text-sm">Delivered by email (24–48h)</p>
              </div>
            </div>

            <UButton color="primary" variant="outline" block @click="openDeepBrief">
              Get Deep Brief ($39)
            </UButton>
          </div>
        </UCard>
      </div>

      <UCard class="relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div class="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>

        <div class="relative grid lg:grid-cols-[1.25fr_0.75fr] gap-6 items-start">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <UBadge color="primary" variant="solid">$1,500</UBadge>
            </div>

            <h3 class="text-xl font-bold">Whop.com + Nuxt System Website</h3>

            <p class="text-sm md:text-base text-muted">
              A complete digital product platform with Nuxt front-end, Whop integration for memberships & sales, and full deployment.
              Fixed scope, clean handoff, documentation included—perfect for launching your digital product business.
            </p>

            <div class="grid sm:grid-cols-2 gap-2 text-sm">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Nuxt 4 + Nuxt UI landing page</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Whop checkout & membership integration</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Cloudflare deployment setup</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Full source code + documentation</p>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <UButton
              :to="BUILD_OUT_URL"
              color="primary"
              size="lg"
              block
            >
              View Build-Out ($1,500)
            </UButton>

            <p class="text-xs text-muted">
              Best for founders/teams who want implementation—not just a brief.
            </p>
          </div>
        </div>
      </UCard>
    </section>

    <!-- Scope & Safety Limits -->
    <section id="scope" class="max-w-5xl mx-auto w-full">
      <UCard>
        <div class="space-y-6">
          <div class="text-center space-y-2">
            <h2 class="text-2xl md:text-3xl font-bold">Scope & Limits</h2>
            <p class="text-sm md:text-base text-muted">Clear boundaries keep the service fast and useful.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <p class="font-semibold">What I <em>will</em> research</p>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p class="text-sm">Tool comparisons</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p class="text-sm">Resource lists</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p class="text-sm">Community recommendations</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p class="text-sm">Market insights</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p class="text-sm">Alternatives & curated links</p>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <p class="font-semibold">What I <em>won’t</em> do</p>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-x" class="w-4 h-4 text-muted mt-0.5" />
                  <p class="text-sm">Medical/legal advice</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-x" class="w-4 h-4 text-muted mt-0.5" />
                  <p class="text-sm">Professional consulting</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-x" class="w-4 h-4 text-muted mt-0.5" />
                  <p class="text-sm">Unlimited back-and-forth</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-x" class="w-4 h-4 text-muted mt-0.5" />
                  <p class="text-sm">Academic homework answers</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <UButton color="neutral" variant="ghost" to="/directory">
              Browse the free directory
            </UButton>
          </div>
        </div>
      </UCard>
    </section>
  </UContainer>
</template>
