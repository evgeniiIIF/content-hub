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
    authenticated(state) {
      return state.authenticated;
    },
    token(state) {
      return state.token;
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
    init(state) {
      if (localStorage.getItem('token')) {
        console.log('init');
        state.token = JSON.parse(localStorage.getItem('token'));
      }
    },
    setAuthenticated(state) {
      state.authenticated = true;
      // localStorage.setItem('authenticated', true);
      // localStorage.removeItem('authenticated');
    },
    // saveAuthenticated(state) {
    // },
    setToken(state, payload) {
      state.token = payload;
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
      store.commit('setPending');

      await axios
        .post('http://api.hub.absit.ru/api/v1/login', {
          email: userData.email,
          password: userData.password,
        })
        .then((response) => {
          if (response.data.success === true) {
            store.commit('resetPending');
            store.commit('setAuthenticated');
            // console.log(store.getters.authenticated, 'authenticated log from vuex/login.js');
            console.log(response.data.response.token);
            store.commit('setToken', response.data.response.token);
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
