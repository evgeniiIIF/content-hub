import { createStore } from 'vuex';

import form from './modules/form';
import menu from './modules/menu';
import partners from './modules/partners';
import reviews from './modules/reviews';
import shares from './modules/shares';
import services from './modules/services';
import bonus from './modules/bonus';
import privacy from './modules/privacy';
import messengers from './modules/messengers';

export default createStore({
  modules: {
    form,
    menu,
    partners,
    reviews,
    shares,
    services,
    bonus,
    privacy,
    messengers,
  },
  strict: process.env.NODE_ENV !== 'production',
});
