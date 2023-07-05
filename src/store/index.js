import { createStore } from 'vuex';

import localCategoriesItems from './modules/localCategoriesItems.js';
import categoriesOzon from './modules/categoriesOzon.js';

export default createStore({
  modules: {
    localCategoriesItems,
    categoriesOzon,
  },
  strict: process.env.NODE_ENV !== 'production',
});
