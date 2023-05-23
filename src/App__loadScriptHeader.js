import axios from 'axios';

export default {
  namespaced: true,

  state: {},
  getters: {},
  mutations: {},
  actions: {
    loadScriptHeader() {
      axios.get('https://api.abs-autoservice.ru/api/couters_header?format=json').then((response) => {
        this.headerScript = response.data.counter;
        this.headerScript.forEach((script) => {
          if (script.nocodeyes == '1') {
            const noscriptElement = document.createElement('noscript');
            noscriptElement.innerHTML = script.nocod;
            const firstElement = document.head.firstChild;
            document.head.insertBefore(noscriptElement, firstElement);
          }
          const scriptElement = document.createElement('script');
          scriptElement.innerHTML = script.cod;
          const firstElement = document.head.firstChild;
          document.head.insertBefore(scriptElement, firstElement);
          // document.head.appendChild(scriptElement);
        });
      });

      axios.get('https://api.abs-autoservice.ru/api/couters_body?format=json').then((response) => {
        this.bodyScript = response.data.counter;
        this.bodyScript.forEach((script) => {
          if (script.nocodeyes == '1') {
            const noscriptElement = document.createElement('noscript');
            noscriptElement.innerHTML = script.nocod;
            const firstElement = document.body.firstChild;
            document.body.insertBefore(noscriptElement, firstElement);
          }
          const scriptElement = document.createElement('script');
          scriptElement.innerHTML = script.cod;
          const firstElement = document.body.firstChild;
          document.body.insertBefore(scriptElement, firstElement);
          // document.head.appendChild(scriptElement);
        });
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
