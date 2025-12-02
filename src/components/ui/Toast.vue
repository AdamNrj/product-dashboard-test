<template>
  <transition name="toast-fade">
    <div v-if="visible" class="toast">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const visible = ref(false)
  const message = ref('')

  function showToast(msg: string) {
    message.value = msg
    visible.value = true

    setTimeout(() => (visible.value = false), 2600)
  }

  defineExpose({ showToast })
</script>

<style scoped>
  .toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    padding: 12px 22px;

    background: rgba(28, 28, 30, 0.8);
    backdrop-filter: blur(10px);

    color: white;
    font-size: 14px;
    font-weight: 500;

    border-radius: 32px;

    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);

    animation: toast-pop 0.35s ease;
  }

  .toast-fade-enter-active,
  .toast-fade-leave-active {
    transition: opacity 0.35s ease, transform 0.35s ease;
  }
  .toast-fade-enter-from,
  .toast-fade-leave-to {
    opacity: 0;
    transform: translate(-50%, 20px);
  }

  @keyframes toast-pop {
    from {
      transform: translate(-50%, 28px) scale(0.95);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0) scale(1);
      opacity: 1;
    }
  }
</style>
