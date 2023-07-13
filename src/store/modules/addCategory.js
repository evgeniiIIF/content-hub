import axios from 'axios';
// import qs from 'qs';
// const qs = require('qs');
// const querystring = require('querystring');

export default {
  namespaced: true,

  state: {
    success: false,
    successConsult: false,
    pending: false,
  },
  getters: {
    getTokenFromLogin(state, getters, rootState, rootGetters) {
      return rootGetters['login/getToken'];
    },
    success(state) {
      return state.success;
    },
    successConsult(state) {
      return state.successConsult;
    },
    pending(state) {
      return state.pending;
    },
  },
  mutations: {
    setSuccess(state) {
      state.success = true;
    },
    setSuccessConsult(state) {
      state.successConsult = true;
    },
    resetSuccess(state) {
      state.success = false;
    },
    setPending(state) {
      state.pending = true;
    },
    resetPending(state) {
      state.pending = false;
    },
  },
  actions: {
    async SEND_CATEGORY_DATA(store, data) {
      // console.log(store.getters.getTokenFromLogin, data);
      const dataFor = {
        id: data.id,
        name: data.name,
        description: data.description,
        ozonCategory: 740,
        aliCategory: 709,
      };

      // const dataForFormat = qs.stringify({ id: data.id });
      // const params = new URLSearchParams();
      // params.append('id', data.id);
      // params.append('name', data.name);
      // params.append('description', data.description);

      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      store.commit('setPending');
      await axios.post('http://api.hub.absit.ru/api/v1/categories/store', dataFor, config).then((response) => {
        if (response.data.success === true) {
          store.commit('resetPending');
          console.log(response.data);
        }
      });
    },
    SET_SUCCESS(store) {
      store.commit('setSuccess');
    },
    RESET_SUCCESS(store) {
      store.commit('resetSuccess');
    },
    SET_SUCCESS_CONSULT(store) {
      store.commit('setSuccessConsult');
    },
  },
};
