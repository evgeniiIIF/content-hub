import { createRouter, createWebHistory } from 'vue-router';
import VEditingCategorySection from '../views/VEditingCategorySection.vue';
import VCategoriesSection from '../views/VCategoriesSection.vue';

const routes = [
  {
    path: '/',
    name: 'categoties',
    component: VCategoriesSection,
  },
  {
    path: '/editing',
    name: 'editing',
    component: VEditingCategorySection,
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
