import { createStore } from 'vuex';

// <categories>
import localCategoriesItems from './modules/localCategoriesItems.js';
import addCategory from './modules/addCategory.js';
import addNestedCategory from './modules/addNestedCategory.js';

import categoriesOzon from './modules/categoriesOzon.js';
import categoriesAli from './modules/categoriesAli.js';
import login from './modules/login.js';
import user from './modules/user.js';
import updateCategoryName from './modules/updateCategoryName.js';
import selectMarketplaceCategiry from './modules/selectMarketplaceCategiry.js';
import deleteCategory from './modules/deleteCategory.js';
// </categories>

// <markets>
import marketsItems from './markets/marketsItems.js';
import addMarket from './markets/addMarket.js';
import deleteMarket from './markets/deleteMarket.js';
import editMarket from './markets/editMarket.js';

// </markets>

// <nomenclature>
import nomenclatureItems from './nomenclature/nomenclatureItems.js';
// </nomenclature>

// <product-cards>
import productCardsItems from './product-cards/productCardsItems.js';
// </product-cards>

export default createStore({
  modules: {
    // <categories>
    localCategoriesItems,
    categoriesOzon,
    categoriesAli,
    login,
    user,
    addCategory,
    addNestedCategory,
    updateCategoryName,
    selectMarketplaceCategiry,
    deleteCategory,
    // </categories>

    // <markets>
    marketsItems,
    addMarket,
    deleteMarket,
    editMarket,
    // </markets>

    // <nomenclature>

    nomenclatureItems,
    // </nomenclature>

    // <product-cards>
    productCardsItems,
    // </product-cards>
  },
  strict: process.env.NODE_ENV !== 'production',
});
