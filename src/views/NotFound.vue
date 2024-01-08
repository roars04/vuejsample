<script setup lang="ts">
const props = defineProps(["title"]);
</script>

<template>
  <main>
    <div class="col container-fluid mt-3">
      <h3>{{ title }}</h3>
    </div>
  </main>
</template>
