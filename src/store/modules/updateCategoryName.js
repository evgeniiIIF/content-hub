import axios from 'axios';

export default {
  namespaced: true,

  state: {
    success: false,
    // successConsult: false,
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
    // successConsult(state) {
    //   return state.successConsult;
    // },
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
    // setSuccessConsult(state) {
    //   state.successConsult = true;
    // },
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
    async UPDATE_CATEGORY_NAME(store, categoryItemData) {
      const url = `http://api.hub.absit.ru/api/v1/categories/${categoryItemData.id}/update`;

      const data = {
        name: categoryItemData.name,
      };
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
          // console.log(response.data);
          store.commit('setMessage', response.data.message);
          setTimeout(() => {
            store.commit('resetMessage');
          }, 6000);
          // if (response.data.success === true) {
          // store.commit('resetPending');
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
    // SET_SUCCESS_CONSULT(store) {
    //   store.commit('setSuccessConsult');
    // },
    RESET_PENDING(store) {
      store.commit('resetPending');
    },
    RESET_MESSAGE(store) {
      store.commit('resetMessage');
    },
  },
};
