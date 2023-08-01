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
    async GET_ITEMS_NOMENCLATURE(store) {
      let url = 'http://api.hub.absit.ru/api/v1/nomenclature';
      url = url + '?paginate=25';
      // const url = 'http://localhost:3000/data';
      console.log(store.getters.getTokenFromLogin);

      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      };

      // console.log(store.getters.getTokenFromLogin + '  tockenfrom login');

      await axios.get(url, config).then((response) => {
        const data = response.data;
        const items = data.response.nomenclature.data;
        // const items = data.data;
        store.commit('setItems', items);
        console.log(items);
      });
    },
  },
};
