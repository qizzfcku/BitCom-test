import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/Login/ui/LoginPage.vue'
import CategoryPage from "@/pages/Caregory/ui/CategoryPage.vue";
import { useUserStore } from '@/entities/user/model/store';

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
