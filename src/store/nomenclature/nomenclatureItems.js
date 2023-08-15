import axios from 'axios';

export default {
  namespaced: true,

  state: {
    items: [],
    currentBrandsItems: [],
    portalWarehousesItems: [],
    categoriesItems: [],

    paginationMeta: {},
    paramsForSend: {},
  },
  getters: {
    getTokenFromLogin(state, getters, rootState, rootGetters) {
      // return rootState.login.token;
      return rootGetters['login/getToken'];
    },
    items(state) {
      return state.items;
    },
    getCategoriesItems(state) {
      return state.categoriesItems;
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
    getPortalWarehousesItems(state) {
      return state.portalWarehousesItems;
    },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setCategoriesItems(state, payload) {
      state.categoriesItems = payload;
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
    setPortalWarehousesItems(state, payload) {
      state.portalWarehousesItems = payload;
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
      console.log(store.getters.getTokenFromLogin);
      const paramsForSend = store.getters.getParamsForSend;

      if (Boolean(meta && Object.keys(meta).length)) {
        if (meta.paginationLimit) store.commit('setParamsForSend', { name: 'paginate', value: meta.paginationLimit });
        if (meta.pageNumber) store.commit('setParamsForSend', { name: 'page', value: meta.pageNumber });
        if (meta.search || meta.search === '') store.commit('setParamsForSend', { name: 'search', value: meta.search });
        if (meta.brand_name) store.commit('setParamsForSend', { name: 'brand_name', value: meta.brand_name });
        if (meta.portalWarehouses) store.commit('setParamsForSend', { name: 'portalWarehouses', value: meta.portalWarehouses });

        config.params = paramsForSend;
      }

      console.log(config.params);

      await axios.get(url, config).then((response) => {
        const data = response.data;
        const items = data.response.nomenclature.data;
        const meta = data.response.nomenclature.meta;
        const currentBrandsItems = data.response.currentBrands;
        const portalWarehouses = data.response.portalWarehouses;
        const categories = data.response.categories;

        // const portalWarehouses = data
        // const links = data;
        store.commit('setItems', items);
        store.commit('setCategoriesItems', categories);
        store.commit('setPaginationMeta', meta);
        store.commit('setCurrentBrandsItems', currentBrandsItems);
        store.commit('setPortalWarehousesItems', portalWarehouses);

        console.log(data);
      });
    },
  },
};
