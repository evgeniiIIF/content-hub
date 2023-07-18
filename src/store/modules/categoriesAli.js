import axios from 'axios';

export default {
  namespaced: true,

  state: {
    items: [],
  },
  getters: {
    getTokenFromLogin(state, getters, rootState, rootGetters) {
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
    async GET_ITEMS_SELECT_ALI(store) {
      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      await axios.get('http://api.hub.absit.ru/api/v1/categories/aliCategories', config).then((response) => {
        const data = response.data;
        const items = data;
        // console.log(items);
        store.commit('setItems', items);
      });
    },
  },
};
