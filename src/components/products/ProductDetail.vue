<template>
  <section
    v-if="product"
    class="product-detail"
    role="dialog"
    aria-modal="true"
    aria-label="Product details"
  >
    <button
      class="product-detail__close"
      aria-label="Close"
      @click="emit('close')"
    >
      ×
    </button>

    <div class="product-detail__content">
      <img
        class="product-detail__image"
        :src="product.image"
        :alt="product.title"
        loading="lazy"
      />

      <div class="product-detail__info">
        <h2 class="product-detail__title">{{ product.title }}</h2>

        <p class="product-detail__price">${{ product.price.toFixed(2) }}</p>

        <div
          class="product-detail__description"
          v-html="product.description"
        ></div>

        <div class="product-detail__rating">
          ⭐ {{ product.rating?.rate }}
          <span class="product-detail__rating-count">
            ({{ product.rating?.count }} reviews)
          </span>
        </div>

        <button class="product-detail__buy" @click="buyProduct">Buy Now</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import type { Product } from '@/types/product'

  const props = defineProps<{ product: Product }>()

  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  function buyProduct() {
    alert('Buy functionality not implemented')
  }
</script>

<style scoped src="@/assets/styles/components/product-detail.css"></style>
