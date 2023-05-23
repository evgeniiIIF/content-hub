import axios from 'axios';

export default {
  namespaced: true,

  state: {},
  getters: {},
  mutations: {},
  actions: {
    async mounted() {
      await axios
        .get('https://api.abs-autoservice.ru/api/header?format=json')
        .then((response) => {
          document.getElementById('page-title').textContent = response.data.title;
          document.getElementById('page-description').content = response.data.description;
          document.getElementById('page-keywords').content = response.data.metakey;
        })
        .catch((error) => {
          console.log(error);
        });

      this.loadScriptHeader();
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
