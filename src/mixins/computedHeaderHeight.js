import { nextTick } from 'vue';

const computedHeaderHeight = {
  methods: {
    getComputedHeaderHeight() {
      const header = document.querySelector('.header');

      if (header) {
        const heightHeader = window.getComputedStyle(header).height;
        return heightHeader;
      }
    },
  },
};

export default computedHeaderHeight;
