<script async setup>
useServerSeoMeta({
  title: 'Biografía Mar Morán',
  ogTitle: 'Biografía - Mar Morán Soprano',
  description: 'Conoce todo sobre la soprano Mar Morán.',
  ogDescription: 'Conoce todo sobre la soprano Mar Morán.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const story = await useAsyncStoryblok('biography', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>