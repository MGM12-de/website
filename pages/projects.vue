<script setup lang="ts">
const { data: page } = await useAsyncData('projects', () => queryContent('/projects').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const projects = [{
  title: 'Salon Goldstaub',
  description: 'Website for Salon Goldstaub',
  to: 'https://miggi92-salon-goldstaub.nuxt.space/',
  icon: 'i-heroicons-scissors'
}, {
  title: 'HaStE',
  description: 'Handball statistics website',
  to: 'https://haste.mgm12.dev',
  icon: 'i-heroicons-presentation-chart-line'
}]

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Saas',
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <UContainer>
    <UPageHeader v-bind="page" class="py-[50px]" />

    <UPageBody>
      <UPageGrid>
        <ULandingCard v-for="(project, index) in projects" :key="index" v-bind="project" target="_blank">
          <template #description>
            <span class="line-clamp-2">{{ project.description }}</span>
          </template>
        </ULandingCard>
      </UPageGrid>
    </UPageBody>
  </UContainer>
</template>
