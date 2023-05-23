import axios from 'axios';

export default {
  namespaced: true,
  state: {
    block: {},
  },
  getters: {
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
    async GET_PRIVACY_BLOCK(store) {
      const url = 'https://api.abs-autoservice.ru/api/privacy?format=json';

      await axios.get(url).then((response) => {
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
// 	...mapActions('partners', ['GET_PRIVACY_BLOCK'])
// },

// async mounted() {
// 	await this.GET_PRIVACY_BLOCK()
// 	console.log(this.partnersItems);
// }
