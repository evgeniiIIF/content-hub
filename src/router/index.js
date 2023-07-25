import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import VCategoriesSectionView from '../views/VCategoriesSectionView.vue';
import VLocalAttributesViews from '@/views/VLocalAttributesViews.vue';
import VLoginView from '@/views/VLoginView.vue';
import VHomeView from '@/views/VHomeView.vue';
import VMarketsSectionView from '@/views/VMarketsSectionView';
import VNomenclatureSectionView from '@/views/VNomenclatureSectionView';

const routes = [
  // <VCategoriesSectionView>
  {
    path: '/',
    name: 'Home',
    component: VHomeView,
    meta: {
      requiresAuth: true, // Указывает, что компонент требует авторизации
    },
  },
  {
    path: '/login',
    name: 'login',
    component: VLoginView,
    meta: { showHeader: false, showFooter: false },
  },
  {
    path: '/categories',
    name: 'categories',
    component: VCategoriesSectionView,
    meta: {
      requiresAuth: true, // Указывает, что компонент требует авторизации
    },
  },

  {
    path: '/local-attributes',
    name: 'local-attributes',
    component: VLocalAttributesViews,
    meta: {
      requiresAuth: true, // Указывает, что компонент требует авторизации
    },
  },
  // </VCategoriesSectionView>

  // <VMarketsSectionView>
  {
    path: '/markets',
    name: 'markets',
    component: VMarketsSectionView,
    meta: {
      requiresAuth: true, // Указывает, что компонент требует авторизации
      showFooter: false,
    },
  },
  // </VMarketsSectionView>

  // <VNomenclatureSectionView>
  {
    path: '/nomenclature',
    name: 'nomenclature',
    component: VNomenclatureSectionView,
    meta: {
      requiresAuth: true, // Указывает, что компонент требует авторизации
    },
  },
  // </VNomenclatureSectionView>
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticated = store.getters['login/getAuthenticated'];
  // console.log(authenticated, 'authenticated log from vueRouter');

  // Если компонент требует авторизации и пользователь не авторизован, перенаправляем на страницу входа
  if (to.matched.some((record) => record.meta.requiresAuth) && !authenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
