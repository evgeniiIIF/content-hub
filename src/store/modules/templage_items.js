import axios from 'axios';

export default {
  namespaced: true,

  state: {
    items: [],
  },
  getters: {
    items(state) {
      return state.items;
    },
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async GET_ITEMS(store) {
      await axios.get('https://api.abs-autoservice.ru/api/menu?format=json').then((response) => {
        const data = response.data;
        const items = data.menu;
        store.commit('setItems', items);
      });
    },
  },
};
