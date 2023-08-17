import axios from 'axios';

export default {
  namespaced: true,

  state: {
    success: false,
    pending: false,
    message: '',
  },
  getters: {
    getTokenFromLogin(state, getters, rootState, rootGetters) {
      return rootGetters['login/getToken'];
    },
    getSuccess(state) {
      return state.success;
    },
    getPending(state) {
      return state.pending;
    },
    getMessage(state) {
      return state.message;
    },
  },
  mutations: {
    setSuccess(state) {
      state.success = true;
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
    setMessage(state, payload) {
      state.message = payload;
    },
    resetMessage(state) {
      state.message = '';
    },
  },
  actions: {
    async SEND_NOMENCLATURE_DATA(store, data) {
      const dataFor = data;

      console.log(dataFor);

      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      };

      store.commit('setPending');
      await axios
        .post('http://api.hub.absit.ru/api/v1/nomenclature/createNewCardProductByNomenclature', dataFor, config)
        .then((response) => {
          // console.log('su');
          console.log(response.data);

          store.commit('setSuccess');
          store.commit('setMessage', response.data.message);

          setTimeout(() => {
            store.commit('resetSuccess');
            store.commit('resetMessage');
          }, 5000);

          store.commit('resetPending');
          if (response.data.success === true) {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    SET_SUCCESS(store) {
      store.commit('setSuccess');
    },
    RESET_SUCCESS(store) {
      store.commit('resetSuccess');
    },
    RESET_MESSAGE(store) {
      store.commit('resetMessage');
    },
  },
};
