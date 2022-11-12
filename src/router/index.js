import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CatalogView from "@/views/CatalogView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/shop/',
    name: 'shop',
    component: CatalogView,
    children: [
      {
        path: '/category/:id',
        name: 'category',
        component: CatalogView,
        children: [
          {
            path: '/:link',
            name: 'single-product',
            component: CatalogView,
          }
        ]
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
