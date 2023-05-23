import computedHeaderHeight from './computedHeaderHeight';
import mobileMixin from './mobileMode';

const mixSetMarginTopOfHeaderHeight = {
  mixins: [computedHeaderHeight, mobileMixin],

  watch: {
    isMobile() {
      this.setMarginTop();
    },
    isMobileForHead() {
      this.setMarginTop();
    },
  },
  methods: {
    setMarginTop() {
      const main = this.$refs.main;
      if (this.isMobileForHead || true) {
        main.style.marginTop = this.getComputedHeaderHeight();
      } else {
        main.style.marginTop = '';
      }
    },
  },
  beforeCreate() {
    window.addEventListener('load', () => {
      this.setMarginTop();
    });
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
