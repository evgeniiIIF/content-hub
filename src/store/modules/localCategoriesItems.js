import axios from 'axios';

import { mapGetters } from 'vuex';

export default {
  namespaced: true,

  state: {
    items: [],
  },
  getters: {
    ...mapGetters('login', ['token']),

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
      console.log(store.getters.items + '  tock');
      await axios
        .get('http://api.hub.absit.ru/api/v1/categories', {
          headers: {
            // 'Content-Type': 'application/json',
            // Authorization: 'Bearer your_token_here',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET, POST',
            // 'Access-Control-Allow-Headers': '*',
            Authorization: 'Bearer 9Lv7Myr4qTlkqPi6B2idqiLWT7d0lAg1YYCCc6aF',
          },
        })
        .then((response) => {
          const data = response.data;
          const items = data.data;
          // console.log(items);
          store.commit('setItems', items);
        });
    },
  },
};
