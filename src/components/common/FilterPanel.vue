<template>
  <div class="filter-panel">
    <!-- CATEGORY FILTER -->
    <div class="filter-panel__group">
      <label class="filter-panel__label">Category</label>

      <select
        v-model="category"
        class="filter-panel__select"
        aria-label="Select category"
      >
        <option value="all">All</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <!-- PRICE FILTER -->
    <div class="filter-panel__group">
      <label class="filter-panel__label">Max Price</label>

      <div class="filter-panel__price-row">
        <input
          type="range"
          min="0"
          max="1000"
          v-model.number="price"
          class="filter-panel__range"
        />
        <span class="filter-panel__price">${{ price }}</span>
      </div>
    </div>

    <button class="filter-panel__reset" @click="resetFilters">Reset</button>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useProductStore } from '@/stores/product.store'

  const store = useProductStore()

  const categories = computed(() => store.categories)

  // Computed con setter → permite usar v-model sin bugs
  const category = computed({
    get: () => store.selectedCategory,
    set: (val: string) => store.setCategory(val),
  })

  const price = computed({
    get: () => store.maxPrice,
    set: (val: number) => store.setMaxPrice(val),
  })

  function resetFilters() {
    store.clearFilters()
  }
</script>

<style scoped src="@/assets/styles/components/filter-panel.css"></style>
