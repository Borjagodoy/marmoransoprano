<script async setup>
const story = await useAsyncStoryblok('news', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>