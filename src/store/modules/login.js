import axios from 'axios';

export default {
  namespaced: true,

  state: {
    authenticated: false,
    token: '',

    success: false,
    successConsult: false,
    pending: false,
  },
  getters: {
    getAuthenticated(state) {
      if (localStorage.getItem('authenticated')) {
        return localStorage.getItem('authenticated');
      } else {
        return state.authenticated;
      }
    },
    getToken(state) {
      if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
      } else {
        return state.token;
      }
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
    setAuthenticated(state) {
      state.authenticated = true;
      localStorage.setItem('authenticated', true);
      // localStorage.removeItem('authenticated');
    },

    setToken(state, payload) {
      state.token = payload;
      localStorage.setItem('token', payload);
      // localStorage.removeItem('token');
    },
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
    async SEND_USER_DATA(store, userData) {
      const data = {
        email: userData.email,
        password: userData.password,
      };
      const url = 'http://api.hub.absit.ru/api/v1/login';

      store.commit('setPending');

      await axios.post(url, data).then((response) => {
        if (response.data.success === true) {
          store.commit('resetPending');
          store.commit('setAuthenticated');
          store.commit('setToken', response.data.response.token);
          console.log(response.data);
          // console.log(store.getters.authenticated, 'authenticated log from vuex/login.js');
          // console.log(store.getters.getToken, 'authenticated log from vuex/login.js');
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
