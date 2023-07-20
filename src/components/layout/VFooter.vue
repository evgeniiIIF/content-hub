<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body"><VPagination /></div>
    </div>
  </footer>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  import VPagination from '@/components/UI/VPagination.vue';

  export default {
    name: 'VFooter',

    components: {
      VPagination,
    },
    data() {
      return {};
    },
    computed: {},
    methods: {},
  };
</script>

<style lang="scss">
  .footer {
    background: $neutral-white1;

    &__body {
      padding: 41px 0 80px 0;
    }
  }
</style>
