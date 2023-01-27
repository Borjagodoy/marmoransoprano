<script async setup>
const story = await useAsyncStoryblok('biography', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>