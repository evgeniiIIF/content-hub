<template>
  <section class="editing-category">
    <div class="editing-category__edit">
      <VCardEditingCategory />
    </div>
    <div class="editing-category__general-data"></div>
  </section>
</template>

<script>
  import VCardEditingCategory from '../cards/VCardEditingCategory.vue';

  export default {
    name: 'VEditingCategory',
    components: { VCardEditingCategory },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/smart-grid.scss';
</style>
