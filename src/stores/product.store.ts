import { defineStore } from 'pinia'
import type { Product, ProductState } from '@/types/product'

export const useProductStore = defineStore('products', {
  state: (): ProductState => ({
    products: [],
    filteredProducts: [],
    categories: [],
    lastSelected: null,
    selectedCategory: 'all',
    maxPrice: 1000,
    message: null,
  }),

  getters: {
    productCount: (state) => state.filteredProducts.length,
  },

  actions: {
    loadProducts(products: Product[]) {
      this.products = products
      this.filteredProducts = products
      this.categories = [...new Set(products.map((p) => p.category))]
      this.message = null
    },

    setLastSelected(product: Product | null) {
      this.lastSelected = product
    },

    setCategory(category: string) {
      this.selectedCategory = category
      this.applyFilters()
    },

    setMaxPrice(price: number) {
      this.maxPrice = price
      this.applyFilters()
    },

    clearFilters() {
      this.selectedCategory = 'all'
      this.maxPrice = 1000
      this.filteredProducts = this.products
      this.message = null
    },

    applyFilters() {
      let result = [...this.products]

      if (this.selectedCategory !== 'all') {
        result = result.filter((p) => p.category === this.selectedCategory)
      }

      result = result.filter((p) => p.price <= this.maxPrice)

      this.filteredProducts = result

      if (this.maxPrice === 0) {
        this.message = 'No hay productos gratis 😅'
        return
      }

      if (result.length === 0) {
        this.message = 'No existen productos en ese rango de precio.'
      } else {
        this.message = null
      }
    },
  },
})
