<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">footer</div>
    </div>
  </footer>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  export default {
    name: 'VFooter',
    data() {
      return {};
    },
    computed: {},
    methods: {},
  };
</script>

<style lang="scss">
  @import '@/assets/scss/mixins.scss';
  @import '@/assets/scss/smart-grid.scss';
</style>
