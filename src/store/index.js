import { createStore } from 'vuex';

// <categories>
import localCategoriesItems from './modules/localCategoriesItems.js';
import addCategory from './modules/addCategory.js';
import categoriesOzon from './modules/categoriesOzon.js';
import categoriesAli from './modules/categoriesAli.js';
import login from './modules/login.js';
import user from './modules/user.js';
import updateCategoryName from './modules/updateCategoryName.js';
import selectMarketplaceCategiry from './modules/selectMarketplaceCategiry.js';
import deleteCategory from './modules/deleteCategory.js';
// </categories>
// <shops>
import marketsItems from './markets/marketsItems.js';

// </shops>
export default createStore({
  modules: {
    // <categories>
    localCategoriesItems,
    categoriesOzon,
    categoriesAli,
    login,
    user,
    addCategory,
    updateCategoryName,
    selectMarketplaceCategiry,
    deleteCategory,
    // </categories>
    // <shops>
    marketsItems,
    // </shops>
  },
  strict: process.env.NODE_ENV !== 'production',
});
