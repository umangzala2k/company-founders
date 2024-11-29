<script setup>
const props = defineProps({
  data: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <v-img :src="`https://robohash.org/${data}`" height="100px" width="100px" class="rounded-circle" />
  </div>
</template>
