<template>
  <div class="home">
    <div class="container">
      <div class="home__body">Home</div>
    </div>
  </div>
</template>
<script>
  import VInput from '@/components/UI/VInput.vue';
  import VCheckbox from '@/components/UI/VCheckbox.vue';
  import VButton from '@/components/UI/VButton.vue';

  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'VLoginView',
    components: { VInput, VCheckbox, VButton },
    data() {
      return {};
    },
    methods: {},
  };
</script>
<style lang="scss">
  .home {
    .container {
    }

    &__body {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 150px;
      color: #000;
    }
  }
</style>
