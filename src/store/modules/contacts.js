export default {
    namespaced: true,

    state: {
        items: ['menu1', 'menu2', 'menu3'],
    },
    getters: {
        items(state) {
            return state.items;
        },
    },
    mutations: {},
    actions: {},
};
