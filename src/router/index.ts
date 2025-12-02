import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductsView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
