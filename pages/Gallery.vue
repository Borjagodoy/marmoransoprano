<script async setup>
const story = await useAsyncStoryblok('gallery', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>