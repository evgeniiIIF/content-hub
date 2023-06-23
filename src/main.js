import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import scss from './assets/scss/mixins.scss';
// import './assets/scss/smart-grid.scss';

createApp(App).use(store).use(router).use(scss).mount('#app');
