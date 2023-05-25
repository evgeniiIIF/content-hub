<template>
  <main
    ref="main"
    class="main"
  >
    <VCategoriesSection />
    <div class="add-cat">
      <div class="container">
        <VCardAddCategory />
      </div>
      <div class="container">
        <VEditingCategorySection />
      </div>
    </div>
  </main>
</template>

<script>
  import mixSetMarginTopOfHeaderHeight from '@/mixins/mixSetMarginTopOfHeaderHeight';
  import VCategoriesSection from '../modules/VCategoriesSection.vue';
  import VCardAddCategory from '../cards/VCardAddCategory.vue';
  import VEditingCategorySection from '../modules/VEditingCategorySection.vue';

  export default {
    name: 'VMain',
    mixins: [mixSetMarginTopOfHeaderHeight],
    components: { VCategoriesSection, VCardAddCategory, VEditingCategorySection },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/smart-grid.scss';

  .main {
  }
  .add-cat {
    background: #eee;
  }
</style>
