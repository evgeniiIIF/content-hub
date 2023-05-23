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
        async GET_PARTNERS_ITEMS(store) {
            const url = 'https://api.abs-autoservice.ru/api/partners?format=json';

            await axios.get(url).then((response) => {
                const data = response.data;
                const items = data.partners;
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
