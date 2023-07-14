import axios from 'axios';

export default {
  namespaced: true,
  state: {
    block: {},
  },
  getters: {
    getTokenFromLogin(state, getters, rootState, rootGetters) {
      return rootGetters['login/getToken'];
    },
    block(state) {
      return state.block;
    },
  },
  mutations: {
    setBlock(state, payload) {
      state.block = payload;
    },
  },
  actions: {
    async GET_BLOCK(store) {
      const url = 'http://api.hub.absit.ru/api/v1/user';
      const config = {
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // Authorization: 'Bearer your_token_here',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET, POST',
          // 'Access-Control-Allow-Headers': '*',
          Authorization: `Bearer ${store.getters.getTokenFromLogin}`,
        },
      };
      // console.log(store.getters.getTokenFromLogin + 'from userjs');
      await axios.get(url, config).then((response) => {
        const data = response.data;
        const block = data;
        store.commit('setBlock', block);
      });
    },
  },
};

// copy to compunent

// import { mapActions, mapGetters } from 'vuex';

// computed: {
// 	...mapGetters('partners', {
// 		partnersItems: 'items'
// 	})
// },

// methods: {
// 	...mapActions('partners', ['GET_PARTNERS_ITEMS'])
// },

// async mounted() {
// 	await this.GET_PARTNERS_ITEMS()
// 	console.log(this.partnersItems);
// }
