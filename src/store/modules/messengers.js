import axios from 'axios';

export default {
  namespaced: true,

  state: {
    messengers: {},
  },
  getters: {
    messengers(state) {
      return state.messengers;
    },
  },
  mutations: {
    setMenuMessengers(state, payload) {
      state.messengers = payload;
    },
  },
  actions: {
    async GET_MENU_MESSENGERS(store) {
      await axios.get('https://api.abs-autoservice.ru/api/header?format=json').then((response) => {
        const data = response.data;
        const messagers = {
          telegram: data.telegram,
          whatsapp: data.whatsapp,
        };

        store.commit('setMenuMessengers', messagers);
      });
    },
  },
};
