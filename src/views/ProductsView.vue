<template>
  <section class="products-page">
    <h1 class="products-page__title">Product Dashboard</h1>

    <FilterPanel />

    <ProductList
      :products="filteredProducts"
      :loading="loading"
      @product-selected="selectProduct"
    />

    <div v-if="selectedProduct" class="products-page__modal">
      <ProductDetail
        :product="selectedProduct"
        @close="selectedProduct = null"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, watch, inject } from 'vue'

  import { useProducts } from '@/composables/useProducts'
  import { useProductStore } from '@/stores/product.store'

  import FilterPanel from '@/components/common/FilterPanel.vue'
  import ProductList from '@/components/products/ProductList.vue'
  import ProductDetail from '@/components/products/ProductDetail.vue'

  import type { Product } from '@/types/product'

  const toastRef = inject<any>('toast')

  const selectedProduct = ref<Product | null>(null)

  const store = useProductStore()
  const { load, products, loading, error } = useProducts()

  const filteredProducts = computed(() => store.filteredProducts)

  function selectProduct(product: Product) {
    selectedProduct.value = product
    store.setLastSelected(product)
  }

  watch(
    () => store.message,
    (msg) => {
      if (msg) {
        toastRef?.value?.showToast(msg)
      }
    }
  )

  onMounted(async () => {
    await load()
    store.loadProducts(products.value)

    if (error.value) {
      toastRef?.value?.showToast('Unable to load products. Using offline data.')
    }
  })
</script>

<style scoped src="@/assets/styles/components/products-page.css"></style>
