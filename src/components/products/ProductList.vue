<template>
  <section class="product-list" aria-label="Products section">
    <div v-if="loading" class="product-list__skeletons">
      <div v-for="i in 8" :key="'sk-' + i" class="product-list__skeleton"></div>
    </div>

    <div v-else-if="store.message" class="product-list__empty">
      {{ store.message }}
    </div>

    <div v-else class="product-list__grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="select(product)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import ProductCard from '@/components/products/ProductCard.vue'
  import { useProductStore } from '@/stores/product.store'
  import type { Product } from '@/types/product'

  const props = defineProps<{
    products: Product[]
    loading: boolean
  }>()

  const store = useProductStore()

  const emit = defineEmits<{
    (e: 'product-selected', product: Product): void
  }>()

  function select(product: Product) {
    emit('product-selected', product)
  }
</script>

<style scoped src="@/assets/styles/components/product-list.css"></style>
