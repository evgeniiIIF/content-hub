import { createStore } from 'vuex';

import localCategoriesItems from './modules/localCategoriesItems.js';
import addCategory from './modules/addCategory.js';
import categoriesOzon from './modules/categoriesOzon.js';
import categoriesAli from './modules/categoriesAli.js';
import login from './modules/login.js';
import user from './modules/user.js';
import updateCategoryName from './modules/updateCategoryName.js';
import selectMarketplaceCategiry from './modules/selectMarketplaceCategiry.js';

export default createStore({
  modules: {
    localCategoriesItems,
    categoriesOzon,
    categoriesAli,
    login,
    user,
    addCategory,
    updateCategoryName,
    selectMarketplaceCategiry,
  },
  strict: process.env.NODE_ENV !== 'production',
});
