import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/modules/authentication/LoginPage.vue'
import CategoryPage from "@/modules/products/CategoryPage.vue";
import { useUserStore } from '@/modules/authentication/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/category'
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/category',
      component:CategoryPage
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isAuthenticated = !!userStore.userData;

  if (to.path === '/login' && isAuthenticated) {
    next('/category');
  } else {
    next();
  }
});
export default router
