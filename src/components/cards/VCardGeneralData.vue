<template>
  <div class="card-general-data">
    <VCardAddCategory />
  </div>
</template>

<script>
  import VButton from '../UI/VButton.vue';
  import VCardAddCategory from './VCardAddCategory.vue';

  export default {
    name: 'VCardGeneralData',
    components: { VButton, VCardAddCategory },
    data() {
      return {};
    },
  };
</script>

<style lang="scss"></style>
