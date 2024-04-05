<script setup lang="ts">
const { data: page } = await useAsyncData('projects', () => queryContent('/projects').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

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
    </UPageBody>
  </UContainer>
</template>
