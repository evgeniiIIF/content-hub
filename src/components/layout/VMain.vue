<template>
  <main
    ref="main"
    class="main"
  >
    <VCategoriesSection />
  </main>
</template>

<script>
  import mixSetMarginTopOfHeaderHeight from '@/mixins/mixSetMarginTopOfHeaderHeight';
  import VCategoriesSection from '../modules/VCategoriesSection.vue';

  export default {
    name: 'VMain',
    mixins: [mixSetMarginTopOfHeaderHeight],
    components: { VCategoriesSection },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/smart-grid.scss';

  .main {
  }
</style>
