<script setup>
const { locale } = useI18n()
const story = await useAsyncStoryblok('home', {
  version: useRoute().query._storyblok ? 'draft' : 'published',
  language: locale.value
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>