import { createStore } from 'vuex';

import localCategoriesItems from './modules/localCategoriesItems.js';

export default createStore({
  modules: {
    localCategoriesItems,
  },
  strict: process.env.NODE_ENV !== 'production',
});
