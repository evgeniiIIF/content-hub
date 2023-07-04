import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

createApp(App).use(store).use(router).mount('#app');

import './assets/scss/settings.scss';
// import './assets/scss/reset.scss';
// import './assets/scss/mixins.scss';
// import './assets/scss/smart-grid.scss';
// import './assets/scss/vars.scss';
