import computedHeaderHeight from '@/mixins/computedHeaderHeight';

const goToAnchor = {
  mixins: [computedHeaderHeight],
  methods: {
    goToAnchor(anchorId) {
      let computedHeaderHeight = parseInt(this.getComputedHeaderHeight());
      computedHeaderHeight = computedHeaderHeight + 16;

      scrollToAnchor(anchorId, computedHeaderHeight);

      function scrollToAnchor(anchorId, headerOffset) {
        const anchor = document.getElementById(anchorId);

        if (anchor) {
          const scrollTop = anchor.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          console.log(scrollTop);

          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
      }
    },
  },
};

export default goToAnchor;
