import axios from 'axios';

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
    async GET_ITEMS_PRODUCT_CARDS(store) {
      // const url = 'http://api.hub.absit.ru/api/v1/nomenclature';
      const url = 'http://localhost:3000/response';

      const data = {
        paginate: 25,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      };

      // console.log(store.getters.getTokenFromLogin + '  tockenfrom login');

      await axios.get(url, data, config).then((response) => {
        const data = response;
        // const items = data;
        const items = data.data.cardProducts.data;
        store.commit('setItems', items);
        console.log(items);
      });
    },
  },
};
