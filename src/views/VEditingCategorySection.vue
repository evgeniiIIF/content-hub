<template>
  <section class="editing-category">
    <div class="container editing-category__container">
      <div class="editing-category__body">
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
  </section>
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
  .editing-category {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ebedf1;

    &__container {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    &__body {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding-top: 20px;
    }

    &__top {
      flex: 1 1 auto;
      display: flex;
      margin-bottom: 20px;
    }
    &__edit {
      margin-right: 20px;
    }

    &__general-data {
      flex: 1 1 auto;
    }
  }
</style>
