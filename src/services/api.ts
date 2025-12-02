const BASE_URL = 'https://fakestoreapi.com'

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`)
  const data = await response.json()
  return data
}

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`)
  const data = await response.json()
  return data
}

export const getProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/products/category/${category}`)
  return response.json()
}

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`)
  return response.json()
}

export const searchProducts = (products, query) => {
  return products.filter((p) => p.title.includes(query))
}
