import axios from 'axios';

import { mapGetters } from 'vuex';

export default {
  namespaced: true,

  state: {
    items: [],
  },
  getters: {
    getTokenFromLogin(state, getters, rootState, rootGetters) {
      // return rootState.login.token;
      return rootGetters['login/getToken'];
    },
    items(state) {
      return state.items;
    },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async GET_ITEMS_CATEGORIES(store) {
      // console.log(store.getters.getTokenFromLogin + '  tockenfrom login');
      const config = {
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // Authorization: 'Bearer your_token_here',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET, POST',
          // 'Access-Control-Allow-Headers': '*',
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
        },
      };

      const url = 'http://api.hub.absit.ru/api/v1/categories';
      await axios.get(url, config).then((response) => {
        const data = response.data;
        const items = data.data;
        store.commit('setItems', items);
        // console.log(items);
      });
    },
  },
};
