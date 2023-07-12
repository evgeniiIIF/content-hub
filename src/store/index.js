import { createStore } from 'vuex';

import localCategoriesItems from './modules/localCategoriesItems.js';
import categoriesOzon from './modules/categoriesOzon.js';
import login from './modules/login.js';
import user from './modules/user.js';

export default createStore({
  modules: {
    localCategoriesItems,
    categoriesOzon,
    login,
    user,
  },
  strict: process.env.NODE_ENV !== 'production',
});
