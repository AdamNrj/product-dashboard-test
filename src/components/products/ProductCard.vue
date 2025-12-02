<template>
  <article class="product-card" @click="handleClick">
    <img
      class="product-card__img"
      :src="product.image"
      :alt="product.title"
      loading="lazy"
    />

    <h3 class="product-card__title">{{ product.title }}</h3>

    <p class="product-card__price">${{ formattedPrice }}</p>

    <p class="product-card__category">{{ product.category }}</p>
  </article>
</template>

<script setup lang="ts">
  import { computed, defineProps, defineEmits } from 'vue'
  import type { Product } from '@/types/product'

  const props = defineProps<{ product: Product }>()

  const emit = defineEmits<{
    (e: 'click', product: Product): void
  }>()

  const formattedPrice = computed(() => props.product.price.toFixed(2))

  function handleClick() {
    emit('click', props.product)
  }
</script>

<style scoped src="@/assets/styles/components/product-card.css"></style>
