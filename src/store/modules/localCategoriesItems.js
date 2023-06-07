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
      await axios.get('http://dev1.content-hub.ru/administrator/categories/create').then((response) => {
        const data = response.data;
        const items = data;
        console.log('items');
        store.commit('setItems', items);
      });
    },
  },
};
