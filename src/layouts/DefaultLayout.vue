<template>
  <main class="layout">
    <Toast ref="toastRef" />
    <slot :toast="toastRef" />
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Toast from '@/components/ui/Toast.vue'

  const toastRef = ref<any>(null)
</script>

<style scoped>
  .layout {
    width: 100%;
    padding: var(--space-lg);
    max-width: 1200px;
    margin-inline: auto;
  }
</style>
