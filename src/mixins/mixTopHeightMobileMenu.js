const mixTopHeightMobileMenu = {
  mixins: [computedHeaderHeight, mobileMixin],
  watch: {
    showMobileMenu() {
      if (this.showMobileMenu) {
        this.lockBody();
      } else {
        this.unlockBody();
      }
    },
    isMobile() {
      this.setMobileMenuTop();
    },
    isMobileForHead() {
      this.setMobileMenuTop();
    },
  },

  methods: {
    setMobileMenuTop() {
      const mobileMenu = this.$refs.jsMobileMenu;

      if (this.isMobileForHead) {
        let heightHeader = this.getComputedHeaderHeight();
        mobileMenu.style.top = heightHeader;
        mobileMenu.style.height = `calc(100vh - ${heightHeader})`;
      } else {
        mobileMenu.style.top = '';
        mobileMenu.style.height = '';
      }
    },
  },
};

export default mixTopHeightMobileMenu;

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
