<template>
  <div v-editable="blok" class="container mx-auto my-12 grid gap-12 place-items-center md:grid-cols-3">
    <StoryblokComponent v-for="blok in blok.columns" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>