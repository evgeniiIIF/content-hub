<template>
  <div class="editing-category">
    <div class="container editing-category__container">
      <div class="editing-category__top">
        <div class="editing-category__edit">
          <VCardEditingCategory />
        </div>
        <div class="editing-category__general-data">
          <VCardGeneralData />
        </div>
      </div>
      <div class="editing-category__bottom">buttons</div>
    </div>
  </div>
</template>

<script>
  import VCardEditingCategory from '@/components/cards/VCardEditingCategory.vue';
  import VCardGeneralData from '@/components/cards/VCardGeneralData.vue';

  export default {
    name: 'VEditingCategorySection',
    components: { VCardEditingCategory, VCardGeneralData },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/smart-grid.scss';
  .editing-category {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    &__container {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }

    &__top {
      flex: 1 1 auto;
      display: flex;
    }
    &__edit {
    }

    &__general-data {
    }
  }
</style>
