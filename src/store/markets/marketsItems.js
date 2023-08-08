import axios from 'axios';

export default {
  namespaced: true,

  state: {
    items: [],
    marketplacesItems: [],
    portalWarehousesItems: [],
  },
  getters: {
    getTokenFromLogin(state, getters, rootState, rootGetters) {
      // return rootState.login.token;
      return rootGetters['login/getToken'];
    },
    items(state) {
      return state.items;
    },
    getMarketplacesItems(state) {
      return state.marketplacesItems;
    },
    getPortalWarehousesItems(state) {
      return state.portalWarehousesItems;
    },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setMarketplacesItems(state, payload) {
      state.marketplacesItems = payload;
    },
    setPortalWarehousesItems(state, payload) {
      state.portalWarehousesItems = payload;
    },
  },
  actions: {
    async GET_ITEMS_MARKETS(store) {
      const url = 'http://api.hub.absit.ru/api/v1/markets';

      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      };

      // console.log(store.getters.getTokenFromLogin + '  tockenfrom login');

      await axios.get(url, config).then((response) => {
        const data = response.data.response;
        const items = data.markets.data;
        const marketplaces = data.marketplaces;
        const portalWarehousesItems = data.portalWarehouses;
        store.commit('setItems', items);
        store.commit('setMarketplacesItems', marketplaces);
        store.commit('setPortalWarehousesItems', portalWarehousesItems);
        // console.log(marketplaces);
      });
    },
  },
};
