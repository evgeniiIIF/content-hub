import axios from 'axios';

export default {
  namespaced: true,

  state: {
    block: {},
    top: {},
    items: {},
  },
  getters: {
    items(state) {
      return state.items;
    },
    top(state) {
      return state.top;
    },
  },
  mutations: {
    setBlock(state, payload) {
      state.block = payload;
    },
    setItems(state, payload) {
      state.items = payload;
    },
    setTop(state, payload) {
      state.top = payload;
    },
  },
  actions: {
    async GET_SHARES_ITEMS(store) {
      const url = 'https://api.abs-autoservice.ru/api/shares?format=json';

      await axios.get(url).then((response) => {
        const data = response.data;

        const block = data;
        store.commit('setBlock', block);

        const top = block.shares[0];
        store.commit('setTop', top);

        const items = block.shares_all;
        store.commit('setItems', items);
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
