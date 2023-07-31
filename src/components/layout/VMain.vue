<template>
  <main
    ref="main"
    class="main"
  >
    <slot></slot>
  </main>
</template>

<script>
  import mixSetMarginTopOfHeaderHeight from '@/mixins/mixSetMarginTopOfHeaderHeight';
  // import VCardAddCategory from '../cards/VCardAddCategory.vue';

  export default {
    name: 'VMain',
    mixins: [mixSetMarginTopOfHeaderHeight],
    // components: { VCardAddCategory },
  };
</script>

<style lang="scss">
  .main {
    background: $neutral-white1;
  }
  .add-cat {
    background: #eee;
  }
</style>
