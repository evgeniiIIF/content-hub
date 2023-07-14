import axios from 'axios';

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
    async UPDATE_CATEGORY_NAME(store, categoryItemData) {
      const url = `http://api.hub.absit.ru/api/v1/categories/${categoryItemData.id}/update`;

      const data = {
        name: categoryItemData.name,
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
