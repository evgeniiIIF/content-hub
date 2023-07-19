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
    success(state) {
      return state.success;
    },
    pending(state) {
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
    async SELECT_MARKETPLACE_CATEGORY(store, updateData) {
      const url = `http://api.hub.absit.ru/api/v1/categories/${updateData.localCategory_id}/update`;
      // console.log(updateData);

      const data = {
        [updateData.mapketplaceCategoryName]: updateData.marketplace_id,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      // console.log(store.getters.pending);
      store.commit('setPending');
      // console.log(store.getters.pending);

      await axios
        .patch(url, data, config)
        .then((response) => {
          console.log(response.data);

          if (response.data.success === true) {
            store.commit('setSuccess');
            store.commit('setMessage', response.data.message);

            setTimeout(() => {
              store.commit('resetSuccess');
              store.commit('resetMessage');
            }, 3000);

            store.commit('resetPending');

            // console.log(store.getters.pending);
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
    SET_SUCCESS_CONSULT(store) {
      store.commit('setSuccessConsult');
    },
  },
};
