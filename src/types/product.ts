export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
}

export interface ProductState {
  products: Product[]
  selectedCategory: string
  filteredProducts: Product[]
  categories: string[]
  lastSelected: Product | null
  maxPrice: number
  message: string | null
}
