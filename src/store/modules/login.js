import axios from 'axios';

export default {
  namespaced: true,

  state: {
    success: false,
    successConsult: false,
    pending: false,
  },
  getters: {
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
    async SEND_USER_DATA(store, userData) {
      store.commit('setPending');

      await axios
        .post('http://api.hub.absit.ru/api/v1/login', {
          email: userData.email,
          password: userData.password,
        })
        .then((response) => {
          console.log(response.data);

          if (response.data === 'ok') {
            store.commit('resetPending');
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
