import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardViews.vue'
import ProductoView from '@/views/ProductoViews.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/productos', component: ProductoView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})