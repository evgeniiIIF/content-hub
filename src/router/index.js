import { createRouter, createWebHistory } from 'vue-router';

import VEditingCategorySection from '../views/VEditingCategorySection.vue';
import VCategoriesSectionView from '../views/VCategoriesSectionView.vue';
import VLocalAttributesViews from '@/views/VLocalAttributesViews.vue';
import VLoginView from '@/views/VLoginView.vue';

const routes = [
  {
    path: '/',
    name: 'editing',
    component: VEditingCategorySection,
  },
  {
    path: '/login',
    name: 'login',
    component: VLoginView,
  },
  {
    path: '/categories',
    name: 'categories',
    component: VCategoriesSectionView,
  },

  {
    path: '/local-attributes',
    name: 'local-attributes',
    component: VLocalAttributesViews,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
