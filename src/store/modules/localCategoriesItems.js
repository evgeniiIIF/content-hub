import axios from 'axios';

// import { mapGetters } from 'vuex';

export default {
  namespaced: true,

  state: {
    items: [],
    ozonCategories: [],
    aliCategories: [],
  },
  getters: {
    getTokenFromLogin(state, getters, rootState, rootGetters) {
      // return rootState.login.token;
      return rootGetters['login/getToken'];
    },
    items(state) {
      return state.items;
    },
    // getOzonCategories(state) {
    //   return state.ozonCategories;
    // },
    // getAliCategories(state) {
    //   return state.aliCategories;
    // },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    // setOzonCategories(state, payload) {
    //   state.ozonCategories = payload;
    // },
    // setAliCategories(state, payload) {
    //   state.aliCategories = payload;
    // },
  },
  actions: {
    async GET_ITEMS_CATEGORIES(store, data) {
      // console.log(store.getters.getTokenFromLogin + '  tockenfrom login');
      let config;

      if (data) {
        let dataFor = {};

        if (data.name) {
          dataFor.name = data.name;
        }

        if (data.is_active === 1 || data.is_active === 0) {
          dataFor.is_active = data.is_active;
        }

        console.log(dataFor);

        config = {
          headers: {
            Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
          params: dataFor,
        };
      } else {
        config = {
          headers: {
            Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
        };
      }

      // console.log(`Bearer ${store.getters.getTokenFromLogin}`);

      const url = 'http://api.hub.absit.ru/api/v1/categories';

      await axios.get(url, config).then((response) => {
        const data = response.data;
        // const data = response.data;
        // const items = data.data;
        const localCategories = data.response.localCategories;
        // const ozonCategories = data.response.ozonCategories;
        // const aliCategories = data.response.aliCategories;

        store.commit('setItems', localCategories);
        // store.commit('setOzonCategories', ozonCategories);
        // store.commit('setAliCategories', aliCategories);
        console.log(data);
      });
    },
  },
};
