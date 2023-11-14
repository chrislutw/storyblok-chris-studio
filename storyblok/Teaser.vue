<template>
  <div v-editable="blok" class="font-bold text-center py-32 text-6xl text-red-500">
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>