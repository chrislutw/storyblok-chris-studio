<template>
  <div v-editable="blok" class="bg-[#f7f6fd] rounded-[5px] text-center w-full p-12">
    <h3 class="font-bold text-2xl text-[#1d243d]">
      {{ blok.name }}
      <div class="ml-1 p-1 text-base text-gray-400">{{ blok.select }}</div>
    </h3>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>