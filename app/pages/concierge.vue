<script setup lang="ts">
// NOTE: Replace with your real checkout / booking URL when ready.
const CONCIERGE_CHECKOUT_URL = 'https://whop.com'

useSeoMeta({
  title: 'Concierge Build — $1,500 Done-for-you System · curateai.xyz',
  description: 'Fixed-price $1,500 concierge build: automation, documentation, and handoff. Ideal when you want implementation, not just an answer.'
})
</script>

<template>
  <UContainer class="py-10 md:py-16 space-y-14">
    <!-- Hero -->
    <section class="max-w-5xl mx-auto text-center space-y-6">
      <div class="flex flex-wrap items-center justify-center gap-2">
        <UBadge color="primary" variant="solid" size="lg">$1,500</UBadge>
        <UBadge color="neutral" variant="soft" size="lg">Done-for-you</UBadge>
        <UBadge color="neutral" variant="soft" size="lg">Full handoff</UBadge>
      </div>

      <h1 class="text-3xl md:text-5xl font-bold tracking-tight">
        Concierge Build: I implement the system end-to-end.
      </h1>

      <p class="text-base md:text-lg text-muted max-w-3xl mx-auto">
        This is the high-touch option for founders and small teams.
        You bring the goal; I build the workflows, automations, and documentation—then hand it over so you own it.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <UButton :to="CONCIERGE_CHECKOUT_URL" size="lg" color="primary">
          Start a $1,500 Build
        </UButton>
        <UButton to="/#pricing" size="lg" color="neutral" variant="outline">
          Not sure? Start with a Deep Brief ($39)
        </UButton>
      </div>

      <p class="text-xs text-muted max-w-2xl mx-auto">
        Fixed price. Timeline depends on scope.
        You get documentation, training, and full ownership.
      </p>
    </section>

    <!-- Trust cues -->
    <section class="max-w-5xl mx-auto w-full">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-wrench" class="w-5 h-5 text-primary mt-0.5" />
            <p class="text-sm"><span class="font-medium">Implemented</span>, not just advised</p>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-file-text" class="w-5 h-5 text-primary mt-0.5" />
            <p class="text-sm"><span class="font-medium">SOPs + docs</span> included</p>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-graduation-cap" class="w-5 h-5 text-primary mt-0.5" />
            <p class="text-sm"><span class="font-medium">Training</span> + handoff</p>
          </div>
        </UCard>
        <UCard>
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-shield-check" class="w-5 h-5 text-primary mt-0.5" />
            <p class="text-sm"><span class="font-medium">Ownership</span> (no lock-in)</p>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Good fit / Not a fit -->
    <section class="max-w-5xl mx-auto w-full">
      <UCard>
        <div class="space-y-6">
          <div class="text-center space-y-2">
            <h2 class="text-2xl md:text-3xl font-bold">What Concierge can cover</h2>
            <p class="text-sm md:text-base text-muted max-w-2xl mx-auto">
              If one competent operator can do it without being a specialist artist, it’s usually a fit.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <p class="font-semibold">Great fits</p>
              <div class="space-y-2 text-sm">
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p>Copywriting: landing page copy, offer positioning, email sequences, outreach scripts</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p>Recruiting ops: job posts, candidate scorecards, sourcing plan, screening process</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p>Operations systems: SOPs, onboarding, follow-ups, reporting, automations</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                  <p>Tool setup + workflow wiring (Notion/Airtable/Sheets/CRM + integrations)</p>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <p class="font-semibold">Not a fit (or needs a specialist)</p>
              <div class="space-y-2 text-sm">
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-x" class="w-4 h-4 text-muted mt-0.5" />
                  <p>Custom illustration, brand identity design, complex motion/video production</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-x" class="w-4 h-4 text-muted mt-0.5" />
                  <p>Legal/financial advice, or anything requiring licensed professional sign-off</p>
                </div>
                <div class="flex items-start gap-2">
                  <UIcon name="i-lucide-x" class="w-4 h-4 text-muted mt-0.5" />
                  <p>Huge multi-person builds that require a full agency team</p>
                </div>
              </div>
            </div>
          </div>

          <p class="text-xs text-muted">
            If you’re unsure: start with a Deep Brief ($39). I’ll tell you whether Concierge is the right path.
          </p>
        </div>
      </UCard>
    </section>

    <!-- What you get -->
    <section class="max-w-5xl mx-auto w-full space-y-6">
      <div class="text-center space-y-2">
        <h2 class="text-2xl md:text-3xl font-bold">What you get</h2>
        <p class="text-sm md:text-base text-muted max-w-2xl mx-auto">
          A working system, plus everything needed to run it confidently after delivery.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <UCard>
          <div class="space-y-3">
            <p class="font-semibold">Deliverables</p>
            <div class="space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Implemented workflows and automations</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Dashboards / reporting (if needed)</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Templates, checklists, and internal SOPs</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Secure handoff + access cleanup</p>
              </div>
            </div>
          </div>
        </UCard>

        <UCard>
          <div class="space-y-3">
            <p class="font-semibold">Support</p>
            <div class="space-y-2 text-sm">
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Video walkthrough / training session</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>30 days post-launch support</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Clear next steps + maintenance notes</p>
              </div>
              <div class="flex items-start gap-2">
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary mt-0.5" />
                <p>Everything documented so you can own it</p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Common builds -->
    <section class="max-w-5xl mx-auto w-full space-y-6">
      <div class="text-center space-y-2">
        <h2 class="text-2xl md:text-3xl font-bold">Common builds</h2>
        <p class="text-sm md:text-base text-muted max-w-2xl mx-auto">
          If your request looks like any of these, the $1,500 option is usually the fastest path.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">Ops automation</p>
            <p class="text-sm text-muted">Client onboarding, follow-ups, reminders, document generation, and task routing.</p>
          </div>
        </UCard>
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">CRM + pipeline</p>
            <p class="text-sm text-muted">Lead capture → qualification → follow-up sequences → handoff to fulfillment.</p>
          </div>
        </UCard>
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">Reporting dashboard</p>
            <p class="text-sm text-muted">One source of truth for KPIs with automated pulls from the tools you already use.</p>
          </div>
        </UCard>

        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">Copywriting + offer</p>
            <p class="text-sm text-muted">Positioning, landing page copy, email sequences, outreach scripts, and a clean CTA flow.</p>
          </div>
        </UCard>

        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">Recruiting ops</p>
            <p class="text-sm text-muted">Job post, screening steps, scorecard, interview questions, and a repeatable pipeline.</p>
          </div>
        </UCard>

        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">SOPs + training</p>
            <p class="text-sm text-muted">Document how work gets done so new hires ramp fast and execution stays consistent.</p>
          </div>
        </UCard>
      </div>
    </section>

    <!-- How it works -->
    <section class="max-w-5xl mx-auto w-full space-y-6">
      <div class="text-center space-y-2">
        <h2 class="text-2xl md:text-3xl font-bold">How it works</h2>
        <p class="text-sm md:text-base text-muted max-w-2xl mx-auto">
          Simple process, clear deliverables, and a clean handoff.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">1) Scope + success criteria</p>
            <p class="text-sm text-muted">We define what “done” means and what tools you’re using today.</p>
          </div>
        </UCard>
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">2) Build + iterate</p>
            <p class="text-sm text-muted">I implement the system and validate it with real examples / edge cases.</p>
          </div>
        </UCard>
        <UCard>
          <div class="space-y-2">
            <p class="font-semibold">3) Deliver + train</p>
            <p class="text-sm text-muted">Docs, walkthrough, and a handoff so you can run it without me.</p>
          </div>
        </UCard>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-5xl mx-auto w-full">
      <UCard class="relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div class="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>

        <div class="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">Ready to get it built?</h3>
            <p class="text-sm text-muted">
              Start the $1,500 concierge build—or begin with a Deep Brief if you want a recommendation first.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <UButton :to="CONCIERGE_CHECKOUT_URL" color="primary" size="lg" class="sm:min-w-56" block>
              Start a $1,500 Build
            </UButton>
            <UButton to="/#pricing" color="neutral" variant="outline" size="lg" class="sm:min-w-56" block>
              Start with Deep Brief ($39)
            </UButton>
          </div>
        </div>
      </UCard>
    </section>
  </UContainer>
</template>
