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
      console.log(updateData);

      const data = {
        [updateData.marketplaceName]: updateData.marketplace_category_id,
        //marketplace_category_id === id-ozonCategory || id-aliCategory
      };

      console.log(data);

      const config = {
        headers: {
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      };
      // console.log(store.getters.pending);
      store.commit('setPending');
      // console.log(store.getters.pending);

      await axios
        .patch(url, data, config)
        .then((response) => {
          console.log(response.data);

          store.commit('setMessage', response.data.message);

          // if (response.data.success === true) {
          store.commit('setSuccess');
          1;
          setTimeout(() => {
            store.commit('resetSuccess');
            store.commit('resetMessage');
          }, 6000);
          store.commit('resetPending');
          // console.log(store.getters.pending);
          // }
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
