import { ref } from 'vue'
import { getProducts } from '@/services/api'
import localProducts from '@/data/products.json'
import type { Product } from '@/types/product'

export function useProducts() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const products = ref<Product[]>([])

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      const data = await getProducts()
      if (!Array.isArray(data)) throw new Error('Invalid API response')
      products.value = data
    } catch (err) {
      console.warn('API failed → using fallback local products.')
      products.value = localProducts as Product[]
      error.value = 'API unavailable — using offline data.'
    }

    loading.value = false
  }

  return {
    loading,
    error,
    products,
    load,
  }
}
