<script setup>
const story = await useAsyncStoryblok('home', {
  version: useRoute().query._storyblok ? 'draft' : 'published',
  language: useI18n().locale.value
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>