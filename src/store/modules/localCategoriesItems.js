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
      await axios
        .get('http://192.168.0.228/api/categories', {
          headers: {
            // 'Content-Type': 'application/json',
            // Authorization: 'Bearer your_token_here',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': '*',
          },
        })
        .then((response) => {
          const data = response.data;
          const items = data.data;
          // console.log(items);
          store.commit('setItems', items);
        });
    },
  },
};
