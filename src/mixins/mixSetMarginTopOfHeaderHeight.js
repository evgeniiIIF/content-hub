import computedHeaderHeight from './computedHeaderHeight';
import mobileMixin from './mobileMode';

const mixSetMarginTopOfHeaderHeight = {
  mixins: [computedHeaderHeight, mobileMixin],

  watch: {
    $route(to, from) {
      // Обработка изменений URL
      // console.log('from:', from.path);
      // console.log('to:', to.path);
      // console.log('set Unser');

      if (to.path === '/login') {
        this.unsetMarginTop();
        // console.log('UNSsetMT');
      } else {
        this.setMarginTop();
        // console.log('setMT');
      }
    },
    // isMobile() {
    //   this.setMarginTop();
    // },
    // isMobileForHead() {
    //   this.setMarginTop();
    // },
  },
  methods: {
    setMarginTop() {
      const main = document.querySelector('main');
      main.style.marginTop = this.getComputedHeaderHeight();
    },
    unsetMarginTop() {
      const main = document.querySelector('main');
      main.style.marginTop = '';
    },
  },
  mounted() {
    // console.log('mounted');
    // window.addEventListener('load', () => {
    //   this.setMarginTop();
    // });
  },
};

export default mixSetMarginTopOfHeaderHeight;

// import bodyLockMixin from "@/mixins/bodyLockMixin";

// export default {
//   mixins: [bodyLockMixin],
//   // ...
// };

// methods: {
//   openModal() {
//     this.lockBody(); // блокирует прокрутку на заднем плане
//     this.isModalOpen = true;
//   },
//   closeModal() {
//     this.unlockBody(); // разблокировать прокрутку на заднем плане
//     this.isModalOpen = false;
//   }
// }
