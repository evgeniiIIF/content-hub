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
    async GET_ITEMS_SELECT_OZON(store) {
      await axios.get('http://dev1.content-hub.ru/api/categories/ozon').then((response) => {
        const data = response.data;
        const items = data.children;
        // console.log(items);
        store.commit('setItems', items);
      });
    },
  },
};
