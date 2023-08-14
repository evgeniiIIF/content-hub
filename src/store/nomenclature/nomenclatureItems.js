import axios from 'axios';

export default {
  namespaced: true,

  state: {
    items: [],
    paginationMeta: {},
    paramsForSend: {},

    currentBrandsItems: {},
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
    getPaginationMeta(state) {
      return state.paginationMeta;
    },
    getParamsForSend(state) {
      return state.paramsForSend;
    },
    getCurrentBrandsItems(state) {
      return state.currentBrandsItems;
    },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setPaginationMeta(state, payload) {
      state.paginationMeta = payload;
    },
    setParamsForSend(state, payload) {
      state.paramsForSend[payload.name] = payload.value;
    },
    setCurrentBrandsItems(state, payload) {
      state.currentBrandsItems = payload;
    },
  },
  actions: {
    async GET_ITEMS_NOMENCLATURE(store, meta) {
      let url = 'http://api.hub.absit.ru/api/v1/nomenclature';

      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      };

      const paramsForSend = store.getters.getParamsForSend;

      if (Boolean(meta && Object.keys(meta).length)) {
        if (meta.paginationLimit) store.commit('setParamsForSend', { name: 'paginate', value: meta.paginationLimit });
        if (meta.pageNumber) store.commit('setParamsForSend', { name: 'page', value: meta.pageNumber });
        if (meta.search || meta.search === '') store.commit('setParamsForSend', { name: 'search', value: meta.search });
        // if (meta.brand_name) config.params.brand_name = meta.brand_name;
        // if (meta.portalWarehouses) config.params.portalWarehouses = meta.portalWarehouses;

        config.params = paramsForSend;
        // brand_name: ['ABS', 'ABSEL'],
        // portalWarehouses: [1, 2, 3],
      }

      // console.log(config.params);

      await axios.get(url, config).then((response) => {
        const data = response.data;
        const items = data.response.nomenclature.data;
        const meta = data.response.nomenclature.meta;
        const currentBrandsItems = data.response.currentBrands;

        // const portalWarehouses = data
        // const links = data;
        store.commit('setItems', items);
        store.commit('setPaginationMeta', meta);
        store.commit('setCurrentBrandsItems', currentBrandsItems);

        console.log(store.getters.getCurrentBrandsItems);
      });
    },
  },
};
